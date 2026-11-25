---
title: Camera Moves 2: Smooth Moves and an Orbit
program: Blender
blurb: Lesson 2 of 5. See your camera move as a curve in the Graph Editor, switch between eased and steady motion, then make the camera circle the globe using an Empty as a pivot. About 10 minutes.
---
You look at the push-in from Lesson 1 as a curve and learn to control how it speeds up and slows down. Then you build the most popular showcase move: an **orbit**, where the camera circles around the middle of the room. These steps are for Blender 5.2.

- **Learning objective:** We are learning to control how a camera speeds up and slows down, and to make it circle a point.
- **Prior knowledge:** [Camera Moves 1: Your First Camera Push-In](../camera-1-push-in/) and your `camera1_yourname.blend` file from it
- **Time:** about 10 minutes

### Success criteria

- I can open the Graph Editor and find my camera's motion curve.
- I can switch keyframes between eased (Bezier) and steady (Linear) motion.
- I can parent a camera to an Empty and rotate the Empty to orbit the camera.
- I can render a 10-second orbit as an MP4.

### Key vocabulary

| Word | Meaning |
| --- | --- |
| **Graph Editor** | An editor that draws each animated value as a line over time. |
| **F-curve** | One of those lines, for example the camera's Y Location from frame 1 to 120. |
| **Interpolation** | How Blender fills in the frames between two keyframes. |
| **Bezier** | Eased interpolation: slow start, fast middle, slow end. The curve looks like an S. Blender uses it by default. |
| **Linear** | Steady interpolation: the same speed the whole way. The curve is a straight line. |
| **Empty** | An object that never shows up in a render. It's a handle you can move, rotate and attach things to. |
| **Parent** | When object A is the parent of object B, B follows everything A does. |
| **Orbit** | A camera move that circles around a subject while always looking at it. |

**The camera series:** [1 Push-in](../camera-1-push-in/) · 2 Smooth moves and orbits (this lesson) · [3 Fly-through on a path](../camera-3-fly-through/) · [4 Lighting for a moving camera](../camera-4-lighting/) · [5 Cinematic polish](../camera-5-cinematic/)

| Colour | Meaning |
| --- | --- |
| Green | Safe to change. No real effect on playback or render time. |
| Amber | Raises the load a little. Fine at the values given. |
| Red | Use with caution. Big effect on speed or memory. |

**Resolution %** and **Output Quality** (Part 3) are amber. This lesson has no red settings.

### Where things are

| Thing | Where on the screen |
| --- | --- |
| **Editor Type** button | The first button at the left end of the Timeline's header (a clock icon with a small arrow). It switches the Timeline to another editor. |
| **Graph Editor** | Takes the Timeline's place at the bottom of the window once you pick it with the Editor Type button. |
| **Object Properties** | Properties editor (bottom-right), the orange square icon |
| **Outliner**, **N panel**, **Output Properties** | Same places as in Lesson 1 |

If the Graph Editor is too short to see, drag its top edge up.

```brief
Part 1 · See the motion as a curve
1A · Open | camera1_yourname.blend | Save As camera2_yourname
1B · Graph Editor | Timeline Editor Type → Graph Editor | Select Camera · View → Frame All (Home)
1C · Linear vs Bezier | Select → All | Key → Interpolation Mode → Linear (T) · Play · then Bezier
Part 2 · Orbit the globe
2A · Clear | Camera · Object → Animation → Clear Keyframes
2B · Pivot | Add → Empty → Plain Axes | Name Orbit Pivot · Location 0 · 0 · 0.86
2C · Parent | Camera · Object Properties → Relations → Parent Orbit Pivot | Camera Location 0 · −3 · 1.2 · Rotation 70° · 0 · 0
2D · Spin | End 240 · Orbit Pivot | Frame 1 Rot Z 0° · I · Frame 240 Rot Z 360° · I
2E · Steady | Graph Editor · Select → All | Interpolation → Linear · Play
Part 3 · Render the orbit
3 · MP4 | EEVEE · 50% (amber) · End 240 | Path //camera2_orbit_v1 · Ctrl+F12
Extra · Finished early? (optional)
High orbit | Camera Location Z 2 · Rotation X 55°
Half orbit | Frame 240 Rot Z 180° · Bezier
```

## Part 1 · See the motion as a curve

### 1A · Open your Lesson 1 file

