---
title: Groove Block Practice: The Nomad Simulator in Blender
program: Nomad
blurb: Practise the whole Groove Block setup on a pretend Nomad in Blender before touching the real machine. Jog with the keyboard or a laptop jog screen, line a red laser cross up with the pencil cross, jog from home to the block, set zero by pinching paper, then press RUN and watch the groove cut. About 30 minutes.
---
You practise setting zero and running the Groove Block on a pretend Nomad inside Blender. You can't break a real end mill here, so it's a safe place to make mistakes. These steps are for Blender 5.2. You only need Blender: no Nomad, no Carbide Motion.

- **Learning objective:** We are learning the steps for setting work zero and running a CNC program, by practising them on a simulator.
- **Prior knowledge:** Orbiting and zooming in Blender's 3D Viewport (middle mouse button and mouse wheel). Doing [Groove Block 2: Toolpath and Post](../../fusion/lesson-01-groove-block-toolpath/) first helps, but you don't need it.
- **Files you need:** two Blender scripts. Click each one to download it, then save it to your folder:
  - [nomad_sim_p9_part1_build.py](nomad_sim_p9_part1_build.py) builds the machine
  - [nomad_sim_p9_part2_controls.py](nomad_sim_p9_part2_controls.py) adds the controls
- **Time:** about 30 minutes

> **No Blender? Use the browser version.** The [Nomad Simulator in your browser](../simulator/) (Program 10) works the same way on any computer or Chromebook, with nothing to download. Its jog pad sits beside the machine instead of on a 3D laptop, and the steps in Part 2 and Part 3 below work the same.

**The Groove Block series:** [1 Make the object](../../fusion/lesson-00-groove-block/) · [2 Toolpath and post](../../fusion/lesson-01-groove-block-toolpath/) · Practice on the simulator (this lesson) · [3 Set up the Nomad and run the part](../lesson-00-groove-block-run/)

### Success criteria

- I can jog the simulator with the keyboard and the jog screen, and change the step size.
- I can line the cutter up over the pencil cross, use the paper to find the top of the block, and set zero.
- I can lift the cutter clear and run the program, and I can explain what happens if I skip a step.

### Key vocabulary

| Word | Meaning |
| --- | --- |
| **Simulator** | A pretend machine on the computer that behaves like the real one. |
| **Script** | A small program. These ones are written in Python and run inside Blender. |
| **Jog** | Move the machine by hand, a little at a time. |
| **Step size** | How far one key press moves the machine: 0.001, 0.01, 0.1 or 1 in. |
| **Work zero** | The point on the block the program measures from. Here: the top centre of the block. |
| **Home** | Where the machine starts: the back right corner, with the end mill all the way up. |
| **Paper method** | Lowering the cutter until it pinches a strip of paper so it won't slide, to find the top of the block. |
| **Laser cross** | A red cross under the cutter that shows where its centre is. The real Nomad doesn't have one: it's a helper in the simulator. |

| Colour | Meaning |
| --- | --- |
| Green | Safe to change. No real effect on the cut. |
| Amber | Changes the load on the cutter and spindle. Fine at the values given. |
| Red | Use with caution. A wrong value can break the end mill or wreck the part. |

**Zero XY** and **Zero Z** (2A and 2B) are red: if they are wrong, the groove is cut in the wrong place, just like on the real machine. Jogging down with step **0.1** or **1** near the block (2B) is red too: in the simulator the end mill shatters.

### Where things are

| Thing | Where on the screen |
| --- | --- |
| **Scripting** tab | Top of the Blender window, the last tab on the right (after Layout, Modeling, … ) |
| **Text Editor** | Scripting tab: the big panel in the middle. **Open** and **Run Script** are in its header strip along the top |
| **3D Viewport** | Scripting tab: the panel at the top left, where the machine appears |
| **Outliner** | Top right of the window. The list of everything in the scene |
| **Status bar** | The very bottom strip of the Blender window. The simulator shows the X, Y and Z readout there too |
| **Laptop jog screen** | Inside the 3D Viewport, to the right of the machine. Zoom in on it to click its buttons |

```brief
Part 1 · Load the simulator
1A · Get the files | Download part1_build.py · part2_controls.py | Save both in your folder
1B · Build | Scripting tab · Text Editor → Open → part1 | Run Script ▶ · machine + laptop appear
1C · Controls | Open → part2 · Run Script ▶ | Laptop says JOG P9 · arrows move the machine
Part 2 · Touch down
2A · Over the cross | Starts at HOME (back right, top) · step 1 in (key 4) · then 0.1 (key 3) | Red laser cross on the pencil cross · ZERO XY
2B · Paper | P: paper slides back and forth · Page Down 3 → 2 → 1 | Drags, then stops dead, yellow: PINCHED · ZERO Z
Part 3 · Run the program
3A · Lift | P takes paper out · Page Up to Z +0.200 or more | Step 0.1 (key 3)
3B · Run | Click RUN · watch two laps × two depths | Esc stops · RESET for a new block
Extra · Finished early? (optional)
Break it on purpose | RUN without lifting · Page Down with step 1 | Read the red screen · RESET
```

