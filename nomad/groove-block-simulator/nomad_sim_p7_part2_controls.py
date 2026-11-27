# ==========================================================
#  NOMAD SIM - PROGRAM 7 - PART 2 OF 2: THE CONTROLS
#  Run after Part 1. Last line: bpy.ops.nomad.jog('INVOKE_DEFAULT')
# ==========================================================
import bpy, math, random
from bpy_extras import view3d_utils

IN = 0.0254
BED_TOP, SX, SY = 1.5, 4.0, 3.0
STOCK_TOP = BED_TOP + 1.0
TIP_HOME, TOOL_Y, R_TOOL, RES, PAPER = 4.0, -0.75, 0.125, 0.02, 0.004
NX, NY = int(round(SX / RES)) + 1, int(round(SY / RES)) + 1
M = bpy.data.materials
SIM = bpy.data.collections["Nomad Sim"]

def rr(w, h, r, n=10):
    pts = []
    for cx, cy, a0 in ((w/2-r, h/2-r, 0), (-(w/2-r), h/2-r, 90),
                       (-(w/2-r), -(h/2-r), 180), (w/2-r, -(h/2-r), 270)):
        for k in range(n+1):
            a = math.radians(a0 + 90*k/n)
            pts.append((cx + r*math.cos(a), cy + r*math.sin(a)))
    return pts

def raw_box(name, sx, sy, sz, x, y, z, m, parent):
    hx, hy, hz = sx/2*IN, sy/2*IN, sz/2*IN
    v = [(a*hx, b*hy, c*hz) for a in (-1, 1) for b in (-1, 1) for c in (-1, 1)]
    f = [(0, 1, 3, 2), (4, 6, 7, 5), (0, 4, 5, 1), (2, 3, 7, 6), (0, 2, 6, 4), (1, 5, 7, 3)]
    me = bpy.data.meshes.new(name)
    me.from_pydata(v, [], f)
    me.materials.append(m)
    o = bpy.data.objects.new(name, me)
    SIM.objects.link(o)
    o.parent = parent
    o.location = (x*IN, y*IN, z*IN)
    return o

def cut_disc(me, sx, sy, tz):
    zc = max(tz, BED_TOP) * IN
    i0 = max(0, math.ceil((sx - R_TOOL + SX/2) / RES))
    i1 = min(NX-1, math.floor((sx + R_TOOL + SX/2) / RES))
    j0 = max(0, math.ceil((sy - R_TOOL + SY/2) / RES))
    j1 = min(NY-1, math.floor((sy + R_TOOL + SY/2) / RES))
    for j in range(j0, j1+1):
        dy = (-SY/2 + j*RES) - sy
        for i in range(i0, i1+1):
            dx = (-SX/2 + i*RES) - sx
            if dx*dx + dy*dy <= R_TOOL*R_TOOL:
                v = me.vertices[j*NX + i]
                if v.co.z > zc:
                    v.co.z = zc

old = getattr(bpy.types, "NOMAD_OT_jog", None)
if old:
    bpy.utils.unregister_class(old)

