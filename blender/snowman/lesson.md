---
title: Create a Snowman: Moving Around in Blender
program: Blender
video: https://youtu.be/pK8io3T77UA
blurb: Your first Blender lesson. Learn to zoom, spin and pan the view, add, delete, move and scale objects, then stack spheres into a snowman with a carrot nose.
---
This is the first lesson in Blender. The real goal is learning to **move around** your scene and use the basic tools. The snowman is how you practise. These steps are for Blender 5.2. Every part has a ▶ link that jumps the video to that step.

**Save often:** choose **File → Save As** once and name it `snowman_yourname.blend`, then **File → Save** every few minutes. (Shortcut: Ctrl+S)

| Colour | Meaning |
| --- | --- |
| Green | Safe to change. No real effect on speed. |
| Amber | Raises the load a little. Fine at the values given. |
| Red | Use with caution. Big effect on speed or memory. |

**Undo Steps** (Part 3) is amber: more undo steps use a little more memory. This lesson has no red settings.

### Where things are

| Thing | Where on the screen |
| --- | --- |
| **3D Viewport** | The big middle area with the grid and the cube |
| **Toolbar** | Left edge of the 3D Viewport (Select Box, Cursor, Move, Rotate, Scale, Transform…) |
| **Mode menu** (Object Mode / Edit Mode) | Top-left corner of the 3D Viewport |
| **Navigation gizmo** (red X, green Y, blue Z circles) | Top-right corner of the 3D Viewport |
| **Sidebar** (N panel) | Right edge of the 3D Viewport. Open it with **View → Sidebar**. (Shortcut: N) |
| **Adjust Last Operation** panel | Bottom-left corner of the 3D Viewport, right after you add or change something |
| **Outliner** | Top-right of the window. Lists every object. |
| **Properties editor** | Bottom-right of the window, under the Outliner |
| **Status bar** | The very bottom line of the window. Shows the keys you are pressing. |

If a panel goes missing, open it again from the **View** menu at the top of the 3D Viewport.

