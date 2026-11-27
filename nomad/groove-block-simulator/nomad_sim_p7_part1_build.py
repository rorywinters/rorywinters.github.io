# ==========================================================
#  NOMAD SIM - PROGRAM 7 - PART 1 OF 2: BUILD THE MACHINE
#  New in Program 7: a red laser cross shows where the cutter is.
#  Run this first, then run Part 2 (the controls).
# ==========================================================
import bpy, bmesh, math
from mathutils import Matrix

IN = 0.0254
COLL = "Nomad Sim"
BED_TOP, SX, SY = 1.5, 4.0, 3.0
STOCK_TOP = BED_TOP + 1.0
TIP_HOME, TOOL_Y, RES, PAPER = 4.0, -0.75, 0.02, 0.004
NX, NY = int(round(SX / RES)) + 1, int(round(SY / RES)) + 1

if COLL in bpy.data.collections:
    old = bpy.data.collections[COLL]
    for o in list(old.objects):
        bpy.data.objects.remove(o, do_unlink=True)
    bpy.data.collections.remove(old)
if "Cube" in bpy.data.objects:
    bpy.data.objects.remove(bpy.data.objects["Cube"], do_unlink=True)
coll = bpy.data.collections.new(COLL)
bpy.context.scene.collection.children.link(coll)
us = bpy.context.scene.unit_settings
us.system, us.length_unit, us.scale_length = 'IMPERIAL', 'INCHES', 1.0

def to_coll(o):
    for c in list(o.users_collection):
        c.objects.unlink(o)
    coll.objects.link(o)
    return o

def set_in(b, n, v):
    if n in b.inputs:
        b.inputs[n].default_value = v

def mat(name, rgba, metal=0.0, rough=0.5, alpha=1.0, glow=0.0):
    m = bpy.data.materials.get(name) or bpy.data.materials.new(name)
    m.diffuse_color = (rgba[0], rgba[1], rgba[2], alpha)
    m.use_nodes = True
    b = m.node_tree.nodes.get("Principled BSDF")
    if b:
        set_in(b, "Base Color", rgba); set_in(b, "Metallic", metal)
        set_in(b, "Roughness", rough); set_in(b, "Alpha", alpha)
        if glow:
            set_in(b, "Emission Color", rgba); set_in(b, "Emission Strength", glow)
    if alpha < 1.0:
        for a, v in (("surface_render_method", "BLENDED"), ("blend_method", "BLEND")):
            try: setattr(m, a, v)
            except Exception: pass
    return m

def empty(name, parent=None):
    e = bpy.data.objects.new(name, None)
    e.empty_display_size = IN
    coll.objects.link(e)
    e.parent = parent
    return e

def box(name, sx, sy, sz, x, y, z, m, parent=None, bevel=0.06):
    bpy.ops.mesh.primitive_cube_add(size=1, location=(x*IN, y*IN, z*IN))
    o = to_coll(bpy.context.active_object)
    o.name = name
    o.data.transform(Matrix.Diagonal((sx*IN, sy*IN, sz*IN, 1.0)))
    o.data.materials.append(m)
    o.parent = parent
    if bevel:
        md = o.modifiers.new("Bevel", 'BEVEL')
        md.width, md.segments = bevel*IN, 3
    return o

def cyl(name, dia, length, x, y, z, m, parent=None, rot=(0, 0, 0)):
    bpy.ops.mesh.primitive_cylinder_add(vertices=32, radius=dia/2*IN, depth=length*IN,
                                        location=(x*IN, y*IN, z*IN), rotation=rot)
    o = to_coll(bpy.context.active_object)
    o.name = name
    o.data.materials.append(m)
    o.parent = parent
    return o

def text(name, body, x, z, size, m, parent, align='LEFT', jog=None, y=-0.3):
    cu = bpy.data.curves.new(name, 'FONT')
    cu.body, cu.size = body, size*IN
    cu.align_x, cu.align_y = align, 'CENTER'
    o = bpy.data.objects.new(name, cu)
    coll.objects.link(o)
    o.parent = parent
    o.location = (x*IN, y*IN, z*IN)
    o.rotation_euler = (math.pi/2, 0, 0)
    cu.materials.append(m)
    if jog:
        o["jog"] = jog
    return o

