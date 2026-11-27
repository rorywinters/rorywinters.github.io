---
title: Groove Block Practice: The Nomad Simulator
program: Nomad
simulator: ../simulator/
blurb: Practise the whole Groove Block setup on a pretend Nomad in your web browser before touching the real machine. Jog with the keyboard or the jog panel, line a red laser cross up with the pencil cross, jog from home to the block, set zero by pinching paper, then press RUN and watch the groove cut. About 30 minutes.
---
You practise setting zero and running the Groove Block on a pretend Nomad in your web browser. You can't break a real end mill here, so it's a safe place to make mistakes. It runs on any phone, computer or Chromebook with nothing to download: no Nomad, no Carbide Motion, no Blender.

- **Learning objective:** We are learning the steps for setting work zero and running a CNC program, by practising them on a simulator.
- **Prior knowledge:** Using a mouse and the arrow keys. Doing [Groove Block 2: Toolpath and Post](../../fusion/lesson-01-groove-block-toolpath/) first helps, but you don't need it.
- **What you need:** a phone or a computer with a web browser (Chrome, Edge, Firefox or Safari). Press the big green **Simulator** button at the top of this page.
- **Time:** about 30 minutes

**The Groove Block series:** [1 Make the object](../../fusion/lesson-00-groove-block/) · [2 Toolpath and post](../../fusion/lesson-01-groove-block-toolpath/) · Practice on the simulator (this lesson) · [3 Set up the Nomad and run the part](../lesson-00-groove-block-run/)

### Success criteria

- I can jog the simulator with the keyboard and the jog panel, and change the step size.
- I can line the cutter up over the pencil cross, use the paper to find the top of the block, and set zero.
- I can lift the cutter clear and run the program, and I can explain what happens if I skip a step.

### Key vocabulary

| Word | Meaning |
| --- | --- |
| **Simulator** | A pretend machine on the computer that behaves like the real one. |
| **Jog** | Move the machine by hand, a little at a time. |
| **Step size** | How far one key press moves the machine: 0.001, 0.01, 0.1 or 1 in. |
| **Work zero** | The point on the block the program measures from. Here: the top centre of the block. |
| **Home** | Where the machine starts and finishes: the back right corner, with the end mill all the way up. |
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
| **Machine** | The big dark area on the left. Drag to orbit, right-drag to pan, mouse wheel to zoom |
| **Jog panel** | The grey panel on the right. Readout (X, Y, Z) at the top, then the message box, then the buttons |
| **Message box** | Under the X, Y, Z readout. It tells you what the machine is doing. The whole panel flashes red on an error |
| **View buttons** | Bottom of the jog panel: **Top**, **Front**, **3D** |
| **Key list** | The very bottom of the jog panel |

```brief
Part 1 · Open the simulator
1A · Open it | Open the Nomad Simulator link | Machine on the left · jog panel on the right · JOG P11
1B · Try the controls | Click the machine once · press ← | Spindle moves · red laser line follows it
Part 2 · Touch down
2A · Over the cross | Starts at HOME (back right, top) · step 1 in (key 4) · then 0.1 (key 3) | Red laser cross on the pencil cross · ZERO XY
2B · Paper | P: paper slides back and forth · Page Down 3 → 2 → 1 | Drags, then stops dead, yellow: PINCHED · ZERO Z
Part 3 · Run the program
3A · Lift | P takes paper out · Page Up to Z +0.200 or more | Step 0.1 (key 3)
3B · Run | Click RUN · watch two laps × two depths | Goes back to HOME · Esc stops · RESET for a new block
Extra · Finished early? (optional)
Break it on purpose | RUN without lifting · Page Down with step 1 | Read the red panel · RESET
```

## Part 1 · Open the simulator

### 1A · Open it

| Item | Value |
| --- | --- |
| Link | [Nomad Simulator](../simulator/) |
| Title on the panel | **JOG P11** |

1. Click the [Nomad Simulator](../simulator/) link. A new page opens with the machine on the left and the grey jog panel on the right.
2. Check the top of the jog panel says **JOG P11**, and the message box says **at HOME - jog to the block**.
3. Drag on the machine with the left mouse button. The view orbits round. Roll the mouse wheel to zoom in and out.

**Quick notes:** If the page stays black, press **Ctrl+F5** to reload it. On a small screen the jog panel moves under the machine: scroll down to reach it.

### 1B · Try the controls

| Item | Value |
| --- | --- |
| First click | On the machine, once, so the page takes your keys |
| Test key | **←** |

1. Click once on the machine area. Then press **←** (left arrow). The spindle slides to the left from its home spot in the back right corner, and a thin **red laser** line runs from the end mill straight down.
2. Click the green **X+** button on the jog panel. The machine moves right, and the X number at the top of the panel changes.
3. Click **Top**, then **3D**. The view jumps to look down on the block, then back to the angled view.