class NOMAD_OT_jog(bpy.types.Operator):
    bl_idname = "nomad.jog"
    bl_label = "Nomad Jog"
    KEYS = {'RIGHT_ARROW': "X+", 'LEFT_ARROW': "X-", 'UP_ARROW': "Y+", 'DOWN_ARROW': "Y-",
            'PAGE_UP': "Z+", 'PAGE_DOWN': "Z-", 'ONE': "S1", 'TWO': "S2",
            'THREE': "S3", 'FOUR': "S4", 'R': "RESET", 'P': "PAPER"}
    MOVES = {"X+": (1, 0, 0), "X-": (-1, 0, 0), "Y+": (0, 1, 0),
             "Y-": (0, -1, 0), "Z+": (0, 0, 1), "Z-": (0, 0, -1)}
    STEPS = {"S1": 0.001, "S2": 0.01, "S3": 0.1, "S4": 1.0}

    def invoke(self, context, event):
        ob = bpy.data.objects
        self.x, self.y, self.z = ob["X Axis Carriage"], ob["Y Axis Bed"], ob["Z Axis Spindle"]
        self.me = ob["Stock 4x3x1"].data
        self.paper, self.flutes, self.screen = ob["Paper Strip"], ob["Flutes 1/4 2FL"], ob["Laptop Screen"]
        self.beam = ob["Laser Beam"]
        self.cross = (ob["Laser Cross X"], ob["Laser Cross Y"])
        self.paper_in = self.torn = self.broken = self.running = False
        self.zxy_set = self.zz_set = False
        self.zero = list(self.tool())
        self.path, self.msg, self.flash = [], "", 0
        self.set_step("S3")
        self.timer = context.window_manager.event_timer_add(0.03, window=context.window)
        context.window_manager.modal_handler_add(self)
        self.show(context)
        return {'RUNNING_MODAL'}

    def tool(self):
        return (self.x.location.x / IN, TOOL_Y - self.y.location.y / IN,
                TIP_HOME + self.z.location.z / IN)

    def set_tool(self, p):
        self.x.location.x = p[0] * IN
        self.y.location.y = (TOOL_Y - p[1]) * IN
        self.z.location.z = (p[2] - TIP_HOME) * IN

    def set_step(self, key):
        self.step = self.STEPS[key]
        for k in self.STEPS:
            bpy.data.objects["Btn " + k].material_slots[0].material = \
                M["Sim Step On"] if k == key else M["Sim Step Off"]

    def error(self, msg):
        self.msg, self.flash = msg, 36

    def paper_state(self):
        x, y, z = self.tool()
        over = abs(x) <= SX/2 and abs(y) <= SY/2
        if not self.paper_in:
            return "out"
        if over and not self.torn and z <= STOCK_TOP + 1e-6:
            self.torn = True
        if self.torn:
            return "torn"
        if over and z <= STOCK_TOP + PAPER + 1e-6:
            return "grab"
        return "free"

    def update_laser(self):
        # beam from the cutter tip down to the block top; cross only shows over the block
        x, y, z = self.tool()
        over = abs(x) <= SX/2 and abs(y) <= SY/2
        ln = z - STOCK_TOP if over else z - BED_TOP
        b = self.beam
        b.hide_viewport = b.hide_render = ln < 0.01
        b.scale.z = max(ln, 0.001)
        b.location.z = (z - ln/2) * IN
        for c in self.cross:
            c.hide_viewport = c.hide_render = not over

    def show(self, context):
        x, y, z = self.tool()
        wx, wy, wz = x - self.zero[0], y - self.zero[1], z - self.zero[2]
        self.update_laser()
        p = self.paper
        p.hide_viewport = p.hide_render = not self.paper_in
        p.location = (self.x.location.x, (TOOL_Y - 1.2)*IN, (STOCK_TOP + PAPER/2)*IN)
        st = self.paper_state()
        p.material_slots[0].material = {"grab": M["Sim Paper Grab"],
                                        "torn": M["Sim Paper Torn"]}.get(st, M["Sim Paper"])
        p.rotation_euler.z = math.radians(random.uniform(-4, 4)) if st == "grab" else 0.0
        if self.broken:
            state = "CUTTER BROKEN! Too fast into metal. RESET"
        elif self.msg:
            state = self.msg
        elif self.running:
            state = "RUNNING PROGRAM... (Esc stops)"
        elif st == "torn":
            state = "PAPER TORN - too low! (P for new paper)"
        elif st == "grab":
            state = "PAPER GRABS - set Z zero"
        elif z < STOCK_TOP:
            state = "CUTTING"
        elif st == "free":
            state = "paper slides freely"
        else:
            state = "clear"
        ob = bpy.data.objects
        ob["Readout X"].data.body = f"X {wx:+.3f}"
        ob["Readout Y"].data.body = f"Y {wy:+.3f}"
        ob["Readout Z"].data.body = f"Z {wz:+.3f}"
        ob["Readout State"].data.body = state
        ob["Readout Step"].data.body = f"step {self.step} in"
        context.workspace.status_text_set(
            f"NOMAD SIM P7   X {wx:+.3f}   Y {wy:+.3f}   Z {wz:+.3f} in   [{state}]   | Esc stop")
        for a in context.screen.areas:
            a.tag_redraw()

    def cut_move(self, p0, p1):
        if self.broken or min(p0[2], p1[2]) >= STOCK_TOP:
            return
        n = max(1, int(math.dist(p0, p1) / 0.01))
        for t in range(n + 1):
            f = t / n
            cut_disc(self.me, *(a + (b - a)*f for a, b in zip(p0, p1)))
        self.me.update()

    def shatter(self, p):
        self.broken = True
        self.flutes.hide_viewport = self.flutes.hide_render = True
        for k in range(8):
            a, r = random.uniform(0, 2*math.pi), random.uniform(0.25, 1.3)
            s = raw_box(f"Shard {k}", random.uniform(0.05, 0.14), random.uniform(0.03, 0.08), 0.03,
                        p[0] + r*math.cos(a), p[1] + r*math.sin(a), STOCK_TOP + 0.02,
                        M["Sim Carbide"], self.y)
            s.rotation_euler.z = random.uniform(0, math.pi)
        self.error("CUTTER BROKEN!")

    def jog(self, dx, dy, dz):
        s = self.step
        cl = lambda v, lo, hi: max(lo, min(hi, round(v, 4)))
        p0 = self.tool()
        self.set_tool((cl(p0[0] + dx*s, -3.5, 3.5), cl(p0[1] + dy*s, TOOL_Y - 2.0, TOOL_Y + 2.5),
                       cl(p0[2] + dz*s, BED_TOP, TIP_HOME)))
        p1 = self.tool()
        over = abs(p1[0]) <= SX/2 and abs(p1[1]) <= SY/2
        if not self.broken and dz < 0 and s >= 0.1 and over and p1[2] < STOCK_TOP:
            self.shatter(p1)
            return
        self.cut_move(p0, p1)

    def start_run(self):
        t = self.tool()
        if self.broken:
            return self.error("REPLACE THE CUTTER FIRST (RESET)")
        if not self.zxy_set:
            return self.error("SET ZERO XY FIRST")
        if not self.zz_set:
            return self.error("SET ZERO Z FIRST")
        if self.paper_in:
            return self.error("TAKE THE PAPER OUT FIRST (P)")
        if t[2] - self.zero[2] < 0.2:
            return self.error("LIFT THE CUTTER UP FIRST")
        zc, pts = 0.2, []
        for d in (-0.03125, -0.0625):
            for lap in (rr(2.75, 1.75, 0.375), rr(2.25, 1.25, 0.125)):
                lap = lap + [lap[0]]
                pts.append(((lap[0][0], lap[0][1], zc), True))
                pts.append(((lap[0][0], lap[0][1], d), False))
                pts += [((q[0], q[1], d), False) for q in lap[1:]]
                pts.append(((lap[0][0], lap[0][1], zc), True))
        pts.append(((0.0, 0.0, t[2] - self.zero[2]), True))
        self.path = [(tuple(a + b for a, b in zip(p, self.zero)), r) for p, r in pts]
        self.running = True

    def tick(self, context):
        if self.flash:
            self.flash -= 1
            on = self.flash > 0 and (self.flash // 6) % 2 == 0
            self.screen.material_slots[0].material = M["Sim Screen Error"] if on else M["Sim Screen Grey"]
            if not self.flash:
                self.msg = ""
                self.show(context)
            for a in context.screen.areas:
                a.tag_redraw()
        if self.running and self.path:
            p = self.tool()
            target, rapid = self.path[0]
            speed = 0.35 if rapid else 0.05
            d = math.dist(p, target)
            if d <= speed:
                p1 = target
                self.path.pop(0)
            else:
                p1 = tuple(a + (b - a)*speed/d for a, b in zip(p, target))
            self.cut_move(p, p1)
            self.set_tool(p1)
            if not self.path:
                self.running = False
            self.show(context)

    def do(self, context, action):
        if self.running:
            return
        self.msg = ""
        if action == "RESET":
            for i in range(NX*NY):
                self.me.vertices[i].co.z = STOCK_TOP * IN
            self.me.update()
            for o in [o for o in SIM.objects if o.name.startswith("Shard ")]:
                bpy.data.objects.remove(o, do_unlink=True)
            self.flutes.hide_viewport = self.flutes.hide_render = False
            self.broken = self.paper_in = self.torn = False
        elif action == "RUN":
            self.start_run()
        elif action == "PAPER":
            if self.torn or not self.paper_in:
                self.paper_in, self.torn = True, False
            else:
                self.paper_in = False
        elif action == "ZXY":
            t = self.tool()
            self.zero[0], self.zero[1] = t[0], t[1]
            self.zxy_set = True
        elif action == "ZZ":
            self.zero[2] = self.tool()[2]
            self.zz_set = True
        elif action in self.STEPS:
            self.set_step(action)
        elif action in self.MOVES:
            self.jog(*self.MOVES[action])
        self.show(context)

    def clicked(self, context, event):
        mx, my = event.mouse_x, event.mouse_y
        for area in context.window.screen.areas:
            if area.type != 'VIEW_3D':
                continue
            for reg in area.regions:
                if reg.type == 'WINDOW' and reg.x <= mx < reg.x + reg.width \
                        and reg.y <= my < reg.y + reg.height:
                    rv3d = area.spaces.active.region_3d
                    co = (mx - reg.x, my - reg.y)
                    org = view3d_utils.region_2d_to_origin_3d(reg, rv3d, co)
                    vec = view3d_utils.region_2d_to_vector_3d(reg, rv3d, co)
                    dg = context.evaluated_depsgraph_get()
                    for _ in range(8):
                        hit, loc, nor, idx, ob, mtx = context.scene.ray_cast(dg, org, vec)
                        if not hit:
                            return None
                        jog = ob.original.get("jog")
                        if jog:
                            return jog
                        org = loc + vec * 1e-5
                    return None
        return None

    def modal(self, context, event):
        if event.type == 'TIMER':
            self.tick(context)
            return {'PASS_THROUGH'}
        if event.value != 'PRESS':
            return {'PASS_THROUGH'}
        if event.type == 'ESC':
            if self.running:
                self.running, self.path = False, []
                self.error("PROGRAM STOPPED")
                self.show(context)
                return {'RUNNING_MODAL'}
            context.window_manager.event_timer_remove(self.timer)
            context.workspace.status_text_set(None)
            return {'FINISHED'}
        if event.type == 'LEFTMOUSE':
            action = self.clicked(context, event)
            if action:
                self.do(context, action)
                return {'RUNNING_MODAL'}
            return {'PASS_THROUGH'}
        if event.type in self.KEYS:
            self.do(context, self.KEYS[event.type])
            return {'RUNNING_MODAL'}
        return {'PASS_THROUGH'}

bpy.utils.register_class(NOMAD_OT_jog)
bpy.ops.nomad.jog('INVOKE_DEFAULT')
