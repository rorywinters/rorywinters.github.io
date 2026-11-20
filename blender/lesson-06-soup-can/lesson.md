---
title: Make a Soup Can
program: Blender
lesson: 6
blurb: Model a soup can with tin ends, a wraparound label and raised metal rims, using inset, extrude, bevel and UV editing.
---
You will model a soup can with a wraparound label, tin ends and raised metal rims. These steps are for Blender 5.2.

**You need:** the label image, `winters_tomato_soup_label.png`, shared by your teacher in Google Classroom. Save it somewhere you can find before you start, and save your Blender file often.

| Colour | Meaning |
| --- | --- |
| Green | Safe to change. No real effect on playback or render time. |
| Amber | Raises the load a little. Fine at the values given. |
| Red | Use with caution. Big effect on speed or memory. |

**Vertices** (64) is amber: more vertices make a smoother can but a heavier mesh. This lesson has no red settings.

```brief
Part 1 · Shape the can
1A · Cylinder | Add → Mesh → Cylinder | 64 verts · Radius 1 m · Depth 3 m
1B · Sunken ends | Edit Mode · Face Select · top face | Inset 0.05 · Extrude −0.1 · same for bottom
1C · Smooth | Object Mode | Shade Auto Smooth
Part 2 · Tin material
2 · Tin | New → Tin | light grey · Metallic 1 · Roughness 0.3
Part 3 · The label
3A · Select the side | UV Editing · Face Select | Alt-click the side band
3B · Label material | + slot → New → Label · Assign | Base Color → Image Texture
3C · Fit the label | UV editor: Scale Y 2 | Move Y down to cover image
Part 4 · Raised rims
4A · Bevel | Edge Select · Alt-click top rim | Bevel 0.03 m · 3 segments
4B · Push out | Assign Tin | Extrude Faces Along Normals 0.02 m
4C · Bottom rim | repeat 4A–4B
```

## Part 1 · Shape the can

### 1A · Add the cylinder

| Add Cylinder (operator panel) | Value |
| --- | --- |
| Vertices (amber) | 64 |
| Radius | 1 m |
| Depth | 3 m |

Everything else stays at its defaults.

1. If the default cube is in your scene, click it and choose **Object → Delete**. (Shortcut: X)
2. Choose **Add → Mesh → Cylinder**. (Shortcut: Shift+A)
3. Click **Add Cylinder** in the bottom-left corner and type the values. The cylinder gets taller and smoother as you type.

> **Pick the right one:** **Add → Mesh → Cylinder**, not **Add → Mesh → Circle**. A circle is flat and has no Depth field.

### 1B · Sunken ends

| Operator panel | Field | Value |
| --- | --- | --- |
| **Inset Faces** | Thickness | 0.05 m |
| **Extrude Region and Move** | Move Z | −0.1 m (top) · 0.1 m (bottom) |

1. Choose **Edit Mode** from the mode menu. (Shortcut: Tab)
2. Click the **Face Select** button in the header. (Shortcut: 3)
3. Click the top face. Choose **Face → Inset Faces**, then type **0.05** and press **Enter**. A smaller circle appears inside the top. (Shortcut: I)
4. Choose **Mesh → Extrude → Extrude Faces**, then type **−0.1** and press **Enter**. The inner circle sinks into the can. (Shortcut: E)
5. Orbit the view to see the bottom face and repeat steps 3 and 4, typing **0.1** so the bottom pushes up into the can.

If the inset or extrude goes the wrong way, open the operator panel in the bottom-left corner and fix the value there.

### 1C · Smooth shading

1. Return to **Object Mode**. (Shortcut: Tab)
2. Right-click the can and choose **Shade Auto Smooth**. The faceted sides go smooth, and the edges of the ends stay sharp.

- [ ] The can looks smooth, with a small lip at the top and bottom

## Part 2 · Add the tin material

| Principled BSDF | Value |
| --- | --- |
| Base Color | light grey |
| Metallic | 1.0 |
| Roughness | 0.3 |

1. Click the third shading button, **Material Preview**, at the top right of the viewport. (Shortcut: Z → Material Preview)
2. With the can selected, open **Material Properties** (red ball) and click **New**. Double-click the name and rename it `Tin`.
3. Set the values from the table. The whole can turns shiny metal and reflects the scene.

- [ ] The whole can looks like metal in Material Preview

## Part 3 · Add the label

### 3A · Select the side

