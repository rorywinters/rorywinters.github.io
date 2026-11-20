---
title: Waving Canadian Flag
program: Blender
lesson: 10
blurb: Build a Canadian flag that waves in the wind with cloth physics, texture it, and set it in front of a Remembrance Day backdrop. About one class period.
---
You build a Canadian flag that waves in the wind using Blender's cloth simulation, then texture it and set it in front of a Remembrance Day backdrop.

- **Files you need** (shared by your teacher in Google Classroom): `canada_flag.png` (the flag texture, 4096 × 2048) and `remembrance_background.png` (the backdrop, 3840 × 2160)
- **Skills:** subdividing a mesh, vertex groups, cloth physics, force fields, image textures, the Mapping node, modifiers, emission materials and rendering
- **Time:** about one class period

Save your file often (Ctrl+S). Simulations can be slow, and Undo is your friend (Ctrl+Z).

| Colour | Meaning |
| --- | --- |
| Green | Safe to change. No real effect on playback, baking or render time. |
| Amber | Raises the load a little. Fine at the values given, slower if pushed higher. |
| Red | Use with caution. Big effect on speed or memory. Too high can freeze or crash Blender. |

For every red setting you get two values: a lighter one to use while you work, and the final one for rendering.

```brief
Part 1 · Build the flag mesh
1A · Plane | Add → Mesh → Plane | Scale X 2 → 4 × 2 m
1B · Subdivide | Edit Mode · Select All | Subdivide · Cuts 40 (amber)
Part 2 · Pin the corners
2 · Pin group | Top view · 3 verts per left corner | Vertex Groups + → Pin → Assign
Part 3 · Stand it up, add cloth
3A · Upright | Rotation X 90
3B · Cloth | Physics → Cloth | Shape → Pin Group Pin · hangs on Play
Part 4 · Wind
4A · Wind | Add → Force Field → Wind | Rotation Y 90 · X −3 m
4B · Settings | Strength 800 · Noise 2 | Mass 0.1 · Gravity 0.6 · Steps 10
Part 5 · Flag texture
5A · Image | Shading · New | canada_flag.png Color → Base Color
5B · Sideways fix | Tex Coord UV → Mapping → Vector | Rot Z 90 · Loc X 1
Part 6 · Look better
6 · Cloth look | Shade Smooth · Subdivision 0 / Render 2 (red) | Solidify 0.01 · Roughness 0.8 · Sheen 0.3
Part 7 · Backdrop and render
7A · Backdrop | Plane · Rot X 90 · Scale X 1.78 | Emission · Shadow off
7B · Light | Sun · Strength 3
7C · MP4 | Bake cloth · 1920 × 1080 | Media Type Video · MPEG-4 · H.264
```

## Part 1 · Build the flag mesh

The flag is a flat rectangle with enough faces for the cloth to ripple.

### 1A · The plane

| Setting | Axis | Value |
| --- | --- | --- |
| **Location** | X | 0 m |
|  | Y | 0 m |
|  | Z | 0 m |
| **Rotation** | X, Y, Z | 0° |
| **Scale** | X | 2 |
|  | Y | 1 |
|  | Z | 1 |
| **Dimensions** | X | 4 m |
|  | Y | 2 m |
|  | Z | 0 m |

Other fields stay at their defaults.

1. Start a new **General** file. Click the default cube and choose **Object → Delete**. (Shortcut: X)
2. Choose **Add → Mesh → Plane**. (Shortcut: Shift+A)
3. Choose **View → Sidebar** and click the **Item** tab. (Shortcut: N)
4. Under **Scale**, type **2** in the **X** box and press **Enter**. The plane becomes a 2:1 rectangle, the shape of the Canadian flag. Scaling along X keeps the flag wide and the texture right-side up later. (Shortcut: S, X, 2, Enter)
5. Check the numbers match the table.

### 1B · Subdivide

| Subdivide (operator panel) | Value |
| --- | --- |
| Number of Cuts (amber) | 40 |

More cuts give finer ripples but a slower simulation.

1. Choose **Edit Mode** and **Select → All**. (Shortcut: Tab, A)
2. Choose **Edge → Subdivide**. In the **Subdivide** panel in the bottom-left corner, set **Number of Cuts** to **40**. The plane fills with a fine grid.