1. Choose **File → Open** and open `camera1_yourname.blend` from Lesson 1.
2. Choose **File → Save As** and name it `camera2_yourname.blend`. The new name appears at the top of the window.

### 1B · Open the Graph Editor

1. Click **Camera** in the **Outliner** (fold up **Furniture** with its **▾** arrow if you need to).
2. In the **Timeline** at the bottom, click the **Editor Type** button at the far left of its header and choose **Graph Editor**. The Timeline is replaced by a grid with coloured lines.
3. Drag the top edge of the Graph Editor up so it's about a third of the screen tall.
4. Move the mouse over the Graph Editor and choose **View → Frame All** from its own menu. (Shortcut: Home) The lines zoom to fill the editor.

You now see three lines, one for each Location box: **X** in red, **Y** in green and **Z** in blue. X and Z are flat because they never change. **Y Location** climbs from −14 to −7 in a gentle **S** shape: flat at the start, steep in the middle, flat at the end. Flat means slow, steep means fast. That's the ease in and ease out you saw in Lesson 1.

> **Pick the right one:** if the Graph Editor is empty, the camera isn't selected. Click **Camera** in the Outliner. If you see more lines than three, another animated object is selected too.

### 1C · Steady (Linear) or eased (Bezier)

| Graph Editor → Key → Interpolation Mode | What it looks like | When to use it |
| --- | --- | --- |
| **Bezier** (the default) | S-shaped curve | Moves that start and stop, like a push-in |
| **Linear** | Straight line | Steady moves, like an orbit that loops |

1. With the mouse over the Graph Editor, choose **Select → All**. (Shortcut: A) The keyframe dots turn white or orange.
2. Choose **Key → Interpolation Mode → Linear**. (Shortcut: T, then Linear) The S-curve turns into a straight line.
3. Press **Spacebar** to play. The camera moves at one steady speed and starts and stops with a jolt.
4. Click **Pause**. With all keys still selected, choose **Key → Interpolation Mode → Bezier**. The S-curve comes back.

Bezier is the better choice for a push-in because real camera operators ease in and out. You'll use Linear in Part 2.

- [ ] The Graph Editor shows the camera's Y Location as an S-curve
- [ ] You saw it turn into a straight line (Linear) and back (Bezier)

## Part 2 · Orbit the globe

To circle something, you don't move the camera around a circle point by point. Instead you put an **Empty** in the middle, attach the camera to it, and spin the Empty. The camera swings around like a weight on a string.

### 2A · Clear the push-in

1. Check **Camera** is selected in the Outliner.
2. In the 3D Viewport (big middle panel), choose **Object → Animation → Clear Keyframes**. A small box asks you to confirm; click **Clear Keyframes**.

The yellow and green Location boxes in the N panel turn grey again, and the S-curve disappears from the Graph Editor. The camera stays where it was on the current frame.

### 2B · Add the pivot

| Orbit Pivot (N panel → Item) | Axis | Value |
| --- | --- | --- |
| **Location** | X | 0 m |
|  | Y | 0 m |
|  | Z | 0.86 m |

1. Choose **Add → Empty → Plain Axes**. A small black cross of three lines appears in the middle of the room.
2. In the Outliner, double-click its name (**Empty**), type **Orbit Pivot** and press **Enter**.
3. In the N panel, type the Location values from the table. The cross rises into the middle of the globe.

> **Pick the right one:** choose **Empty → Plain Axes**, not **Add → Mesh**. A mesh would show up in your video; an Empty never does.

### 2C · Attach the camera

| Camera | Setting | Value |
| --- | --- | --- |
| **Object Properties → Relations** | Parent | Orbit Pivot |
| **N panel → Location** | X | 0 m |
|  | Y | −3 m |
|  | Z | 1.2 m |
| **N panel → Rotation** | X | 70° |
|  | Y | 0° |
|  | Z | 0° |

1. Click **Camera** in the Outliner.
2. Open **Object Properties** (the orange square icon in the Properties editor) and open the **Relations** panel with its **▶** arrow.
3. Click the **Parent** box and choose **Orbit Pivot**. A dashed line now joins the camera to the pivot, and in the Outliner the camera moves inside Orbit Pivot.
4. In the N panel, type the camera's Location and Rotation from the table.
5. Look through the camera (**View → Cameras → Active Camera**). The globe sits in the middle of the frame with the room behind it.

