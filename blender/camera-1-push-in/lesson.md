---
title: Camera Moves 1: Your First Camera Push-In
program: Blender
blurb: The first of five camera lessons. Aim a camera at a scene, keyframe a slow push-in toward it, and render a 5-second MP4 with EEVEE. About 10 minutes.
---
You set up a camera, then animate it gliding slowly toward the scene. This is a **push-in**, the most common camera move in film, and it's the first step toward a walk-through video of your own room or scene. These steps are for Blender 5.2.

- **Learning objective:** We are learning to animate a camera so it moves smoothly toward a scene.
- **Prior knowledge:** [Animating a Cube](../lesson-00-animating-a-cube/) (keyframes with the **I** key, the Timeline, rendering an MP4)
- **File you need:** the example room, [camera_practice_scene.blend](camera_practice_scene.blend) (click to download). You use it in all five camera lessons.
- **Time:** about 10 minutes

### Success criteria

- I can look through the active camera and frame my scene.
- I can set a camera's position and focal length by typing values.
- I can keyframe the camera so it glides toward the scene.
- I can render a 5-second MP4 of my camera move with EEVEE.

### Key vocabulary

| Word | Meaning |
| --- | --- |
| **Active camera** | The camera Blender films through when it renders. A scene can have many cameras, but only one is active at a time. |
| **Camera view** | Looking through the active camera. The dark border shows what will be in the video. |
| **Push-in** | A camera move that glides toward the subject, like walking into a room. |
| **Focal length** | How zoomed the lens is, in mm. Low numbers (24 mm) are wide; high numbers (50 mm and up) zoom in. |
| **Ease in / ease out** | Starting slowly and slowing down at the end, instead of starting and stopping with a jerk. |
| **Render engine** | The part of Blender that turns the scene into pictures. EEVEE is fast; Cycles is slower and more realistic. |

**The camera series:** 1 Push-in (this lesson) · 2 Smooth moves and orbits · 3 Fly-through on a path · 4 Lighting for a moving camera · 5 Cinematic polish

| Colour | Meaning |
| --- | --- |
| Green | Safe to change. No real effect on playback or render time. |
| Amber | Raises the load a little. Fine at the values given. |
| Red | Use with caution. Big effect on speed or memory. |

**Resolution %** and **Output Quality** (Part 4) are amber. This lesson has no red settings.

### Where things are

| Thing | Where on the screen |
| --- | --- |
| **Outliner** | Top-right of the window. Click an object's name to select it. |
| **Sidebar** (N panel), **Item** tab | Right edge of the 3D Viewport. **View → Sidebar** (Shortcut: N) |
| **Properties editor** | Bottom-right, under the Outliner. A column of icons down its left side. |
| **Object Data Properties** (for a camera) | Properties editor, the green movie-camera icon |
| **Render Properties** | Properties editor, the camera-back icon near the top |
| **Output Properties** | Properties editor, the printer icon, just under Render Properties |
| **Timeline** | Bottom of the window, with Play buttons, the blue playhead and **Start** / **End** boxes |

If a panel is missing, open it from the **View** menu at the top of the 3D Viewport. If the Timeline is only a thin strip, drag its top edge up.

```brief
Part 1 · Open the scene and the camera view
1A · Open | [camera_practice_scene.blend](camera_practice_scene.blend) | Save As camera1_yourname
1B · Camera view | Outliner → Camera | View → Cameras → Active Camera (Numpad 0)
Part 2 · Set the start shot
2A · Position | Location 0 · −14 · 2 | Rotation 85° · 0 · 0
2B · Lens | Object Data (green camera) → Lens | Focal Length 35 mm
Part 3 · Keyframe the push-in
3A · Length | Timeline Start 1 · End 120 | 24 fps = 5 s
3B · Start key | Frame 1 · hover Location · I | Fields turn yellow
3C · End key | Frame 120 · Location Y −7 · I | Play: camera glides in
Part 4 · Render the MP4
4A · EEVEE | Render Properties → Render Engine EEVEE
4B · Output | 1920 × 1080 · 50% (amber) | Media Type Video · MPEG-4 · H.264
4C · Render | Path camera1_pushin_v1 | Render → Render Animation (Ctrl+F12)
Extra · Finished early? (optional)
Rise up | Frame 1 · key Rotation | Frame 120 · Z 4 · Rot X 75° · key both
Lens change | Frame 1 · key Focal Length 35 | Frame 120 · 50 mm · key
```