dark   = mat("Sim Dark", (0.06, 0.06, 0.07, 1), 0.2, 0.6)
accent = mat("Sim Accent", (0.85, 0.35, 0.05, 1), 0.1, 0.4)
glass  = mat("Sim Window", (0.15, 0.15, 0.18, 1), 0.0, 0.05, alpha=0.2)
bedm   = mat("Sim Bed", (0.35, 0.35, 0.38, 1), 0.8, 0.4)
alu    = mat("Sim Aluminium", (0.80, 0.81, 0.83, 1), 1.0, 0.3)
steel  = mat("Sim Steel", (0.60, 0.60, 0.62, 1), 1.0, 0.2)
motor  = mat("Sim Spindle", (0.20, 0.20, 0.22, 1), 0.5, 0.4)
carb   = mat("Sim Carbide", (0.85, 0.65, 0.20, 1), 1.0, 0.3)
led    = mat("Sim LED", (1.0, 0.95, 0.85, 1), glow=8.0)
guide  = mat("Sim Guide", (1.0, 0.05, 0.05, 1), glow=3.0)
laser  = mat("Sim Laser", (1.0, 0.0, 0.0, 1), glow=12.0)
pencil = mat("Sim Pencil", (0.05, 0.05, 0.06, 1), 0.3, 0.6)
paperw = mat("Sim Paper", (0.95, 0.95, 0.92, 1), glow=0.3)
mat("Sim Paper Grab", (1.0, 0.25, 0.25, 1), glow=1.0)
mat("Sim Paper Torn", (0.35, 0.35, 0.35, 1))
lapm   = mat("Sim Laptop", (0.18, 0.18, 0.20, 1), 0.6, 0.4)
scrm   = mat("Sim Screen Grey", (0.30, 0.32, 0.33, 1), glow=0.4)
mat("Sim Screen Error", (0.80, 0.08, 0.08, 1), glow=1.2)
green  = mat("Sim Button Green", (0.10, 0.60, 0.20, 1), glow=0.6)
mat("Sim Step On", (0.30, 1.00, 0.40, 1), glow=1.5)
stepof = mat("Sim Step Off", (0.15, 0.30, 0.18, 1), glow=0.3)
greyb  = mat("Sim Button Grey", (0.45, 0.47, 0.48, 1), glow=0.4)
white  = mat("Sim Text", (1.0, 1.0, 1.0, 1), glow=2.0)

# enclosure
box("Plinth", 14, 14, 1, 0, 0, 0.5, dark)
box("Front Lip", 14, 0.5, 0.4, 0, -6.75, 1.2, accent)
box("Back Panel", 14, 0.5, 10, 0, 6.75, 6, dark)
box("Side Window L", 0.5, 13, 10, -6.75, 0, 6, glass, bevel=0)
box("Side Window R", 0.5, 13, 10, 6.75, 0, 6, glass, bevel=0)
box("Front Window", 13, 0.25, 7.5, 0, -6.75, 6.25, glass, bevel=0)
box("Beam", 13, 1.5, 1.5, 0, 1.5, 8.5, dark)
for zr in (8.0, 9.0):
    cyl(f"X Rail {zr}", 0.3, 13, 0, 0.65, zr, steel, rot=(0, math.pi/2, 0))
box("LED Strip", 10, 0.2, 0.1, 0, 0.7, 7.6, led, bevel=0)
for xr in (-5.0, 5.0):
    cyl(f"Y Rail {xr}", 0.3, 13, xr, 0, 1.25, steel, rot=(math.pi/2, 0, 0))

# Y axis bed and the 4 x 3 x 1 in block
y_axis = empty("Y Axis Bed")
box("Bed", 9, 9, 0.5, 0, 0, 1.25, bedm, y_axis)
verts, faces = [], []
for j in range(NY):
    for i in range(NX):
        verts.append(((-SX/2 + i*RES)*IN, (-SY/2 + j*RES)*IN, STOCK_TOP*IN))
for j in range(NY-1):
    for i in range(NX-1):
        a = j*NX + i
        faces.append((a, a+1, a+NX+1, a+NX))