**Alternative:** choose **Add → Mesh → Grid** instead of a plane, and set **X Subdivisions** to **80** and **Y Subdivisions** to **40** in the bottom-left panel (both amber). A grid keeps the faces square. Both methods keep the UV map filling the whole image, which matters in Part 5.

- [ ] A 4 m × 2 m rectangle covered in a fine grid

## Part 2 · Pin the corners

A real flag clips to the rope at its top and bottom corners. A vertex group tells Blender which vertices stay fixed.

1. Stay in **Edit Mode** and click **Vertex Select** in the header. (Shortcut: 1)
2. Choose **View → Viewpoint → Top**, then **Select → None**. (Shortcut: Numpad 7, then Alt+A)
3. Click the **top-left corner** vertex, then **Shift**-click the two vertices just below it.
4. **Shift**-click the **bottom-left corner** vertex and the two just above it.
5. Open **Object Data Properties** (green triangle) on the right.
6. In **Vertex Groups**, click **+**. Double-click the new group and rename it **Pin**.
7. Click **Assign**.

**Check it:** choose **Select → None**, then click **Select** in the Vertex Groups panel. Only your six corner vertices light up.

Pin two or three vertices per corner, not one. A single pinned vertex pulls the cloth into a sharp spike.

**Simpler option:** box-select the whole left edge instead (Shortcut: B). The flag will look like it's sewn to the pole rather than clipped.

- [ ] Clicking Select in the Pin group lights up only the six corner vertices

## Part 3 · Stand it up and add cloth

The flag must be upright so it hangs instead of falling flat like a hammock.

### 3A · Stand it up

| Setting | Axis | Value |
| --- | --- | --- |
| **Rotation** | X | 90° |

1. Return to **Object Mode**. (Shortcut: Tab)
2. In the N panel, **Item** tab, type **90** in **Rotation X** and press **Enter**. (Shortcut: R, X, 90, Enter)
3. Choose **View → Viewpoint → Front** and check the flag is wide and upright. (Shortcut: Numpad 1)

### 3B · Cloth

| Panel | Field | Value |
| --- | --- | --- |
| **Physics → Cloth → Shape** | Pin Group | Pin |

1. Open **Physics Properties** (blue circle with an orbit) and click **Cloth**.
2. Open **Shape** and set **Pin Group** to **Pin**.
3. Go to frame **1** and click **Play**. (Shortcut: Space)

With no wind, the flag hangs straight down from its two left corners. Click **Pause**, then return to frame 1.

> **Pick the right one:** don't click **Apply** on the Cloth modifier. Applying freezes the flag in its current shape and removes the simulation.

- [ ] On Play, the flag hangs down from its two left corners

## Part 4 · Add the wind

A Wind force field pushes the cloth along the direction of its yellow arrow.

| Object | Setting (Physics tab) | Value | What it does |
| --- | --- | --- | --- |
| Wind | Strength | 800 | How hard the wind blows |
| Wind | Noise Amount | 2 | Gusts, so the motion isn't mechanical |
| Flag | Cloth → Physical Properties → Vertex Mass | 0.1 | Light fabric lifts easily |
| Flag | Cloth → Field Weights → Gravity | 0.6 | Less sag, still a natural droop |
| Flag | Cloth → Quality Steps (amber) | 10 (5 while testing) | Smooth motion, no jitter or stretching |

### 4A · Place the wind

| Wind (N panel → Item) | Axis | Value |
| --- | --- | --- |
| **Location** | X | −3 m |
| **Rotation** | Y | 90° |

1. Go to frame **1**.
2. Choose **Add → Force Field → Wind**. The new wind object is selected.
3. Check the **wind** is selected, not the flag. In the N panel, set **Rotation Y** to **90°** so the arrow points sideways across the flag. (Shortcut: R, Y, 90, Enter)
4. Set **Location X** to about **−3 m**, so the wind sits to the left of the flag near the pinned corners. (Shortcut: G, X)

### 4B · Wind and cloth settings

1. With the wind selected, set **Strength** and **Noise Amount** in **Physics Properties**.
2. Click the flag and set its three **Cloth** values. A light flag lifts with a gentle wind; a heavy flag needs so much wind that it looks stiff.
3. Go to frame **1** and click **Play**.

