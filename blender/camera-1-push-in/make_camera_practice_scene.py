# Camera Practice Scene builder for the "Camera Moves" lesson series (Blender 5.2)
# Winters Innovative Solutions
#
# How to use (teacher, one time only):
#   1. File -> New -> General.
#   2. Click the Scripting tab at the top of the window.
#   3. In the Text Editor, click New, paste this whole script, then click Run Script (the play button).
#   4. File -> Save As -> camera_practice_scene.blend
#
# It builds a simple "dream room" from basic shapes: an 8 m x 8 m room with three walls
# (the front is open like a dollhouse), a bed, desk, chair, desk lamp, bookshelf, rug,
# a round table with a globe in the centre, and a plant in the front-left corner.
# Lighting is kept basic on purpose (Lesson 4 improves it).
# Room centre is at 0, 0, 0. Floor is at Z = 0. Walls are 3 m tall.

import bpy
from math import radians

# ---------- Start clean ----------
for ob in list(bpy.data.objects):
    bpy.data.objects.remove(ob, do_unlink=True)
for coll in list(bpy.data.collections):
    bpy.data.collections.remove(coll)

scene = bpy.context.scene


def make_collection(name):
    c = bpy.data.collections.new(name)
    scene.collection.children.link(c)
    return c


room_col = make_collection("Room")
furn_col = make_collection("Furniture")
light_col = make_collection("Lights")
cam_col = make_collection("Camera")


def move_to(ob, coll):
    for c in list(ob.users_collection):
        c.objects.unlink(ob)
    coll.objects.link(ob)


# ---------- Materials ----------
def material(name, rgb, roughness=0.6):
    m = bpy.data.materials.get(name) or bpy.data.materials.new(name)
    m.use_nodes = True
    bsdf = m.node_tree.nodes.get("Principled BSDF")
    if bsdf:
        bsdf.inputs["Base Color"].default_value = (rgb[0], rgb[1], rgb[2], 1.0)
        bsdf.inputs["Roughness"].default_value = roughness
    m.diffuse_color = (rgb[0], rgb[1], rgb[2], 1.0)
    return m


M = {
    "floor":   material("Floor Wood", (0.42, 0.26, 0.14), 0.5),
    "wall":    material("Wall Paint", (0.72, 0.78, 0.86), 0.8),
    "accent":  material("Accent Wall", (0.30, 0.42, 0.62), 0.8),
    "bed":     material("Bed Blanket", (0.55, 0.20, 0.35), 0.9),
    "white":   material("Pillow White", (0.90, 0.90, 0.88), 0.9),
    "wood":    material("Furniture Wood", (0.60, 0.40, 0.22), 0.5),
    "dark":    material("Dark Metal", (0.08, 0.08, 0.09), 0.4),
    "shade":   material("Lamp Shade", (0.95, 0.80, 0.45), 0.7),
    "rug":     material("Rug", (0.85, 0.60, 0.20), 1.0),
    "globe":   material("Globe Blue", (0.10, 0.35, 0.75), 0.3),
    "pot":     material("Plant Pot", (0.75, 0.35, 0.20), 0.6),
    "leaves":  material("Plant Leaves", (0.15, 0.50, 0.18), 0.8),
    "chair":   material("Chair Red", (0.75, 0.15, 0.12), 0.5),
    "book1":   material("Book Green", (0.10, 0.45, 0.30), 0.7),
    "book2":   material("Book Yellow", (0.90, 0.75, 0.15), 0.7),
    "book3":   material("Book Purple", (0.40, 0.20, 0.60), 0.7),
}


def finish(ob, name, mat, coll, smooth=False):
    ob.name = name
    ob.data.name = name
    bpy.ops.object.transform_apply(location=False, rotation=False, scale=True)
    ob.data.materials.clear()
    ob.data.materials.append(mat)
    if smooth == "angle":
        # Smooth round sides but keep flat tops flat (stops the dome-like shading)
        try:
            bpy.ops.object.shade_smooth_by_angle(angle=radians(30))
        except Exception:
            bpy.ops.object.shade_flat()
    elif smooth:
        bpy.ops.object.shade_smooth()
    move_to(ob, coll)
    return ob


# Box: size = (X, Y, Z) in metres, loc = centre of the box
def box(name, size, loc, mat, coll):
    bpy.ops.mesh.primitive_cube_add(size=1, location=loc, scale=size)
    return finish(bpy.context.active_object, name, mat, coll)


def cylinder(name, radius, depth, loc, mat, coll, verts=32):
    bpy.ops.mesh.primitive_cylinder_add(vertices=verts, radius=radius, depth=depth, location=loc)
    return finish(bpy.context.active_object, name, mat, coll, smooth="angle")


def sphere(name, radius, loc, mat, coll):
    bpy.ops.mesh.primitive_uv_sphere_add(segments=32, ring_count=16, radius=radius, location=loc)
    return finish(bpy.context.active_object, name, mat, coll, smooth=True)


def cone(name, r1, r2, depth, loc, mat, coll):
    bpy.ops.mesh.primitive_cone_add(vertices=32, radius1=r1, radius2=r2, depth=depth, location=loc)
    return finish(bpy.context.active_object, name, mat, coll, smooth="angle")