ring = (list(range(NX)) + [j*NX + NX-1 for j in range(1, NY)] +
        [(NY-1)*NX + i for i in range(NX-2, -1, -1)] + [j*NX for j in range(NY-2, 0, -1)])
base = len(verts)
for k in ring:
    verts.append((verts[k][0], verts[k][1], BED_TOP*IN))
n = len(ring)
for k in range(n):
    faces.append((ring[k], ring[(k+1) % n], base + (k+1) % n, base + k))
faces.append(tuple(range(base+n-1, base-1, -1)))
me = bpy.data.meshes.new("Stock Mesh")
me.from_pydata(verts, [], faces)
bm = bmesh.new(); bm.from_mesh(me)
bmesh.ops.recalc_face_normals(bm, faces=bm.faces)
bm.to_mesh(me); bm.free()
stock = bpy.data.objects.new("Stock 4x3x1", me)
coll.objects.link(stock)
me.materials.append(alu)
stock.parent = y_axis

def rr(w, h, r, n=10):
    pts = []
    for cx, cy, a0 in ((w/2-r, h/2-r, 0), (-(w/2-r), h/2-r, 90),
                       (-(w/2-r), -(h/2-r), 180), (w/2-r, -(h/2-r), 270)):
        for k in range(n+1):
            a = math.radians(a0 + 90*k/n)
            pts.append((cx + r*math.cos(a), cy + r*math.sin(a)))
    return pts

for gname, pts in (("Groove Outer", rr(3.0, 2.0, 0.5)), ("Groove Inner", rr(2.0, 1.0, 0.0, 1))):
    cu = bpy.data.curves.new(gname, 'CURVE')
    cu.dimensions, cu.bevel_depth = '3D', 0.008*IN
    sp = cu.splines.new('POLY')
    sp.points.add(len(pts) - 1)
    for k, (px, py) in enumerate(pts):
        sp.points[k].co = (px*IN, py*IN, (STOCK_TOP + 0.01)*IN, 1)
    sp.use_cyclic_u = True
    o = bpy.data.objects.new(gname, cu)
    coll.objects.link(o)
    cu.materials.append(guide)
    o.parent = y_axis

box("Pencil Cross X", 1.2, 0.02, 0.004, 0, 0, STOCK_TOP + 0.003, pencil, y_axis, bevel=0)
box("Pencil Cross Y", 0.02, 1.2, 0.004, 0, 0, STOCK_TOP + 0.003, pencil, y_axis, bevel=0)

# X carriage and Z spindle with the 1/4 in 2-flute end mill
x_axis = empty("X Axis Carriage")
box("Carriage", 3, 0.5, 3, 0, 0.25, 8.5, dark, x_axis)
z_axis = empty("Z Axis Spindle", x_axis)
cyl("Spindle Motor", 2, 3, 0, -0.75, TIP_HOME + 3.75, motor, z_axis)
cyl("Spindle Band", 2.1, 0.25, 0, -0.75, TIP_HOME + 2.5, accent, z_axis)
cyl("Collet Nut", 0.75, 0.5, 0, -0.75, TIP_HOME + 2.0, steel, z_axis)
cyl("Shank 1/4", 0.25, 1.0, 0, -0.75, TIP_HOME + 1.25, steel, z_axis)
cyl("Flutes 1/4 2FL", 0.25, 0.75, 0, -0.75, TIP_HOME + 0.375, carb, z_axis)

# laser: a thin beam under the cutter tip and a red cross on the block.
# They ride on the X carriage, so they always sit right under the cutter centre.
# Part 2 stretches the beam and moves the cross as the machine jogs.
cyl("Laser Beam", 0.012, 1.0, 0, TOOL_Y, STOCK_TOP + 0.5, laser, x_axis)
box("Laser Cross X", 0.6, 0.012, 0.002, 0, TOOL_Y, STOCK_TOP + 0.007, laser, x_axis, bevel=0)
box("Laser Cross Y", 0.012, 0.6, 0.002, 0, TOOL_Y, STOCK_TOP + 0.007, laser, x_axis, bevel=0)

