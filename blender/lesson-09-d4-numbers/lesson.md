---
title: Making the d4 (4-Sided Die) with UV-Mapped Numbers
program: Blender
lesson: 9
blurb: Build a d4 from a cone, unwrap it onto a printed number layout, give it a glossy red resin finish with solid white numbers, and round the edges.
---
You build the d4 from a cone, map its numbers on from one image, and give it a glossy red resin finish. The 12 numbers are printed on one flat image instead of being modelled. The image is the d4 unfolded: one big triangle split into four smaller triangles, one per face. You unwrap the d4 so its faces land on those four triangles, and the material reads the numbers from the image.

**How a d4 is numbered**

- Every corner has one number, and that number appears near that corner on all three faces that meet there.
- The number at the top point is the roll.
- Each number's top points toward its corner.

On this d4, the tip is 4 and the three bottom corners are 1, 2 and 3.

**Images you need** (2048 × 2048, shared by your teacher in Google Classroom):

- `d4_numbers.png`: white numbers on a see-through background. This one goes in the material.
- `d4_numbers_guide.png`: the same layout with red face outlines. Use it only in the UV Editor to line things up.

| Colour | Meaning |
| --- | --- |
| Green | Safe to change. No real effect on playback or render time. |
| Amber | Raises the load a little. Fine at the values given. |
| Red | Use with caution. Big effect on speed or memory. |

**Bevel Segments** (3) is amber. **EEVEE Raytracing** is amber: it makes the resin look right but slows the viewport.

```brief
Part 1 · Build the d4
1A · Cone | Add → Mesh → Cone | Verts 3 · R1 1 m · R2 0 · Depth 1.414 m
1B · Origin (optional) | Origin to Geometry · Median | Location Z 0.354 m
Part 2 · Unwrap
2A · Seams | UV Editing · Edge Select | 3 tip edges → Mark Seam (red)
2B · Unwrap | Select All · UV → Unwrap
2C · Line up | Open d4_numbers_guide.png | rotate · scale · move onto red lines
2D · Exact fit | Sync Selection off | N → Image → UV Vertex X, Y
Part 3 · Resin and numbers
3A · Resin | DiceResin · Roughness 0.05 · Transmission 0.9 | Coat 0.5
3B · Numbers | Image Texture d4_numbers.png · Clip | Mix Color → Base Color
3C · Solid numbers | Map Range 0.9 → 0 | → Transmission Weight
Part 4 · Round and check
4A · Bevel modifier | Amount 0.05 m · Segments 3 | Harden Normals · Shade Smooth
4B · Check | each corner up · same number on 3 faces
```

## Part 1 · Build the d4

### 1A · The cone

| Add Cone (operator panel) | Value |
| --- | --- |
| Vertices | 3 |
| Radius 1 | 1 m |
| Radius 2 | 0 m |
| Depth | 1.414 m |

These numbers give a true tetrahedron with four equal faces.

1. Click the default cube and choose **Object → Delete**. (Shortcut: X)
2. Choose **Add → Mesh → Cone**. (Shortcut: Shift+A)
3. Click **Add Cone** in the bottom-left corner and type the values. The cone becomes a three-sided pyramid as you type.

Don't bevel it yet. The Bevel modifier goes on last, after the UV map.

### 1B · Set the origin and place it on the floor (optional)

| Step | Field | Value |
| --- | --- | --- |
| **Set Origin** (operator panel) | Center | Median Center |
| **N panel → Item** | Location X, Y | 0 m |
|  | Location Z | 0.354 m |

This is good practice rather than necessary. It helps when you rotate the die or animate a roll, since it then spins around its true centre, and when you want it resting on the floor for a render.

1. Right-click the d4 and choose **Set Origin → Origin to Geometry**. The orange origin dot moves up into the middle of the die.
2. In the operator panel, set **Center** to **Median Center**.
3. Choose **View → Sidebar**, open the **Item** tab, and type the Location. The bottom face now sits on the grid. (Shortcut: N)

