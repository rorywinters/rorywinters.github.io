---
title: Tumbling Colour Cube Animation and MP4 Export
program: Blender
lesson: 1
blurb: A cube tumbles across the screen on all three axes with a light that follows it, then renders to one MP4.
---
You will make a 5-second video (120 frames at 24 fps). A cube tumbles across the screen from left to right, spinning on all three axes, growing and shrinking, with a light that follows it. As a bonus you can colour the cube with three colours on opposite faces.

This lesson builds on [Lesson 0 · Animating a Cube](../lesson-00-animating-a-cube/). If you haven't keyframed in Blender before, do that one first.

**Important:** Blender sends a key press to whichever panel is under your mouse. Before you press a shortcut, check where your mouse is.

| Field colour | Meaning |
| --- | --- |
| Yellow | A keyframe exists on this frame |
| Green | Animated, but no keyframe on this frame |
| Orange | Changed but not keyed. Lost when the frame changes |

```brief
Part 1 · Set up the scene
1A · New file | tumbling_cube_yourname.blend
1B · Camera | Location 0, −14, 0 · Rotation 90, 0, 0
1C · Cube check | Location 0, 0, 0 · Rotation 0, 0, 0 · Scale 1
1D · Timeline | 1–120 · 24 fps
Part 2 · Keyframe the move
2 · Location X | Frame 1: −3 · Frame 120: 3 | Insert Keyframes each
Part 3 · Rotation on three axes
3 · Rotation keys | F1: 0, 0, 0 · F60: 180, 360, 90 | F120: 360, 720, 360
Part 4 · Keyframe the scale
4 · Scale keys | F1: 1 · F60: 1.5 · F120: 1 | Extension: Linear
Part 5 · Light that tracks the cube
5A · Area light | Add → Light → Area | Location −4, −8, 5
5B · Track To | Object Constraint → Track To | Target Cube · −Z · Up Y
Part 6 · Check through the camera
6 · Camera view | Active Camera · Rendered | Cube stays in frame
Part 7 · MP4 output and render
7A · Format | 1920 × 1080 · 24 fps · 1–120
7B · Output | Media Type Video · MPEG-4 · H.264
7C · Versions | _v1_, _v2_ … · Render Animation
Bonus · Colour the cube
B · Three materials | Edit Mode · Face Select · X-ray | Assign pairs of opposite faces
```

## Part 1 · Set up the scene, camera and timeline

### 1A · New file

1. Choose **File → New → General**. You start with a Cube, a Camera and a Light.
2. Choose **File → Save As** and name it `tumbling_cube_yourname.blend`. (Shortcut: Ctrl+S to save again later)
3. Choose **View → Sidebar** and click the **Item** tab. (Shortcut: N, mouse over the 3D Viewport)

### 1B · Camera

| Setting | Axis | Value |
| --- | --- | --- |
| **Location** | X | 0 m |
|  | Y | −14 m |
|  | Z | 0 m |
| **Rotation** | X | 90° |
|  | Y | 0° |
|  | Z | 0° |

1. Click **Camera** in the Outliner and type the values from the table. The camera moves in front of the cube, pointing straight at it. It sits 14 m back so the tumbling cube has room to stay in frame.

### 1C · Check the cube

| Setting | Axis | Value |
| --- | --- | --- |
| **Location** | X, Y, Z | 0 m |
| **Rotation** | X, Y, Z | 0° |
| **Scale** | X, Y, Z | 1 |

1. Click **Cube** in the Outliner and check the values. The 90° rotation belongs to the camera only. If the cube shows Rotation X = 90, set it back to 0.

### 1D · Timeline

| Panel | Field | Value |
| --- | --- | --- |
| **Timeline** | Start | 1 |
|  | End | 120 |
| **Output → Format** | Frame Rate | 24 fps |

1. Type **1** and **120** in the Timeline's **Start** and **End**.
2. In **Output Properties** (printer icon), check **Frame Rate** is **24 fps**.

- [ ] The camera reads Location 0, −14, 0 and Rotation 90, 0, 0
- [ ] The cube reads 0, 0, 0 / 0, 0, 0 / 1, 1, 1
- [ ] The Timeline runs from 1 to 120

## Part 2 · Keyframe the move (Location)

| Frame | Location X |
| --- | --- |
| 1 | −3 m |
| 120 | 3 m |