# ---------- Room (8 m x 8 m, walls 3 m tall, front open) ----------
bpy.ops.mesh.primitive_plane_add(size=8, location=(0, 0, 0))
finish(bpy.context.active_object, "Floor", M["floor"], room_col)
box("Back Wall",  (8.4, 0.2, 3.0), (0, 4.1, 1.5),  M["accent"], room_col)
box("Left Wall",  (0.2, 8.2, 3.0), (-4.1, 0, 1.5), M["wall"],   room_col)
box("Right Wall", (0.2, 8.2, 3.0), (4.1, 0, 1.5),  M["wall"],   room_col)

# ---------- Bed (back-left corner) ----------
box("Bed",       (1.8, 2.4, 0.5),  (-2.9, 2.6, 0.25),  M["bed"],   furn_col)
box("Headboard", (1.8, 0.15, 1.1), (-2.9, 3.92, 0.55), M["wood"],  furn_col)
box("Pillow",    (1.2, 0.5, 0.15), (-2.9, 3.45, 0.57), M["white"], furn_col)

# ---------- Desk, chair and lamp (back-right corner) ----------
box("Desk Top",        (1.6, 0.7, 0.06),  (2.9, 3.55, 0.75), M["wood"], furn_col)
box("Desk Side Left",  (0.06, 0.7, 0.72), (2.13, 3.55, 0.36), M["wood"], furn_col)
box("Desk Side Right", (0.06, 0.7, 0.72), (3.67, 3.55, 0.36), M["wood"], furn_col)

box("Chair Seat", (0.5, 0.5, 0.06), (2.9, 2.75, 0.45), M["chair"], furn_col)
box("Chair Back", (0.5, 0.06, 0.5), (2.9, 2.52, 0.73), M["chair"], furn_col)
cylinder("Chair Post", 0.04, 0.42, (2.9, 2.75, 0.21), M["dark"], furn_col)
cylinder("Chair Base", 0.25, 0.03, (2.9, 2.75, 0.015), M["dark"], furn_col)

cylinder("Lamp Base", 0.10, 0.03, (3.4, 3.7, 0.795), M["dark"], furn_col)
cylinder("Lamp Pole", 0.015, 0.40, (3.4, 3.7, 0.98), M["dark"], furn_col, verts=12)
cone("Lamp Shade", 0.25, 0.12, 0.30, (3.4, 3.7, 1.22), M["shade"], furn_col)

# ---------- Bookshelf (right wall, front half) ----------
box("Bookshelf", (0.35, 1.0, 2.2), (3.8, -1.2, 1.1), M["wood"], furn_col)
box("Book Green",  (0.25, 0.12, 0.30), (3.55, -1.50, 1.55), M["book1"], furn_col)
box("Book Yellow", (0.25, 0.12, 0.26), (3.55, -1.35, 1.53), M["book2"], furn_col)
box("Book Purple", (0.25, 0.12, 0.32), (3.55, -1.20, 1.56), M["book3"], furn_col)

# ---------- Centre: rug, round table and globe ----------
cylinder("Rug", 1.6, 0.02, (0, 0, 0.01), M["rug"], furn_col, verts=64)
cylinder("Table Post", 0.05, 0.58, (0, 0, 0.30), M["dark"], furn_col)
cylinder("Table Top", 0.5, 0.05, (0, 0, 0.615), M["wood"], furn_col, verts=48)
sphere("Globe", 0.22, (0, 0, 0.86), M["globe"], furn_col)

# ---------- Plant (front-left corner) ----------
cylinder("Plant Pot", 0.25, 0.4, (-3.4, -3.2, 0.2), M["pot"], furn_col)
bpy.ops.mesh.primitive_ico_sphere_add(subdivisions=2, radius=0.45, location=(-3.4, -3.2, 0.75))
finish(bpy.context.active_object, "Plant Leaves", M["leaves"], furn_col)

# ---------- Basic lighting (Lesson 4 improves this) ----------
def point_light(name, loc, watts, colour=(1, 1, 1), radius=0.1):
    data = bpy.data.lights.new(name, type="POINT")
    data.energy = watts
    data.color = colour
    data.shadow_soft_size = radius
    ob = bpy.data.objects.new(name, data)
    ob.location = loc
    light_col.objects.link(ob)
    return ob


point_light("Ceiling Light", (0, 0, 2.7), 600, radius=0.3)
point_light("Desk Lamp Light", (3.4, 3.7, 1.12), 40, colour=(1.0, 0.8, 0.55))

# World: a dim grey background
world = scene.world or bpy.data.worlds.new("World")
scene.world = world
world.use_nodes = True
bg = world.node_tree.nodes.get("Background")
if bg:
    bg.inputs["Color"].default_value = (0.05, 0.05, 0.06, 1.0)
    bg.inputs["Strength"].default_value = 1.0

# ---------- Camera ----------
# Placed at an angle on purpose: in Lesson 1 students type the start position
# and see the camera jump to it.
cam_data = bpy.data.cameras.new("Camera")
cam_data.lens = 50
cam = bpy.data.objects.new("Camera", cam_data)
cam.location = (9.0, -11.0, 6.0)
cam.rotation_euler = (radians(65), 0, radians(40))
cam_col.objects.link(cam)
scene.camera = cam

# ---------- Tidy up ----------
for ob in bpy.context.selected_objects:
    ob.select_set(False)
bpy.context.view_layer.objects.active = None
print("Camera practice scene built. Now use File -> Save As -> camera_practice_scene.blend")
