---
title: Camera Moves 5: Cinematic Polish
program: Blender
blurb: Lesson 5 of 5. Blur the background with depth of field, add a second camera for a close-up of the desk, cut between the cameras with Timeline markers, and render the finished room tour. About 10 minutes.
---
Your fly-through already moves well and is lit well. Three film tricks make it look finished: **depth of field** (a soft, blurry background), a **cut** to a second camera for a close-up, and **motion blur**. Then you render the final version at full size. These steps are for Blender 5.2.

- **Learning objective:** We are learning to use depth of field, camera cuts and motion blur to make a camera move look like film.
- **Prior knowledge:** [Camera Moves 4: Lighting for a Moving Camera](../camera-4-lighting/) and your `camera4_yourname.blend` file from it
- **Time:** about 10 minutes, plus the final render

### Success criteria

- I can turn on depth of field and focus the camera on an object.
- I can add and aim a second camera by typing values.
- I can use Timeline markers to cut from one camera to another.
- I can render a finished room tour with motion blur at full size.

### Key vocabulary

| Word | Meaning |
| --- | --- |
| **Depth of field** | Only things at one distance are sharp; nearer and farther things blur. It points the viewer's eye at the subject. |
| **Focus object** | The object the camera keeps sharp, even while the camera moves. |
| **F-Stop** | How strong the blur is. Low numbers (1.4) blur a lot; high numbers (8) keep almost everything sharp. |
| **Cut** | An instant switch from one camera to another. |
| **Marker** | A small flag on the Timeline at one frame. A camera can be bound to it. |
| **Motion blur** | The smear on fast-moving things, like in a real video. It makes motion look smooth. |

**The camera series:** [1 Push-in](../camera-1-push-in/) · [2 Smooth moves and orbits](../camera-2-smooth-orbit/) · [3 Fly-through on a path](../camera-3-fly-through/) · [4 Lighting for a moving camera](../camera-4-lighting/) · 5 Cinematic polish (this lesson)

| Colour | Meaning |
| --- | --- |
| Green | Safe to change. No real effect on playback or render time. |
| Amber | Raises the load a little. Fine at the values given. |
| Red | Use with caution. Big effect on speed or memory. |

This lesson's amber and red settings:

- **Depth of Field**, **Motion Blur** and **Rendered shading** are amber.
- The final render at **100%** with Raytracing and Motion Blur is **red** for time: expect several minutes. Render a **50%** test first, and do the 100% render when you have time to leave the laptop alone.

### Where things are

| Thing | Where on the screen |
| --- | --- |
| **Object Data Properties** for a camera | Properties editor, the green movie-camera icon. Only shows while a camera is selected. |
| **Marker** menu | In the Timeline's header, between **View** and **Playback** |
| **Viewport Shading** buttons | Top-right of the 3D Viewport header. The fourth sphere is **Rendered**. |
| **Render Properties**, **Output Properties**, **N panel**, **Outliner** | Same places as in Lesson 1 |

```brief
Part 1 · Depth of field
1A · Open | camera4_yourname.blend | Save As camera5_yourname
1B · Focus | Camera → Object Data → Depth of Field ✓ (amber) | Focus Object Globe · F-Stop 1.4
Part 2 · A second camera
2 · Desk Camera | Add → Camera · rename Desk Camera | Location 1.2 · 1.5 · 1.3 · Rotation 80° · 0 · −40° · 50 mm
Part 3 · Cut with markers
3A · Marker 1 | Frame 1 · Marker → Add Marker | Select Camera · Marker → Bind Camera to Markers
3B · Marker 2 | Frame 150 · Add Marker | Select Desk Camera · Bind Camera to Markers
3C · Check | Camera view · scrub past 150 | View switches to the desk
Part 4 · Final render
4A · Motion Blur | Render Properties → Motion Blur ✓ (amber)
4B · Test | 50% · //camera5_final_test · Ctrl+F12
4C · Final | 100% (red, slow) · //camera5_final_v1 · Ctrl+F12
Extra · Your own scene (optional)
Your room | Same five lessons on your own scene | Push-in · orbit · path · lights · cuts
```

## Part 1 · Depth of field

### 1A · Open your Lesson 4 file

1. Choose **File → Open** and open `camera4_yourname.blend`.
2. Choose **File → Save As** and name it `camera5_yourname.blend`.

### 1B · Focus on the globe

| Camera → Object Data Properties | Field | Value |
| --- | --- | --- |
| **Depth of Field** (amber) | ticked | on |
|  | Focus Object | Globe |
| **Depth of Field → Aperture** | F-Stop | 1.4 |

1. Click **Camera** in the Outliner (fold up **Furniture** if you need to).
2. Open its **Object Data Properties** (green movie-camera icon) and tick **Depth of Field**. Open the panel with its **▶** arrow.
3. Click the **Focus Object** box and choose **Globe**.
4. Open **Aperture** with its **▶** arrow and set **F-Stop** to **1.4**.
5. Look through the camera (Numpad 0) and switch the viewport to **Rendered** shading. Scrub to frame **80**. The globe is sharp; the bed and the back wall are soft and blurry.

Because the focus is locked to the globe, it stays sharp even as the camera walks around it.

> **Pick the right one:** if nothing blurs, you're in Solid shading. Depth of field only shows in **Rendered** shading and in the final video.

- [ ] In Rendered shading, the globe is sharp and the back wall is blurred

## Part 2 · A second camera