- [ ] A three-sided pyramid with four equal faces
- [ ] (Optional) The bottom face sits on the grid

## Part 2 · Unwrap the d4

### 2A · Mark the seams

Three seams, one up each side edge to the tip, let the d4 unfold into exactly the shape of the image.

1. Click the **UV Editing** tab at the top of the screen. The UV Editor is on the left, and the 3D viewport on the right is in **Edit Mode**.
2. In the 3D viewport, click **Edge Select** in the header. (Shortcut: 2)
3. Click one of the three edges that run from the tip down to a bottom corner. **Shift**-click the other two. Leave the three bottom edges unselected.
4. Choose **Edge → Mark Seam**. The three edges turn red.

### 2B · Unwrap

1. Choose **Select → All**. (Shortcut: A)
2. Choose **UV → Unwrap**. (Shortcut: U → Unwrap)

In the UV Editor you see one big triangle made of four smaller ones: the d4 unfolded.

Unwrap before you add any bevel. A bevelled mesh has extra lines along each edge and won't unwrap cleanly.

> **Pick the right one:** **UV → Unwrap**, not **Smart UV Project**. Smart UV Project ignores your seams and cuts the d4 into four separate triangles.

### 2C · Line the UVs up with the guide

1. In the UV Editor header, click **Open** and choose `d4_numbers_guide.png`. The guide with its red outlines appears behind the UVs.
2. Hover over the UV Editor and choose **Select → All**.
3. Choose **UV → Transform → Rotate** until the big triangle points up and the centre triangle points down, like the guide. If it points left, type **−90**. Hold **Ctrl** to rotate in 5° steps. (Shortcut: R)
4. Use **UV → Transform → Scale** and **Move** until the outer edges sit on the red lines. (Shortcut: S and G)

### 2D · Exact fit (optional)

| Point | What it is | U, V (0–1) | Pixels (X, Y) |
| --- | --- | --- | --- |
| Bottom-left corner | Tip (4) | 0.050, 0.110 | 102, 226 |
| Bottom-right corner | Tip (4) | 0.950, 0.110 | 1946, 226 |
| Top corner | Tip (4) | 0.500, 0.890 | 1024, 1822 |
| Bottom middle | Corner 1 | 0.500, 0.110 | 1024, 226 |
| Right middle | Corner 2 | 0.725, 0.500 | 1485, 1024 |
| Left middle | Corner 3 | 0.275, 0.500 | 563, 1024 |

1. Turn off **Sync Selection** (the two-arrow button at the top left of the UV Editor), then click a single UV point. With it on, the three tip corners move together.
2. Choose **View → Sidebar** in the UV Editor and open the **Image** tab. (Shortcut: N)
3. Type the values from the table into **UV Vertex X** and **Y**. The point jumps into place. If the fields show numbers bigger than 1, they're in pixels; use the Pixels column.
4. Repeat for all six points.

You only need the guide image for this part. The material uses its own copy of the numbers.

- [ ] Three red seams run from the tip down the side edges
- [ ] The UVs sit on the red outlines of the guide image

## Part 3 · Resin and numbers

### 3A · Resin colour

| Principled BSDF | Value |
| --- | --- |
| Base Color | Red, FF0000 (or any strong colour) |
| Metallic | 0 |
| Roughness | 0.05 |
| IOR | 1.5 |
| Alpha | 1 (leave it here) |
| Transmission → Weight | 0.9 |
| Coat → Weight | 0.5 |
| Coat → Roughness | 0.02 |

| If you render in EEVEE | Field | Value |
| --- | --- | --- |
| **Render Properties** | Raytracing (amber) | ticked |
| **Material → Settings → Surface** | Raytraced Transmission | ticked |
|  | Thickness | Sphere |