```brief
Part 1 · Find your way around
1A · Look around | Wheel = zoom · hold wheel + drag = spin | Click cube = select · click empty = deselect | [▶ 0:14](https://youtu.be/pK8io3T77UA?t=14)
1B · Modes and names | Tab = Edit Mode ↔ Object Mode | Drag toolbar edge to show names | View → Frame All (Home) | [▶ 0:50](https://youtu.be/pK8io3T77UA?t=50)
Part 2 · Move and undo
2A · Move tool | Red X · green Y · blue Z arrows | Squares move in two directions | [▶ 2:17](https://youtu.be/pK8io3T77UA?t=137)
2B · Undo | Edit → Undo (Ctrl+Z) | Edit → Redo (Ctrl+Shift+Z) | [▶ 1:55](https://youtu.be/pK8io3T77UA?t=115)
Part 3 · Preferences
3 · Preferences | Edit → Preferences | System → Undo Steps 100 | Interface → Resolution Scale 1.25 | [▶ 3:15](https://youtu.be/pK8io3T77UA?t=195)
Part 4 · Add, delete and scale
4A · Delete and add | Object → Delete (X) | Add → Mesh → UV Sphere | [▶ 4:18](https://youtu.be/pK8io3T77UA?t=258)
4B · Scale | Scale tool · white circle = all · coloured = one way | Adjust Last Operation panel | [▶ 4:48](https://youtu.be/pK8io3T77UA?t=288)
4C · Keyboard scale | S · move mouse · click | Right-click or Esc = cancel | [▶ 6:22](https://youtu.be/pK8io3T77UA?t=382)
Part 5 · Build the body
5A · Bottom ball | Location Z 1.2 · Scale 1.2 | [▶ 7:06](https://youtu.be/pK8io3T77UA?t=426)
5B · Middle ball | Object → Duplicate Objects (Shift+D) · Z · click | Location Z 3.05 · Scale 0.85 | [▶ 7:27](https://youtu.be/pK8io3T77UA?t=447)
5C · Front view | View → Viewpoint → Front (` key) | [▶ 8:24](https://youtu.be/pK8io3T77UA?t=504)
Part 6 · The head
6 · Head | Duplicate · Z | Location Z 4.35 · Scale 0.6 | [▶ 8:50](https://youtu.be/pK8io3T77UA?t=530)
Part 7 · Carrot nose
7A · Cone | Add → Mesh → Cone | Scale 0.1 · 0.1 · 0.25 | [▶ 9:13](https://youtu.be/pK8io3T77UA?t=553)
7B · Point it | Rotation X 90° · Location Y −0.75 · Z 4.35 | Transform tool does move, rotate, scale | [▶ 10:13](https://youtu.be/pK8io3T77UA?t=613)
Part 8 · Pan and fine-tune
8 · Fine-tune | Shift + hold wheel = pan | Mouse far from object = finer S | Check Front, Right, Top | [▶ 11:39](https://youtu.be/pK8io3T77UA?t=699)
Part 9 · Finish your snowman
9 · Assignment | Eyes, buttons · Cylinder hat · Torus? | Save with your name | [▶ 13:47](https://youtu.be/pK8io3T77UA?t=827)
```

## Part 1 · Find your way around

[▶ Watch this part (0:00)](https://youtu.be/pK8io3T77UA?t=0)

### 1A · Look around

[▶ Watch (0:14)](https://youtu.be/pK8io3T77UA?t=14)

1. Open Blender and click **General** in the splash screen. A grey cube sits in the middle of the **3D Viewport** (the big middle area).
2. Put your mouse over the 3D Viewport and roll the **mouse wheel** forward. The cube gets bigger (you zoom in). Roll it backward and the cube gets smaller.
3. Hold the **mouse wheel down** and drag. The view spins around the cube.
4. Click the cube. An orange outline appears: it is **selected**. Click an empty spot on the grid. The outline goes away.

- [ ] I can zoom in and out with the wheel
- [ ] I can spin the view by holding the wheel and dragging
- [ ] The cube turns orange when I click it and goes back when I click away

### 1B · Modes and tool names

[▶ Watch (0:50)](https://youtu.be/pK8io3T77UA?t=50)

1. Find the **Mode menu** in the top-left corner of the 3D Viewport. It says **Object Mode**.
2. Click it and choose **Edit Mode**. Dots and lines appear on the cube, and the toolbar shows different tools. Choose **Object Mode** again. (Shortcut: Tab switches between the two)
3. Stay in **Object Mode** for this lesson.
4. Find the **Toolbar** on the left edge of the 3D Viewport. Move your mouse to its right edge until the pointer turns into a double arrow, then drag right. The tool names appear beside the icons: **Select Box**, **Cursor**, **Move**, **Rotate**, **Scale**, **Transform**…
5. If you lose the cube, choose **View → Frame All**. The view jumps back so you can see everything. (Shortcut: Home)

> **Pick the right one:** The **Cursor** (the red-and-white ring in the middle) is not the mouse pointer. It marks where new objects appear. If you click with the **Cursor** tool by mistake, the ring jumps. Choose **Object → Snap → Cursor to World Origin** to put it back in the middle. (Shortcut: Shift+C)

- [ ] The Mode menu says Object Mode
- [ ] The toolbar shows the tool names, not just icons

## Part 2 · Move and undo

[▶ Watch this part (1:23)](https://youtu.be/pK8io3T77UA?t=83)

### 2A · The Move tool

[▶ Watch (2:17)](https://youtu.be/pK8io3T77UA?t=137)

The colours always mean the same thing in Blender. Look at the **Navigation gizmo** in the top-right corner:

| Colour | Axis | Direction (Front view) |
| --- | --- | --- |
| Red | X | Left and right |
| Green | Y | Toward you and away |
| Blue | Z | Up and down |

1. Click the cube, then click the **Move** tool in the toolbar. Red, green and blue arrows appear on the cube.
2. Drag the **green** arrow. The cube slides only along Y.
3. Drag one of the small coloured **squares** between two arrows. The cube moves in two directions at once, but not the third.
4. Hover over a tool in the toolbar and wait. A tip shows its name and shortcut.

- [ ] I moved the cube along one arrow, and then with a square

### 2B · Undo and redo

[▶ Watch (1:55)](https://youtu.be/pK8io3T77UA?t=115)

1. Choose **Edit → Undo** a few times. The cube goes back to where it started. (Shortcut: Ctrl+Z)
2. Choose **Edit → Redo** to bring a step back. (Shortcut: Ctrl+Shift+Z)
3. Look at the **Status bar** at the very bottom of the window. It shows the keys you press.

- [ ] The cube is back in the middle of the grid

## Part 3 · Preferences

[▶ Watch this part (3:15)](https://youtu.be/pK8io3T77UA?t=195)

| Preferences | Field | Value |
| --- | --- | --- |
| **System → Memory & Limits** | Undo Steps (amber) | 100 |
| **Interface → Display** | Resolution Scale | 1.25 |

Everything else stays at its defaults.

1. Choose **Edit → Preferences**. A Preferences window opens.
2. Click **System** in the list on the left. Under **Memory & Limits**, set **Undo Steps** to **100**. You can now undo further back. (The most is 256.)
3. Click **Interface**. Under **Display**, set **Resolution Scale** to **1.25** if the text is hard to read. All the text and buttons get bigger straight away.
4. Close the Preferences window. Blender saves these settings on its own.

- [ ] The buttons and text are a size I can read easily

## Part 4 · Add, delete and scale

### 4A · Delete the cube, add a sphere

[▶ Watch this part (4:18)](https://youtu.be/pK8io3T77UA?t=258)

1. Click the cube and choose **Object → Delete**. The cube disappears. (Shortcut: X, then Delete)
2. Choose **Add → Mesh → Cube**. It comes back. Delete it again.
3. Choose **Add → Mesh → UV Sphere**. A ball appears in the middle. (Shortcut: Shift+A)

> **Pick the right one:** Choose **UV Sphere**, not **Ico Sphere**. The UV Sphere has rings of faces like lines of latitude on a globe; the Ico Sphere is made of triangles.

- [ ] There is one sphere in the middle and no cube

### 4B · Scale with the tool

[▶ Watch (4:48)](https://youtu.be/pK8io3T77UA?t=288)

1. Click the sphere, then click the **Scale** tool. A white circle and red, green and blue handles appear.
2. Drag the **white circle**. The whole sphere grows or shrinks.
3. Drag the **green** handle. The sphere stretches into an egg along Y. Try the **red** (X) and **blue** (Z) handles too.
4. Look in the bottom-left corner for the small **Resize** panel (the **Adjust Last Operation** panel). Click it open with the **▶** arrow. It shows exactly how much you scaled.
5. Undo until the sphere is round again. (Shortcut: Ctrl+Z)

- [ ] I made an egg shape, then undid it back to a round sphere

### 4C · Scale with the keyboard

[▶ Watch (6:22)](https://youtu.be/pK8io3T77UA?t=382)

1. Move your mouse well away from the sphere.
2. Press **S** and move the mouse. The sphere scales. Left-click to keep it.
3. Press **S** again and then **right-click** (or **Esc**). Nothing changes: right-click cancels.
4. Undo back to the normal size.

Starting with your mouse **far** from the object makes scaling slower and easier to control.

- [ ] I can scale with S and cancel with right-click

## Part 5 · Build the body

### 5A · The bottom ball

[▶ Watch this part (7:06)](https://youtu.be/pK8io3T77UA?t=426)

The video does this part by eye. Use these values if you want an exact snowman.

| Setting | Axis | Value |
| --- | --- | --- |
| **Location** | X | 0 m |
|  | Y | 0 m |
|  | Z | 1.2 m |
| **Scale** | X | 1.2 |
|  | Y | 1.2 |
|  | Z | 1.2 |

1. Choose **View → Sidebar** to open the **Sidebar** (right edge of the 3D Viewport). Click its **Item** tab. (Shortcut: N)
2. With the sphere selected, type the values into **Location** and **Scale**. The ball grows and sits on the grid.

- [ ] One big ball sits on top of the grid

### 5B · The middle ball

[▶ Watch (7:27)](https://youtu.be/pK8io3T77UA?t=447)

| Setting | Axis | Value |
| --- | --- | --- |
| **Location** | Z | 3.05 m |
| **Scale** | X | 0.85 |
|  | Y | 0.85 |
|  | Z | 0.85 |

1. Choose **Object → Duplicate Objects**. A copy appears and follows your mouse. (Shortcut: Shift+D)
2. Press **Z**. Now the copy only moves up and down. Move it up and left-click to drop it.
3. Type the values above into the Sidebar. The middle ball sits on the bottom one.

The video also shows **G** (grab) for moving: press **G**, then **Z**, then move the mouse.

- [ ] Two balls are stacked, the top one smaller

### 5C · Front view

[▶ Watch (8:24)](https://youtu.be/pK8io3T77UA?t=504)

1. Choose **View → Viewpoint → Front**. You look straight at the snowman from the front. (Shortcut: the **`** key, left of 1, opens a view menu; or 1 on the number pad)

- [ ] I see the snowman from straight in front

## Part 6 · The head

[▶ Watch this part (8:50)](https://youtu.be/pK8io3T77UA?t=530)

| Setting | Axis | Value |
| --- | --- | --- |
| **Location** | Z | 4.35 m |
| **Scale** | X | 0.6 |
|  | Y | 0.6 |
|  | Z | 0.6 |

1. Click the middle ball. Choose **Object → Duplicate Objects**, press **Z**, move it up and click. (Shortcut: Shift+D, Z)
2. Type the values above. The head sits on top.

- [ ] Three balls are stacked from biggest to smallest

## Part 7 · Carrot nose

### 7A · Add a cone

[▶ Watch this part (9:13)](https://youtu.be/pK8io3T77UA?t=553)

| Setting | Axis | Value |
| --- | --- | --- |
| **Scale** | X | 0.1 |
|  | Y | 0.1 |
|  | Z | 0.25 |

1. Choose **Add → Mesh → Cone**. A cone appears in the middle of the snowman.
2. Type the **Scale** values. The cone becomes long and thin like a carrot.

- [ ] A thin cone is inside the snowman

### 7B · Point it forward

[▶ Watch (10:13)](https://youtu.be/pK8io3T77UA?t=613)

| Setting | Axis | Value |
| --- | --- | --- |
| **Location** | X | 0 m |
|  | Y | −0.75 m |
|  | Z | 4.35 m |
| **Rotation** | X | 90° |
|  | Y | 0° |
|  | Z | 0° |

1. Type the **Rotation** X value. The cone tips over so its point faces the front.
2. Type the **Location** values. The nose pokes out of the front of the head.
3. Try the **Transform** tool in the toolbar. It has arrows (move), rings (rotate) and small boxes (scale) all at once. Hold **Ctrl** while you drag a ring to turn it in 5° steps. The angle shows at the top of the viewport.

> **Pick the right one:** **Cone**, not **Cylinder**. A cone has a point at the top.

- [ ] The nose points toward me in Front view

## Part 8 · Pan and fine-tune

[▶ Watch this part (11:39)](https://youtu.be/pK8io3T77UA?t=699)

1. Hold **Shift**, hold the **mouse wheel down**, and drag. The view slides sideways (pans) instead of spinning.
2. The hand icon on the **Navigation gizmo** (top-right) also pans: click and hold it, then drag.
3. Check the nose from **Front**, **Right** and **Top** views (**View → Viewpoint**). Use the **Move** tool's arrows to nudge it until it sits in the middle of the face from every view.
4. To make small changes with **S**, move your mouse far from the nose first, then press **S**.

- [ ] The nose is centred on the face from the front, right and top

## Part 9 · Finish your snowman

[▶ Watch the assignment (13:47)](https://youtu.be/pK8io3T77UA?t=827)

Add more parts using the shapes in **Add → Mesh**:

- **Eyes** and **buttons**: small UV Spheres
- **Hat**: a **Cylinder** (a wide flat one for the brim, a tall one on top)
- Try a **Torus** (a donut shape) for a scarf

Use Move, Scale, Rotate and the Sidebar values to place each one. If you already know how to add colours, go ahead.

- [ ] My snowman has a body, head, nose and at least two extra parts
- [ ] My file is saved with my name

## Video chapters

Copy this list into the YouTube description to add chapters to the video.

```
0:00 Intro
0:14 Zoom, spin and select
0:50 Object Mode and Edit Mode
1:23 Toolbar and tool names
1:55 Undo
2:17 Move tool and axis colours
3:15 Preferences: undo steps and text size
4:18 Delete and add objects
4:48 Scaling a UV sphere
6:22 Scaling with the S key
7:06 Duplicate for the body
8:24 Front view
8:50 The head
9:13 A cone nose
10:13 The Transform tool
11:39 Panning the view
12:22 Fine-tuning the nose
13:47 Assignment
```