| Desk Camera | Setting | Value |
| --- | --- | --- |
| **N panel → Location** | X | 1.2 m |
|  | Y | 1.5 m |
|  | Z | 1.3 m |
| **N panel → Rotation** | X | 80° |
|  | Y | 0° |
|  | Z | −40° |
| **Object Data → Lens** | Focal Length | 50 mm |

1. Go to frame **1** and switch back to **Solid** shading (second sphere) so the viewport stays quick.
2. Choose **Add → Camera**. A new camera appears in the middle of the floor.
3. In the Outliner, double-click its name and rename it **Desk Camera**.
4. In the N panel, type the Location and Rotation from the table. The new camera moves near the table, pointing toward the desk in the back-right corner.
5. In its **Object Data Properties**, set **Focal Length** to **50 mm**. The camera's outline in the viewport gets narrower, like a zoom lens.

Rotation **Z −40°** turns the camera 40° to the right. You can't look through it yet; Part 3 hands the shot to it.

- [ ] Desk Camera is in the Outliner, near the table, pointing at the desk

## Part 3 · Cut with markers

A marker on the Timeline can carry a camera. When the playhead passes a marker, Blender switches to that marker's camera. That's a cut.

| Marker at frame | Camera bound to it | What you see |
| --- | --- | --- |
| 1 | Camera | The fly-through, frames 1–149 |
| 150 | Desk Camera | The desk close-up, frames 150–240 |

### 3A · First marker

1. Go to frame **1**.
2. With the mouse over the Timeline, choose **Marker → Add Marker**. (Shortcut: M) A small triangle appears under the ruler at frame 1.
3. Click **Camera** in the Outliner.
4. Choose **Marker → Bind Camera to Markers**. (Shortcut: Ctrl+B, mouse over the Timeline) The marker now shows a camera icon and the name **Camera**.

### 3B · Second marker

1. Go to frame **150**.
2. Choose **Marker → Add Marker**. A new marker appears at 150. Only the new marker is selected (white); the first one goes dark.
3. Click **Desk Camera** in the Outliner.
4. Choose **Marker → Bind Camera to Markers**. The marker at 150 shows **Desk Camera**.

> **Pick the right one:** Bind Camera to Markers binds the **selected camera** to the **selected marker**. If the wrong marker changes, click the marker you want in the Timeline first, then the camera in the Outliner, then bind again.

### 3C · Check the cut

1. Look through the camera (**View → Cameras → Active Camera**) and click **Play**.
2. The fly-through runs until frame 149, then the view jumps to the desk close-up and holds there until 240.

The fly-through camera keeps moving after the cut; you just don't see it. In a room tour, cut when the path camera is turning away from something interesting.

- [ ] The Timeline shows two markers: Camera at 1 and Desk Camera at 150
- [ ] On Play, the camera view cuts to the desk at frame 150

## Part 4 · Final render

### 4A · Motion blur

| Render Properties | Field | Value |
| --- | --- | --- |
| **Motion Blur** (amber) | ticked | on |

1. Open **Render Properties** and tick **Motion Blur**. Nothing changes in the viewport; you see it in the video, as a slight smear on the furniture while the camera turns.

### 4B · Test render

| Output Properties | Field | Value |
| --- | --- | --- |
| **Format** | % (amber) | 50% |
| **Frame Range** | End | 240 |
| **Output** | Path | `//camera5_final_test` (or the folder icon + `camera5_final_test`) |

1. Set the values, click in the path box to check it, and press **Esc**.
2. Choose **Render → Render Animation**. (Shortcut: Ctrl+F12)
3. Play `camera5_final_test.mp4`. Check the blur, the cut and the lighting.

### 4C · Final render

| Output Properties | Field | Value |
| --- | --- | --- |
| **Format** | % (red for time) | 100% |
| **Output** | Path | `//camera5_final_v1` (or the folder icon + `camera5_final_v1`) |

1. Set **%** to **100** and change the name to `camera5_final_v1`.
2. Save your file (**File → Save**), then choose **Render → Render Animation**. Leave the laptop alone while it works; it can take several minutes.
3. Play `camera5_final_v1.mp4`. This is your finished room tour.

- [ ] The test video shows the blur, the cut and smooth motion
- [ ] `camera5_final_v1.mp4` plays at full size

## Extra · Use it on your own scene

Optional, and the reason for this whole series. Open your own room or scene and build the same tour:

1. **Push-in** (Lesson 1) for the opening shot.
2. **Orbit** around your centrepiece with an Empty (Lesson 2).
3. **Fly-through** on a path that walks through your scene (Lesson 3).
4. **Light** it from every point on the path (Lesson 4).
5. **Cut** to a close-up of your favourite detail with a second camera and markers (Lesson 5).

Measure your own scene first: click an object and read its Location in the N panel, then plan your path dots from those numbers.

## Troubleshooting

| Problem | Fix |
| --- | --- |
| Nothing blurs | Depth of field only shows in **Rendered** shading and in the render. Also check **Depth of Field** is ticked on the camera you're looking through. |
| Everything is blurry, even the globe | **Focus Object** is empty. Set it to **Globe**. |
| The blur is too strong | Raise **F-Stop** to **2.8** or **4**. |
| The view never cuts to the desk | The second marker isn't bound. Select the marker at 150, select **Desk Camera**, and **Bind Camera to Markers** again. |
| The whole video shows Desk Camera | Desk Camera got bound to the first marker. Select the marker at 1, select **Camera**, and bind again. |
| Desk Camera shows the wall, not the desk | Check its Rotation is **80°, 0°, −40°** and Location **1.2, 1.5, 1.3**. |
| The final render is very slow | Render at 50% to test. For the final, untick Raytracing or Motion Blur if it's taking far too long. |