The flag streams out to the side and ripples. If it blows back toward the pole, set the wind's **Rotation Y** to **−90**. If it barely moves, raise the strength a little; if it whips wildly, lower it. Change one setting at a time, return to frame 1, and play again to compare.

- [ ] On Play, the flag streams out sideways and ripples

## Part 5 · Add the flag texture

### 5A · The image

1. Click the flag and click the **Shading** tab at the top.
2. In the node editor at the bottom, click **New** to make a material.
3. Drag `canada_flag.png` from your folder into the node editor. It becomes an **Image Texture** node.
4. Connect **Image Texture: Color** to **Principled BSDF: Base Color**.

The flag shows the red bands and maple leaf in the viewport.

### 5B · If the flag is sideways

| Mapping node | Value |
| --- | --- |
| Rotation Z | 90° |
| Location X | 1 |

If it ends up upside down, use **Rotation Z −90°**, **Location X 0** and **Location Y 1**.

Connect **Texture Coordinate: UV → Mapping: Vector**, then **Mapping: Vector → Image Texture: Vector** (purple input, bottom left).

Rotate the image with a Mapping node instead of changing the mesh.

1. Choose **Add → Input → Texture Coordinate** and place it on the left. (Shortcut: Shift+A, search "Texture Coordinate")
2. Choose **Add → Vector → Mapping** and place it between Texture Coordinate and the image node.
3. Wire them as shown above, and type the Mapping values. The flag turns the right way.

> **Pick the right one:** the Mapping node controls **where** the image lands, not its colour. It plugs into the image node's **Vector** input, never between Color and Base Color. Use **Texture Coordinate: UV**, not Generated or Object.

To break a link, drag the wire's input end into empty space, or hold **Ctrl+right-click** and drag across the wire.

- [ ] The flag shows the maple leaf the right way up

## Part 6 · Make it look better

Smoothing, thickness and a fabric material turn the flag from blocky paper into cloth.

| Panel | Field | Value |
| --- | --- | --- |
| **Subdivision Surface** (red) | Levels Viewport | 0 while working, 2 to check the look |
|  | Render | 2 |
| **Solidify** (amber) | Thickness | 0.01 m |
| **Principled BSDF** | Roughness | 0.8 |
| **Principled BSDF → Sheen** | Weight | 0.3 |

Other fields stay at their defaults. Modifier stack order, top to bottom: **Cloth**, **Subdivision Surface**, **Solidify**.

1. Right-click the flag in the viewport and choose **Shade Smooth**. The faceted look softens.
2. In **Modifier Properties** (blue wrench), choose **Add Modifier → Generate → Subdivision Surface**. Set **Levels Viewport** to **0** while you work and **Render** to **2**. Raise Levels Viewport to 2 only to check the final look.
3. Choose **Add Modifier → Generate → Solidify** and set **Thickness** to **0.01 m**. Hide it in the viewport with its monitor icon while you adjust the motion.
4. Check the order. From top to bottom the stack must read **Cloth**, **Subdivision Surface**, **Solidify**. Never click **Apply** on any of them.
5. On the flag's **Principled BSDF**, set **Roughness** to **0.8**. Open **Sheen** and set **Weight** to **0.3**. The flag looks like fabric instead of plastic.
6. **Flagpole:** choose **Add → Mesh → Cylinder**. Scale it thin and tall and place it just left of the pinned corners. Give it a grey material with **Metallic** about **0.8**.
7. **Rope (optional):** a thin cylinder beside the pole, lined up with the two flag corners. It is decoration only, not part of the simulation.

- [ ] The flag looks smooth and soft, with a grey pole beside it

## Part 7 · Backdrop, camera and render

The Remembrance Day image goes on a large plane behind the flag, using an Emission material so lighting doesn't change its colours.

### 7A · Camera shape and backdrop

| Panel | Field | Value |
| --- | --- | --- |
| **Output → Format** | Resolution X (amber) | 1920 |
|  | Resolution Y (amber) | 1080 |
|  | % | 50 for tests, 100 for the final |
| **Backdrop plane (N panel)** | Rotation X | 90° |
|  | Scale X | 1.78 |
| **Backdrop → Object Properties → Visibility** | Shadow | unticked |