1. Select the **Cube** and go to frame **1** (the blue playhead).
2. Type **−3** in **Location X**, then right-click a Location field and choose **Insert Keyframes**. The fields turn yellow and a diamond appears in the Timeline. (Shortcut: I, mouse over the fields)
3. Type **120** in the current-frame box at the right of the Timeline.
4. Type **3** in **Location X**. The field turns orange. Right-click and **Insert Keyframes** again.
5. Click **Play** in the Timeline. The cube slides left to right. (Shortcut: Spacebar)

> **Pick the right one:** if an "Insert Keyframes" menu with All Channels and Only Selected Channels pops up, your mouse was over the Timeline. Press Esc, move onto the fields, and try again.

- [ ] Diamonds at frames 1 and 120
- [ ] The cube slides left to right on Play

## Part 3 · Keyframe rotation on all three axes

Three Rotation keyframes make the cube tumble on X, Y and Z at different speeds, so every side comes into view.

| Axis | What the cube does from this camera |
| --- | --- |
| X | Tumbles forward, top rolling toward or away from the camera |
| Y | Spins like a wheel facing the camera |
| Z | Turns like it is on a turntable |

| Frame | Rotation X | Rotation Y | Rotation Z |
| --- | --- | --- | --- |
| 1 | 0° | 0° | 0° |
| 60 | 180° | 360° | 90° |
| 120 | 360° | 720° | 360° |

1. Go to frame **1**. Check Rotation is 0, 0, 0, then right-click a Rotation field and **Insert Keyframes**.
2. Go to frame **60**. Type the frame 60 values, then **Insert Keyframes**.
3. Go to frame **120**. Type the frame 120 values, then **Insert Keyframes**.
4. Click **Play**. The cube tumbles as it slides across.

The end values are whole turns (360° and 720°), so the cube finishes facing the way it started.

**Try it:** change the frame 60 values, for example X = −180, so it reverses partway. Insert Keyframes after every change.

- [ ] Rotation fields are yellow on frames 1, 60 and 120
- [ ] The cube tumbles on all three axes

## Part 4 · Keyframe the scale

| Frame | Scale X, Y, Z |
| --- | --- |
| 1 | 1 |
| 60 | 1.5 |
| 120 | 1 |

1. Go to frame **1**, check Scale is 1, 1, 1, and **Insert Keyframes** on Scale.
2. Go to frame **60**. Click in Scale X, drag down over Y and Z, type **1.5**, press **Enter**, and **Insert Keyframes**.
3. Go to frame **120**, set Scale back to **1**, and **Insert Keyframes**.
4. Click **Play**. The cube moves, tumbles, grows and shrinks.

**Extension: constant speed.** Hover over the Timeline, choose **Select → All** (Shortcut: A), then **Key → Interpolation Mode → Linear** (Shortcut: T). The cube now moves at a steady speed instead of easing in and out.

- [ ] The cube is 1.5 times bigger at frame 60

## Part 5 · Add an area light that tracks the cube

An area light with a **Track To** constraint stays pointed at the cube as it moves.

### 5A · Add the area light

| Setting | Axis | Value |
| --- | --- | --- |
| **Location** | X | −4 m |
|  | Y | −8 m |
|  | Z | 5 m |

1. In Object Mode, choose **Add → Light → Area**. A new light appears at the 3D cursor.
2. Type the Location values from the table. It moves in front of the cube, up and to the left.

### 5B · Make it track the cube

| Object Constraint Properties | Field | Value |
| --- | --- | --- |
| **Track To** | Target | Cube |
|  | Track Axis | −Z (default) |
|  | Up | Y (default) |

1. With the area light selected, open **Object Constraint Properties** (the icon just below the blue spanner).
2. Click **Add Object Constraint → Track To** and set **Target** to **Cube**. A dashed line now joins the light to the cube.
3. Click **Play**. The light turns to follow the cube. (Shortcut for steps 1–2: click the light, Shift+click the cube, Ctrl+T → Track To Constraint)

### 5C · Adjust the lighting

- If the cube looks dim, open **Object Data Properties** (green bulb icon) on the area light and raise **Power**. A larger **Size** gives softer shadows.
- Optional: move the original **Light** to 4, −6, 6 so it fills in from the other side.
- Lights don't need to be in the camera frame and won't show in the render. While Track To is on, the light's Rotation values have no effect.

- [ ] A dashed line joins the area light to the cube
- [ ] On Play, the light turns to follow the cube

## Part 6 · Check the shot through the camera

1. Choose **View → Cameras → Active Camera**. (Shortcut: Numpad 0)
2. Click the **Rendered** shading button (top right of the viewport). (Shortcut: Z → Rendered)
3. Click **Play** and watch all 120 frames, especially frames 1 and 120 (the edges) and around frame 60 (largest).
4. If the cube touches the edge, select the **Camera** and make **Location Y** more negative, such as −16. Don't change the cube's values to fix framing.

