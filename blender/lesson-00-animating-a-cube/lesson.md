---
title: Animating a Cube: Move, Rotate, Scale and Export to MP4
program: Blender
video: https://youtu.be/H3Sce83Wu-4
blurb: Keyframe a cube that slides across the screen, tumbles on all three axes and grows and shrinks, light it with a light that follows it, colour it, and render one MP4 video.
---
You make your first animation: a 5-second video (120 frames at 24 fps). The cube slides across the screen, tumbles on all three axes and grows and shrinks. Then you add a light that follows it, give it three colours and render it as one MP4 video file. These steps are for Blender 5.2. Every part has a ▶ link that jumps the video to that step.

Do [Create a Snowman](../snowman/) first if you have never moved around in Blender.

| Colour | Meaning |
| --- | --- |
| Green | Safe to change. No real effect on playback or render time. |
| Amber | Raises the load a little. Fine at the values given. |
| Red | Use with caution. Big effect on speed or memory. |

**Output Quality** (Part 2) is amber: higher quality makes the render slower. This lesson has no red settings.

### Where things are

| Thing | Where on the screen |
| --- | --- |
| **Sidebar** (N panel), **Item** tab | Right edge of the 3D Viewport. **View → Sidebar** (Shortcut: N) |
| **Outliner** | Top-right of the window. Click an object's name to select it. |
| **Properties editor** | Bottom-right, under the Outliner. A column of icons down its left side. |
| **Output Properties** | Properties editor, the printer icon |
| **Object Constraint Properties** | Properties editor, the icon of two linked squares with a bone, near the bottom |
| **Object Data Properties** (for a light) | Properties editor, the green light-bulb icon |
| **Material Properties** | Properties editor, the red sphere icon at the bottom |
| **Timeline** | Bottom of the window, with Play buttons, the blue playhead and **Start** / **End** boxes |

If the Timeline is only a thin strip, drag its top edge up.

```brief
Part 1 · Camera and timeline
1A · Camera | Location 0 · −14 · 0 | Rotation 90° · 0 · 0 | [▶ 0:27](https://youtu.be/H3Sce83Wu-4?t=27)
1B · Timeline | Start 1 · End 120 · 24 fps | [▶ 1:31](https://youtu.be/H3Sce83Wu-4?t=91)
Part 2 · MP4 output
2A · Video | Output Properties · Media Type Video | Container MPEG-4 | [▶ 2:19](https://youtu.be/H3Sce83Wu-4?t=139)
2B · File name | Desktop → Blender Animations | cube_roll_v1 · Enter | [▶ 2:48](https://youtu.be/H3Sce83Wu-4?t=168)
Part 3 · Move
3 · Move | Select Cube · frame 1 · Location X −3 · I | frame 120 · X 3 · I | [▶ 3:37](https://youtu.be/H3Sce83Wu-4?t=217)
Part 4 · Rotate
4A · Middle spin | frame 1 · Rotation 0 · 0 · 0 · I | frame 60 · 180 · 360 · 90 · I | [▶ 5:46](https://youtu.be/H3Sce83Wu-4?t=346)
4B · End spin | frame 120 · 360 · 720 · 360 · I | [▶ 8:32](https://youtu.be/H3Sce83Wu-4?t=512)
Part 5 · Scale
5 · Grow and shrink | frame 1 · 0.5 · frame 60 · 2 · frame 120 · 0.5 | I after each | [▶ 9:17](https://youtu.be/H3Sce83Wu-4?t=557)
Part 6 · First render
6 · Render v1 | Camera view · Render → Render Animation (Ctrl+F12) | Not Render Image | [▶ 11:00](https://youtu.be/H3Sce83Wu-4?t=660)
Part 7 · A light that follows
7A · Area light | Add → Light → Area | Location −4 · −8 · 5 | [▶ 11:56](https://youtu.be/H3Sce83Wu-4?t=716)
7B · Track To | Add Object Constraint → Track To | Target Cube | [▶ 12:57](https://youtu.be/H3Sce83Wu-4?t=777)
7C · Power | Area light · Power up until lit | [▶ 13:42](https://youtu.be/H3Sce83Wu-4?t=822)
Part 8 · Three colours
8 · Colours | Edit Mode · Face Select | Blue · Red · Green · Assign two opposite faces each | [▶ 14:39](https://youtu.be/H3Sce83Wu-4?t=879)
Part 9 · Render version 2
9 · Render v2 | Change name to cube_roll_v2 | Ctrl+F12 · hand in | [▶ 16:50](https://youtu.be/H3Sce83Wu-4?t=1010)
```

