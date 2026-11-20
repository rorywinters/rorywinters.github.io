---
title: 2D Bouncing Ball with a Squashed Bottom
program: Blender
lesson: 2
blurb: A flat red ball drops, squashes flat on the floor, pops round and loops, then gets sound effects and an explosion.
---
A flat red circle drops onto a floor line, squashes wide with a flat bottom when it hits, pops round as it leaves, and loops forever. The camera looks straight at it, so it reads as 2D animation. One bounce takes 23 frames at 24 fps (about one second).

You will use three ideas that work in any animation program:

- **Keyframes** on Location to move the ball up and down
- **The Graph Editor** to make the ball hit the floor hard instead of floating
- **A squash** when it hits, using one of three options: super simple, intermediate or good

| Colour | Meaning |
| --- | --- |
| Green | Safe to change. No real effect on playback or render time. |
| Amber | Raises the load a little. Fine at the values given. |
| Red | Use with caution. Big effect on speed or memory. |

This lesson has no red settings. It's a light scene.

**Links for this lesson:** Part 6 bounce sounds: [pixabay.com/sound-effects](https://pixabay.com/sound-effects/search/ball%20bounce/) · Part 6 music: [pixabay.com/music](https://pixabay.com/music/)

```brief
Part 1 · Set up the scene
1A · New file | Delete the Cube
1B · Floor | Cube → Dimensions 12 × 0.2 × 0.2 | Location Z −0.1 · rename Floor
1C · Camera | Location 0, −10, 2.2 · Rotation 90, 0, 0 | Orthographic · Scale 10
1D · Flat look | Workbench · Lighting Flat · Color Object
Part 2 · Make the ball
2A · Mesh Circle | 32 verts · 0.5 m · N-Gon | Z 0.5 · Rot X 90 · red
2B · Apply Rotation | Object → Apply → Rotation | N panel Rotation X now 0
2C · Origin to bottom | Origin to 3D Cursor | Location Z now 0
Part 3 · Bounce the ball
3A · Frames | 24 fps · Start 1 · End 23
3B · Location Z keys | F1: 4 · F12: 0 · F13: 0 · F24: 4
3C · Hit hard | Graph Editor · keys 12–13 | Handle Type → Vector · not Linear
Part 4 · Squash (pick one option)
4A · Option 1 | Scale keys F12–13: X 1.2 · Z 0.8
4B–4D · Option 2 | Shape key Squash · bottom 7 verts Z 0 | Value 0 → 1 at F12–13
4E–4F · Option 3 | Option 2 + Stretch key | X 0.85 · Z 1.2 at F11, F15
Part 5 · Loop and render
5A · Loop | Graph Editor · Make Cyclic | End 92 (4 bounces)
5B · Output | 1920 × 1080 · Video · MPEG-4 · H.264
5C · Render | Render Animation
Part 6 · Sound and explosion
6A · Editing file | File → New → Video Editing · same fps
6B–6D · Sound | Movie strip · bounce sounds on hits | music fades in
6E–6F · Explosion | 5 pictures after the last hit | Audio Codec AAC · render
```

## Part 1 · Set up the scene

You build a thin floor and point an orthographic camera straight at it, so everything looks flat.

### 1A · Start a new file

1. Choose **File → New → General**.
2. Click the **Cube**, then choose **Object → Delete**. The cube disappears. (Shortcut: X, Delete)

Leave the **Camera** and **Light**.

### 1B · Floor

| Setting | Axis | Value |
| --- | --- | --- |
| **Location** | X | 0 m |
|  | Y | 0 m |
|  | Z | −0.1 m |
| **Rotation** | X, Y, Z | 0° |
| **Dimensions** | X | 12 m |
|  | Y | 0.2 m |
|  | Z | 0.2 m |

Scale updates on its own when you type Dimensions.

1. Choose **Add → Mesh → Cube**.
2. Choose **View → Sidebar** and click the **Item** tab. (Shortcut: N)
3. Type the values from the table. The cube becomes a long thin bar whose top sits exactly at Z 0, the floor line.
4. In the **Outliner**, double-click **Cube** and rename it **Floor**.

### 1C · Camera

| Setting | Axis | Value |
| --- | --- | --- |
| **Location** | X | 0 m |
|  | Y | −10 m |
|  | Z | 2.2 m |
| **Rotation** | X | 90° |
|  | Y | 0° |
|  | Z | 0° |

| Panel | Field | Value |
| --- | --- | --- |
| **Camera → Lens** | Type | **Orthographic** |
|  | Orthographic Scale | 10 |

1. Click **Camera** in the Outliner and type the Location and Rotation values.
2. Open **Object Data Properties** (green camera icon) and set the **Lens** values.
3. Choose **View → Cameras → Active Camera**. The view jumps to the camera, with the floor bar across the bottom. (Shortcut: Numpad 0)

Orthographic means no perspective. Nothing shrinks with distance, which is what makes the scene look 2D.

### 1D · Flat 2D look

| Panel | Field | Value |
| --- | --- | --- |
| **Render** | Render Engine | **Workbench** |
| **Render → Lighting** |  | **Flat** |
| **Render → Color** |  | **Object** |

1. Open **Render Properties** (camera-back icon) and set the values.
2. Click the fourth shading button, **Rendered**, at the top right of the viewport. The floor becomes a flat shape with no shading.
3. Select **Floor**, open **Object Properties** (orange square) → **Viewport Display**, and set **Color** to a dark grey. The floor turns grey.

Workbench renders almost instantly, so you can play and render without waiting.

- [ ] A grey floor bar runs across the bottom of the camera view
- [ ] The view is flat, with no shading

## Part 2 · Make the ball

The ball is a filled mesh circle standing up to face the camera, with its origin at the bottom so it squashes against the floor.

### 2A · Add the circle

| Add Circle (operator panel) | Value |
| --- | --- |
| Vertices | 32 |
| Radius | 0.5 m |
| Fill Type | **N-Gon** |
| Align | World |
| Location X, Y | 0 m |
| Location Z | 0.5 m |
| Rotation X | 90° |
| Rotation Y, Z | 0° |

1. Choose **Add → Mesh → Circle**.
2. Click **Add Circle** in the bottom-left corner to open the operator panel, and type the values. A filled disc stands up, resting on the floor line.
3. Rename **Circle** to **Ball** in the Outliner.
4. In **Object Properties → Viewport Display**, set **Color** to red. The disc turns red.

> **Pick the right one:** use **Add → Mesh → Circle**, not **Add → Curve → Circle**. The mesh circle's operator panel has **Vertices** and **Fill Type**. The curve circle has only Radius and no fill, so it shows as a thin outline.

### 2B · Clean up the rotation

1. With **Ball** selected, choose **Object → Apply → Rotation**. (Shortcut: Ctrl+A → Rotation)

**What changed:** the ball doesn't move, but in the N panel **Rotation X** now reads **0°** instead of 90°. With rotation applied, the ball's **Z** means up and down on screen, so the squash in Part 4 goes toward the floor, not toward the camera.

### 2C · Move the origin to the bottom

The small orange dot in the middle of the ball is the origin. Scale always squashes toward the origin, so right now a squash would lift the ball off the floor.

1. Check the 3D cursor (red and white ring) is at the floor line, at the bottom of the ball. If you moved it, choose **Object → Snap → Cursor to World Origin**.
2. Choose **Object → Set Origin → Origin to 3D Cursor**.

The orange dot jumps to the bottom of the ball, and **Location Z** in the N panel now reads **0 m**. The ball itself stays put.

- [ ] A red disc sits on the floor line
- [ ] N panel: Rotation 0, 0, 0 and Location Z 0, with the orange dot at the bottom

## Part 3 · Bounce the ball

### 3A · Frame rate and range

| Panel | Field | Value |
| --- | --- | --- |
| **Output → Format** | Frame Rate | 24 fps |
| **Output → Frame Range** | Frame Start | 1 |
|  | End | 23 |
|  | Step | 1 |

1. Open **Output Properties** (printer icon) and set the values. The Timeline now runs 1 to 23.

One bounce is 23 frames. Frame 24 matches frame 1, so ending at 23 stops the loop showing the top position twice.

### 3B · Location keys

| Frame | Location Z | Ball is… |
| --- | --- | --- |
| 1 | 4 m | at the top |
| 12 | 0 m | touching the floor |
| 13 | 0 m | still touching (holds for the squash) |
| 24 | 4 m | back at the top |

For each row:

1. Type the frame number into the current-frame box (top right of the Timeline).
2. Type the **Location Z** value in the N panel.
3. Right-click **Location Z** and choose **Insert Single Keyframe**. The field turns yellow and a diamond appears. (Shortcut: hover and press I, which keys X, Y and Z together)

Frame 24 is past the end of the range. You can still type it in the box.

Click **Play**. The ball moves, but it slows down as it reaches the floor, like landing on a cushion. You fix that next.

### 3C · Make it hit hard

1. Drag the top edge of the Timeline up to make it taller.
2. Click the **Editor Type** button at the top left of the Timeline and choose **Graph Editor**.
3. Choose **View → Frame All** to see the whole curve. (Shortcut: Home)
4. In the channel list, open the arrows beside the ball's name and **Object Transforms**, then click **Z Location**. You see a smooth wave that flattens out at the bottom.
5. Click the key at frame 12, then Shift+click the key at frame 13.
6. Choose **Key → Handle Type → Vector**. (Shortcut: V → Vector)

The bottom of the curve turns into sharp corners. Click **Play**: the ball now speeds up all the way into the floor and snaps back up, while still slowing gently at the top.

7. Switch the editor back to **Timeline**.

> **Pick the right one:** use **Key → Handle Type → Vector**, not **Key → Interpolation Mode → Linear**. Linear turns the whole curve into straight lines and the ball loses its slow-down at the top. Vector only sharpens the two keys you selected.

- [ ] Four Location Z diamonds (1, 12, 13 and 24)
- [ ] The Graph Editor curve has sharp corners at the bottom
- [ ] On Play, the ball hits the floor hard and floats at the top

## Part 4 · Squash the bottom: pick one option

Type **12** in the current-frame box. The ball touches the floor as a perfect circle, so nothing shows it hit anything. Pick one option to fix that.

| Option | What you see | Work |
| --- | --- | --- |
| **1 · Super simple** | The ball squashes wide. The bottom stays round. | 6 rows of Scale keys |
| **2 · Intermediate** | The ball squashes wide with a flat bottom. | 1 shape key, 6 rows of keys |
| **3 · Good** | Option 2, plus the ball stretches tall while it falls and rises. | 2 shape keys, 8 rows of keys |

Option 3 builds on Option 2. Option 1 is separate. If you move up from Option 1, right-click a **Scale** field, choose **Clear Keyframes**, and set Scale back to 1 first.

### 4A · Option 1 · Scale keys

| Frame | Scale X | Scale Z |
| --- | --- | --- |
| 1 | 1 | 1 |
| 11 | 1 | 1 |
| 12 | 1.2 | 0.8 |
| 13 | 1.2 | 0.8 |
| 14 | 1 | 1 |
| 24 | 1 | 1 |

Scale Y stays 1. For each row, type the frame, type Scale X and Z, then right-click **Scale** and choose **Insert Keyframes**. (Shortcut: hover and press I)

Click **Play**. The ball squashes down onto the floor, because its origin is at the bottom.

### 4B · Option 2 · Make the shape keys

1. With **Ball** selected, open **Object Data Properties** (green triangle icon).
2. In **Shape Keys**, click **+**. **Basis** appears: the round shape.
3. Click **+** again. **Key 1** appears. Double-click it and rename it **Squash**. Leave it highlighted.

> **Pick the right one:** Shape Keys are in **Object Data Properties** (green triangle), not **Object Properties** (orange square). If you see Transform and Relations, you're in the wrong tab.

### 4C · Option 2 · Squash it and flatten the bottom

| Transform Pivot Point | Selection | Scale X | Scale Z |
| --- | --- | --- | --- |
| 3D Cursor | All vertices | 1.2 | 0.8 |
| 3D Cursor | Bottom 7 vertices | 1.15 | 0 |

1. Choose **Edit Mode** (Shortcut: Tab). In the header, set **Transform Pivot Point** to **3D Cursor**. The icon changes to the cursor symbol.
2. For each row, select the vertices (**Select → All**, or **Select → None** then drag a box around the lowest 7 dots). Choose **Mesh → Transform → Scale**, press **X**, type the value, press **Enter**. Do the same with **Z**. (Shortcut: S, X, value, Enter)
3. Set **Transform Pivot Point** back to **Median Point** and return to **Object Mode**. The ball looks round again, because Squash's **Value** is 0.
4. Drag the **Value** slider from **0** to **1** and watch the ball squash flat onto the floor. Set it back to **0**.

### 4D · Option 2 · Key the squash

| Frame | Squash Value |
| --- | --- |
| 1 | 0 |
| 11 | 0 |
| 12 | 1 |
| 13 | 1 |
| 14 | 0 |
| 24 | 0 |

For each row, type the frame, type the **Value** next to Squash, then right-click it and choose **Insert Keyframe**. (Shortcut: hover and press I)

### 4E · Option 3 · Make the Stretch key

| Transform Pivot Point | Selection | Scale X | Scale Z |
| --- | --- | --- | --- |
| 3D Cursor | All vertices | 0.85 | 1.2 |

1. In **Shape Keys**, click **+** and rename the new key **Stretch**.
2. In Edit Mode, set the pivot to **3D Cursor**, choose **Select → All**, and scale using the table, the same way as 4C. The ball gets tall and thin.
3. Set the pivot back to **Median Point** and return to Object Mode. Drag Stretch's **Value** from 0 to 1 to check it, then set it back to **0**.

### 4F · Option 3 · Key the stretch

| Frame | Stretch Value |
| --- | --- |
| 1 | 0 |
| 9 | 0 |
| 11 | 1 |
| 12 | 0 |
| 13 | 0 |
| 15 | 1 |
| 18 | 0 |
| 24 | 0 |

Key these the same way as 4D. The Squash keys stay as they are.

Click **Play**. The ball stretches as it nears the floor, squashes flat when it hits, and stretches again as it leaves.

Whichever option you pick, the keys at frames 1 and 24 make the loop in Part 5 work.

- [ ] At frame 12 the ball is wider and (Options 2–3) flat on the bottom
- [ ] At frame 24 it is round again

## Part 5 · Loop and render

### 5A · Bounce four times

| Panel | Field | Value |
| --- | --- | --- |
| **Output → Frame Range** | Frame Start | 1 |
|  | End | 92 |

1. Switch the Timeline to the **Graph Editor** again.
2. Hover over the channel list and choose **Select → All**. All the channels highlight. (Shortcut: A)
3. Choose **Channel → Extrapolation Mode → Make Cyclic (F-Modifier)**. The curves now repeat past frame 24 as a row of waves. (Shortcut: Shift+E)
4. Switch back to **Timeline** and set **End** to **92** in Output Properties.

Click **Play**. The ball bounces four times. Each bounce is 23 frames, so 4 × 23 = 92.

> **Pick the right one:** use **Make Cyclic (F-Modifier)**, not **Linear Extrapolation**. Linear Extrapolation makes the ball fly off the top of the screen.

### 5B · Output settings

| Panel | Field | Value |
| --- | --- | --- |
| **Output → Format** | Resolution X | 1920 px |
|  | Resolution Y | 1080 px |
|  | % | 100% |
| **Output → Output** | Folder | a folder you can find + `bounce` |
|  | Media Type | **Video** |
| **Output → Encoding** | Container | **MPEG-4** |
| **Encoding → Video** | Video Codec | **H.264** |

Everything else stays at its defaults.

1. Type the resolution values.
2. Under **Output**, click the folder icon, pick a folder (Documents works), add a file name such as **bounce**, and click **Accept**.
3. Change **Media Type** from **Image** to **Video**. The **Encoding** panel appears. Set Container and Video Codec from the table.

### 5C · Render

1. Choose **Render → Render Animation**. A window opens and counts through the frames. (Shortcut: Ctrl+F12)
2. When it reaches frame 92, close the window and play the `.mp4` in your folder.

**Try next:** key **Location X** from **−4 m** at frame 1 to **4 m** at frame 92, and the ball bounces across the screen. Set that channel's Interpolation to **Linear** so it moves at a steady speed.

- [ ] The ball bounces four times in Play
- [ ] One `.mp4` file plays the four bounces

## Part 6 · Sound and the explosion

You bring the rendered ball video into Blender's Video Sequencer, add bounce sounds and music, and end with an explosion.

### 6A · Start an editing file

| Panel | Field | Value |
| --- | --- | --- |
| **Output → Format** | Resolution X | 1920 px |
|  | Resolution Y | 1080 px |
|  | Frame Rate | **the same as your ball video** (24 fps, or 6 fps if you rendered it slow) |

1. Choose **File → New → Video Editing**. The screen changes to a preview window and a Sequencer timeline.
2. Save the file in the same folder as your ball video.
3. Set the values in **Output Properties**.

The editing file's Frame Rate must match the video. If it doesn't, Blender draws the video strip shorter or longer on the timeline.

### 6B · Add the ball video

| How you rendered the ball | Hit (squash) frames | Trim the video end to |
| --- | --- | --- |
| No Time Stretching (24 fps or 6 fps) | 12, 35, 58, 81 | 81 |
| Time Stretching Old 1, New 4 | 45, 137, 229, 321 | 321 |

1. Choose **Add → Movie**, pick your `.mp4`, and click **Add Movie Strip**. A blue strip appears on the timeline.
2. Drag the strip so it starts at frame **1**.
3. Drag the strip's right edge back to the trim frame from the table. The video now ends on the last squash, where the explosion starts.

### 6C · Bounce sounds

| Sidebar → Strip tab | Field | Value |
| --- | --- | --- |
| **Sound** | Volume | 2 (starts at 1; raise it for louder) |

Download one short ball bounce sound from [Pixabay sound effects](https://pixabay.com/sound-effects/search/ball%20bounce/). It's free, needs no account, and needs no credit. Save it in your folder.

1. Type the first hit frame from the 6B table into the current-frame box.
2. Choose **Add → Sound** and pick your bounce file. A green strip appears at the playhead.
3. Choose **Strip → Duplicate** and drag the copy to the next hit frame. Repeat for every hit. (Shortcut: Shift+D)
4. Open the sidebar's **Strip** tab (Shortcut: N) and set **Volume** from the table.

To change every bounce at once, select all the sound strips, hold **Alt** while you type the Volume, and press **Enter**. Line up the start of each sound's wave with its squash frame.

### 6D · Background music that fades in

| Frame | Music Volume |
| --- | --- |
| First frame of the music | 0.1 |
| About 4 seconds later | 1 |

Free music is on [Pixabay music](https://pixabay.com/music/). Add it with **Add → Sound** on its own channel.

- Quick way: select the music strip, choose **Add → Fade → Fade In**, and set **Duration** in the operator panel at the bottom left.
- Custom way: key the music's **Volume** at each row of the table. Right-click **Volume** and choose **Insert Keyframe**. The field turns yellow.

### 6E · The explosion

Your teacher shares the five explosion pictures in Google Classroom. Save them to your folder as **explosion_1** to **explosion_5**.

| Editing frame rate | How to add the pictures | Each picture lasts |
| --- | --- | --- |
| 6 fps | **Add → Image/Sequence**, select all five, click **Add Image Strip**. You get one strip. | 1 frame |
| 24 fps | **Add → Image/Sequence**, one picture at a time. In the sidebar **Strip** tab, set **Time → Duration** to 3. | 3 frames |

1. Put the playhead one frame after the end of the video (82, or 322 with Time Stretching).
2. Add the pictures as the table says, in order, right after the video.
3. Optional: add a boom sound from Pixabay at the first explosion picture.

### 6F · Render the final video

| Panel | Field | Value |
| --- | --- | --- |
| **Output → Format** | Frame Rate | same as your ball video |
| **Output → Frame Range** | End | the last frame of your last strip |
| **Output → Output** | Folder | your folder |
|  | Media Type | **Video** |
| **Output → Encoding** | Container | **MPEG-4** |
| **Encoding → Video** | Video Codec | **H.264** |
| **Encoding → Audio** | Audio Codec | **AAC** |

1. Move the playhead to the end of your last strip and type that frame number into **End**.
2. Set the rest of the table. **Audio Codec** starts at **No Audio**, so if you skip it the video is silent.
3. Choose **Render → Render Animation**. (Shortcut: Ctrl+F12)

- [ ] Bounce sounds line up with the squashes
- [ ] The explosion plays after the last bounce
- [ ] The final `.mp4` has sound

## Troubleshooting

| Problem | Fix |
| --- | --- |
| The ball squashes but doesn't go up | The keys at frames 1 and 24 were saved with Location Z 0. Go to frame 1, type 4, right-click → Insert Single Keyframe. Same at frame 24. |
| Can't find Z Location in the Graph Editor | Open the arrows beside the ball's name and Object Transforms. |
| Can't pick out the keys at 12 and 13 | Hover over the graph, Select → All, right-click → Handle Type → Vector. Doing every key is fine. |
| Two diamonds joined by a bar in the Timeline | The value stays the same between those keys (the ball holding on the floor). That's correct. |
| The ball pauses at the top every loop | End is 24. Set it to 23. |
| The ball is red on screen but grey in the render | Render Properties → Color → Object. |
| I want to watch it play slowly | Set Frame Rate to Custom, FPS 12. Set it back to 24 before rendering. |
| I want smooth slow motion in the video | Keep 24 fps. In Output → Time Stretching set Old 1, New 4, and multiply End by 4. |
| No FFmpeg Video in File Format | Blender 5.2 uses Media Type → Video instead. |
| The video strip looks shorter or longer in the editor | The editing file's Frame Rate doesn't match the video's. Make them the same. |
| The final video has no sound | Encoding → Audio → Audio Codec → AAC. |
