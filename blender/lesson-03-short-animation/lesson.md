---
title: Short Animation Assignment
program: Blender
lesson: 3
blurb: Animate the default cube for 250 frames so it moves, rotates and changes size, then render and hand in an MP4.
---
You will animate the default cube for 250 frames (about 10 seconds), then render it as an MP4 video. The cube must move, rotate and change size at least once each.

**What you hand in on Google Classroom**

- Your Blender file: `lastname_animation.blend`
- Your rendered video: `lastname_animation.mp4`

Save early and often. If Blender crashes before you save, your work is lost.

| Colour | Meaning |
| --- | --- |
| Green | Safe to change. No real effect on playback or render time. |
| Amber | Raises the load a little. Fine at the values given. |
| Red | Use with caution. Big effect on speed or memory. |

The only setting with a real effect on render time is **Render Engine**. Use **EEVEE**, not Cycles.

```brief
Part 1 · Set up the scene
1A · New file | File → New → General | Save As lastname_animation.blend
1B · Frame range | Start 1 · End 250 | Frame Rate 24 fps
Part 2 · Keyframe the cube
2A · Frame 1 | Right-click Location → Insert Keyframes
2B · Frame 60 · move | Location X 3 · key
2C · Frame 120 · rotate | Rotation Z 90 · key
2D · Frame 180 · scale | Scale 2, 2, 2 · key
2E · Frame 250 · back home | Location 0 · Rotation 0 · Scale 1 · key
Part 3 · Preview and adjust
3A · Play | Shift+← then Space
3B · Fix keys | Re-key · drag diamonds · delete
Part 4 · Camera and light
4A · Camera view | View → Cameras → Active Camera
4B · Frame the shot | N → View → Camera to View on, then off
4C · Light | Power 1000 W → 2000 W if dark
Part 5 · Render the video
5A · Engine | EEVEE, not Cycles
5B · Output | 1920 × 1080 · 50% · Frames 1–250
5C · File | folder + lastname_animation_ | Media Type Video
5D · Encoding | MPEG-4 · H.264 · Medium Quality
5E · Render | Render → Render Animation · watch it
```

## Part 1 · Set up the scene

### 1A · Start and save a new file

1. Open Blender and choose **General**. You see a cube, a camera and a light.
2. Choose **File → Save As**, name it `lastname_animation.blend`, and save it in your class folder. The file name now shows at the top of the Blender window. (Shortcut: Ctrl+Shift+S)

### 1B · Frame range

| Panel | Field | Value |
| --- | --- | --- |
| **Output → Format** | Frame Rate | 24 fps |
| **Output → Frame Range** | Frame Start | 1 |
|  | End | 250 |

1. Open **Output Properties** (printer icon on the right).
2. Check the values in the table. A new file is already 250 frames long, so you may not need to change anything.
3. If **End** is not 250, or your teacher gave a different length, double-click it, type the number and press **Enter**. The **End** box at the right of the Timeline changes to match.

**How long will my video be?** Divide the number of frames by 24.

| End frame | Video length |
| --- | --- |
| 120 | 5 seconds |
| 240 | 10 seconds |
| 250 (default) | about 10.4 seconds |
| 360 | 15 seconds |

- [ ] The file name shows at the top of the window
- [ ] The Timeline shows Start 1 and End 250

## Part 2 · Keyframe the cube

A keyframe saves where the cube is, how it is turned and how big it is on one frame. Blender fills in the frames between your keyframes.

| Frame | Change | Location X | Rotation Z | Scale X, Y, Z |
| --- | --- | --- | --- | --- |
| 1 | start | 0 m | 0° | 1 |
| 60 | move | 3 m | 0° | 1 |
| 120 | rotate | 3 m | 90° | 1 |
| 180 | scale | 3 m | 90° | 2 |
| 250 | back home | 0 m | 0° | 1 |

You can pick your own numbers, as long as the cube moves, rotates and changes size.

### 2A · First keyframe

1. Click the cube. It gets an orange outline.
2. Type **1** in the current-frame box at the top right of the Timeline.
3. Choose **View → Sidebar** and click the **Item** tab. (Shortcut: N)
4. Right-click **Location** and choose **Insert Keyframes**. The Location fields turn yellow and a diamond appears in the Timeline at frame 1. (Shortcut: hover over the viewport and press I)
5. Do the same for **Rotation** and **Scale**.

### 2B to 2E · The other keyframes

For each row of the table after frame 1:

1. Type the frame number into the current-frame box.
2. Type the new values in the N panel. The fields turn orange: the change isn't saved yet.
3. Right-click each field you changed and choose **Insert Keyframes**. The fields turn yellow.

**Remember:** change the frame first, then change the cube, then key it. If a field is orange when you change frames, the change is lost.

- [ ] Five diamonds in the Timeline: frames 1, 60, 120, 180 and 250
- [ ] Every N panel field is yellow when you are on one of those frames

## Part 3 · Preview and adjust

Watch your animation before you render it. Fixing things now is much faster than rendering twice.

### 3A · Play it

1. Click the **Jump to Endpoint** button (the double arrow at the left of the play buttons) to go to frame 1. (Shortcut: Shift+Left Arrow)
2. Click **Play**. The cube moves, turns and grows. Click **Pause** to stop. (Shortcut: Space)