**Controls:**

| Key | Jog panel button | Does |
| --- | --- | --- |
| **←** / **→** | **X-** / **X+** | Moves the end mill left / right |
| **↑** / **↓** | **Y+** / **Y-** | Moves the end mill toward the back / front of the block (on a Nomad the bed moves) |
| **Page Up** / **Page Down** | **Z+** / **Z-** | Raises / lowers the end mill |
| **1 2 3 4** | **.001 .01 .1 1** | Step size in inches. The lit button is the one in use |
| **P** | **PAPER** | Paper strip in or out |
| | **ZERO XY** / **ZERO Z** | Sets work zero where the end mill is now |
| | **RUN** | Runs the Groove Block program, then goes back to HOME |
| **R** | **RESET** | New block and new end mill, paper put away |
| **T** / **F** / **V** | **Top** / **Front** / **3D** | Changes the view |
| **Esc** | | Stops a running program |

- [ ] The machine is on the left and the jog panel says **JOG P11**
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
2. The machine starts at **home**: the end mill is in the back right corner, all the way up, and the panel says **at HOME - jog to the block**. Press **4**, then use **←** and **↓** to bring the end mill over the block. The **red laser cross** appears on the block as soon as the end mill is over it. Keep going until the red cross is near the black pencil cross.
3. Press **3**, then **2**, and nudge with the arrow keys until the red cross sits right on the black cross. Press **T** (or click **Top**) to check from above, then **V** to go back to 3D.
4. Click **ZERO XY** on the jog panel. The X and Y numbers at the top of the panel change to **+0.000**.

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
4. When the end mill gets close, the paper's slides get shorter and the panel says **paper dragging - go slow (key 1)**. Press **1** now.
5. Keep going one press at a time until the paper **stops dead and turns yellow**, and the panel says **PINCHED - paper won't move. Set Z zero**. Stop there.
6. Click **ZERO Z**. Z on the panel reads **+0.000**.

> If the paper **tears in half** with bits raining down and the panel says **PAPER TORN**, you went too low. Press **Page Up** a few times, press **P** for new paper, and come down again more slowly.

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

1. Click **RUN**. The panel says **RUNNING PROGRAM**. The end mill moves to the groove, drops into the block and cuts a lap, then a second lap inside it.
2. Watch it go round again a little deeper. When it finishes, it lifts straight up and goes back to **HOME** in the back right corner, and the panel says **PROGRAM DONE - back at HOME**.
3. Orbit and zoom in on the block, or click **Top**. You see a rounded groove all the way round the 2 × 1 in island, between the red lines.
4. To stop part way through, press **Esc**. To start over with a fresh block and end mill, click **RESET**.

- [ ] The groove runs right between the red lines, all the way round
- [ ] The island in the middle is not cut

## Extra · Finished early?

Optional. Make the mistakes on purpose, so you know what they look like before you're at the real machine.

- **Forget to lift:** click **RESET**, zero again, and click **RUN** while the paper is still in or the end mill is still on the block. Read the red flashing panel. What does it tell you to do?
- **Too fast near the block:** press **4** (1 in steps) and **Page Down** over the block. Watch what happens to the end mill. Click **RESET** for a new one.
- **Bad zero:** set **ZERO XY** with the laser cross half an inch off the pencil cross, then run. Where does the groove land?

## Troubleshooting

| Problem | Fix |
| --- | --- |
| The page is black or the machine doesn't show | Press **Ctrl+F5** to reload. Try Chrome or Edge if it still doesn't show. |
| The arrow keys scroll the page instead of moving the machine | Click once on the machine area, then press the keys. |
| The panel says **SET ZERO XY FIRST** or **SET ZERO Z FIRST** | Do Part 2: zero X and Y on the pencil cross, then Z with the paper. |
| The panel says **TAKE THE PAPER OUT FIRST (P)** | Press **P**, then click **RUN** again. |
| The panel says **LIFT THE CUTTER UP FIRST** | Press **Page Up** until Z reads at least **+0.200**, then click **RUN**. |
| The end mill disappeared and gold bits are on the block | It shattered: you jogged down into the metal with a big step. Click **RESET**. |
| The panel flashes **TOO DEEP: YOU'RE IN THE METAL!** and glowing chips appear | You jogged the end mill below the top of the block. Press **Page Up** until it's clear, then **RESET** for a fresh block and to clear the chips. |
| The groove is in the wrong place | X and Y zero weren't on the pencil cross. Click **RESET**, line the red laser cross up again, and zero again. |
| I can't see the red cross from the top | Use **Top** view: it looks down at a steep angle from the front, so the spindle doesn't hide the cross. |