These numbers are now measured **from the pivot**, not from the middle of the floor. Y −3 means 3 m in front of the globe, and Z 1.2 means 1.2 m above it. A 3 m circle keeps the camera inside the walls all the way around.

### 2D · Spin the pivot

| Frame | Orbit Pivot Rotation Z |
| --- | --- |
| 1 | 0° |
| 240 | 360° |

1. In the Graph Editor's header, click the **Editor Type** button and choose **Timeline** to get the Timeline back. Set **End** to **240**. That's 10 seconds.
2. Click **Orbit Pivot** in the Outliner.
3. Go to frame **1**. Hover over the **Rotation** boxes in the N panel and press **I**. They turn yellow.
4. Go to frame **240**. Type **360** in **Rotation Z**. The box turns orange.
5. Hover over the Rotation boxes and press **I**. They turn yellow.
6. Click **Play**. The camera swings all the way around the globe, but it creeps at the start and end.

### 2E · Make it steady

1. Switch the Timeline to the **Graph Editor** again (**Editor Type → Graph Editor**). With **Orbit Pivot** selected you see its Z Rotation as an S-curve.
2. Choose **Select → All**, then **Key → Interpolation Mode → Linear**. The S-curve becomes a straight line.
3. Click **Play**. The camera circles at one steady speed and loops smoothly from frame 240 back to frame 1.
4. Switch back to the **Timeline** (**Editor Type → Timeline**).

> **Looks small?** If the camera passes through a wall or the bookshelf, the circle is too big. Change the camera's **Location Y** closer to 0, for example **−2.8** (2C), and play again.

- [ ] A dashed line joins the camera to Orbit Pivot
- [ ] On Play, the camera circles the globe at a steady speed

## Part 3 · Render the orbit

Use the same settings as [Lesson 1, Part 4](../camera-1-push-in/#part4). Only the length and the name change.

| Where | Field | Value |
| --- | --- | --- |
| **Render Properties** | Render Engine | EEVEE |
| **Output → Format** | % (amber) | 50% for tests, 100% for the final |
| **Output → Frame Range** | End | 240 |
| **Output → Output** | Media Type | Video |
| **Output → Encoding** | Container | MPEG-4 |
| **Output → Encoding → Video** | Output Quality (amber) | Medium Quality |
| **Output → Output** | Path | `//camera2_orbit_v1` (or the folder icon + `camera2_orbit_v1`) |

1. Check each value in the table. Your Lesson 1 settings are still saved in this file, so most will already be right.
2. Click in the path box to check the whole path, then press **Esc**.
3. Choose **Render → Render Animation**. (Shortcut: Ctrl+F12) The frame counter goes up to 240.
4. Open the folder and play `camera2_orbit_v1.mp4`.

- [ ] Your MP4 plays a 10-second orbit around the globe

## Extra · Finished early?

Optional. Try one, then render it as `camera2_orbit_v2`.

1. **High orbit:** select **Camera** and set **Location Z** to **2 m** and **Rotation X** to **55°**. The camera circles higher and looks down on the room, like a drone.
2. **Half orbit:** select **Orbit Pivot**, go to frame **240**, type **180** in **Rotation Z** and press **I**. In the Graph Editor, set the keys back to **Bezier**. The camera eases halfway around and settles, which looks great as the opening shot of a room tour.

## Troubleshooting

| Problem | Fix |
| --- | --- |
| The Graph Editor is empty | Select the animated object in the Outliner. The Graph Editor only shows selected objects. |
| The lines are tiny or off screen | Mouse over the Graph Editor, **View → Frame All** (Home). |
| You can't find the Timeline again | In the Graph Editor's header, **Editor Type → Timeline**. |
| The camera spins on the spot instead of circling | You rotated the camera, not the pivot. Undo, click **Orbit Pivot** in the Outliner, and key its Rotation Z. |
| The camera doesn't follow the pivot | The Parent box in **Object Properties → Relations** is empty. Set it to **Orbit Pivot** (2C). |
| The camera jumped somewhere odd after parenting | Type the camera's Location and Rotation from the 2C table again. They're measured from the pivot now. |
| There's a tiny pause each time the orbit loops | Frame 240 and frame 1 show the same angle. Set **End** to **239**. |
| The globe isn't in the middle of the frame | Check Orbit Pivot is at **0, 0, 0.86** and the camera's Location X and Rotation Z are **0**. |