1. Click the **Shading** tab, select the d4, and in the node area header click **New**. Rename the material **DiceResin**.
2. Type the values into the **Principled BSDF** node. With the viewport on **Material Preview**, the die turns glossy, see-through red.
3. If you render in EEVEE, set the second table too. Cycles needs neither and looks better on clear resin.

The see-through look comes from **Transmission**, not **Alpha**. Leave **Thin Wall** unticked.

### 3B · The numbers

| Image Texture | Value |
| --- | --- |
| Image | `d4_numbers.png` |
| Extension | **Clip** |
| Vector input | leave empty (it uses the UV map) |

| Mix Color | Value |
| --- | --- |
| Blend mode | Mix |
| A | your die colour |

Connect Image Texture **Color → B** and **Alpha → Factor**. Connect Mix Color **Result → Base Color** on the Principled BSDF.

1. Choose **Add → Texture → Image Texture**, click **Open** and choose `d4_numbers.png`. Set **Extension** to **Clip**.
2. Choose **Add → Color → Mix Color** and wire it as shown under the table. Set the **A** swatch to your die colour. White numbers appear on the faces.

> **Pick the right one:** **Add → Color → Mix Color**, not **Add → Shader → Mix Shader**. Mix Color has yellow A and B sockets and a blend mode drop-down; Mix Shader has green Shader sockets.

### 3C · Make the numbers solid

| Map Range | Value |
| --- | --- |
| From Min | 0 |
| From Max | 1 |
| To Min | 0.9 |
| To Max | 0 |

Connect Image Texture **Alpha → Value**. Connect Map Range **Result → Transmission Weight** on the Principled BSDF.

1. Choose **Add → Converter → Map Range**, type the values, and wire it as shown.

The resin stays at 0.9 transmission everywhere except under the numbers, where it drops to 0, so the white is solid. All the other glossy settings stay the same.

> **Pick the right one:** **Map Range**, not **Math** or **Clamp**. Map Range has From Min, From Max, To Min and To Max fields.

- [ ] The die is glossy see-through red
- [ ] Solid white numbers sit near each corner

## Part 4 · Round the edges and check

### 4A · Bevel modifier

| Modifier Properties → Bevel | Value |
| --- | --- |
| Amount | 0.05 m |
| Segments (amber) | 3 |
| Shading → Harden Normals | ticked |

Add the bevel last, as a modifier, so the UV map stays clean.

1. Return to **Object Mode** with the d4 selected. (Shortcut: Tab)
2. Open **Modifier Properties** (blue wrench) and choose **Add Modifier → Generate → Bevel**. The sharp edges round off.
3. Type the values from the table.
4. Right-click the d4 and choose **Shade Smooth**. The rounded edges go smooth.

Don't click **Apply**. The numbers follow the rounded edges on their own.

### 4B · Check the numbers

1. Orbit around the die in **Material Preview**. Point each corner up in turn: the three faces you can see should all show the same number at the top.

- [ ] The edges are rounded and smooth
- [ ] With any corner up, all three visible faces show the same number at the top

## Troubleshooting

| What you see | Fix |
| --- | --- |
| Numbers read backwards | Normals point inward. In Edit Mode: Mesh → Normals → Recalculate Outside, then unwrap again. |
| Corners don't match (a 2 next to a 3 at the same corner) | The UV shape is rotated wrong. Line the centre triangle up with the guide again. |
| Numbers repeat or streak near the edges | Image Texture Extension isn't set to Clip. |
| Numbers look faint or glassy | Check the Map Range wiring into Transmission Weight. |
| Bevel cuts into the numbers | Lower the Bevel Amount to about 0.03 m. |
| The whole die turns white or grey | The material's Image Texture has the guide image loaded. Switch it to `d4_numbers.png`. |
| The die is black and the node area is empty | The material's nodes were deleted. Add a Material Output and a Principled BSDF, connect BSDF to Surface, and type the resin settings again. |
