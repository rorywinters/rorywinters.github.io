---
title: Groove Block 3: Set Up the Nomad and Run the Part
program: Nomad
blurb: Tape down the aluminum block, install and measure a 1/4 in end mill, find the centre with a pencil cross, set zero with the paper method and the keyboard, then run 1001.nc and finish the part. Third of three Groove Block lessons. About one class period.
---
You cut the Groove Block on the Carbide 3D Nomad 3, using the 1001.nc file from the last lesson. These steps are for the Nomad 3 with Carbide Motion.

- **Learning objective:** We are learning to set up a CNC mill safely and run a program on real metal.
- **Prior knowledge:** [Groove Block 2: Toolpath and Post](../../fusion/lesson-01-groove-block-toolpath/) (you bring the posted 1001.nc file)
- **What you need:** the **1001.nc** file. One aluminum block cut to 4 × 3 × 1 in (6061 is easiest to machine). One 1/4 in 2-flute flat carbide end mill made for aluminum. A **1/4 in ER-11 collet**: the Nomad 3 only ships with the 1/8 in one ([Nomad 3 specs](https://shop.carbide3d.com/products/nomad-3)). Double-sided tape that comes with the Nomad 3. A ruler and a fine marker or sharp pencil. A strip of plain printer paper. Safety glasses.
- **Time:** about one class period

**The Groove Block series:** [1 Make the object](../../fusion/lesson-00-groove-block/) · [2 Toolpath and post](../../fusion/lesson-01-groove-block-toolpath/) · 3 Set up the Nomad and run the part (this lesson)

### Success criteria

- I can hold the stock, install the cutter through Load Tool, and let the BitSetter measure it.
- I can set zero on the top centre with a pencil cross, paper and the keyboard, then run the program safely and finish the part.

### Key vocabulary

| Word | Meaning |
| --- | --- |
| **Work zero** | The point on the stock the program measures from. Here: the top centre of the block. |
| **Collet** | The split sleeve that grips the cutter's shank inside the spindle. |
| **Stick-out** | How far the cutter sticks out below the collet nut. |
| **BitSetter** | The Nomad's built-in switch that measures how long the tool is. |
| **Jog** | Move the machine by hand, a little at a time, with the keyboard. |
| **Paper method** | Lowering the cutter until it just drags a strip of paper, to find the top of the stock. |
| **Interlock** | The door switch that stops the spindle when the door opens. |

| Colour | Meaning |
| --- | --- |
| Green | Safe to change. No real effect on the cut. |
| Amber | Changes the load on the cutter and spindle. Fine at the values given. |
| Red | Use with caution. A wrong value can break the end mill or wreck the part. |

Setting **Z zero** and **X and Y zero** (2A) are red: if they are wrong, the cutter goes into the wrong place. The **jog speed** near the block (2A) is red too: jog slowly when the end mill is close to the stock.

### Where things are

| Thing | Where on the screen |
| --- | --- |
| **Connect to Cutter / Initialize** | Carbide Motion: middle of the start screen |
| **Jog** | Carbide Motion: top menu bar. Load Tool, Set Zero, and the jog buttons |
| **Run** | Carbide Motion: top menu bar. Load New File, Start Job |

### Shop safety: read before you start

- **Safety glasses on** whenever the Nomad door is open or chips are being cleaned up.
- **Tie back long hair**, roll up loose sleeves, and take off dangling lanyards or jewellery.
- **Never bypass the door interlock.** The door must be shut whenever the spindle can turn.
- **Emergency stop = the Power Switch** on the Nomad ([Nomad 3 Getting Started Guide](https://cdn.sparkfun.com/assets/3/5/c/6/0/Nomad3_Getting_Started_Guide_12_22_2020_v1_smaller.pdf)). Know where it is before you press Start.
- **One operator at the controls.** Everyone else stands back.
- **End mills are razor sharp.** Hold them by the shank or in a shop rag, never by the flutes.
- **Aluminum chips are sharp and hot.** Vacuum them out. Never blow them with compressed air or sweep them with bare hands.
- **Stay with the machine** for the whole job.

```brief
Part 1 · Set up the machine
1A · Hold the stock | Pencil cross · clean · tape · press 30 s | Middle of bed, 4 in along X
1B · Start | Power on · Connect to Cutter | Initialize (homes)
1C · Install the cutter | Load Tool #1 · 1/4 ER-11 collet | 3/4 in stick-out · BitSetter
Part 2 · Touch down and run
2A · Touch down | Pencil cross corner to corner · arrows over the cross | 4 to get close · 1 for paper drag · Set Zero XYZ
2B · Run | Load 1001.nc · door shut | Start Job · hand near Pause
2C · Finish | Wait for stop · vacuum chips | Deburr · check 0.0625 deep
Extra · Finished early? (optional)
Measure | Calipers: groove width and island | Compare with 0.5 in and 2 × 1 in
```

## Part 1 · Set up the machine

### 1A · Prepare the stock and the bed

| Item | Value |
| --- | --- |
| Stock size check | 4 × 3 × 1 in with calipers |
| Hold-down | Double-sided tape over most of the bottom |
| Placement | Middle of the bed, 4 in side along X |

1. Put on **safety glasses**.
2. Measure the block with calipers. It should be 4 × 3 × 1 in, within a few thousandths. File any sharp saw edges.
3. With a ruler and a fine marker (or sharp pencil), draw two lines on the top of the block, **corner to corner**. Where they cross is the centre: your X and Y zero.
4. Wipe the bottom of the block and the Nomad's MDF wasteboard with isopropyl alcohol. Tape will not stick to oil or dust.
5. Cover most of the bottom of the block with strips of the **double-sided tape** that came with the Nomad.
6. Place the block near the middle of the bed, the 4 in side running left to right (along X).
7. Press down hard for about 30 seconds. Try to slide it with your hand: it must not move.

> **Safety:** A part that comes loose can break the end mill and throw pieces. If the tape will not hold, use the Nomad clamps or a small vise, with every clamp away from the groove path.

### 1B · Start and home the Nomad

1. If Carbide Motion has never been set up on this computer, do [Set Up Carbide Motion for the Nomad 3](../setup-carbide-motion/) first.
2. Close the Nomad door. Turn on the **Power Switch**.
3. Open **Carbide Motion** on the computer and click **Connect to Cutter**. The status changes to connected.
4. Click **Initialize**. The Nomad homes each axis. Keep your hands out while it moves.

### 1C · Install the 1/4 in end mill

| Item | Value |
| --- | --- |
| Collet | 1/4 in ER-11 |
| Stick-out | about 3/4 in (at least 1/2 in for the BitSetter) |
| Tool number | 1 |

Only change tools when Carbide Motion asks you to, or after you click **Load Tool**. Otherwise the BitSetter measurement and your zero no longer agree ([Carbide 3D: Set Zero](https://my.carbide3d.com/docs/set-zero/)).

1. Click **Jog** (top menu bar), then **Load Tool**. Choose tool **#1** when asked. The spindle moves forward to the tool-change spot and stops.
2. Open the door. Snap the **1/4 in ER-11 collet** into the collet nut first, until it clicks. Then thread the nut loosely onto the spindle.
3. Holding the end mill in a shop rag, slide it up into the collet. Leave about **3/4 in** sticking out below the nut.
4. Hold the spindle with one wrench and tighten the nut with the other: snug and firm, without leaning your whole weight on it.
5. Pull gently on the end mill. It must not move. Take the wrenches out and close the door.
6. Click **Resume** or **Done**. The Nomad moves over the **BitSetter** and touches the end mill on it to measure its length.


- [ ] The block is taped down tight, with a pencil cross from corner to corner on top
- [ ] Carbide Motion is connected and the Nomad is homed
- [ ] The end mill went in through **Load Tool** and the BitSetter measured it

## Part 2 · Touch down and run

### 2A · Touch down: set zero with the pencil cross and paper

| Item | Value |
| --- | --- |
| X and Y zero | End mill tip over the pencil cross |
| Z zero | Top of the block: the end mill just drags a strip of paper |
| Set Zero | X, Y and Z |
| Spindle | Off the whole time |

**Jogging with the keyboard** (Carbide Motion **Jog** screen, a regular keyboard):

| Key | Moves |
| --- | --- |
| **←** / **→** | X: **←** moves left, **→** moves right |
| **↑** / **↓** | Y: **↑** moves away from the front of the machine, **↓** toward the front |
| **Page Up** / **Page Down** | Z: up and down |
| **1 2 3 4** number keys | Set the step size: **1** is the smallest step, **4** the biggest. Use **4** or **3** to get close, **1** for the last bit. You can also click **INCREMENT +** and **INCREMENT -** on the Jog screen |

> **Take your time near the block.** Switch to key **1** (the smallest step) before the end mill gets within about 1/4 in of the top. A fast Page Down into the block can break the end mill.

1. On the **Jog** screen, click once on an empty part of the screen so the keys go to Carbide Motion.
2. Press **4** for the biggest step. Use the **arrow keys** to move the end mill over the **pencil cross**. Keep it well above the block.
3. Press **Page Down** to lower the end mill to about 1/4 in above the top. Press **2**, then **1**, as you get close.
4. Look from the **front**, then from the **side**. Nudge with the arrow keys until the tip of the end mill sits right over the cross from both views.
5. Open the door. Hold a strip of **paper** flat on the top of the block, under the end mill. The spindle stays off.
6. Press **1** for the smallest step. Press **Page Down** one step at a time, sliding the paper back and forth after each step. Stop as soon as the paper **just drags** (it catches but still slides). If the paper won't move at all, press **Page Up** one step.
7. Slide the paper out. Close the door.
8. Click **Set Zero** and choose **XYZ** (all three). X, Y and Z now read 0: the top centre of the block, to match the Fusion Setup from Groove Block 2.
9. Press **Page Up** a few times to lift the end mill clear of the block.

**Quick notes:** Paper is about 0.004 in thick, so the groove comes out that much shallower than 0.0625 in. That is close enough for this part.

### 2B · Load and run the program

1. Click **Run** (top menu bar), then **Load New File**. Open **1001.nc**. A preview of the groove path appears with the job time.
2. Check that the preview is a rounded rectangle inside the block, and the time is close to the Fusion simulation.
3. If you like, put a few drops of cutting fluid or WD-40 along the groove line now, with the door open and the spindle stopped.
4. Close the door. Put your hand near **Pause**, and know where the **Power Switch** is.
5. Click **Start Job**. The spindle spins up and the end mill ramps into the top of the block.
6. Watch the first full pass. A steady hiss with small chips is good. Loud squealing, chatter or a bogging spindle means **Pause** (see Troubleshooting).
7. Let all seven levels finish. Wait for the spindle to **stop completely** before you open the door.

### 2C · Clean up and finish

1. Vacuum the chips out of the groove and the machine. Do not use compressed air.
2. Slide a plastic scraper under the block to release the tape. A little isopropyl alcohol helps.
3. Deburr the groove edges with a deburring tool or fine file. Wipe the part clean.
4. Measure the groove depth with the depth rod of the calipers: about **0.0625 in**.
5. Click **Load Tool** and take the end mill out with the rag. Put it back in its case.

- [ ] The block stayed tight and did not move during the cut
- [ ] Z zero is on the top of the block and X and Y zero on the pencil cross
- [ ] The groove is centred, 1/2 in wide, about 0.0625 in deep, with round corners
- [ ] The edges are deburred and the machine is vacuumed clean

## Extra · Finished early?

Optional.

- **Measure the part:** with calipers, measure the groove width on all four sides (target **0.500 in**) and the island (target **2.000 × 1.000 in**). Write down how far each one is from the target, and which side is off the most.

## Troubleshooting

| Problem | Fix |
| --- | --- |
| Cut is in the wrong spot on the block | The end mill was not over the cross when you set zero. Jog back over the cross, check from the front and the side, and set zero again. |
| Groove too deep or too shallow | The tool was changed without **Load Tool**, or Z was set before the paper just dragged. Use Load Tool, then set zero again with the paper. |
| The machine won't jog from the keyboard | Click once on the Jog screen so Carbide Motion has the keyboard, then try the keys again. |
| Loud squeal or chatter | Shorten the stick-out, add a little cutting fluid, and change the feed in small steps on scrap. |
| Spindle bogs down | The cut is too heavy for the 130 W spindle. Re-post with stepdown 0.005 in or feed 6 in/min. |
| Carbide Motion rejects the file | It must be posted with **Carbide 3D (Grbl)**, units inches (Groove Block 2, step 2C). |
| Block moves during the cut | Pause, power off, clean both surfaces, re-tape or clamp, then re-zero. |
