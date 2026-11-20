---
title: Animating a Cube: Move, Rotate, Scale and Export to MP4
program: Blender
lesson: 0
blurb: Make a 5-second video of a cube that slides across the screen, spins one full turn, and grows and shrinks.
---
You will make a 5-second video (120 frames at 24 frames per second). A cube moves from left to right, spins one full turn, and grows and shrinks. You finish by exporting it as one MP4 video file.

**Key idea:** a keyframe records a value at a certain frame. If the cube is at X = −3 on frame 1 and X = 3 on frame 120, Blender works out every position in between for you.

| Field colour | Meaning |
| --- | --- |
| Yellow | A keyframe exists on this frame |
| Green | The property is animated, but there is no keyframe on this frame |
| Orange | You changed an animated value without keying it. The change is lost when the frame changes |

This lesson has no heavy (red) settings. Rendering a 5-second cube is quick on the lab computers.

```brief
Part 1 · Set up the scene and timeline
1A · New file | File → New → General | Save As cube_animation_yourname.blend
1B · Camera | Location 0, −24, 0 | Rotation 90, 0, 0
1C · Timeline | Start 1 · End 120 | Frame Rate 24 fps
Part 2 · Keyframe the move
2A · Frame 1 | Location X −3 | Right-click → Insert Keyframes
2B · Frame 120 | Location X 3 | Insert Keyframes · play
Part 3 · Keyframe the rotation
3A · Frame 1 | Rotation 0, 0, 0 · key
3B · Frame 120 | Rotation Y 360 · key
Part 4 · Keyframe the scale
4A · Frames 1 · 60 · 120 | Scale 1 → 1.5 → 1 · key each
4B · Extension | Timeline: select all · Key → Interpolation → Linear
Part 5 · Camera and lighting check
5A · Camera view | View → Cameras → Active Camera
5B · Light | Location 4, −6, 6 | Rendered shading
Part 6 · MP4 output and render
6A · Format | 1920 × 1080 · 24 fps · 1–120
6B · Output | Media Type Video · MPEG-4 · H.264 · No Audio
6C · Render | Render → Render Animation · not Render Image
```

## Part 1 · Set up the scene and timeline

Set up the camera and timeline first, so every keyframe lands in the right place.

### 1A · New file

1. Open Blender and choose **File → New → General**. You start with a cube, a camera and a light.
2. Choose **File → Save As** and name it `cube_animation_yourname.blend`. The name appears at the top of the window. Save often while you work. (Shortcut: Ctrl+S)

### 1B · Aim the camera

| Setting | Axis | Value |
| --- | --- | --- |
| **Location** | X | 0 m |
|  | Y | −24 m |
|  | Z | 0 m |
| **Rotation** | X | 90° |
|  | Y | 0° |
|  | Z | 0° |

1. Click **Camera** in the **Outliner** (top right).
2. Choose **View → Sidebar** to open the N panel, then click the **Item** tab. (Shortcut: N, with the mouse over the 3D Viewport)
3. Type the values from the table. The camera jumps in front of the cube and points straight at it.

### 1C · Timeline length and frame rate

| Panel | Field | Value |
| --- | --- | --- |
| **Timeline** | Start | 1 |
|  | End | 120 |
| **Output → Format** | Frame Rate | 24 fps |

1. In the **Timeline** at the bottom of the screen, type **1** in **Start** and **120** in **End**. The Timeline ruler now ends at 120.
2. Open **Output Properties** (the printer icon in the Properties panel). Under **Format**, check that **Frame Rate** is **24 fps**.

At 24 frames per second, 120 frames is 5 seconds of video.

- [ ] The file is saved with your name in it
- [ ] The camera's N panel shows Location 0, −24, 0 and Rotation 90, 0, 0
- [ ] The Timeline runs from 1 to 120

## Part 2 · Keyframe the move

Two Location keyframes make the cube travel from X = −3 on frame 1 to X = 3 on frame 120.

