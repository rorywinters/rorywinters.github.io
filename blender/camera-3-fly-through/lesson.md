---
title: Camera Moves 3: Fly-Through on a Path
program: Blender
blurb: Lesson 3 of 5. Draw a path that walks in through the open front of the room and curves around the table, then make the camera ride the path while it keeps looking at the globe. About 10 minutes.
---
This is the "walk through my room" shot. Instead of keyframing the camera's position, you draw a **path** and let the camera ride along it like a train on a track. A second rule keeps the camera pointed at the globe the whole way. These steps are for Blender 5.2.

- **Learning objective:** We are learning to move a camera along a path while it aims at a subject.
- **Prior knowledge:** [Camera Moves 2: Smooth Moves and an Orbit](../camera-2-smooth-orbit/) (Graph Editor, Linear and Bezier)
- **File you need:** [camera_practice_scene.blend](../camera-1-push-in/camera_practice_scene.blend), the same practice room as Lesson 1. Start from a fresh copy.
- **Time:** about 10 minutes

### Success criteria

- I can add a path and move its control points by typing values.
- I can make the camera follow the path with a Follow Path constraint.
- I can keep the camera aimed at an object with a Track To constraint.
- I can render a 10-second fly-through as an MP4.

### Key vocabulary

| Word | Meaning |
| --- | --- |
| **Path** | A curve object that is a line through space. It never shows up in a render. |
| **Control point** | One of the dots that shapes a path. Move a dot and the line bends to follow it. |
| **Edit Mode** | The mode for moving an object's points. **Object Mode** moves the whole object. |
| **Constraint** | A rule you give an object, like "stay on this path" or "always look at that". |
| **Follow Path** | A constraint that makes an object travel along a path. |
| **Track To** | A constraint that makes an object always point at a target. |

**The camera series:** [1 Push-in](../camera-1-push-in/) · [2 Smooth moves and orbits](../camera-2-smooth-orbit/) · 3 Fly-through on a path (this lesson) · [4 Lighting for a moving camera](../camera-4-lighting/) · [5 Cinematic polish](../camera-5-cinematic/)

| Colour | Meaning |
| --- | --- |
| Green | Safe to change. No real effect on playback or render time. |
| Amber | Raises the load a little. Fine at the values given. |
| Red | Use with caution. Big effect on speed or memory. |

**Resolution %** and **Output Quality** (Part 4) are amber. This lesson has no red settings.

### Where things are

| Thing | Where on the screen |
| --- | --- |
| **Mode** menu (Object Mode / Edit Mode) | Top-left corner of the 3D Viewport header. (Shortcut: Tab switches between them) |
| **Object Data Properties** for a path | Properties editor, the green curve icon. Only shows while the path is selected. |
| **Object Constraint Properties** | Properties editor, the icon of two linked squares with a bone, near the bottom |
| **Outliner**, **N panel**, **Output Properties** | Same places as in Lesson 1 |

```brief
Part 1 · Draw the path
1A · Open | camera_practice_scene.blend | Save As camera3_yourname
1B · Path | Add → Curve → Path | Path Animation Frames 240 · End 240
1C · Shape it | Edit Mode · dots left → right · X, Y (all Z 1.6) | 0, −9 · 0, −3.5 · −1.8, −0.8 · −0.6, 1.8 · 1.6, 1.2
Part 2 · Put the camera on the path
2A · Reset | Camera Location 0 · 0 · 0 · Rotation 0 · 0 · 0
2B · Follow Path | Constraints → Add → Follow Path | Target NurbsPath · Animate Path
Part 3 · Aim at the globe
3 · Track To | Add → Track To · Target Globe | Track −Z · Up Y · below Follow Path
Part 4 · Render the fly-through
4 · MP4 | EEVEE · 50% (amber) · End 240 | Path //camera3_flythrough_v1 · Ctrl+F12
Extra · Finished early? (optional)
Moving gaze | Empty Look Target · Track To → Look Target | Frame 1 globe · Frame 240 desk
```

## Part 1 · Draw the path

### 1A · Open a fresh room

