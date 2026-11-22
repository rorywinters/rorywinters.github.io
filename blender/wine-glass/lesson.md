---
title: Create a Wine Glass with the Screw Modifier
program: Blender
video: https://youtu.be/lYjcspdTIkM
blurb: Draw half the outline of a glass as a line of points, spin it into 3D with the Screw modifier, then round its edges with bevels, smooth it and give it a colour.
---
You make a wine glass the way you would draw one: as a **2D outline** of one side. The **Screw modifier** spins that outline around the middle to make the 3D glass. Then you round the edges with **bevels**, smooth it, colour it and render it. The same method works for bottles, vases, cups and anything else round. These steps are for Blender 5.2. Every part has a ▶ link that jumps the video to that step.

Do [Create a Snowman](../snowman/) and [Make a Fancy Column](../fancy-column/) first.

| Colour | Meaning |
| --- | --- |
| Green | Safe to change. No real effect on speed. |
| Amber | Raises the load a little. Fine at the values given. |
| Red | Use with caution. Big effect on speed or memory. |

**Screw Steps** and **Bevel Segments** are amber. **Subdivision Surface Levels** (Part 9) is red: work at **Levels Viewport 1**, render at **2**.

### Where things are

| Thing | Where on the screen |
| --- | --- |
| **Toolbar** | Left edge of the 3D Viewport. Drag its right edge to show tool names. |
| **Mode menu** | Top-left of the 3D Viewport (Object Mode / Edit Mode). (Shortcut: Tab) |
| **Vertex / Edge / Face Select** buttons | The three small square buttons beside the Mode menu (Shortcut: 1, 2, 3) |
| **Shading buttons** (Wireframe, Solid, Material Preview, Rendered) | Four circles at the top-right of the 3D Viewport |
| **Toggle X-Ray** button | Just left of the shading circles (Shortcut: Alt+Z) |
| **Navigation gizmo** | Top-right of the 3D Viewport. Click a coloured dot to look along that axis. |
| **Modifier Properties** | Properties editor (bottom-right), the blue wrench icon |
| **Adjust Last Operation** panel | Bottom-left of the 3D Viewport, right after an action |

Hover over the column of icons in the Properties editor (or drag its left edge out) to see their names.

