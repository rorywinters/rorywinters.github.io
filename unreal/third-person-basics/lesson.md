---
title: Third Person Game Setup and Basic Editor Controls
program: Unreal Engine
video: https://youtu.be/xR1Yp8w400A
blurb: Your first time in Unreal: make a Third Person game, learn to move the view, select, move, rotate and scale objects, then play the level and change it so you can jump higher.
---
This is the first lesson in Unreal Engine. You make a **Third Person** game project, learn to move around the level and change objects with the **Select**, **Move**, **Rotate** and **Scale** tools, then play the game and change the level so your character can climb higher. Every part has a ▶ link that jumps the video to that step.

| Colour | Meaning |
| --- | --- |
| Green | Safe to change. No real effect on speed. |
| Amber | Raises the load a little. Fine at the values given. |
| Red | Use with caution. Big effect on speed or memory. |

This lesson has no amber or red settings.

| Where things are in Unreal | Location on screen |
| --- | --- |
| **Viewport** | The big middle area showing the level |
| **Tool buttons** (Select, Move, Rotate, Scale) | Top-left of the viewport toolbar |
| **Snapping buttons** | Top-right of the viewport toolbar |
| **Viewpoint menu** (Perspective) and **View Mode** (Lit) | Top-left of the viewport, beside the tool buttons |
| **Outliner** | Top-right panel (list of everything in the level) |
| **Details** panel | Right side, under the Outliner. If it's missing: **Window → Details**. |
| **Content Drawer** | Bottom-left corner button |
| **Play** (green ▶) | Main toolbar, top middle |

```brief
Part 1 · Make the project
1 · Third Person | Epic Games Launcher → Launch | Games → Third Person · Blueprint · Create | [▶ 0:00](https://youtu.be/xR1Yp8w400A?t=0)
Part 2 · Move the view
2 · View | Click in viewport first | Left drag = look and move · left + right drag = up/down | Right drag = look | [▶ 1:40](https://youtu.be/xR1Yp8w400A?t=100)
Part 3 · Select and change objects
3A · Select and Move | Q = Select · W = Move | Drag an arrow · Esc · Ctrl+Z | [▶ 2:12](https://youtu.be/xR1Yp8w400A?t=132)
3B · Details | Type or drag Location · Rotation · Scale | [▶ 3:02](https://youtu.be/xR1Yp8w400A?t=182)
3C · Rotate | E = Rotate · snapping buttons top-right | [▶ 3:36](https://youtu.be/xR1Yp8w400A?t=216)
Part 4 · Viewport options
4 · Views | Perspective ▾ → Right · back to Perspective | Lit · Unlit · Wireframe · Show · four views | [▶ 4:16](https://youtu.be/xR1Yp8w400A?t=256)
Part 5 · Outliner and Content
5 · Panels | Outliner = list · eye hides | Content Drawer = project files | [▶ 5:17](https://youtu.be/xR1Yp8w400A?t=317)
Part 6 · Play
6 · Play | Green ▶ (Alt+P) | Mouse = camera · WASD = run · Space = jump · Esc = stop | [▶ 6:15](https://youtu.be/xR1Yp8w400A?t=375)
Part 7 · Make a step
7 · Scale | Esc · click a block · R = Scale | Shrink it into a step · Play and climb | [▶ 7:04](https://youtu.be/xR1Yp8w400A?t=424)
Part 8 · Assignment
8 · Record | Change the level · play it | Record with FreeCam 8 · hand in | [▶ 8:11](https://youtu.be/xR1Yp8w400A?t=491)
```

## Part 1 · Make the project