1. Choose **File → Open** and open [camera_practice_scene.blend](../camera-1-push-in/camera_practice_scene.blend) (download it again if you need to).
2. Choose **File → Save As** and name it `camera3_yourname.blend`.

### 1B · Add the path

| Panel | Field | Value |
| --- | --- | --- |
| **Path → Object Data Properties → Path Animation** | Frames | 240 |
| **Timeline** | End | 240 |

1. Choose **Add → Curve → Path**. A straight line with five dots appears through the middle of the room, called **NurbsPath** in the Outliner.
2. With NurbsPath selected, open its **Object Data Properties** (the green curve icon). Open the **Path Animation** panel with its **▶** arrow.
3. Set **Frames** to **240**. This is how many frames the camera takes to travel the whole path: 10 seconds.
4. In the Timeline, set **End** to **240**.

> **Pick the right one:** choose **Curve → Path**, not **Curve → Bezier** or **Curve → Circle**. The Path is the one with five dots in a straight line.

### 1C · Shape the path

| Dot (left to right) | X | Y | Z | Where it is in the room |
| --- | --- | --- | --- | --- |
| 1 | 0 m | −9 m | 1.6 m | Outside, in front of the open side |
| 2 | 0 m | −3.5 m | 1.6 m | Just inside the room |
| 3 | −1.8 m | −0.8 m | 1.6 m | Left of the table |
| 4 | −0.6 m | 1.8 m | 1.6 m | Between the table and the bed |
| 5 | 1.6 m | 1.2 m | 1.6 m | Turning toward the desk |

1.6 m is about eye height. The path is at 0, 0, 0 with no rotation, so these numbers are the real spots in the room.

1. Choose **View → Viewpoint → Top** so you look straight down on the room. (Shortcut: Numpad 7)
2. Switch to **Edit Mode** with the Mode menu at the top-left of the viewport. (Shortcut: Tab) The five dots show up larger.
3. Choose **Select → None**. (Shortcut: Alt+A) Then click the **leftmost dot**. Only that dot is orange.
4. In the N panel, the **Item** tab now shows **Control Point** with X, Y and Z boxes. Type the values for dot **1** from the table. The dot jumps to its new spot and the line bends.
5. Click the next dot along the line and type its values. Do the same for dots 3, 4 and 5.
6. Switch back to **Object Mode**. (Shortcut: Tab)

From the top view the path starts outside the front of the room, comes in through the open side, swings left around the table and curves toward the desk. The line doesn't touch every dot exactly; it's a smooth curve pulled toward them.

> **Pick the right one:** if the N panel shows **Location**, **Rotation** and **Scale** instead of **Control Point**, you're still in Object Mode, or more than one dot is selected. Press Tab, Select → None, and click a single dot.

- [ ] From the top view, the path enters through the open front and curves around the table
- [ ] You're back in Object Mode

## Part 2 · Put the camera on the path

### 2A · Reset the camera

| Camera (N panel → Item) | Axis | Value |
| --- | --- | --- |
| **Location** | X, Y, Z | 0 m |
| **Rotation** | X, Y, Z | 0° |

1. Click **Camera** in the Outliner (fold up **Furniture** if you need to). Zoom out in the viewport until you see it.
2. Type **0** in all three Location boxes and all three Rotation boxes. The camera jumps to the middle of the floor, pointing straight down.

Follow Path **adds** the camera's own Location to the path, so the camera must start at 0, 0, 0 or it rides beside the path instead of on it.

### 2B · Follow Path

| Object Constraint Properties → Follow Path | Value |
| --- | --- |
| Target | NurbsPath |
| Animate Path | click the button |

1. With the camera selected, open **Object Constraint Properties** (two linked squares with a bone).
2. Click **Add Object Constraint** and choose **Follow Path** (in the **Relationship** column).
3. Click the **Target** box and choose **NurbsPath**. The camera jumps to the start of the path, outside the room.
4. Click **Animate Path**. Nothing moves yet, but the path now has its own animation.
5. Click **Play**. The camera slides along the path into the room, still pointing straight down at the floor. Click **Pause**.