## Part 1 · Open the scene and the camera view

### 1A · Open and save your copy

1. Download [camera_practice_scene.blend](camera_practice_scene.blend) and open it with **File → Open**. You see a room made of simple shapes: a bed, a desk and chair, a bookshelf, a plant, and a globe on a round table in the middle.
2. Choose **File → Save As** and name it `camera1_yourname.blend`. The new name appears at the top of the window.

Saving your own copy keeps the example file clean for the next lesson.

### 1B · Look through the camera

1. Click **Camera** in the **Outliner** (top-right). It turns orange in the viewport.
2. Choose **View → Cameras → Active Camera**. (Shortcut: Numpad 0, with the mouse over the viewport)

The viewport now shows what the camera sees, inside a frame with a darker border. Everything outside the border won't be in the video.

> **Pick the right one:** if **Camera** isn't in the Outliner, choose **Add → Camera**. A new camera appears at the 3D cursor. Then choose **View → Cameras → Set Active Object as Camera** so Blender films through it.

To get out of camera view, move around with the middle mouse button as usual. **View → Cameras → Active Camera** brings you back.

- [ ] You see the scene inside the camera frame, with a dark border around it

## Part 2 · Set the start shot

### 2A · Position the camera

| Setting | Axis | Value |
| --- | --- | --- |
| **Location** | X | 0 m |
|  | Y | −14 m |
|  | Z | 2 m |
| **Rotation** | X | 85° |
|  | Y | 0° |
|  | Z | 0° |

Other fields stay at their defaults.

1. Check **Camera** is still selected in the Outliner.
2. Choose **View → Sidebar** and click the **Item** tab. (Shortcut: N)
3. Type the values from the table, pressing **Enter** after each one.

The camera sits 14 m in front of the scene, at about eye height (2 m), looking straight ahead and tipped slightly down. **Rotation X 90°** would look perfectly level; **85°** tips it 5° toward the floor.

> **Looks small?** These numbers fit the example scene. If your scene is bigger or sits somewhere else, change **Location Y** until the whole scene fits in the frame with a little space around it.

### 2B · The lens

| Object Data Properties → Lens | Value |
| --- | --- |
| Type | Perspective |
| Focal Length | 35 mm |

1. With the camera selected, open **Object Data Properties** (the green movie-camera icon in the Properties editor).
2. In the **Lens** panel, type **24** in **Focal Length** and press **Enter**. The view gets wider and you see more of the scene.
3. Type **50**. The view zooms in, like a telephoto lens.
4. Type **35** and press **Enter**. This is the value for this lesson: close to what your eyes see.

Moving the camera closer and changing the focal length both make the scene look bigger, but they look different. A push-in **moves** the camera, so things in front grow faster than things at the back. That's what makes it feel like you're walking in.

- [ ] Looking through the camera, the whole scene fits in the frame
- [ ] Focal Length reads 35 mm

## Part 3 · Keyframe the push-in

| Frame | Location X | Location Y | Location Z |
| --- | --- | --- | --- |
| 1 | 0 m | −14 m | 2 m |
| 120 | 0 m | −7 m | 2 m |

Rotation stays 85°, 0°, 0° the whole time. Only **Location Y** changes.

### 3A · Length of the shot

| Panel | Field | Value |
| --- | --- | --- |
| **Timeline** | Start | 1 |
|  | End | 120 |
| **Output → Format** | Frame Rate | 24 fps |

1. In the **Timeline**, click in **End**, type **120** and press **Enter**. The ruler now ends at 120.
2. Open **Output Properties** (printer icon). Under **Format**, check **Frame Rate** is **24 fps**.

120 frames at 24 frames per second is 5 seconds.

### 3B · Keyframe the start

1. Click **Camera** in the Outliner. The Outliner must show **Camera** highlighted, not another object.
2. Check the blue playhead is on frame **1**.
3. Hover the mouse over the camera's **Location** fields in the N panel and press **I**. The three fields turn **yellow** and a diamond appears in the Timeline. (Or right-click a field → **Insert Keyframes**.)

### 3C · Keyframe the end

1. Drag the playhead to frame **120** (or type **120** in the current-frame box at the right of the Timeline).
2. Type **−7** in **Location Y** and press **Enter**. The field turns **orange**: changed, but not keyed yet. The camera view jumps closer.
3. Hover over the Location fields and press **I**. They turn yellow and a second diamond appears.
4. Go back to frame **1**, stay in camera view and click **Play**. (Shortcut: Spacebar) The camera glides toward the scene. Click **Pause**.