1. Click the **UV Editing** tab at the top of the screen. The left panel shows the UV map, and the right panel shows the can in Edit Mode.
2. In the right panel, click **Face Select** and choose **Select → None**. (Shortcut: 3, then Alt+A)
3. Hold **Alt** and click near the left or right edge of a tall side face. The whole side band highlights, but not the top or bottom.

### 3B · Label material

| Principled BSDF | Value |
| --- | --- |
| Base Color | **Image Texture** → `winters_tomato_soup_label.png` |
| Metallic | 0 |
| Roughness | 0.4 |

1. In **Material Properties**, click **+** beside the material list, then **New**. Rename it `Label` and click **Assign**. The side band turns plain white; the ends stay tin.
2. Click the yellow dot beside **Base Color**, choose **Image Texture**, then click **Open** and select the label image. The label appears on the can, squashed.
3. Set **Metallic** and **Roughness** from the table.

> **Pick the right one:** click **+** (add a material slot) before **New**. If you click **New** without adding a slot, you replace Tin and the whole can becomes the label.

### 3C · Fit the label to the image

| UV editor | Axis | Value |
| --- | --- | --- |
| UV → Transform → Scale | Y | 2 |
| UV → Transform → Move | Y | down until the strip covers the whole image |

1. In the left panel header, click the image drop-down and choose `winters_tomato_soup_label.png`. The side of the can shows over the image as a long strip.
2. Hover over the left panel and choose **UV → Transform → Scale**, press **Y**, type **2** and press **Enter**. The strip gets taller. (Shortcut: S, Y, 2, Enter)
3. Choose **UV → Transform → Move**, press **Y**, and move the mouse down until the strip covers the whole image. Click to confirm. The label on the can now shows in full. (Shortcut: G, Y)
4. In the right panel, return to **Object Mode** and switch to **Material Preview**.
5. Choose **Object → Transform → Rotate**, press **Z**, and move the mouse until the front of the label faces you. Click to confirm. (Shortcut: R, Z)

The two circles in the UV map can stay where they are, because they use the `Tin` material.

- [ ] You can read the full label
- [ ] The green bands show at the top and bottom of the label

## Part 4 · Bevel and extrude the rims

A real can has a raised metal seam at each end. You make it with a bevel, then push it outward.

### 4A · Bevel the top rim

| Bevel (operator panel) | Value |
| --- | --- |
| Width | 0.03 m |
| Segments | 3 |

1. Click the **Layout** tab. Choose **Edit Mode**, click **Edge Select**, and choose **Select → None**. (Shortcut: Tab, 2, Alt+A)
2. Hold **Alt** and click the outer top edge of the can. The whole ring highlights.
3. Choose **Edge → Bevel Edges** and move the mouse a little. Click, then type the values in the operator panel. A small rounded band appears along the rim. (Shortcut: Ctrl+B, scroll for segments)

### 4B · Push the rim out

| Operator panel | Field | Value |
| --- | --- | --- |
| **Extrude Faces Along Normals** | Offset | 0.02 m |

1. Keep the new bevel faces selected. In **Material Properties**, click `Tin`, then **Assign**. The band turns metal.
2. Choose **Mesh → Extrude → Extrude Faces Along Normals**, move the mouse slightly, and click. Type the **Offset** in the operator panel. The rim pushes outward. (Shortcut: Alt+E → Extrude Faces Along Normals)

> **Pick the right one:** **Extrude Faces Along Normals**, not **Extrude Faces**. Plain Extrude moves the whole ring one way, so the rim slides up or sideways instead of puffing out evenly.

### 4C · Bottom rim

1. Repeat 4A and 4B on the outer bottom edge.
2. Return to **Object Mode**.

- [ ] Both rims are rounded, raised and made of tin
- [ ] The rims stay small. If one looks too thick, lower the values in the operator panel

## Troubleshooting

| Problem | Fix |
| --- | --- |
| The green bands are missing | The strip doesn't cover the image. Repeat 3C. |
| The label looks mirrored | Select the side band, hover over the UV panel, choose UV → Transform → Scale, press X, type −1 and press Enter. |
| The label is sideways | Select the side band, hover over the UV panel, choose UV → Transform → Rotate, type 90 and press Enter. |
| The label is also on the top | Select the top face in Edit Mode, click `Tin`, then Assign. |
| The ring won't select all the way around | Check you're in Edge Select, then hold Alt and click right on the ring. |
| The top looks flat white | Open `Tin` and check Metallic is 1.0. |
| The whole can became the label | You clicked New without +. Choose Edit → Undo, then add a slot with + first. |
