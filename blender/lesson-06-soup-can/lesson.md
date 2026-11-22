---
title: UV Map a Soup Can
program: Blender
video: https://youtu.be/za8ghj8zJOY
blurb: Make a tomato soup can from a cylinder: tin ends, a wraparound label lined up in the UV Editor, sunken lids and raised metal rims with inset, extrude and bevel.
---
You make a soup can with a label that wraps around cleanly, with no stretching. You unwrap the side of a cylinder flat in the **UV Editor**, line it up with the label picture, then add sunken lids and raised metal rims. The same method works for bottles, jars and cups. These steps are for Blender 5.2. Every part has a ▶ link that jumps the video to that step.

**You need:** the label picture. Download it from the link in the [video's description](https://youtu.be/za8ghj8zJOY) or from Google Classroom. Put it in a folder called **can** where you can find it. Save your Blender file often.

| Colour | Meaning |
| --- | --- |
| Green | Safe to change. No real effect on speed. |
| Amber | Raises the load a little. Fine at the values given. |
| Red | Use with caution. Big effect on speed or memory. |

**Vertices** (64) and **Bevel Segments** are amber: more make a smoother can but a heavier model. This lesson has no red settings.

### Where things are

| Thing | Where on the screen |
| --- | --- |
| **Adjust Last Operation** panel | Bottom-left of the 3D Viewport, right after you add something |
| **Material Properties** | Properties editor (bottom-right), the red sphere icon |
| **UV Editing** tab | Top of the window, in the row of workspace tabs |
| **UV Editor** | Left half of the UV Editing workspace. Shows the flat (unwrapped) faces over the picture. |
| **Vertex / Edge / Face Select** buttons | Top-left of the 3D Viewport (Edit Mode). (Shortcut: 1, 2, 3) |
| **Toggle X-Ray** | Top-right of the 3D Viewport, left of the shading circles (Shortcut: Alt+Z) |
| **Shading circles** | Top-right of the 3D Viewport. The third is Material Preview, the fourth Rendered. |

```brief
Part 1 · The can and its tin
1A · Cylinder | Add → Mesh → Cylinder | Vertices 64 · Depth 3 m · Radius 1 m | [▶ 0:14](https://youtu.be/za8ghj8zJOY?t=14)
1B · Tin | Material → New → Tin | grey · Metallic 1 · Roughness 0.3 | [▶ 0:42](https://youtu.be/za8ghj8zJOY?t=42)
Part 2 · The label
2A · Label material | UV Editing tab · + slot · New → Label | Base Color → Image Texture → open label | [▶ 1:45](https://youtu.be/za8ghj8zJOY?t=105)
2B · Select the side | Face Select · X-Ray (Alt+Z) | Drag over the side · Assign Label | [▶ 2:41](https://youtu.be/za8ghj8zJOY?t=161)
2C · Fit the label | UV Editor: G Y to line up | S Y to fit the picture | [▶ 3:27](https://youtu.be/za8ghj8zJOY?t=207)
2D · Tin ends | Top face · Tin · Assign | Bottom face · Assign | [▶ 4:28](https://youtu.be/za8ghj8zJOY?t=268)
Part 3 · Sunken lids
3 · Lids | Top face · Inset (I) · Extrude (E) down | Bottom: same, up | [▶ 5:13](https://youtu.be/za8ghj8zJOY?t=313)
Part 4 · Raised rims
4A · Loop cuts | Ctrl+R · two rings near top | Alt-click · G G to slide | [▶ 6:04](https://youtu.be/za8ghj8zJOY?t=364)
4B · Rim band | Face Select · Alt-click ring · Tin · Assign | Alt+E → Extrude Faces Along Normals ≈ 0.02 m | [▶ 6:56](https://youtu.be/za8ghj8zJOY?t=416)
4C · Bevel | Edge Select · Alt-click edge (Shift for two) | Ctrl+B · wheel = segments | [▶ 8:15](https://youtu.be/za8ghj8zJOY?t=495)
4D · Bottom rim | repeat 4A–4C at the bottom | [▶ 9:22](https://youtu.be/za8ghj8zJOY?t=562)
Part 5 · Smooth and render
5A · Smooth | Object Mode · right-click → Shade Smooth | F12 | [▶ 11:15](https://youtu.be/za8ghj8zJOY?t=675)
5B · Lights | Light · Shift+D · move · repeat | F12 again | [▶ 11:47](https://youtu.be/za8ghj8zJOY?t=707)
Part 6 · Your own label
6 · Label size | Around = 2 × π × 1 m ≈ 6.28 m | Height 3 m · about 2 : 1 | [▶ 12:25](https://youtu.be/za8ghj8zJOY?t=745)
```

## Part 1 · The can and its tin

### 1A · Add a cylinder

[▶ Watch this part (0:14)](https://youtu.be/za8ghj8zJOY?t=14)

| Add Cylinder (Adjust Last Operation) | Value |
| --- | --- |
| Vertices (amber) | 64 |
| Radius | 1 m |
| Depth | 3 m |

Everything else stays at its defaults.

1. Choose **File → New → General**. Click the cube and choose **Object → Delete**. (Shortcut: X)
2. Choose **Add → Mesh → Cylinder**. A cylinder appears.
3. Click the **Add Cylinder** panel in the bottom-left corner to open it, and type the values from the table. The cylinder gets taller and smoother as you type.
4. Choose **File → Save As** and name it `soup_can_yourname.blend`.

### 1B · Tin material

[▶ Watch (0:42)](https://youtu.be/za8ghj8zJOY?t=42)

| Material Properties | Field | Value |
| --- | --- | --- |
| **Name** |  | Tin |
| **Surface** | Base Color | light grey |
|  | Metallic | 1 |
|  | Roughness | 0.3 |

1. Open **Material Properties** (red sphere icon) and click **New**. Double-click the name and type **Tin**.
2. Click **Base Color** and pick a grey. Type **1** in **Metallic** and **0.3** in **Roughness**.
3. Click **Material Preview** (third shading circle, top-right of the viewport). The can looks like shiny metal. (Shortcut: Z → Material Preview)

- [ ] A tall metal cylinder, 3 m high

## Part 2 · The label

### 2A · Label material

[▶ Watch this part (1:45)](https://youtu.be/za8ghj8zJOY?t=105)

| Label material | Value |
| --- | --- |
| Name | Label |
| Base Color | Image Texture → your label picture |

1. Click the **UV Editing** tab at the top of the window. On the left is the **UV Editor**; on the right is the can in Edit Mode.
2. In **Material Properties**, click **+** beside the material list to add a second slot. Click **New** and name it **Label**.
3. Click the small **yellow dot** beside **Base Color** and choose **Image Texture**. Click **Open** and find your label in the **can** folder.
4. In the **UV Editor**, pick the label from the image list at the top so you can see it behind the flat faces.

> **Pick the right one:** Click **+** first, then **New**. If you click **New** on the Tin slot, you replace the tin.

### 2B · Select the side

[▶ Watch (2:41)](https://youtu.be/za8ghj8zJOY?t=161)

1. In the 3D Viewport on the right, click **Face Select**. (Shortcut: 3)
2. Click **Toggle X-Ray** so you can see through the can. (Shortcut: Alt+Z)
3. Zoom out and drag a box over the whole **side** of the can, but not the top and bottom. With X-Ray on, the back faces get picked too. (To select a face, the box must cover the small dot in its middle.)
4. With **Label** chosen in the material list, click **Assign**. Turn X-Ray off again.
5. Use **Material Preview** to see it. The label is on the side, but it doesn't line up yet.

### 2C · Fit the label in the UV Editor

[▶ Watch (3:27)](https://youtu.be/za8ghj8zJOY?t=207)

The UV Editor shows the side of the can unrolled flat, as a long strip on top of the picture. Move and stretch that strip until it covers the label exactly.

1. Move your mouse over the **UV Editor**. The strip is already selected (orange).
2. Choose **UV → Transform → Move**, press **Y** and move the strip down until its bottom lines up with the bottom of the label. Click. (Shortcut: G, Y)
3. Choose **UV → Transform → Scale**, press **Y** and stretch the strip until it is as tall as the label. Click. (Shortcut: S, Y)
4. If it's a little off, move it again with **G**, **Y**. Watch the can on the right: the label lines up as you go.

- [ ] The label wraps around the side with no stretching and its words read the right way

### 2D · Tin on the ends

[▶ Watch (4:28)](https://youtu.be/za8ghj8zJOY?t=268)

1. In the 3D Viewport, click the **top face**. Choose **Tin** in the material list and click **Assign**.
2. Spin under the can, click the **bottom face**, and **Assign** Tin.

- [ ] The top and bottom are metal, and only the side has the label

## Part 3 · Sunken lids

[▶ Watch this part (5:13)](https://youtu.be/za8ghj8zJOY?t=313)

1. Click the **top face**. Move your mouse away from the can.
2. Choose **Face → Inset Faces** and move the mouse in a little. Click. A smaller circle appears inside the top. (Shortcut: I)
3. Choose **Mesh → Extrude → Extrude Faces** and move down a little. Click. A blue line shows it going straight down. The lid sinks below the edge. (Shortcut: E)
4. Do the same on the **bottom face**, but extrude up a little.

- [ ] The top and bottom lids sit a little inside the can's edge

## Part 4 · Raised rims

### 4A · Loop cuts near the top

[▶ Watch this part (6:04)](https://youtu.be/za8ghj8zJOY?t=364)

1. Choose the **Loop Cut** tool (or press **Ctrl+R**). Hover over the side of the can. A yellow ring shows where the cut goes.
2. Roll the mouse wheel to make it **2** rings, then left-click and slide them up near the top. Click.
3. If one ring is in the wrong spot, click **Edge Select** (Shortcut: 2), hold **Alt** and click that ring. Press **G** twice: now it slides only along the can. Move it and click.

### 4B · Raise the rim band

[▶ Watch (6:56)](https://youtu.be/za8ghj8zJOY?t=416)

| Extrude Faces Along Normals | Value |
| --- | --- |
| Offset | about 0.02 m |

1. Click **Face Select**. Hold **Alt** and click the band of faces between the two new rings. The whole ring of faces turns orange, but not the rest of the side.
2. Choose **Tin** in the material list and click **Assign**. The band turns metal.
3. Hold **Alt** and press **E** for the extrude menu. Choose **Extrude Faces Along Normals**. Move out just a little and click. The band stands out from the can.

> **Pick the right one:** In the Alt+E menu, choose **Extrude Faces Along Normals**. **Extrude Faces** moves the whole band one way; **Extrude Individual Faces** pushes every face separately and makes a star shape.

### 4C · Round the rim

[▶ Watch (8:15)](https://youtu.be/za8ghj8zJOY?t=495)

| Bevel (Adjust Last Operation) | Value |
| --- | --- |
| Width | small, by eye |
| Segments (amber) | 3 to 4 |

1. Click **Edge Select**. Hold **Alt** and click one edge of the raised band.
2. Move your mouse away from the can. Choose **Edge → Bevel Edges** and move the mouse to widen it. Roll the wheel for more segments. Click. (Shortcut: Ctrl+B)
3. Faster way: Alt-click one edge, then hold **Shift + Alt** and click the other. Bevel both at once.

### 4D · The bottom rim

[▶ Watch (9:22)](https://youtu.be/za8ghj8zJOY?t=562)

1. Spin to the bottom. Add a ring near the bottom with **Ctrl+R** and slide it with **G G**.
2. Alt-click the band of faces, assign **Tin**, and use **Alt+E → Extrude Faces Along Normals**.
3. Bevel its edges with **Ctrl+B**.
4. If you spot a ring of faces that is still label-coloured inside a rim, Alt-click it and **Assign** Tin.

- [ ] Raised metal rims near the top and bottom, with round edges

## Part 5 · Smooth and render

### 5A · Smooth

[▶ Watch this part (11:15)](https://youtu.be/za8ghj8zJOY?t=675)

1. Switch to **Object Mode**. Right-click the can and choose **Shade Smooth**. The flat strips on the side disappear.
2. Choose **Render → Render Image** to see it. (Shortcut: F12)
3. To aim the camera: **View → Cameras → Active Camera**, then in the **Sidebar** (N) **View** tab tick **Lock Camera to View**. Turn and zoom until the label faces you. Untick it.

### 5B · Quick lights

[▶ Watch (11:47)](https://youtu.be/za8ghj8zJOY?t=707)

1. Click the **Light** and choose **Object → Duplicate Objects**. Move it to the dark side and click. (Shortcut: Shift+D) Each copy has the default power of 1000 W.
2. Press **F12** again. The can is brighter.

- [ ] My render shows the can with the label facing the camera, lit on both sides

## Part 6 · Make your own label

[▶ Watch this part (12:25)](https://youtu.be/za8ghj8zJOY?t=745)

To make your own label, get the shape right:

| Measurement | Value |
| --- | --- |
| Around the can (2 × π × radius) | 2 × 3.14 × 1 m ≈ 6.28 m |
| Height of the can | 3 m |
| Label shape (width : height) | about 2 : 1 (e.g. 2048 × 1000 pixels) |

Make it in any drawing program or ask an AI image tool for a soup label of that shape.

- [ ] I handed in my render and my `.blend` file

## Video chapters

Copy this list into the YouTube description to add chapters to the video.

```
0:00 The finished can
0:14 A 64-sided cylinder
0:42 Tin material
1:32 UV Editing workspace
1:45 Label material and picture
2:41 Select the side with X-Ray
3:27 Move and scale the label UVs
4:28 Tin on the top and bottom
5:13 Sunken lids with Inset and Extrude
6:04 Loop cuts for the rim
6:56 Raise the rim band
8:15 Bevel one edge or two at once
9:22 The bottom rim
10:14 Fix a missed ring
11:15 Shade Smooth and render
11:47 Quick lights with Shift+D
12:25 Making your own label
```