## Part 1 · Camera and timeline

[▶ Watch this part (0:00)](https://youtu.be/H3Sce83Wu-4?t=0)

### 1A · Aim the camera

[▶ Watch (0:27)](https://youtu.be/H3Sce83Wu-4?t=27)

| Setting | Axis | Value |
| --- | --- | --- |
| **Location** | X | 0 m |
|  | Y | −14 m |
|  | Z | 0 m |
| **Rotation** | X | 90° |
|  | Y | 0° |
|  | Z | 0° |

1. Choose **File → New → General**. You start with a cube, a camera and a light.
2. Choose **File → Save As** and name it `cube_roll_yourname.blend`. The name appears at the top of the window.
3. Click **Camera** in the **Outliner** (top-right).
4. Choose **View → Sidebar** and click the **Item** tab. (Shortcut: N, with the mouse over the 3D Viewport)
5. Type the values from the table. The camera jumps in front of the cube and points straight at it.
6. Choose **View → Cameras → Active Camera**. You see what the camera sees: the cube, dead centre. (Shortcut: Numpad 0)

- [ ] Looking through the camera, the cube is in the middle of the frame

### 1B · Timeline length and frame rate

[▶ Watch (1:31)](https://youtu.be/H3Sce83Wu-4?t=91)

| Panel | Field | Value |
| --- | --- | --- |
| **Timeline** | Start | 1 |
|  | End | 120 |
| **Output → Format** | Frame Rate | 24 fps |

1. Drag the top edge of the **Timeline** up so you can see it. The blue playhead shows the frame you are on.
2. Click in **End** and type **120**, then press **Enter**. The Timeline ruler now ends at 120. (**Frame End** in Output Properties changes to match.)
3. Open **Output Properties** (printer icon). Under **Format**, check that **Frame Rate** is **24 fps**.

At 24 frames per second, 120 frames is 5 seconds.

- [ ] The Timeline runs from 1 to 120

## Part 2 · MP4 output

Blender saves a folder of separate pictures by default: 24 of them for every second. Set it to make one video file instead.

### 2A · Make a video, not pictures

[▶ Watch this part (2:19)](https://youtu.be/H3Sce83Wu-4?t=139)

| Output Properties | Field | Value |
| --- | --- | --- |
| **Output** | Media Type | **Video** |
| **Encoding** | Container | MPEG-4 |
| **Encoding → Video** | Video Codec | H.264 |
|  | Output Quality (amber) | Medium Quality |

1. In **Output Properties**, find the **Output** section.
2. Change **Media Type** to **Video**. An **Encoding** section appears underneath.
3. Change **Container** to **MPEG-4**. Leave the rest at the values in the table.

> **Pick the right one:** older Blender versions have no Media Type. There, set **File Format** to **FFmpeg Video**.

### 2B · Folder and file name

[▶ Watch (2:48)](https://youtu.be/H3Sce83Wu-4?t=168)

| Output Properties | Field | Value |
| --- | --- | --- |
| **Output** | Path | Desktop → Blender Animations → `cube_roll_v1` |

1. Make a folder called **Blender Animations** on your Desktop (or use your class folder).
2. In the **Output** section, click the folder icon beside the path, go to that folder and click **Accept**.
3. Click at the end of the path and type `cube_roll_v1`. Press **Enter**. The path now ends in `cube_roll_v1`.

The **v1** means version 1. Blender replaces a video that has the same name, so you change it to v2, v3 and so on for each new render.

- [ ] Media Type says Video and Container says MPEG-4
- [ ] The path ends in your folder and `cube_roll_v1`

## Part 3 · Keyframe the move

[▶ Watch this part (3:37)](https://youtu.be/H3Sce83Wu-4?t=217)

| Frame | Location X | Location Y | Location Z |
| --- | --- | --- | --- |
| 1 | −3 m | 0 m | 0 m |
| 120 | 3 m | 0 m | 0 m |

1. Click **Cube** in the Outliner. Check the Outliner: **Cube** must be highlighted, not Camera. (If you typed into the camera by mistake, use **Edit → Undo**.)
2. Check the playhead is on frame **1**.
3. Type **−3** in **Location X** and press **Enter**. The cube moves left.
4. Hover the mouse over the **Location** fields and press **I**. The three fields turn **yellow** and a diamond appears in the Timeline. (Or right-click a field → **Insert Keyframes**.)
5. Drag the playhead to frame **120** (or type 120 in the current-frame box at the right of the Timeline).
6. Type **3** in **Location X**. The field turns **orange**: changed, but not keyed yet.
7. Hover over the Location fields and press **I**. They turn yellow.
8. Drag the playhead back to 1 and click **Play**. The cube slides from left to right. Click **Pause**. (Shortcut: Spacebar)

> **Pick the right one:** If pressing **I** opens a menu instead of turning the fields yellow, your mouse is over the Timeline or the viewport. Press Esc, move the mouse onto the **Location** fields and press I again.

- [ ] Diamonds at frames 1 and 120
- [ ] On Play, the cube slides from left to right

## Part 4 · Keyframe the rotation

| Frame | Rotation X | Rotation Y | Rotation Z |
| --- | --- | --- | --- |
| 1 | 0° | 0° | 0° |
| 60 | 180° | 360° | 90° |
| 120 | 360° | 720° | 360° |

720° is two full turns.

### 4A · Start and middle

[▶ Watch this part (5:46)](https://youtu.be/H3Sce83Wu-4?t=346)

1. Go to frame **1**. Check **Rotation** reads 0, 0, 0. Hover over the Rotation fields and press **I**. They turn yellow.
2. Go to frame **60**. Type **180**, **360** and **90** into Rotation X, Y and Z. They turn orange.
3. Hover over the Rotation fields and press **I**. They turn yellow.
4. Go back to frame 1 and play. The cube tumbles to the middle, then spins back.

### 4B · The end

[▶ Watch (8:32)](https://youtu.be/H3Sce83Wu-4?t=512)

1. Go to frame **120**. Type **360**, **720** and **360**.
2. Press **I** over the Rotation fields. If a field stays orange, type its value again and press I again (it happens in the video too).
3. Go to frame 1 and play. The cube tumbles all the way across.

You only need to press I after you change numbers.

- [ ] Rotation fields are yellow on frames 1, 60 and 120
- [ ] On Play, the cube tumbles as it slides across

## Part 5 · Keyframe the scale

[▶ Watch this part (9:17)](https://youtu.be/H3Sce83Wu-4?t=557)

| Frame | Scale X | Scale Y | Scale Z |
| --- | --- | --- | --- |
| 1 | 0.5 | 0.5 | 0.5 |
| 60 | 2 | 2 | 2 |
| 120 | 0.5 | 0.5 | 0.5 |

To change all three Scale fields at once, click in **X**, drag straight down over **Y** and **Z**, type the number and press **Enter**.

1. Go to frame **60**. Set all three Scale fields to **2**, then press **I** over them.
2. Go to frame **120**. Set them to **0.5** and press **I**.
3. Go to frame **1**. Set them to **0.5** and press **I**.
4. Play it. The cube starts small, grows big in the middle and shrinks again.
5. Choose **View → Viewpoint → Top** and play again. The cube stays on its line. It only looks like it comes closer because it grows. Go back with **View → Cameras → Active Camera**.

- [ ] On Play, the cube slides, tumbles, grows and shrinks

## Part 6 · First render

[▶ Watch this part (11:00)](https://youtu.be/H3Sce83Wu-4?t=660)

1. Choose **Render → Render Animation**. A window opens and counts through the frames. (Shortcut: Ctrl+F12)
2. When it reaches 120, close the render window.
3. Open your **Blender Animations** folder and double-click `cube_roll_v1`. Your animation plays.

> **Pick the right one:** **Render Animation** (Ctrl+F12) makes the video. **Render Image** (F12) makes one still picture.

Notice one side of the cube is dark. You fix that next.

- [ ] One `.mp4` file is in your folder and it plays

## Part 7 · A light that follows the cube

### 7A · Add an area light

[▶ Watch this part (11:56)](https://youtu.be/H3Sce83Wu-4?t=716)

| Setting | Axis | Value |
| --- | --- | --- |
| **Location** | X | −4 m |
|  | Y | −8 m |
|  | Z | 5 m |

1. Zoom out so you can see the camera and the cube.
2. Choose **Add → Light → Area**. A flat square light appears.
3. Type the Location values in the Sidebar. The light moves up and a little to the left of the camera. It points straight down.

> **Pick the right one:** **Area** light, not **Point**. An Area light is a flat square with a line showing which way it points.

### 7B · Make it follow the cube

[▶ Watch (12:57)](https://youtu.be/H3Sce83Wu-4?t=777)

| Track To constraint | Value |
| --- | --- |
| Target | Cube |

1. With the area light selected, open **Object Constraint Properties** in the Properties editor.
2. Click **Add Object Constraint → Tracking → Track To**.
3. Click the **Target** box and choose **Cube**. The light's line now points at the cube.
4. Play the animation. The light turns to follow the cube.

### 7C · Brighter

[▶ Watch (13:42)](https://youtu.be/H3Sce83Wu-4?t=822)

1. Click the **area light** in the Outliner (not the round Light that was already there).
2. Open **Object Data Properties** (green light-bulb icon). **Power** is low.
3. Choose **Rendered** shading (the fourth circle at the top-right of the viewport). (Shortcut: Z → Rendered)
4. Drag **Power** up until the dark side of the cube is lit the way you like.

- [ ] The area light points at the cube on every frame
- [ ] In Rendered shading, the cube is not dark on one side

## Part 8 · Three colours

[▶ Watch this part (14:39)](https://youtu.be/H3Sce83Wu-4?t=879)

| Material | Base Color | Faces |
| --- | --- | --- |
| Blue | blue | the rest (four to start, two at the end) |
| Red | red | two opposite faces |
| Green | green | two opposite faces |

1. Click **Cube**, open **Material Properties** (red sphere icon) and click **New**. Double-click the name and type **Blue**. Set **Base Color** to blue. The whole cube turns blue.
2. Switch to **Edit Mode** and click **Face Select** (the right one of the three small square buttons, top-left of the viewport). (Shortcut: Tab, then 3)
3. Click a face. Click the **+** beside the material list to add a slot, click **New**, and name it **Red**. Set its **Base Color** to red.
4. Click **Assign**. That face turns red. Click the opposite face, keep **Red** selected in the list, and click **Assign**.
5. Add one more slot the same way called **Green**. Click a third face, click **Assign**, then the face opposite it, and **Assign**.
6. Switch back to **Object Mode**, look through the camera and play.

> **Pick the right one:** **Assign** puts the selected material on the selected faces. **Select** only highlights faces that already have that material.

- [ ] Two red faces, two green faces and two blue faces, opposite each other

## Part 9 · Render version 2 and hand in

[▶ Watch this part (16:50)](https://youtu.be/H3Sce83Wu-4?t=1010)

1. In **Output Properties**, change the end of the path from `cube_roll_v1` to `cube_roll_v2` and press **Enter**.
2. Choose **Render → Render Animation**. (Shortcut: Ctrl+F12) You can open your folder while it works.
3. Play `cube_roll_v2`. Compare it with v1: it has the colours and the extra light.

| Problem | Fix |
| --- | --- |
| I got a folder of PNG pictures | Media Type was still Image. Set it to Video (Part 2) and render again. |
| The new render replaced the old one | Change the name to the next version before rendering. |
| Pressing I opens a menu | Your mouse wasn't over the fields. Hover over them and press I again. |
| A change disappeared | The field was orange and you changed frames before pressing I. Type it again and press I. |
| I moved the camera instead of the cube | Check the Outliner before typing. Use Edit → Undo. |
| The whole cube changed colour | You clicked New on the first slot. Add a new slot with + first. |

**Hand in**

- [ ] The cube slides, tumbles on all three axes, grows and shrinks
- [ ] It is lit on all sides and has three colours
- [ ] Upload `cube_roll_v2.mp4` and your `.blend` file to Google Classroom

## Video chapters

Copy this list into the YouTube description to add chapters to the video.

```
0:00 Intro and the finished animation
0:27 Aim the camera
1:31 Timeline length and frame rate
2:19 Output as an MP4 video
2:48 Folder and file name
3:37 Keyframe the move
5:46 Keyframe the rotation
9:17 Keyframe the scale
11:00 Render the animation
11:56 Add an area light
12:57 Track To constraint
13:42 Light power
14:39 Three colours on the cube
16:50 Render version 2
```