- [ ] The cube stays inside the camera frame for all 120 frames

## Part 7 · Set up MP4 output and render

### 7A · Format

| Output Properties | Field | Value |
| --- | --- | --- |
| **Format** | Resolution X | 1920 px |
|  | Resolution Y | 1080 px |
|  | % | 100% |
|  | Frame Rate | 24 fps |
| **Frame Range** | Frame Start | 1 |
|  | End | 120 |
|  | Step | 1 |

### 7B · Output and encoding

| Output Properties | Field | Value |
| --- | --- | --- |
| **Output** | Folder | your class folder + `tumbling_cube_yourname_v1_` |
|  | File Extensions | On |
|  | Media Type | **Video** |
| **Encoding** | Container | MPEG-4 |
| **Encoding → Video** | Video Codec | H.264 |
|  | Output Quality | Medium Quality |
|  | Encoding Speed | Good |
| **Encoding → Audio** | Audio Codec | No Audio |

1. Click the folder icon, choose your class folder, and add `tumbling_cube_yourname_v1_` at the end of the path.
2. Set **Media Type** to **Video**. The **Encoding** section appears. Set it from the table.

### 7C · Render, and keep every version

1. Choose **Render → Render Animation**. (Shortcut: Ctrl+F12) Wait until it reaches frame 120, then close the render window.
2. Double-click the `.mp4` in your folder to check it plays.
3. Blender overwrites a video with the same name, so before each new render change the end of the path to the next version: `_v2_`, `_v3_` and so on. Render a version whenever you finish a part. Keep them all: you'll use them in the video editing lesson.

> **Pick the right one:** **Render Animation** makes the video. **Render Image** (F12) makes one still frame.

- [ ] One `.mp4` per version in your class folder, each playing when double-clicked

## Bonus · Colour the cube (three colours on opposite faces)

Do this after your movement works and is rendered. Colours don't change any keyframes. Render a new version when you finish.

| Colour | Faces |
| --- | --- |
| Colour 1 | Front and back |
| Colour 2 | Left and right |
| Colour 3 | Top and bottom |

### B1 · Make three materials

1. Select the Cube and open **Material Properties** (red sphere icon). If it has no material, click **New**.
2. Click **+** beside the material list to add a slot, then **New** to fill it. Repeat until there are three materials.
3. Click each material and change its **Base Color** so all three differ. Double-click a name to rename it, for example "Red".

### B2 · Assign each colour to a pair of faces

1. Choose **Edit Mode** from the mode menu at the top left. (Shortcut: Tab)
2. Click the **Face select** button in the header. (Shortcut: 3 on the top row)
3. Click the **Toggle X-Ray** button at the top right so you can click faces on the back. (Shortcut: Alt+Z)
4. Click the **left** face, then Shift+click the **right** face. In the material list click the second colour, then **Assign**.
5. Click the **top** face, Shift+click the **bottom** face, click the third colour, then **Assign**.
6. Turn X-Ray off and go back to **Object Mode**. Switch to **Material Preview** shading to see the colours.

Every face starts with the first material, so the front and back already have Colour 1.

- [ ] Opposite faces match, with three colours in total

## Troubleshooting and hand-in

| Problem | Fix |
| --- | --- |
| Pressing I opens an "Insert Keyframes" menu | Your mouse was over the Timeline. Press Esc and right-click a field → Insert Keyframes instead. |
| The cube doesn't move when I play | The keyframes weren't saved. Fields must turn yellow. |
| A change I made disappeared | The field was orange and you changed frames first. Redo it and Insert Keyframes. |
| The cube looks tilted at the start | The cube's Rotation isn't 0, 0, 0 on frame 1. Only the camera has Rotation X = 90. |
| The faces are all one colour | Faces weren't assigned. In Edit Mode, select faces, pick a material, click Assign. |
| The light doesn't follow the cube | Track To's Target is empty or wrong. Set it to Cube. |
| The render is dark | Raise the area light's Power, or check Track To is pointing it at the cube. |
| I got a folder of PNG images | Media Type was still Image. Change it to Video and render again. |

**Before you hand in**

- [ ] The cube moves left to right, tumbles on X, Y and Z, and grows and shrinks back
- [ ] The area light follows the cube
- [ ] The cube stays in the camera frame for all 120 frames
- [ ] Bonus: three colours, opposite faces matching
- [ ] Upload the `.mp4` and your `.blend` to Google Classroom