| Frame | Location X | Location Y | Location Z |
| --- | --- | --- | --- |
| 1 | −3 m | 0 m | 0 m |
| 120 | 3 m | 0 m | 0 m |

1. Click **Cube** in the Outliner. Keep the N panel open on the **Item** tab.
2. In the Timeline, check that the current frame is **1**. The blue playhead shows the current frame.
3. Type **−3** in **Location X**. The cube moves left.
4. Right-click any **Location** field and choose **Insert Keyframes**. All three Location fields turn **yellow**, and a diamond appears in the Timeline. (Shortcut: I, with the mouse over the fields)
5. Type **120** in the current-frame box at the right of the Timeline. The playhead jumps to the end.
6. Type **3** in **Location X**. The field turns **orange**: changed, but not saved as a keyframe yet.
7. Right-click a Location field and choose **Insert Keyframes** again. The fields turn yellow.
8. Click **Play** in the Timeline. The cube slides from left to right. Click **Pause** to stop. (Shortcut: Spacebar, with the mouse over the 3D Viewport)

> **Pick the right one:** **Insert Keyframes** keys all three axes. **Insert Single Keyframe** keys only the field you right-clicked. Both work here. If an "Insert Keyframes" menu with channel choices pops up instead, your mouse was over the Timeline: press Esc and try again over the fields.

- [ ] Two diamonds in the Timeline, at frames 1 and 120
- [ ] On Play, the cube slides from left to right

## Part 3 · Keyframe the rotation

Two Rotation keyframes make the cube spin one full turn (360°) while it moves. Turning around Y spins it like a wheel facing the camera.

| Frame | Rotation X | Rotation Y | Rotation Z |
| --- | --- | --- | --- |
| 1 | 0° | 0° | 0° |
| 120 | 0° | 360° | 0° |

1. Type **1** in the current-frame box.
2. Check that **Rotation** reads 0, 0, 0, then right-click a Rotation field and choose **Insert Keyframes**. The Rotation fields turn yellow.
3. Go to frame **120** and type **360** in **Rotation Y**.
4. Right-click a Rotation field and choose **Insert Keyframes**.
5. Click **Play**. The cube moves and spins together.

**Try it:** use 720 for two full turns, or −360 to spin the other way. Insert Keyframes again after any change.

- [ ] Rotation fields are yellow on frames 1 and 120
- [ ] On Play, the cube spins one full turn as it moves

## Part 4 · Keyframe the scale

Three Scale keyframes make the cube grow to 1.5 times its size halfway through, then shrink back.

| Frame | Scale X | Scale Y | Scale Z |
| --- | --- | --- | --- |
| 1 | 1 | 1 | 1 |
| 60 | 1.5 | 1.5 | 1.5 |
| 120 | 1 | 1 | 1 |

### 4A · Grow and shrink

1. Go to frame **1**. Check that **Scale** reads 1, 1, 1, then right-click a Scale field and choose **Insert Keyframes**.
2. Go to frame **60**. Type **1.5** in all three Scale fields. To change all three at once, click in the X field, drag straight down over Y and Z, type 1.5 and press **Enter**.
3. Right-click a Scale field and choose **Insert Keyframes**.
4. Go to frame **120**, set Scale back to **1**, **1**, **1**, and **Insert Keyframes**.
5. Click **Play**. The cube moves, spins, grows and shrinks.

### 4B · Extension: constant speed

By default Blender eases in and out, so the cube starts slowly, speeds up, then slows down at the end.

1. Hover over the Timeline and choose **Select → All**. All the diamonds turn orange. (Shortcut: A)
2. Choose **Key → Interpolation Mode → Linear**. (Shortcut: T, then Linear)
3. Click **Play** and compare. The cube now moves at one steady speed.

- [ ] The cube is 1.5 times bigger at frame 60
- [ ] On Play, it moves, spins, grows and shrinks

## Part 5 · Camera and lighting check

The video shows only what the camera sees, so check the whole animation through the camera before rendering.

| Object | Setting | Value |
| --- | --- | --- |
| **Light** | Location X | 4 m |
|  | Location Y | −6 m |
|  | Location Z | 6 m |