1. Open **Output Properties** (printer icon) and set the resolution. This matches the backdrop's 16:9 shape.
2. Choose **Add → Mesh → Plane**. In the N panel, set **Rotation X** to **90°** to stand it up, and **Scale X** to **1.78** to make it 16:9.
3. Choose **View → Cameras → Active Camera**. Move the plane behind the flag and scale it up until it fills the camera frame. (Shortcut: Numpad 0)
4. With the **backdrop plane** selected, go to the **Shading** tab and click **New**.
5. Drag `remembrance_background.png` into the node editor.
6. Delete this material's **Principled BSDF** (only on the backdrop, never the flag). Choose **Add → Shader → Emission**.
7. Connect **Image Texture: Color → Emission: Color → Material Output: Surface**. The backdrop shows at full brightness.
8. In **Object Properties → Visibility**, untick **Shadow** so the flag doesn't cast a shadow on the sky.

### 7B · Light

| Light Properties | Value |
| --- | --- |
| Type | Sun |
| Strength | about 3 |

1. Select the **Light** and change it to a **Sun** in its properties. Set **Strength** and angle it from the front-side.
2. Choose **Render → Render Image** to check one frame. (Shortcut: F12)

### 7C · Render to MP4

| Setting | Where | Value |
| --- | --- | --- |
| Resolution | Output → Format | 1920 × 1080, 100% |
| Frame Rate | Output → Format | 24 fps |
| Frame Start / End | Output → Frame Range | 1 to your last frame (240 = 10 seconds) |
| Cloth cache end | Flag → Physics → Cloth → Cache → End | same as Frame End |
| Output folder | Output → Output | click the folder icon and pick where to save |
| Media Type | Output → Output | **Video** |
| Container | Output → Encoding | MPEG-4 |
| Video Codec | Encoding → Video | H.264 |
| Output Quality | Encoding → Video | Medium Quality |

**Frames needed** = seconds × 24. For example, 10 seconds = 240 frames, 30 seconds = 720 frames, 1 minute = 1,440 frames.

1. Set the values from the table.
2. Bake the cloth first: **Physics → Cloth → Cache → Bake**. The Timeline fills with an orange bar, so the render doesn't recalculate the simulation.
3. Choose **Render → Render Animation**. The MP4 appears in your output folder when it finishes. (Shortcut: Ctrl+F12)

- [ ] The flag waves in front of the Remembrance Day backdrop in the MP4

## Troubleshooting

| Problem | Fix |
| --- | --- |
| Flag falls flat like a hammock | It's lying down. Select it, go to frame 1, set Rotation X to 90. |
| Flag hangs from the top or bottom edge | The rotation is wrong. Choose Object → Clear → Rotation (Alt+R), then set only Rotation X to 90. |
| Flag doesn't move at all | Check Pin Group isn't the whole flag, and go back to frame 1 before playing. |
| Flag blows toward the pole | Set the wind's Rotation Y to −90. |
| Wind rotated the flag instead | The flag was selected. Undo, click the wind, and rotate again. |
| Wind must be very strong and the flag looks stiff | Make the flag lighter instead: Vertex Mass 0.1, Field Weights → Gravity 0.6, Quality Steps 10, then lower the wind to about 800 (Part 4). |
| Video starts with the flag hanging limp | That's the simulation warming up. Bake from frame 1, then set Frame Start to the first frame where the flag is flying (about 50–70). |
| Flag stops moving partway through | The cloth cache ends at frame 250 by default. Physics → Cloth → Cache → set End to match your last frame. |
| Cloth modifier is gone after clicking Apply | Ctrl+Z, or Edit → Undo History and pick the step before Apply Modifier. |
| Texture is sideways | Use the Mapping node fix in 5B. |
| Image shows as solid colour or pink | Pink means Blender lost the image file. Drag the PNG into the node editor again. |
| Flag looks blocky | Shade Smooth, plus Subdivision Surface below Cloth in the modifier stack. |
| Flag passes through the pole | Add Collision physics to the pole, or move the pole slightly further from the flag. |
| Backdrop looks dark or shadowed | Use an Emission material and untick Shadow under Object Properties → Visibility. |
| No FFmpeg Video in File Format | Blender 5.2 uses Media Type → Video instead. |

**Video length:** seconds = frames ÷ frame rate. At 24 fps, 250 frames is about 10 seconds.