## Part 1 · Load the simulator

### 1A · Get the two script files

| Item | Value |
| --- | --- |
| Part 1 | [nomad_sim_p9_part1_build.py](nomad_sim_p9_part1_build.py) |
| Part 2 | [nomad_sim_p9_part2_controls.py](nomad_sim_p9_part2_controls.py) |

1. Click [nomad_sim_p9_part1_build.py](nomad_sim_p9_part1_build.py). Your browser downloads it.
2. Click [nomad_sim_p9_part2_controls.py](nomad_sim_p9_part2_controls.py). It downloads too.
3. Move both files from **Downloads** into your own class folder, so you can find them again.

### 1B · Build the machine

| Item | Value |
| --- | --- |
| Tab | Scripting |
| File | nomad_sim_p9_part1_build.py |
| Button | Run Script ▶ |

1. Open Blender with a new **General** file. You see the grey default cube.
2. Click the **Scripting** tab at the top right of the window. The layout changes: a big empty Text Editor fills the middle.
3. In the Text Editor's header strip, click **Open**. A file browser opens.
4. Find **nomad_sim_p9_part1_build.py** and double-click it. The script's text fills the Text Editor. The first line says **NOMAD SIM - PROGRAM 9 - PART 1 OF 2**.
5. Click **Run Script** (the ▶ play button at the right end of the Text Editor header). After a second or two, the cube disappears and the machine appears in the 3D Viewport at the top left, with a laptop beside it. A new **Nomad Sim** collection shows in the Outliner.

**Quick notes:** If the machine looks tiny or cut off, hover over the 3D Viewport and press **Home**. The view zooms to fit everything.

### 1C · Start the controls

| Item | Value |
| --- | --- |
| File | nomad_sim_p9_part2_controls.py |
| Last line of the script | `bpy.ops.nomad.jog('INVOKE_DEFAULT')` |

1. In the Text Editor header, click **Open** again and double-click **nomad_sim_p9_part2_controls.py**. Its text replaces Part 1 in the editor. The first line says **PART 2 OF 2**.
2. Click **Run Script** ▶. The laptop screen title changes to **JOG P9**, and the status bar at the bottom of Blender shows **NOMAD SIM P9** with X, Y and Z.
3. Move your mouse over the 3D Viewport and press **←** (left arrow). The spindle slides to the left from its home spot in the back right corner, and a thin **red laser** line runs from the end mill straight down.
4. Hover over the 3D Viewport and press **Ctrl+Space**. The 3D Viewport fills the whole window, so you can see the machine better. (Press **Ctrl+Space** again later to bring the Text Editor back.)
5. Zoom in on the laptop with the mouse wheel and click the green **X+** button. The machine moves right, and the X number on the laptop screen changes.

**Controls** (keyboard keys work with the mouse over the 3D Viewport):

| Key | Laptop button | Does |
| --- | --- | --- |
| **←** / **→** | **X-** / **X+** | Moves the end mill left / right |
| **↑** / **↓** | **Y+** / **Y-** | Moves the end mill toward the back / front of the block (on a Nomad the bed moves) |
| **Page Up** / **Page Down** | **Z+** / **Z-** | Raises / lowers the end mill |
| **1 2 3 4** | **.001 .01 .1 1** | Step size in inches. The lit button is the one in use |
| **P** | **PAPER** | Paper strip in or out |
| | **ZERO XY** / **ZERO Z** | Sets work zero where the end mill is now |
| | **RUN** | Runs the Groove Block program |
| **R** | **RESET** | New block and new end mill, paper put away |
| **Esc** | | Stops a running program. Press it again to switch the simulator off |

