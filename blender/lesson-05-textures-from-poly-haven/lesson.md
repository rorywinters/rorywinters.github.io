---
title: Textures from Poly Haven: a Street Corner Made of Cubes
program: Blender
lesson: 5
blurb: Build a road, sidewalk, brick wall and door from stretched cubes, then give each one a free Poly Haven texture with real bumps and depth.
---
You build a tiny street corner from four stretched cubes (road, sidewalk, wall and door), then give each block one free [Poly Haven](https://polyhaven.com/textures) texture. Each block has one material, so there are no material slots to juggle.

**Work order: one block at a time.** Build one block, texture it, then move on. Repeating the same loop four times is the point.

| Order | Block | Build | Texture | Extra |
| --- | --- | --- | --- | --- |
| 1 | **Road** | 1A (Road row) | 2A → 2B → 2C → 3A | none |
| 2 | **Sidewalk** | 1A (Sidewalk row) | 2A → 2B → 2C → 3A | Part 4 (displacement) |
| 3 | **Wall** | 1A (Wall row) | 2A → 2B → 2C → 3A | Part 4 (displacement) |
| 4 | **Door** | 1A (Door row) | 2A → 2B → 2C → 3A | 1B (doorknob) |

Then light the scene (Part 5) and render (Part 6) once, at the end.

| Block | Texture ([Poly Haven](https://polyhaven.com/textures)) | Maps used |
| --- | --- | --- |
| **Road** | [Worn Asphalt](https://polyhaven.com/a/worn_asphalt) | diff, nor_gl, rough |
| **Sidewalk** | [Concrete Slab Wall](https://polyhaven.com/a/concrete_slab_wall) | diff, nor_gl, rough, disp |
| **Wall** | [Red Brick](https://polyhaven.com/a/red_brick) | diff, nor_gl, rough, disp |
| **Door** | [Rough Pine Door](https://polyhaven.com/a/rough_pine_door) | diff, nor_gl, rough |

| Colour | Meaning |
| --- | --- |
| Green | Safe to change. No real effect on speed. |
| Amber | Adds a little load. Fine at the value given, slower if pushed higher. |
| Red | Use with caution. Big effect on speed or memory. |

The red settings in this lesson are the Subdivision Surface **Levels** in Part 4. Work at 3 if Blender slows down.

**Links for this lesson:** Part 0 textures: [polyhaven.com/textures](https://polyhaven.com/textures) · Part 5 studio HDRI: [polyhaven.com/hdris/studio](https://polyhaven.com/hdris/studio)

```brief
Part 0 · Download the textures
0 · Poly Haven | polyhaven.com/textures · 2K | Extract All
Part 1 · Build the blocks
1A · One block | Add → Mesh → Cube · N panel Location + Dimensions | rename · Apply → Scale
1B · Doorknob | UV Sphere 0.08 m | Metallic 1 · Roughness 0.3
Part 2 · Material (each block)
2A · Colour | Material Preview · New | diff Color → Base Color
2B · Bumps | nor_gl Non-Color → Normal Map → Normal | Strength 1–3
2C · Shine | rough Non-Color → Roughness
Part 3 · Fix the stretch
3A · Cube Projection | Edit Mode · Select All | UV → Cube Projection · Size 2 m · not Smart UV
3B · Pattern size | UV Editing · Scale 2 = half-size tiles
Part 4 · Displacement (Sidewalk, Wall)
4A · Faces to push | Subdivision Surface · Simple | Viewport 5 · Render 6 · work at 3
4B · Height map | disp Non-Color → Displacement → Material Output | Scale 0.02
4C · Really move it | Material Settings | Displacement and Bump
Part 5 · Studio light
5 · Light | Rendered view · studio HDRI | Film → Transparent · Sun 3–5
Part 6 · Render
6 · Render | EEVEE · Render Image | Save As PNG · RGBA
```

## Part 0 · Download the textures

| [Poly Haven](https://polyhaven.com/textures) download | Value |
| --- | --- |
| **Resolution** | **2K** |
| **Format** | JPG if offered |

1. Go to [polyhaven.com/textures](https://polyhaven.com/textures). On the home page, that's **Assets → Textures**.
2. Search for the texture name, open it, and set the resolution to **2K**.
3. Download it, then right-click the ZIP and choose **Extract All**. You now see a folder of image files.

| What each file does | Name contains | Goes into |
| --- | --- | --- |
| Colour | **diff** | Base Color |
| Bumps | **nor_gl** | Normal Map node → Normal |
| Shininess | **rough** | Roughness |
| Height | **disp** | Displacement node → Material Output |

> **Pick the right one:** use **nor_gl**, not nor_dx. Blender uses the GL version. In Blender's file browser, switch to **list view** (the icon with horizontal lines) so the full file names show.

- [ ] A folder of extracted image files for each texture
- [ ] You can see diff, nor_gl and rough in each folder

## Part 1 · Build the blocks

### 1A · One block

| Block | Location X | Location Y | Location Z | Dimensions X | Dimensions Y | Dimensions Z |
| --- | --- | --- | --- | --- | --- | --- |
| **Road** | 0 m | −1.5 m | −0.05 m | 6 m | 3 m | 0.1 m |
| **Sidewalk** | 0 m | 0.75 m | 0.1 m | 6 m | 1.5 m | 0.2 m |
| **Wall** | 0 m | 1.65 m | 1.5 m | 6 m | 0.3 m | 3 m |
| **Door** | 0 m | 1.475 m | 1.2 m | 1 m | 0.05 m | 2 m |

Rotation stays at 0. Scale updates on its own when you type Dimensions.

1. Click the starting cube and choose **Object → Delete**. (Shortcut: X)
2. Choose **Add → Mesh → Cube**. (Shortcut: Shift+A)
3. Choose **View → Sidebar**, click the **Item** tab, and type the **Location** and **Dimensions** from the table. The cube moves and stretches into the block as you type. (Shortcut: N)
4. Double-click the name in the **Outliner** and rename it (Road, Sidewalk, Wall, Door).
5. Choose **Object → Apply → Scale**. (Shortcut: Ctrl+A → Scale)
6. Repeat for each block, following the work order.

**What changed:** the block doesn't move, but in the N panel **Scale** now reads **1, 1, 1** while **Dimensions** stay the same. This tells Blender the stretched size is the block's real size, which the textures use in Part 3.

> **Pick the right one:** **Apply → Scale**, not **All Transforms**. All Transforms also resets Location, and the origin jumps to the centre of the world.

### 1B · Doorknob (optional)

| Doorknob (N panel → Item) | X | Y | Z |
| --- | --- | --- | --- |
| **Location** | 0.38 m | 1.42 m | 1.1 m |
| **Dimensions** | 0.08 m | 0.08 m | 0.08 m |

| Doorknob material (Principled BSDF) | Value |
| --- | --- |
| **Metallic** | **1.0** |
| **Roughness** | **0.3** |

1. Choose **Add → Mesh → UV Sphere**.
2. In the N panel, type the Location and Dimensions from the table. A small ball sits just in front of the door, near its right edge, at handle height.
3. Rename it **Doorknob** in the Outliner, then choose **Object → Apply → Scale**.
4. In **Material Properties**, click **New** and set **Metallic** and **Roughness**. In Material Preview, the ball turns shiny metal and reflects the scene.

- [ ] Each block sits in place: road in front, sidewalk on top of its edge, wall behind, door on the wall
- [ ] Every block's N panel Scale reads 1, 1, 1

## Part 2 · Give each block its material

Work in the **Shading** tab, one block at a time. Add the maps one by one and watch the block change after each.

When it's done, three images feed the Principled BSDF: diff for colour, nor_gl through a Normal Map for bumps, and rough for shine.

| Image Texture node | Color Space |
| --- | --- |
| **diff** | sRGB (default) |
| **nor_gl** | **Non-Color** (Linear Rec.709 is fine for .exr) |
| **rough** | **Non-Color** (Linear Rec.709 is fine for .exr) |

| Normal Map node | Value |
| --- | --- |
| **Space** | Tangent Space |
| **Strength** | **1.0** (try up to 3) |

### 2A · Colour

1. Hover over the 3D view and click the third shading button, **Material Preview**. The blocks show materials and lighting instead of flat grey. (Shortcut: Z → Material Preview)
2. Select a block. In the node area header, click **New** and name the material after the texture (for example **Asphalt**).
3. Drag the **diff** file from the file browser into the node area. Wire its **Color → Base Color**.

The block takes the texture's colour right away. On long blocks it looks **stretched**. That's expected; Part 3 fixes it.

### 2B · Bumps

1. Drag in the **nor_gl** file. Set its **Color Space** to **Non-Color**.
2. Choose **Add → Vector → Normal Map** and place it between the image and the BSDF. (Shortcut: Shift+A, search "Normal Map")
3. Wire the nor_gl **Color** into the Normal Map's **Color** (not Strength), then the Normal Map's **Normal → Normal** on the BSDF. The flat colour gets little shadows and ridges. Orbit the view to watch them catch the light.
4. Try **Strength** at **2** or **3** and watch the bumps get deeper. Past about 3 they look fake.

> **Pick the right one:** the nor_gl image never goes into **Base Color**. If a block looks purple or lilac, that wire is in the wrong place. The **Normal Map** node is under **Add → Vector**, not **Bump** (Bump wants a grey height image, not a purple normal map). Wire into the Normal Map's **Color** socket (yellow), not **Strength** (grey).

**Tip:** drag a wire from a socket and let go in empty space. A search box opens, and the new node arrives already connected.

### 2C · Shine

1. Drag in the **rough** file, set **Color Space** to **Non-Color**, and wire its **Color → Roughness**.

The shiny reflection on the block breaks up into dull and shiny patches, like real worn material.

- [ ] The block shows the texture's colour, bumps that catch the light, and patchy shine
- [ ] Nothing looks purple

## Part 3 · Fix the stretch

Look at the **Wall** and **Road** in Material Preview. The texture is pulled long, because each face of the cube squeezes one copy of the picture across its whole length. Now you can see the problem, so fix it.

### 3A · Cube Projection

| UV → Cube Projection (operator panel) | Value |
| --- | --- |
| **Cube Size** | **2 m** |
| **Correct Aspect** | Ticked (default) |
| **Clip to Bounds** | Unticked (default) |
| **Scale to Bounds** | Unticked (default) |

1. Select the block and choose **Edit Mode** from the mode menu. (Shortcut: Tab)
2. Choose **Select → All**. (Shortcut: A)
3. Choose **UV → Cube Projection**. The stretched texture snaps into a repeating pattern at its real size. (Shortcut: U → Cube Projection)
4. Open the operator panel (bottom-left) and set **Cube Size** to **2 m**. A bigger Cube Size makes the pattern bigger.
5. Return to **Object Mode**. Do this for every block.

> **Pick the right one:** **Cube Projection**, not **Smart UV Project** or **Unwrap**. Those fit each face's picture to the face again, so the stretch comes back. Cube Projection only works properly because you applied **Scale** in Part 1. If a block still looks stretched, check its N panel Scale reads 1, 1, 1.

### 3B · Change the size of the pattern

| UV Editor | Scale | Result |
| --- | --- | --- |
| Select all UVs, then Scale | **2** | Pattern half the size |
| Select all UVs, then Scale | **0.5** | Pattern twice the size |

1. Click the **UV Editing** tab. In the 3D view, choose **Edit Mode** and **Select → All**.
2. Hover over the UV editor on the left, choose **Select → All**, then **UV → Transform → Scale**, type **2** and press **Enter**. (Shortcut: A, then S, 2, Enter)

The UV squares grow in the editor on the left, and the tiles on the block shrink to half size. Bigger UVs mean smaller tiles.

- [ ] Bricks, stones and boards look their normal size, not stretched

## Part 4 · Real depth with displacement

Use this on the **Sidewalk** and **Wall**. Normal maps fake the bumps with shading; displacement really moves the surface. It needs extra faces to move, so you add those first and watch them appear.

### 4A · Give the block faces to push

| Modifier Properties → Subdivision Surface | Value | While working |
| --- | --- | --- |
| **Type** | **Simple** |  |
| **Levels Viewport** (red) | **5** | 3 |
| **Render** (red) | **6** |  |

1. Turn on the wireframe: open the **Overlays** drop-down (two circles, top right of the 3D view) and tick **Wireframe**. Thin lines appear on each block. A plain block has only one face per side.
2. Select the **Sidewalk**. In **Modifier Properties** (blue wrench), choose **Add Modifier → Generate → Subdivision Surface**.
3. Click **Simple** so the block stays square. Set **Levels Viewport** to **5** and **Render** to **6**. Use **3** while you work if Blender slows down.

The wireframe fills with a fine grid of tiny squares. Those are the faces displacement will push.

> **Pick the right one:** **Simple**, not **Catmull-Clark**. Catmull-Clark rounds the block into a blob.

### 4B · Wire the height map

| Displacement node | Value |
| --- | --- |
| **Space** | Object Space |
| **Midlevel** | 0.5 (default) |
| **Scale** | **0.02** (try up to 0.05) |

1. Drag in the **disp** file and set its **Color Space** to **Non-Color**.
2. Choose **Add → Vector → Displacement**. (Shortcut: Shift+A, search "Displacement")
3. Wire the disp **Color → Height**, then the node's **Displacement → Displacement** on the **Material Output** (far right). Set **Scale** to **0.02**.

The shading on the block deepens a little. Blender is only using it as a bump so far.

> **Pick the right one:** plain **Displacement**, not **Vector Displacement**. It goes into **Displacement** on the **Material Output**, not **Normal** on the BSDF. Both sockets are blue-purple. The disp image must be **Non-Color**; on sRGB the tiles come out uneven.

### 4C · Let it really move the surface

| Material Properties → Settings → Surface | Value |
| --- | --- |
| **Displacement** | **Displacement and Bump** |

1. In **Material Properties** (red ball), open **Settings** and set **Displacement** to **Displacement and Bump**.
2. Look along the top edge of the Sidewalk: the tiles now stick up past the outline. That's real depth.
3. Too lumpy or crooked? Lower **Scale** toward **0.02**. Too flat? Raise it toward **0.05**. Watch the edge as you change it.

- [ ] The Sidewalk and Wall edges are lumpy, with tiles and bricks sticking up past the outline

## Part 5 · Light it like a studio

Material Preview uses Blender's own built-in lighting, so a render can look different. Switch the viewport to **Rendered** first, so every lighting change shows up live.

| World Properties → Surface | Value |
| --- | --- |
| **Color** | **Environment Texture** → your studio HDRI |
| **Strength** | **1.0** |

| Render Properties → Film | Value |
| --- | --- |
| **Transparent** | **Ticked** |

| Sun light → Light Properties | Value |
| --- | --- |
| **Strength** | **3–5** |

1. Click the fourth shading button, **Rendered**. The scene goes dark or flat: it's now lit only by your own lights and World. (Shortcut: Z → Rendered)
2. Open [polyhaven.com/hdris/studio](https://polyhaven.com/hdris/studio) and download one HDRI at **2K**. It's a single .exr or .hdr file, so there's nothing to unzip.
3. In **World Properties** (red globe), click the yellow dot beside **Color** → **Environment Texture** → **Open**, and pick the file. The blocks light up evenly, and the studio photo appears behind them.
4. In **Render Properties**, open **Film** and tick **Transparent**. The studio photo behind the blocks disappears, but the light it gives stays.
5. For crisper texture detail, choose **Add → Light → Sun**. Set **Strength** to **3–5**, then drag its **yellow dot** so it skims low across the wall. The bumps and grooves cast small shadows and pop out.

> **Pick the right one:** a **Sun** uses Strength **3–5**, not hundreds of watts like Point and Area lights. At 800 it washes everything out white. Load the HDRI through **World Properties**, not by dragging it into a block's node area, or it becomes a picture on the block.

- [ ] In Rendered view the blocks are evenly lit with a see-through background
- [ ] Low sunlight shows the bumps

## Part 6 · Render

| Render Properties | Value |
| --- | --- |
| **Render Engine** | **EEVEE** |

| Image → Save As | Value |
| --- | --- |
| **File Format** | **PNG** |
| **Color** | **RGBA** |

1. In **Render Properties**, check **Render Engine** reads **EEVEE**. It is fast, and it shows the displacement well here.
2. Choose **Render → Render Image**. A render window opens. The grey-and-white checkerboard background means see-through. (Shortcut: F12)
3. In the render window, choose **Image → Save As**. Set **File Format** to **PNG** and **Color** to **RGBA**, then save.

> **Pick the right one:** **PNG** with **RGBA**, not JPG. A JPG fills the see-through background in with black.

- [ ] A PNG of your street corner with a see-through background

## Troubleshooting and cheat sheet

| Problem | Fix |
| --- | --- |
| The block looks purple or pink | The nor_gl image is in Base Color. Wire the diff image there instead. |
| Bright hot pink | Blender can't find the image file. Open it again. |
| The texture is stretched | Apply Scale, then redo UV → Cube Projection. |
| Tiles look crooked or lumpy | The disp image is on sRGB, or Scale is too high. Use Non-Color and 0.02. |
| No bumps at all | The Normal Map isn't wired into Normal, or the light is straight on. Aim it low. |
| Displacement does nothing | Set Displacement and Bump in Material Settings, and add the Subdivision modifier. |
| Render looks different from the viewport | Switch to Rendered view and add the HDRI from Part 5. |
| Sun washes everything out | Sun Strength is 3–5, not hundreds like area lights. |
| Material named .001 | The name is already used. It still works. |
| Color Space list won't scroll | Type in the list, or set it in the Image Editor's N panel → Image. |

| Keys | What it does |
| --- | --- |
| Shift+A | Add menu (in the node area, search for nodes) |
| N | N panel |
| Ctrl+A → Scale | Apply scale |
| Tab | Edit Mode / Object Mode |
| U → Cube Projection | New UVs that match the real size |
| Ctrl+right-drag | Cut a wire |
| Z | Viewport shading pie (Material Preview, Rendered) |
| F12 | Render |
| Ctrl+Space | Full-screen an area and back |