[▶ Watch this part (0:00)](https://youtu.be/xR1Yp8w400A?t=0)

| New Project | Value |
| --- | --- |
| Category | Games |
| Template | **Third Person** |
| Project type | **Blueprint** (not C++) |
| Project Name | your name + `ThirdPerson` |

1. Double-click the **Epic Games Launcher** icon on the desktop. It can take a while to open.
2. Click **Launch** on your Unreal Engine version. Ask your teacher if the launcher doesn't show it.
3. In the Project Browser, click **Games**, then **Third Person**. A short description appears on the right.
4. Check **Blueprint** is selected. Choose where to save it, type a name, and click **Create**. The first time takes a few minutes.

- [ ] The editor is open on a grey level with a character in the middle

## Part 2 · Move the view

[▶ Watch this part (1:40)](https://youtu.be/xR1Yp8w400A?t=100)

| To do this | Do this |
| --- | --- |
| Zoom in and out | Click in the viewport, then roll the mouse wheel |
| Look around and slide forward/back | Hold the **left** button and drag |
| Just look around | Hold the **right** button and drag |
| Move up and down | Hold **both** buttons and drag up or down |

1. Click once inside the viewport so it knows you're working there.
2. Try each move in the table.

The keys you press show up on screen in the video. Most of this lesson uses the mouse.

- [ ] I can zoom, look around and move up and down

## Part 3 · Select and change objects

### 3A · Select and Move

[▶ Watch this part (2:12)](https://youtu.be/xR1Yp8w400A?t=132)

| Key | Tool |
| --- | --- |
| **Q** | Select |
| **W** | Move |
| **E** | Rotate |
| **R** | Scale |

The four keys sit side by side on the keyboard (Q is beside Tab), which is why they were chosen.

1. Click a grey block. It gets a yellow outline and red, green and blue arrows.
2. Drag an arrow. The block slides along that arrow.
3. If you grabbed the floor by mistake, press **Ctrl+Z** to undo, then click an empty spot.

### 3B · Type values in the Details panel

[▶ Watch (3:02)](https://youtu.be/xR1Yp8w400A?t=182)

| Transform | X | Y | Z |
| --- | --- | --- | --- |
| **Location** | (any) | (any) | (any) |
| **Rotation** | (Roll) | (Pitch) | (Yaw) |
| **Scale** | 1.0 | 1.0 | 1.0 |

1. With a block selected, find **Transform** in the **Details** panel (right side).
2. Click in a box and type a number, or drag left and right on the box to change it. Typing is handy for putting things exactly on the floor.
3. Press **Ctrl+Z** to put it back.

### 3C · Rotate and snapping

[▶ Watch (3:36)](https://youtu.be/xR1Yp8w400A?t=216)

1. Press **E**. The arrows change to curved rings. Drag a ring: the block turns.
2. Hover over the buttons at the top-right of the viewport. They set **snapping**: move in grid steps, turn in angle steps, and scale in steps. Click one to turn it on or off.

- [ ] I moved and turned a block, then undid it

## Part 4 · Viewport options

[▶ Watch this part (4:16)](https://youtu.be/xR1Yp8w400A?t=256)

1. Click **Perspective** (top-left of the viewport) and choose **Right**. You see the level flat from the side. Change it back to **Perspective**.
2. Click **Lit** and try **Unlit** and **Wireframe**. Go back to **Lit**.
3. Click **Show** to tick or untick what's drawn in the viewport.
4. Click the four-squares button (top-right of the viewport) to see four views at once. Click it again to go back to one.

- [ ] The viewport is back to Perspective and Lit

## Part 5 · Outliner and Content Drawer

[▶ Watch this part (5:17)](https://youtu.be/xR1Yp8w400A?t=317)

1. The **Outliner** (top-right) lists everything in the level. Clicking a name selects it. The **eye** hides it.
2. Drag the line between the Outliner and the **Details** panel up or down to give one more room.
3. Click **Content Drawer** (bottom-left). It holds every file in your project, in folders. Be careful here: don't move or delete files you don't recognise. Click back in the viewport to close it.

Later lessons bring in things from Blender and from **Fab**, Epic's free asset store (see [Bringing Fab Content into Unreal](../lesson-02-fab-content/)).

## Part 6 · Play

[▶ Watch this part (6:15)](https://youtu.be/xR1Yp8w400A?t=375)

| Key | In the game |
| --- | --- |
| Mouse | Turn the camera |
| **W A S D** | Run |
| **Space** | Jump |
| **Esc** | Stop playing |

1. Click the green **Play** triangle in the main toolbar. (Shortcut: Alt+P)
2. Run around and jump. Try to climb onto the blocks: some are too high to jump onto.
3. Press **Esc** to stop.

- [ ] I can run and jump around the level

## Part 7 · Make a step

[▶ Watch this part (7:04)](https://youtu.be/xR1Yp8w400A?t=424)

1. Click a block next to one you can't reach. (You could push it down into the floor with the blue arrow too.)
2. Press **R** for **Scale**. Drag the blue handle down to make it lower, so it works as a step.
3. Do this for one or two more blocks, building steps up to a high place.
4. Click **Play** and climb your steps.

- [ ] I changed blocks so I can climb somewhere I couldn't reach before

## Part 8 · Assignment

[▶ Watch this part (8:11)](https://youtu.be/xR1Yp8w400A?t=491)

Make your own changes to the level, then play it and record yourself.

1. Move, turn and scale at least three objects.
2. Play your level.
3. Record your screen with **FreeCam 8** (in Company Portal at school) or another screen recorder, and hand in the video.

| Remember | Key |
| --- | --- |
| Undo | Ctrl+Z |
| Stop playing | Esc |
| Zoom | Mouse wheel |

- [ ] I changed at least three objects
- [ ] I handed in a recording of me playing my level

## Video chapters

Copy this list into the YouTube description to add chapters to the video.

```
0:00 Open Unreal Engine
0:48 New Third Person project
1:40 Moving the view with the mouse
2:12 Selecting and undo
2:38 Q to select and W to move
3:02 Typing values in the Details panel
3:36 E to rotate
3:50 Snapping buttons
4:16 Viewpoint menu
4:37 Lit, Unlit and Wireframe
4:54 Show menu and four views
5:17 Outliner
5:35 Content Drawer
6:15 Play the game
7:04 R to scale: make a step
7:53 Test your jumps
8:11 Assignment: record your game
```