### 3B · Fix keyframes

| To… | Do this |
| --- | --- |
| Change a keyframe | Go to that frame, change the value, and key it again. The new key replaces the old one. (Shortcut: Up and Down Arrow jump between keys) |
| Move a keyframe | Drag its diamond left or right in the Timeline. |
| Delete a keyframe | Click its diamond, then choose **Key → Delete Keyframes**. The diamond disappears. (Shortcut: X) |

**Optional: steady motion.** By default the cube speeds up and slows down at each keyframe. For steady, robot-like motion, hover over the Timeline, choose **Select → All**, then **Key → Interpolation Mode → Linear**. Play it again to see the change. (Shortcut: A, then T → Linear)

**Challenge ideas:** add more keyframes, animate a second object, or make the cube bounce by moving it up and down several times.

- [ ] On Play, the cube moves, rotates and grows, then returns home

## Part 4 · Camera and light

The render only shows what the camera sees, so check that the cube stays in view for the whole animation.

### 4A · Look through the camera

1. Choose **View → Cameras → Active Camera**. The view jumps to the camera and a frame appears around the shot. (Shortcut: Numpad 0)
2. Click **Play**. If the cube leaves the frame at any point, the camera needs to move.

### 4B · Frame the shot

1. In the N panel, click the **View** tab and tick **Camera to View**.
2. Orbit and zoom. The camera moves with you. Frame the shot so the cube stays in view.
3. Untick **Camera to View** so you don't bump it later.

### 4C · Light

| Panel | Field | Value |
| --- | --- | --- |
| **Light** | Power | 1000 W (raise to about 2000 W if the scene is too dark) |

1. Click the **Light** in the Outliner and open **Object Data Properties** (green light-bulb icon).
2. Click the fourth shading button, **Rendered**, at the top right of the viewport, to see roughly what the render will look like. (Shortcut: Z → Rendered)
3. If the scene is too dark, raise **Power**. The scene brightens as you type.

- [ ] In camera view, the cube stays in the frame for all 250 frames
- [ ] In Rendered view, the cube is clearly lit

## Part 5 · Render the video

Rendering turns each of your 250 frames into a picture and joins them into one MP4 video. Save first. (Shortcut: Ctrl+S)

### 5A · Render engine

| Panel | Field | Value |
| --- | --- | --- |
| **Render** | Render Engine | **EEVEE** |

1. Open **Render Properties** (camera-back icon) and set **Render Engine**. EEVEE is much faster than Cycles and looks good for this project.

### 5B · Size and length

| Panel | Field | Value |
| --- | --- | --- |
| **Output → Format** | Resolution X | 1920 px |
|  | Resolution Y | 1080 px |
|  | % | 50% |
| **Output → Frame Range** | Frame Start | 1 |
|  | End | 250 |

1. Open **Output Properties** and set the **%** box. 50% renders a smaller video much faster.

### 5C · Where the video is saved

| Panel | Field | Value |
| --- | --- | --- |
| **Output → Output** | Folder | your class folder + `lastname_animation_` |
|  | Media Type | **Video** |

1. The path box starts as `/tmp\`. Don't leave it like that, or your video is hard to find.
2. Click the **folder icon**, go to your class folder, type `lastname_animation_` in the file name box at the bottom, and click **Accept**. The path box shows your folder.
3. Change **Media Type** from **Image** to **Video**. The **Encoding** panel appears.

### 5D · Encoding

| Panel | Field | Value |
| --- | --- | --- |
| **Output → Encoding** | Container | **MPEG-4** |
| **Encoding → Video** | Video Codec | **H.264** |
|  | Output Quality | **Medium Quality** |

Everything else stays at its defaults. Save again. (Shortcut: Ctrl+S)

### 5E · Render

1. Choose **Render → Render Animation**. A window opens and the frame counter at the top shows your progress. (Shortcut: Ctrl+F12)
2. Leave Blender alone until it reaches the last frame. Press **Esc** only if you need to cancel.
3. Close the render window. Your video is in your class folder, with the frame numbers added to its name, for example `lastname_animation_0001-0250.mp4`.
4. Open the video and watch it before you hand it in.

- [ ] One `.mp4` file is in your class folder
- [ ] The video plays from start to finish

## Troubleshooting and hand-in

| Problem | Fix |
| --- | --- |
| The cube doesn't move when I play | You changed it but didn't key it. Go to the frame, change the cube, Insert Keyframes. |
| The render is just black | The camera isn't pointing at the cube, or the light is too weak. Redo Part 4. |
| I got 250 PNG pictures instead of a video | Media Type is Image. Change it to Video (5C) and render again. |
| I can't find my video | The path was left as `/tmp\`. On Windows, look in `C:\tmp`. Set the path to your class folder next time. |
| The video stops early or runs too long | Check End in Output Properties. It must match the length you want. |
| Rendering is very slow | Lower % to 50% or 25%, and check the engine is EEVEE, not Cycles. |

**Before you hand in**

- [ ] The animation is 250 frames (or the length your teacher set)
- [ ] The cube moves, rotates and changes size
- [ ] The cube stays in the camera view the whole time
- [ ] The video plays from start to finish
- [ ] The `.blend` file and the `.mp4` video are both uploaded to Google Classroom