> **Pick the right one:** use **Follow Path**, not **Clamp To**. Both use a curve, but only Follow Path has the **Animate Path** button.

- [ ] On Play, the camera travels along the path from outside the room to near the desk

## Part 3 · Aim at the globe

| Object Constraint Properties → Track To | Value |
| --- | --- |
| Target | Globe |
| Track Axis | −Z |
| Up | Y |

1. With the camera still selected, click **Add Object Constraint** again and choose **Track To** (in the **Tracking** column).
2. Click the **Target** box and choose **Globe**.
3. Check **Track Axis** is **−Z** and **Up** is **Y**. A camera looks down its own −Z, so this makes the lens point at the globe.
4. Check the order: **Follow Path** must be on top and **Track To** under it. If not, use the **▾** menu on Track To's header and choose **Move to Last**.
5. Look through the camera (**View → Cameras → Active Camera**) and click **Play**. The camera glides into the room and swings around the table, with the globe in the middle of the frame the whole way.

Constraints work top to bottom: first move onto the path, then aim. Upside down order gives a camera that aims from the wrong place.

> **Pick the right one:** if the view is upside down or sideways, **Up** is set wrong. Set it back to **Y**. If the camera looks away from the globe, **Track Axis** must be **−Z**, not **Z**.

- [ ] In camera view, the globe stays in the middle of the frame as the camera moves
- [ ] The camera never passes through furniture or walls

## Part 4 · Render the fly-through

Use the same settings as [Lesson 1, Part 4](../camera-1-push-in/#part4). This file is a fresh copy, so check each value.

| Where | Field | Value |
| --- | --- | --- |
| **Render Properties** | Render Engine | EEVEE |
| **Output → Format** | % (amber) | 50% for tests, 100% for the final |
| **Output → Frame Range** | End | 240 |
| **Output → Output** | Media Type | Video |
| **Output → Encoding** | Container | MPEG-4 |
| **Output → Encoding → Video** | Output Quality (amber) | Medium Quality |
| **Output → Output** | Path | `//camera3_flythrough_v1` (or the folder icon + `camera3_flythrough_v1`) |

1. Set each value in the table.
2. Click in the path box to check the whole path, then press **Esc**.
3. Choose **Render → Render Animation**. (Shortcut: Ctrl+F12) The frame counter goes up to 240.
4. Open the folder and play `camera3_flythrough_v1.mp4`.

- [ ] Your MP4 plays a 10-second fly-through that keeps the globe in view

## Extra · Finished early?

Optional. Render it as `camera3_flythrough_v2`.

**Moving gaze:** make the camera look at the globe first, then turn to the desk.

1. Choose **Add → Empty → Plain Axes** and rename it **Look Target**.
2. On the camera's **Track To**, change **Target** to **Look Target**.
3. Select **Look Target**. On frame **1**, set its Location to **0, 0, 0.86** (the globe) and press **I** over Location.
4. On frame **240**, set its Location to **2.9, 3.55, 1** (the desk) and press **I**.
5. Play. The camera's gaze drifts from the globe to the desk as it walks in.

## Troubleshooting

| Problem | Fix |
| --- | --- |
| The camera rides beside the path, not on it | The camera's Location isn't 0, 0, 0. Set all three to 0 (2A). |
| The camera doesn't move on Play | Click **Animate Path** on the Follow Path constraint (2B). |
| The camera finishes long before frame 240 | The path's **Path Animation → Frames** is still 100. Set it to 240 (1B), then delete Follow Path and add it again with Animate Path. |
| The N panel shows Location, not Control Point | You're in Object Mode or have several dots selected. Tab into Edit Mode and click one dot. |
| You moved the whole path instead of one dot | You were in Object Mode. Undo, press Tab, and click a single dot. |
| The camera points at the floor | Add the **Track To** constraint with Target **Globe** (Part 3). |
| The view is upside down | On Track To, set **Up** to **Y**. |
| The camera aims from the wrong spot or jitters | Track To is above Follow Path. Move Track To to the bottom of the constraint stack. |
| The camera goes through the bed or a wall | Check the five dots match the table, from a top view. |
