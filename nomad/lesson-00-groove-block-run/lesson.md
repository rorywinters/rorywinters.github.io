---
title: Groove Block 3: Set Up the Nomad and Run the Part
program: Nomad
blurb: Tape down the aluminum block, install and measure a 1/4 in end mill, touch off with the BitZero, set zero in the centre of the block, then run 1001.nc and finish the part. Third of three Groove Block lessons. About one class period.
---
You cut the Groove Block on the Carbide 3D Nomad 3, using the 1001.nc file from the last lesson. These steps are for the Nomad 3 with Carbide Motion.

- **Learning objective:** We are learning to set up a CNC mill safely and run a program on real metal.
- **Prior knowledge:** [Groove Block 2: Toolpath and Post](../../fusion/lesson-01-groove-block-toolpath/) (you bring the posted 1001.nc file)
- **What you need:** the **1001.nc** file. One aluminum block cut to 4 × 3 × 1 in (6061 is easiest to machine). One 1/4 in 2-flute flat carbide end mill made for aluminum. A **1/4 in ER-11 collet**: the Nomad 3 only ships with the 1/8 in one ([Nomad 3 specs](https://shop.carbide3d.com/products/nomad-3)). The BitZero V2 probe and double-sided tape that come with the Nomad 3. Safety glasses.
- **Time:** about one class period

**The Groove Block series:** [1 Make the object](../../fusion/lesson-00-groove-block/) · [2 Toolpath and post](../../fusion/lesson-01-groove-block-toolpath/) · 3 Set up the Nomad and run the part (this lesson)

### Success criteria

- I can hold the stock, install the cutter through Load Tool, and let the BitSetter measure it.
- I can set zero with the BitZero and MDI, then run the program safely and finish the part.

### Key vocabulary

| Word | Meaning |
| --- | --- |
| **Work zero** | The point on the stock the program measures from. Here: the top centre of the block. |
| **Collet** | The split sleeve that grips the cutter's shank inside the spindle. |
| **Stick-out** | How far the cutter sticks out below the collet nut. |
| **BitSetter** | The Nomad's built-in switch that measures how long the tool is. |
| **BitZero** | The corner probe that finds the X, Y and Z zero of your stock. |
| **MDI** (manual data input) | A box in Carbide Motion where you type one line of G-code and send it straight to the machine. |
| **Interlock** | The door switch that stops the spindle when the door opens. |

| Colour | Meaning |
| --- | --- |
| Green | Safe to change. No real effect on the cut. |
| Amber | Changes the load on the cutter and spindle. Fine at the values given. |
| Red | Use with caution. A wrong value can break the end mill or wreck the part. |

Setting **Z zero** and **X and Y zero** (2A) are red: if they are wrong, the cutter goes into the wrong place.

### Where things are

| Thing | Where on the screen |
| --- | --- |
| **Connect to Cutter / Initialize** | Carbide Motion: middle of the start screen |
| **Jog** | Carbide Motion: top menu bar. Load Tool, Probe, Set Zero |
| **Run** | Carbide Motion: top menu bar. Load New File, Start Job |

### Shop safety: read before you start

- **Safety glasses on** whenever the Nomad door is open or chips are being cleaned up.
- **Tie back long hair**, roll up loose sleeves, and take off dangling lanyards or jewellery.
- **Never bypass the door interlock.** The interlock key is only for probing with the spindle off, and it comes off before the job runs.
- **Emergency stop = the Power Switch** on the Nomad ([Nomad 3 Getting Started Guide](https://cdn.sparkfun.com/assets/3/5/c/6/0/Nomad3_Getting_Started_Guide_12_22_2020_v1_smaller.pdf)). Know where it is before you press Start.
- **One operator at the controls.** Everyone else stands back.
- **End mills are razor sharp.** Hold them by the shank or in a shop rag, never by the flutes.
- **Aluminum chips are sharp and hot.** Vacuum them out. Never blow them with compressed air or sweep them with bare hands.
- **Stay with the machine** for the whole job.

```brief
Part 1 · Set up the machine
1A · Hold the stock | Clean · tape · press 30 s | Front-left, 4 in along X
1B · Start | Power on · Connect to Cutter | Initialize (homes)
1C · Install the cutter | Load Tool #1 · 1/4 ER-11 collet | 3/4 in stick-out · BitSetter
Part 2 · Touch down and run
2A · Touch down | BitZero front-left · Probe XYZ | MDI to X2 Y1.5 · Zero X Y · remove key
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
| Placement | Front-left of the bed, 4 in side along X |

1. Put on **safety glasses**.
2. Measure the block with calipers. It should be 4 × 3 × 1 in, within a few thousandths. File any sharp saw edges.
3. Wipe the bottom of the block and the Nomad's MDF wasteboard with isopropyl alcohol. Tape will not stick to oil or dust.
4. Cover most of the bottom of the block with strips of the **double-sided tape** that came with the Nomad.
5. Place the block near the **front-left** of the bed, the 4 in side running left to right (along X). Leave room around the front-left corner for the BitZero, which you use to find the centre.
6. Press down hard for about 30 seconds. Try to slide it with your hand: it must not move.

> **Safety:** A part that comes loose can break the end mill and throw pieces. If the tape will not hold, use the Nomad clamps or a small vise, with every clamp away from the groove path.

### 1B · Start and home the Nomad

1. Close the Nomad door. Turn on the **Power Switch**.
2. Open **Carbide Motion** on the computer and click **Connect to Cutter**. The status changes to connected.
3. Click **Initialize**. The Nomad homes each axis. Keep your hands out while it moves.

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


- [ ] The block is taped down tight at the front-left of the bed
- [ ] Carbide Motion is connected and the Nomad is homed
- [ ] The end mill went in through **Load Tool** and the BitSetter measured it

## Part 2 · Touch down and run

### 2A · Touch down: set zero with the BitZero V2

| Item | Value |
| --- | --- |
| Probe | BitZero V2 on the front-left corner, XYZ |
| Move to the centre (MDI) | G0 Z0.5, then G0 X2 Y1.5 |
| Set Zero | X and Y only (Z stays on the top from the probe) |

The BitZero finds the top, front-left corner. Because the block is 4 × 3 in, its centre is 2 in right and 1.5 in back from that corner. You move there and make it the new X and Y zero, to match the Fusion Setup from Groove Block 2.

1. Open the door. Set the **BitZero V2** on the **front-left corner** of the block, its locating edges pressed against the front and left sides ([BitZero V2 for Nomad 3 guide](https://my.carbide3d.com/pdf/BitZero_V2_Nomad3_Setup_and_User_Guide__03-08-2021_v1.pdf)).
2. Clip the BitZero's magnetic ground lead onto the **collet nut**.
3. Place the **interlock key** on the door's interlock sensor, as the guide shows. The spindle stays **off** during probing.
4. In Carbide Motion's **Jog** screen, jog the end mill until it is over the BitZero's hole, about 1/4 in above it.
5. Click **Probe**, choose **XYZ**, and choose the **1/4 in end mill** as the probing tool. Click **Start**. The end mill touches the inside of the hole, then the top. Carbide Motion now reads X 0, Y 0, Z 0 at that corner.
6. Jog Z up about 1/2 in. Take off the ground clip and the BitZero, and lift them out of the machine.
7. Open **MDI** in Carbide Motion. Type **G0 Z0.5** and send it. The end mill rises to 1/2 in above the block. Then type **G0 X2 Y1.5** and send it. The end mill moves to the centre of the block.
8. Look from the front and the side: the end mill should sit over the middle of the block.
9. On the **Jog** screen, click **Set Zero** and choose **X** and **Y** only. X and Y now read 0 here. Leave Z alone: it is already zero on the top of the block.
10. Take off the **interlock key** and close the door.

> **Safety:** The interlock key must come off before the job runs. With it on, opening the door will not stop the spindle.

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
- [ ] Z zero is on the top of the block, X and Y zero in its centre, and the interlock key was removed
- [ ] The groove is centred, 1/2 in wide, about 0.0625 in deep, with round corners
- [ ] The edges are deburred and the machine is vacuumed clean

## Extra · Finished early?

Optional.

- **Measure the part:** with calipers, measure the groove width on all four sides (target **0.500 in**) and the island (target **2.000 × 1.000 in**). Write down how far each one is from the target, and which side is off the most.

## Troubleshooting

| Problem | Fix |
| --- | --- |
| Cut is in the wrong spot on the block | X and Y zero must be set after the MDI move to X2 Y1.5. Re-probe and set zero again. |
| Groove too deep or too shallow | The tool was changed without **Load Tool**. Use Load Tool, then re-probe zero. |
| Loud squeal or chatter | Shorten the stick-out, add a little cutting fluid, and change the feed in small steps on scrap. |
| Spindle bogs down | The cut is too heavy for the 130 W spindle. Re-post with stepdown 0.005 in or feed 6 in/min. |
| Carbide Motion rejects the file | It must be posted with **Carbide 3D (Grbl)**, units inches (Groove Block 2, step 2C). |
| Block moves during the cut | Pause, power off, clean both surfaces, re-tape or clamp, then re-zero. |