Watch the start and end: the camera eases in slowly and eases out slowly instead of starting and stopping with a jerk. Blender does that on its own. In Lesson 2 you'll learn to control it.

> **Pick the right one:** If pressing **I** opens a menu instead of turning the fields yellow, your mouse is over the viewport or the Timeline. Press **Esc**, move the mouse onto the **Location** fields and press I again.

- [ ] Diamonds at frames 1 and 120 in the Timeline
- [ ] On Play, the camera view glides closer to the scene and stops

## Part 4 · Render the MP4

### 4A · Use EEVEE

| Render Properties | Value |
| --- | --- |
| Render Engine | EEVEE |

1. Open **Render Properties** (the camera-back icon near the top of the Properties editor).
2. Set **Render Engine** to **EEVEE**. If it already says EEVEE, leave it.

EEVEE renders each frame in about a second on the lab laptops, so a 5-second clip is ready in a couple of minutes. Cycles looks more realistic but is much slower, so this series uses EEVEE.

### 4B · Size and video settings

| Output Properties | Field | Value |
| --- | --- | --- |
| **Format** | Resolution X | 1920 px |
|  | Resolution Y | 1080 px |
|  | % (amber) | 50% for tests, 100% for the final |
|  | Frame Rate | 24 fps |
| **Frame Range** | Frame Start | 1 |
|  | End | 120 |
| **Output** | Media Type | **Video** |
| **Encoding** | Container | MPEG-4 |
| **Encoding → Video** | Video Codec | H.264 |
|  | Output Quality (amber) | Medium Quality |

1. Open **Output Properties** (printer icon).
2. Check **Resolution X** and **Y** read **1920** and **1080**, and set **%** to **50** for this test. The dark camera border keeps the same shape.
3. In the **Output** section, change **Media Type** to **Video**. An **Encoding** section appears underneath.
4. Set **Container** to **MPEG-4** and check the rest matches the table.

> **Pick the right one:** older Blender versions have no Media Type. There, set **File Format** to **FFmpeg Video**.

### 4C · Name it and render

| Output Properties | Field | Value |
| --- | --- | --- |
| **Output** | Path | your class folder → `camera1_pushin_v1` |

1. In the **Output** section, click the folder icon beside the path, go to your class folder and click **Accept**.
2. Click at the end of the path, type `camera1_pushin_v1` and press **Enter**.
3. Choose **Render → Render Animation**. (Shortcut: Ctrl+F12) A render window opens and the frame counter at the top counts up to 120.
4. When it reaches 120, close the render window and open your folder. Play `camera1_pushin_v1.mp4`.

> **Pick the right one:** use **Render Animation**, not **Render Image**. Render Image (F12) makes one still picture of the current frame only.

- [ ] The render window counted all the way to frame 120
- [ ] Your MP4 plays a 5-second push-in toward the scene

## Extra · Finished early?

Optional. Try one of these, then render it as `camera1_pushin_v2`.

1. **Rise up:** go to frame **1**, hover over the **Rotation** fields and press **I** (they turn yellow at 85°). Go to frame **120**, set **Location Z** to **4 m** and **Rotation X** to **75°**, then press **I** over Location and again over Rotation. The camera lifts and looks down as it moves in.
2. **Lens change:** go to frame **1**, hover over **Focal Length** (35 mm) and press **I**. It turns yellow. Go to frame **120**, set **Focal Length** to **50 mm** and press **I** again. The camera zooms as it moves.

Play each one and compare it with your v1 video.

## Troubleshooting

| Problem | Fix |
| --- | --- |
| The render shows a different view than you set up | Blender is filming through another camera. Select your camera and choose **View → Cameras → Set Active Object as Camera**. |
| You moved the view and the camera didn't follow | That's normal. Moving around the viewport doesn't move the camera. Type values in the N panel instead. |
| The camera moved, but another object moved too | You keyframed the wrong object. **Edit → Undo**, click **Camera** in the Outliner, and key again. |
| A field stays orange after pressing I | Your mouse wasn't over the fields. Hover on the Location fields and press I again. |
| The camera jumps instead of gliding | One of the keyframes is missing. Check for two diamonds, at 1 and 120. |
| The video is black | The camera is inside an object or facing away. Go to frame 1 and check the camera view. |
| The MP4 isn't in your folder | Check the path in **Output Properties → Output**, and that Media Type says **Video**. |