```brief
Part 1 · Set up
1A · Mouse | Hold wheel = spin · roll = zoom | Shift + hold wheel = pan | [▶ 0:00](https://youtu.be/lYjcspdTIkM?t=0)
1B · New file | File → New → General | Object → Delete · Add → Mesh → Cube | [▶ 1:02](https://youtu.be/lYjcspdTIkM?t=62)
Part 2 · Views and selecting
2A · Shading | Wireframe · Solid · X-Ray (Alt+Z) | [▶ 2:46](https://youtu.be/lYjcspdTIkM?t=166)
2B · Edit Mode | Tab · vertices and edges show | [▶ 3:52](https://youtu.be/lYjcspdTIkM?t=232)
Part 3 · One point
3A · Merge | Select → All (A) | Mesh → Merge → At Center (M) | [▶ 4:18](https://youtu.be/lYjcspdTIkM?t=258)
3B · Mistake | Drag select misses the back | Undo · use Select → All | [▶ 5:59](https://youtu.be/lYjcspdTIkM?t=359)
Part 4 · Draw the outline
4A · Front view | View → Viewpoint → Front | [▶ 6:53](https://youtu.be/lYjcspdTIkM?t=413)
4B · Foot | E X out · E Z up · E X back in | [▶ 8:01](https://youtu.be/lYjcspdTIkM?t=481)
4C · Stem | E Z up · click for extra points | [▶ 9:30](https://youtu.be/lYjcspdTIkM?t=570)
4D · Bowl | E out and up · E thickness · E back to centre | [▶ 10:52](https://youtu.be/lYjcspdTIkM?t=652)
Part 5 · Spin it into 3D
5A · Screw | Add Modifier → Generate → Screw | Axis Z · 360° | [▶ 12:19](https://youtu.be/lYjcspdTIkM?t=739)
5B · On and off | Monitor = viewport · camera = render | [▶ 13:59](https://youtu.be/lYjcspdTIkM?t=839)
Part 6 · Fix the shape
6A · Add points | Loop Cut on an edge · click | [▶ 14:41](https://youtu.be/lYjcspdTIkM?t=881)
6B · Move points | Vertex Select · G G slides along line | [▶ 15:44](https://youtu.be/lYjcspdTIkM?t=944)
Part 7 · Apply and bevel the rim
7A · Apply | Object Mode · Screw ▾ → Apply | [▶ 18:36](https://youtu.be/lYjcspdTIkM?t=1116)
7B · Bevel rim | Edge Select · Alt-click ring | Ctrl+B · wheel = segments | [▶ 19:13](https://youtu.be/lYjcspdTIkM?t=1153)
Part 8 · Bevel the rest
8A · Stem and foot | Alt-click · Ctrl+B · mouse far away | [▶ 22:15](https://youtu.be/lYjcspdTIkM?t=1335)
8B · Two at once | Shift + Alt-click two rings · Ctrl+B | [▶ 24:45](https://youtu.be/lYjcspdTIkM?t=1485)
8C · Flat bottom | Ctrl+R near bottom · G G | [▶ 25:45](https://youtu.be/lYjcspdTIkM?t=1545)
Part 9 · Smooth, colour, render
9A · Smooth | Object Mode · Subdivision Surface | Viewport 1 · Render 2 | [▶ 27:04](https://youtu.be/lYjcspdTIkM?t=1624)
9B · Colour | Material → New · Base Color | [▶ 28:37](https://youtu.be/lYjcspdTIkM?t=1717)
9C · Render | Lock Camera to View · frame it · F12 | [▶ 29:35](https://youtu.be/lYjcspdTIkM?t=1775)
Part 10 · Assignment
10 · Your glass | Outline → Screw → bevels | Hand in render + .blend | [▶ 30:32](https://youtu.be/lYjcspdTIkM?t=1832)
```

## Part 1 · Set up

### 1A · Mouse moves