- [ ] The machine and the laptop are in the 3D Viewport, and the laptop screen says **JOG P9**
- [ ] The arrow keys and the green buttons both move the machine
- [ ] A red laser line follows the end mill (the red cross shows once it's over the block)

## Part 2 · Touch down

### 2A · Line up over the pencil cross and zero X and Y

| Item | Value |
| --- | --- |
| Start | HOME: back right corner, end mill all the way up |
| Getting close | Step 1 in (key **4**), then 0.1 in (key **3**) |
| Lining up | Step 0.01 in (key **2**) |
| Target | Red laser cross right on top of the black pencil cross |
| Button | **ZERO XY** |

1. Look at the top of the block. The thin **black cross** is the pencil cross, corner to corner like on the real block: the centre. The **red lines** around it show where the groove will go.
2. The machine starts at **home**: the end mill is in the back right corner, all the way up, and the laptop says **at HOME - jog to the block**. Press **4**, then use **←** and **↓** to bring the end mill over the block. The **red laser cross** appears on the block as soon as the end mill is over it. Keep going until the red cross is near the black pencil cross.
3. Press **3**, then **2**, and nudge with the arrow keys until the red cross sits right on the black cross. Press **Numpad 7** for a top view to check, then orbit back.
4. Click **ZERO XY** on the laptop. The X and Y numbers on the laptop screen change to **+0.000**.

> **On the real Nomad there is no laser.** You look from the front, then from the side, to line the tip up over the cross (Groove Block 3, step 2A).

### 2B · Find the top of the block with paper and zero Z

| Item | Value |
| --- | --- |
| Paper | **P** key or **PAPER** button |
| Coming down | Step 0.1 (key **3**) until about 1/4 in above, then 0.01 (key **2**), then 0.001 (key **1**) |
| Target | Paper stops dead and turns yellow, screen says **PINCHED** |
| Button | **ZERO Z** |

1. Press **P**. A white paper strip slides in under the end mill and moves back and forth, like your hand sliding it.
2. Press **3** and **Page Down** until the end mill is about 1/4 in above the block. Watch the laser line get shorter.
3. Press **2** and keep pressing **Page Down**, slowly. When the gap is tiny, press **1**.
4. When the end mill gets close, the paper's slides get shorter and the laptop says **paper dragging - go slow (key 1)**. Press **1** now.
5. Keep going one press at a time until the paper **stops dead and turns yellow**, and the laptop says **PINCHED - paper won't move. Set Z zero**. Stop there.
6. Click **ZERO Z**. Z on the laptop reads **+0.000**.

> If the paper **tears in half** with bits raining down and the screen says **PAPER TORN**, you went too low. Press **Page Up** a few times, press **P** for new paper, and come down again more slowly.

- [ ] The red laser cross is on the pencil cross, and X and Y read **+0.000**
- [ ] The paper pinched (stopped and turned yellow) at the top of the block, and Z reads **+0.000**

## Part 3 · Run the program

### 3A · Get ready to run

| Item | Value |
| --- | --- |
| Paper | Out (**P**) |
| Height | At least Z **+0.200** |

1. Press **P**. The paper strip disappears.
2. Press **3** for the 0.1 in step and press **Page Up** three times. Z reads **+0.300**.

### 3B · Run it

| Item | Value |
| --- | --- |
| Button | **RUN** |
| Program | The Groove Block groove: two laps, at two depths, 0.0625 in deep |

1. Click **RUN**. The laptop says **RUNNING PROGRAM**. The end mill moves to the groove, drops into the block and cuts a lap, then a second lap inside it.
2. Watch it go round again a little deeper. When it finishes, it lifts and comes back over the centre.
3. Orbit and zoom in on the block. You see a rounded groove all the way round the 2 × 1 in island, between the red lines.
4. To stop part way through, press **Esc**. To start over with a fresh block and end mill, click **RESET**.

- [ ] The groove runs right between the red lines, all the way round
- [ ] The island in the middle is not cut

## Extra · Finished early?

Optional. Make the mistakes on purpose, so you know what they look like before you're at the real machine.

- **Forget to lift:** click **RESET**, zero again, and click **RUN** while the paper is still in or the end mill is still on the block. Read the red flashing screen. What does it tell you to do?
- **Too fast near the block:** press **4** (1 in steps) and **Page Down** over the block. Watch what happens to the end mill. Click **RESET** for a new one.
- **Bad zero:** set **ZERO XY** with the laser cross half an inch off the pencil cross, then run. Where does the groove land?

## Troubleshooting

| Problem | Fix |
| --- | --- |
| Nothing happens when I click Run Script | Check the first line of the text says **PROGRAM 9**. Look at the status bar for a red error. Part 2 only works after Part 1 has been run. |
| Can't see the machine, only a big grey cube | Run Part 1 again. It deletes the default cube. Then hover over the 3D Viewport and press **Home**. |
| The arrow keys move the text cursor, not the machine | Run Part 2 again, then move the mouse over the 3D Viewport before pressing keys. |
| Clicking the laptop buttons does nothing | Zoom in closer and click right on the green or grey button. If it still does nothing, run Part 2 again. |
| The laptop says **SET ZERO XY FIRST** or **SET ZERO Z FIRST** | Do Part 2: zero X and Y on the pencil cross, then Z with the paper. |
| The laptop says **LIFT THE CUTTER UP FIRST** | Press **Page Up** until Z reads at least **+0.200**, then click **RUN**. |
| The end mill disappeared and gold bits are on the block | It shattered: you jogged down into the metal with a big step. Click **RESET**. |
| The screen flashes **TOO DEEP: YOU'RE IN THE METAL!** and glowing chips appear | You jogged the end mill below the top of the block. Press **Page Up** until it's clear, then **RESET** for a fresh block and to clear the chips. |
| The groove is in the wrong place | X and Y zero weren't on the pencil cross. Click **RESET**, line the red laser cross up again, and zero again. |