1. Choose **View → Cameras → Active Camera**. The view jumps to the camera's frame. (Shortcut: Numpad 0)
2. Click **Play** and watch all 120 frames. The cube should stay inside the camera frame the whole time, including when it is largest.
3. If the cube goes off the edge, select the **Camera** and make **Location Y** more negative, such as −30.
4. Click the **Rendered** shading button at the top right of the 3D Viewport (the fourth circle). (Shortcut: Z, then Rendered)
5. If the front of the cube looks dark, click **Light** in the Outliner and type the values from the table. The front of the cube brightens. The light doesn't need to be in the camera frame and won't show in the render.

**Optional colour:** select the Cube, open **Material Properties** (red sphere icon), click **New**, and change **Base Color**.

- [ ] The cube stays inside the camera frame for all 120 frames
- [ ] In Rendered shading, the front of the cube is lit

## Part 6 · Set up MP4 output and render

Blender saves a folder of separate PNG images by default. Change the output to **Video** before rendering to get one MP4 file.

### 6A · Format

| Output Properties | Field | Value |
| --- | --- | --- |
| **Format** | Resolution X | 1920 px |
|  | Resolution Y | 1080 px |
|  | % | 100% |
|  | Frame Rate | 24 fps |
| **Frame Range** | Frame Start | 1 |
|  | End | 120 |

1. In **Output Properties** (printer icon), type the values from the table. Frame Start and End match the Timeline.

### 6B · Output and encoding

| Output Properties | Field | Value |
| --- | --- | --- |
| **Output** | Folder | your class folder + `cube_yourname_` |
|  | Media Type | **Video** |
| **Encoding** | Container | MPEG-4 |
| **Encoding → Video** | Video Codec | H.264 |
|  | Output Quality | Medium Quality |
|  | Encoding Speed | Good |
| **Encoding → Audio** | Audio Codec | No Audio |

1. In the **Output** section, click the folder icon, choose your class folder, and type `cube_yourname_` at the end of the path. Blender adds the frame numbers and `.mp4`.
2. Set **Media Type** to **Video**. The **Encoding** section appears underneath.
3. Set the Encoding values from the table.

> **Pick the right one:** older Blender versions have no Media Type. There, set **File Format** to **FFmpeg Video** instead.

### 6C · Render

1. Choose **Render → Render Animation**. A render window opens and counts through the frames. (Shortcut: Ctrl+F12)
2. Wait until it reaches frame 120, then close the render window.
3. Open your class folder. Double-click the file, named something like `cube_yourname_0001-0120.mp4`, to check it plays.

> **Pick the right one:** **Render Animation** makes the whole video. **Render Image** (F12) renders only one still frame.

- [ ] One `.mp4` file is in your class folder, not a folder of PNG images
- [ ] The video plays for 5 seconds and shows the cube moving, spinning and growing

## Troubleshooting and hand-in

| Problem | Fix |
| --- | --- |
| I got a folder of PNG images, not a video | Media Type (or File Format) was still an image. Change it to Video and render the animation again. |
| Only one image rendered | You used Render Image (F12). Use Render → Render Animation (Ctrl+F12). |
| The cube doesn't move when I play | The keyframes weren't saved. The fields must turn yellow after Insert Keyframes. |
| A change I made disappeared | The field was orange and you changed frames before keying it. Make the change again and Insert Keyframes. |
| The cube leaves the camera view | Move the camera back (more negative Y), or use smaller Location X values such as −2.5 and 2.5. |
| The video is too short or too long | Check End is 120 and Frame Rate is 24 fps in Output Properties. |
| The render is black or very dark | The light is behind the cube. Move it to the camera's side (Part 5). |

**Before you hand in**

- [ ] The cube moves from left to right, spins at least one full turn, and grows and shrinks back
- [ ] The cube stays inside the camera frame for all 120 frames
- [ ] The video is one `.mp4` file that plays when double-clicked
- [ ] Upload the `.mp4` and your `.blend` file to Google Classroom