paper = box("Paper Strip", 1.0, 3.0, PAPER, 0, TOOL_Y - 1.2, STOCK_TOP + PAPER/2, paperw, bevel=0)
paper.hide_viewport = paper.hide_render = True

# laptop with the jog screen
lap = empty("Laptop")
lap.location = (15*IN, -4*IN, 0)
lap.rotation_euler = (0, 0, math.radians(-20))
box("Laptop Base", 11, 7.5, 0.5, 0, 0, 0.25, lapm, lap)
box("Laptop Keys", 9.5, 3.5, 0.05, 0, -0.5, 0.52, dark, lap, bevel=0)
hinge = empty("Laptop Hinge", lap)
hinge.location = (0, 3.6*IN, 0.5*IN)
hinge.rotation_euler = (math.radians(-12), 0, 0)
box("Laptop Lid", 11, 0.3, 7.5, 0, 0, 3.75, lapm, hinge)
box("Laptop Screen", 10.2, 0.05, 6.8, 0, -0.17, 3.8, scrm, hinge, bevel=0)

def btn(name, label, x, z, w, h, jog, m=green, size=0.45):
    b = box(name, w, 0.15, h, x, -0.25, z, m, hinge, bevel=0.05)
    b["jog"] = jog
    text(name + " Label", label, x, z, size, white, hinge, 'CENTER', jog, y=-0.34)

text("Screen Title", "JOG  P7", -4.6, 6.6, 0.6, white, hinge)
text("Readout X", "X +0.000", -4.6, 5.6, 0.55, white, hinge)
text("Readout Y", "Y +0.000", -4.6, 4.8, 0.55, white, hinge)
text("Readout Z", "Z +0.000", -4.6, 4.0, 0.55, white, hinge)
text("Readout State", "run Part 2", -4.6, 3.2, 0.32, white, hinge)
text("Readout Step", "step 0.1 in", -4.6, 2.5, 0.45, white, hinge)
btn("Btn Paper", "PAPER", 0.0, 6.6, 1.7, 0.7, "PAPER", greyb, 0.4)
btn("Btn ZeroXY", "ZERO XY", 2.1, 6.6, 2.0, 0.7, "ZXY", greyb, 0.4)
btn("Btn ZeroZ", "ZERO Z", 4.1, 6.6, 1.6, 0.7, "ZZ", greyb, 0.4)
btn("Btn Y+", "Y+", 1.2, 5.3, 1.3, 1.3, "Y+")
btn("Btn Y-", "Y-", 1.2, 2.5, 1.3, 1.3, "Y-")
btn("Btn X-", "X-", -0.2, 3.9, 1.3, 1.3, "X-")
btn("Btn X+", "X+", 2.6, 3.9, 1.3, 1.3, "X+")
btn("Btn Z+", "Z+", 4.2, 5.3, 1.1, 1.3, "Z+")
btn("Btn Z-", "Z-", 4.2, 2.5, 1.1, 1.3, "Z-")
for k, (lbl, key) in enumerate(((".001", "S1"), (".01", "S2"), (".1", "S3"), ("1", "S4"))):
    btn("Btn " + key, lbl, -4.0 + k*1.5, 1.1, 1.3, 0.8, key, stepof, 0.4)
btn("Btn Reset", "RESET", 2.0, 1.1, 1.4, 0.8, "RESET", greyb, 0.35)
btn("Btn Run", "RUN", 4.0, 1.1, 1.6, 0.8, "RUN", green, 0.5)

ld = bpy.data.lights.new("Sim Light", 'AREA')
ld.energy, ld.size = 40, 0.4
lo = bpy.data.objects.new("Sim Light", ld)
coll.objects.link(lo)
lo.location = (0.15, -0.3, 0.6)
lo.rotation_euler = (math.radians(25), 0, 0)

for area in bpy.context.screen.areas:
    if area.type == 'VIEW_3D':
        area.spaces.active.shading.type = 'MATERIAL'
        reg = [r for r in area.regions if r.type == 'WINDOW'][0]
        try:
            with bpy.context.temp_override(area=area, region=reg):
                bpy.ops.view3d.view_all()
        except Exception:
            pass

print("Nomad Sim Program 7 Part 1 done - now run Part 2")