[▶ Watch this part (0:00)](https://youtu.be/lYjcspdTIkM?t=0)

| To do this | Do this |
| --- | --- |
| Spin (orbit) around | Hold the **mouse wheel** down and drag |
| Zoom | Roll the mouse wheel |
| Pan (slide) | Hold **Shift** first, then hold the mouse wheel and drag |
| Select | Left-click |

The video shows the mouse buttons and keys at the bottom of the screen as you go. Blender does the same in the **Status bar** at the very bottom.

### 1B · New file and the menus

[▶ Watch (1:02)](https://youtu.be/lYjcspdTIkM?t=62)

1. Choose **File → New → General**. A cube sits in the middle.
2. Click the cube. Choose **Object → Delete**. It's gone. (Shortcut: X)
3. Choose **Add → Mesh → Cube** to bring it back.
4. Drag the right edge of the **Toolbar** (left side) until the tool names show.
5. Find the blue **wrench** icon in the **Properties editor** (bottom-right). That's **Modifier Properties**, which you use in Part 5.
6. Choose **File → Save As** and name it `wine_glass_yourname.blend`.

- [ ] There is one cube, and the toolbar shows tool names

## Part 2 · Views and selecting

### 2A · Wireframe, Solid and X-Ray

[▶ Watch this part (2:46)](https://youtu.be/lYjcspdTIkM?t=166)

1. Click the first shading circle (top-right of the viewport), **Wireframe**. You see through the cube: it is only 8 corner points (**vertices**) joined by lines.
2. Click the second circle, **Solid**. This is where you normally work.
3. Click **Toggle X-Ray** (just left of the circles). The cube goes see-through, so you can select points at the back too. Click it again to turn it off. (Shortcut: Alt+Z)

### 2B · Edit Mode

[▶ Watch (3:52)](https://youtu.be/lYjcspdTIkM?t=232)

1. Click the cube. Change the **Mode menu** from **Object Mode** to **Edit Mode**. The cube shows its points and lines. (Shortcut: Tab)
2. **Object Mode** works on whole objects. **Edit Mode** changes the shape of one object.

- [ ] I'm in Edit Mode and can see the cube's points

## Part 3 · Squash the cube to one point

You start drawing from a single point, so you turn all 8 corners into one.

### 3A · Merge at Center

[▶ Watch this part (4:18)](https://youtu.be/lYjcspdTIkM?t=258)

1. Choose **Select → All**. The whole cube turns orange. (Shortcut: A) Spin around to check the back is orange too.
2. Choose **Mesh → Merge → At Center**. The cube shrinks to one dot in the middle. (Shortcut: M → At Center)

> **Pick the right one:** **At Center**, not **At Cursor**, **Collapse** or **By Distance**. At Center pulls every selected point to their middle.

### 3B · The common mistake

[▶ Watch (5:59)](https://youtu.be/lYjcspdTIkM?t=359)

1. Choose **Edit → Undo** so the cube is back.
2. Choose **Select → None**, then drag a box over the cube with X-Ray **off**. Spin around: the back points are not orange.
3. Choose **Mesh → Merge → At Center**. You get a strange line, not a dot, because the back points were left out.
4. Undo, choose **Select → All**, and merge **At Center** again.

- [ ] There is one single dot in the middle, nothing else

## Part 4 · Draw the outline

You draw only the **right half** of the glass, from the bottom middle out to the edge, up the stem, and around the bowl. Every **Extrude** pulls a new point out of the last one.

### 4A · Front view

[▶ Watch this part (6:53)](https://youtu.be/lYjcspdTIkM?t=413)

1. Choose **View → Viewpoint → Front**. Now **X** (red) is left-right and **Z** (blue) is up-down. (Shortcut: the **`** key → Front, or Numpad 1)
2. Click the dots on the **Navigation gizmo** to see other views, then go back to Front.

### 4B · The foot

[▶ Watch (8:01)](https://youtu.be/lYjcspdTIkM?t=481)

| Extrude | Direction | Distance |
| --- | --- | --- |
| 1 | X (right) | 1.5 m |
| 2 | Z (up) | 0.15 m |
| 3 | X (back toward the middle) | −1.3 m |

1. Click the **Extrude Region** tool in the toolbar and hover over it to see its shortcut, **E**.
2. Press **E**, then **X**. The new point only moves left-right. Move it to the right and left-click. You have two points joined by a line: the bottom of the foot. (To type it exactly: E, X, 1.5, Enter)
3. Press **E**, then **Z**, move up a little and click. That's the thickness of the foot.
4. Press **E**, then **X**, move back toward the middle, but stop short of it. Click. That's the top of the foot.

### 4C · The stem

[▶ Watch (9:30)](https://youtu.be/lYjcspdTIkM?t=570)

1. Press **E**, then **Z**, move up and **left-click partway**. Each click adds a point you can bend later.
2. Press **E**, **Z** again and go higher to make a tall stem.
3. To see more room above, pan: hold **Shift** and the mouse wheel and drag down.

### 4D · The bowl

[▶ Watch (10:52)](https://youtu.be/lYjcspdTIkM?t=652)

1. Press **E** and move out and up (no X or Z this time) to draw the outside of the bowl, clicking a few points on the way to the rim.
2. At the rim, press **E** and move a tiny bit sideways for the glass thickness. Click.
3. Press **E** and come back down and in to the middle line (where X is 0), roughly following the outside. Click.
4. Press **N** to see the **Sidebar**: the **Item** tab shows the exact position of the selected point. Use it to check the last point is at **X 0**.
5. The **Adjust Last Operation** panel (bottom-left) lets you change the last extrude, but only until you do something else. (F9 can sometimes bring it back.)

- [ ] One line of points draws half a wine glass: foot, stem and bowl, starting and ending at the middle

## Part 5 · Spin it into 3D

### 5A · Screw modifier

[▶ Watch this part (12:19)](https://youtu.be/lYjcspdTIkM?t=739)

| Screw modifier | Value |
| --- | --- |
| Angle | 360° |
| Steps Viewport (amber) | 16 |
| Render (amber) | 16 |
| Axis | Z |

Everything else stays at its defaults.

1. Open **Modifier Properties** (blue wrench).
2. Click **Add Modifier → Generate → Screw**. Straight away the outline spins into a glass.
3. Hold the mouse wheel and drag to spin around it.

> **Pick the right one:** **Screw**, in the **Generate** list. Not **Spin** (a tool in Edit Mode that makes real geometry straight away) and not **Simple Deform → Twist** (in Deform).

### 5B · Turning a modifier off

[▶ Watch (13:59)](https://youtu.be/lYjcspdTIkM?t=839)

1. Click the **monitor** icon on the Screw modifier. The glass disappears in the viewport, leaving the outline. Click it again.
2. The **camera** icon beside it does the same for the **render** only. If something is hidden in the viewport but still shows up in your render, check this icon.

- [ ] I can spin around a 3D wine glass

## Part 6 · Fix the shape

If the outline doesn't have enough points, curves look jagged. You add points, then slide them.

### 6A · Add points

[▶ Watch this part (14:41)](https://youtu.be/lYjcspdTIkM?t=881)

1. Stay in **Edit Mode**. Click the **Loop Cut** tool. (Shortcut: Ctrl+R)
2. Click on a line of the outline. A new point appears on it. Click again for another.
3. Click the **Select Box** tool to get back to normal selecting.

### 6B · Move points

[▶ Watch (15:44)](https://youtu.be/lYjcspdTIkM?t=944)

1. Click **Vertex Select** (first of the three small buttons). (Shortcut: 1)
2. Click a point. Press **G** (grab): it moves anywhere. Press **G** again: now it only **slides along its line**. Move it and click.
3. To fatten the stem, click a stem point, press **G** and move it out.
4. Spin around to check the glass from the side and top (**`** → Top / Front).

> **Pick the right one:** Hold down on the **Select Box** tool to see **Tweak**, **Select Box**, **Select Circle** and **Select Lasso**. Use **Select Box**. If clicking suddenly behaves strangely, check you didn't switch to another one.

- [ ] The rim and bowl look smoother than before

## Part 7 · Apply and bevel the rim

### 7A · Apply the Screw

[▶ Watch this part (18:36)](https://youtu.be/lYjcspdTIkM?t=1116)

1. Change to **Object Mode**. (The **Apply** choice does nothing in Edit Mode.)
2. On the Screw modifier, click the small **▾** arrow and choose **Apply**. The modifier disappears from the list but the glass stays.
3. Switch to **Edit Mode**. Now the whole glass is covered in points and lines: it's real geometry.

**What changed:** the modifier panel is empty, and Edit Mode shows lines all the way around the glass instead of one outline.

### 7B · Bevel the rim

[▶ Watch (19:13)](https://youtu.be/lYjcspdTIkM?t=1153)

| Bevel (Adjust Last Operation) | Value |
| --- | --- |
| Width | about 0.03 m |
| Segments (amber) | 3 to 4 |

Anything that touches a face or hand should have no sharp edges. A **bevel** rounds an edge.

1. Click **Edge Select** (middle small button). (Shortcut: 2)
2. Hold **Alt** and click the top edge of the rim. The whole ring turns orange.
3. If the ring is very close to the next one, press **G** twice and slide it away a little first.
4. Move your mouse well away from the glass. Choose **Edge → Bevel Edges** and move the mouse to widen it. Roll the **mouse wheel** to add segments. Left-click. (Shortcut: Ctrl+B)
5. Do the same for the inside edge of the rim.

- [ ] The rim is round, not sharp

## Part 8 · Bevel the rest

### 8A · Stem and foot

[▶ Watch this part (22:15)](https://youtu.be/lYjcspdTIkM?t=1335)

1. Alt-click a sharp edge where the stem meets the bowl or the foot.
2. Move the mouse away, press **Ctrl+B**, widen, roll for segments, click.
3. Repeat for each sharp ring. If another ring is in the way, Alt-click it, press **G G** and slide it out of the way first.

### 8B · Two rings at once

[▶ Watch (24:45)](https://youtu.be/lYjcspdTIkM?t=1485)

1. Alt-click one ring. Hold **Shift + Alt** and click a second ring. Both are orange.
2. Press **Ctrl+B**. Both bevel together.

### 8C · Flat bottom

[▶ Watch (25:45)](https://youtu.be/lYjcspdTIkM?t=1545)

1. Use **Loop Cut** (Ctrl+R) near the bottom of the foot. Roll the wheel before clicking to add more than one; right-click to keep them evenly spaced.
2. Alt-click a new ring, press **G G** and slide it down near the bottom edge. The bottom looks flatter.

- [ ] No sharp edges are left on the stem, foot or rim
- [ ] The bottom sits flat

## Part 9 · Smooth, colour and render

### 9A · Subdivision Surface

[▶ Watch this part (27:04)](https://youtu.be/lYjcspdTIkM?t=1624)

| Subdivision Surface modifier | Value |
| --- | --- |
| Type | Catmull-Clark |
| Levels Viewport (red) | 1 while working |
| Render (red) | 2 |

1. Change to **Object Mode** and click the glass so it's selected.
2. Click **Add Modifier → Generate → Subdivision Surface**. The glass gets smoother.
3. Set the values. Don't raise **Levels Viewport** above 2: the glass already has lots of points and Blender will slow down.
4. Optional: click **▾ → Apply**. If you do, make any more shape changes **before** this, because there are now far too many points to edit by hand.

> **Pick the right one:** The video tries **Simple** first and nothing changes. **Simple** adds faces but doesn't smooth. Use **Catmull-Clark** (the default).

### 9B · Colour

[▶ Watch (28:37)](https://youtu.be/lYjcspdTIkM?t=1717)

1. Click the **Shading** tab at the top of the window (or use **Material Properties**, the red sphere icon).
2. Click **New**. Click the **Base Color** box and pick a colour. Drag the brightness bar up or down for lighter or darker.
3. Use **Rendered** shading (fourth circle) to see it properly.

Want real see-through glass? Look up the **Transmission** setting on the Principled BSDF; it's beyond this lesson.

### 9C · Render

[▶ Watch (29:35)](https://youtu.be/lYjcspdTIkM?t=1775)

1. Choose **Render → Render Image** to see what the camera sees. (Shortcut: F12) Close the window.
2. To aim the camera: choose **View → Cameras → Active Camera** (Numpad 0). Open the **Sidebar** (N), click the **View** tab, and tick **Lock Camera to View**. Now zoom and spin until the glass fills the frame.
3. Untick **Lock Camera to View** so you don't move the camera by mistake.
4. Press **F12** again. The glass is bigger in the render. Choose **Image → Save As** to save it.
5. Click the **Layout** tab to go back.

- [ ] My render shows the whole glass, coloured and smooth

## Part 10 · Assignment

[▶ Watch the assignment (30:32)](https://youtu.be/lYjcspdTIkM?t=1832)

It doesn't have to be beautiful. Make a wine glass (or another round object) using the same method:

1. Squash a cube to one point and draw half the outline with **Extrude**.
2. Spin it with the **Screw** modifier.
3. Fix the shape with **Loop Cut** and **G G**.
4. Apply it and **bevel** the sharp edges.

- [ ] My object was made from an outline and the Screw modifier
- [ ] It has bevelled edges and a colour
- [ ] I handed in my render and my `.blend` file

## Video chapters

Copy this list into the YouTube description to add chapters to the video.

```
0:00 Mouse controls
1:02 New file, delete and add a cube
2:08 Tool names and the modifier tab
2:46 Wireframe, Solid and X-Ray
3:52 Edit Mode
4:18 Merge at Center
5:59 Common mistake: drag select
6:53 Views and the gizmo
8:01 Extrude the outline
11:10 Sidebar and the last-action panel
12:19 Screw modifier
14:08 Viewport and render toggles
14:41 Add points with Loop Cut
15:44 Select modes and G G
18:36 Apply the modifier
19:13 Bevel the rim
22:15 Bevel the stem and foot
25:45 Flatten the bottom
27:04 Subdivision Surface
28:37 Colour
29:35 Render and Lock Camera to View
30:32 Assignment
```
