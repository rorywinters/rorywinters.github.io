---
title: Groove Block: from Fusion to the Nomad 3
program: Fusion
blurb: Model a 4 × 3 × 1 in aluminum block with a 1/16 in deep rounded groove, make a 2D Contour toolpath, post it with the Carbide 3D post, and cut it on the Nomad 3 with a 1/4 in end mill. About three class periods.
---
You model an aluminum block with a rounded-rectangle groove on top, program the groove in Fusion's Manufacture workspace, and cut it on the Carbide 3D Nomad 3. The finished part is a 4 × 3 × 1 in block with a groove 1/4 in wide and 1/16 in deep. These steps are for the current version of Autodesk Fusion and Carbide Motion.

- **Learning objective:** We are learning to take a part from a CAD model to a finished cut on a CNC mill.
- **Prior knowledge:** Basic Fusion navigation (orbit, pan and zoom with the ViewCube and mouse). This is the first Fusion lesson.
- **What you need:** One aluminum block cut to 4 × 3 × 1 in (6061 is easiest to machine). One 1/4 in 2-flute flat carbide end mill made for aluminum. A **1/4 in ER-11 collet**: the Nomad 3 only ships with the 1/8 in one ([Nomad 3 specs](https://shop.carbide3d.com/products/nomad-3)). The BitZero V2 probe and double-sided tape that come with the Nomad 3. Safety glasses.
- **Time:** about three class periods, one per part

### The part

| Feature | Size |
| --- | --- |
| Block (X × Y × Z) | 4 in × 3 in × 1 in |
| Groove outer edge | 3 in × 2 in rectangle, centred, 0.5 in from every side |
| Groove outer corner fillets | 0.5 in |
| Groove width | 1/4 in (0.25 in), the same as the cutter |
| Groove inner corner fillets | 0.25 in (these come from the offset) |
| Groove depth | 1/16 in (0.0625 in) |

**Quick notes:** The groove is exactly one cutter wide, so the end mill rides in it like a train on a track. The inner corners come out at 0.25 in because 0.5 in − 0.25 in = 0.25 in.

### Success criteria

- I can model a block with a filleted groove cut to an exact depth.
- I can set up stock, work zero and a tool in Fusion, simulate a 2D Contour and post a .nc file with the Carbide 3D post.
- I can hold the stock, install and measure the cutter, set zero with the BitZero, and run the program safely on the Nomad 3.

### Key vocabulary

| Word | Meaning |
| --- | --- |
| **Stock** | The raw block of material the machine cuts the part from. |
| **WCS** (work coordinate system) | The X, Y, Z zero point that the program measures every move from. |
| **Toolpath** | The route the cutter follows, calculated by Fusion's CAM. |
| **G-code** | The text commands (G0, G1, M3) that tell a CNC machine how to move. |
| **Post processor** | A translator that turns a Fusion toolpath into G-code for one brand of machine. |
| **Spindle speed** (rpm) | How fast the cutter spins, in revolutions per minute. |
| **Feed rate** | How fast the cutter moves through the material, in inches per minute (in/min). |
| **Chip load** | How thick a chip each flute takes on every turn. |
| **Stepdown** | How deep the cutter goes on each pass. |
| **Collet** | The split sleeve that grips the cutter's shank inside the spindle. |
| **Stick-out** | How far the cutter sticks out below the collet nut. |
| **BitSetter** | The Nomad's built-in switch that measures how long the tool is. |
| **BitZero** | The corner probe that finds the X, Y and Z zero of your stock. |

| Colour | Meaning |
| --- | --- |
| Green | Safe to change. No real effect on the cut. |
| Amber | Changes the load on the cutter and spindle. Fine at the values given. |
| Red | Use with caution. A wrong value can break the end mill or wreck the part. |

**Spindle speed**, **cutting feedrate** and **stepdown** (Part 2) are amber. The **WCS origin** (Part 2) and **Z zero** (Part 3) are red: if they are wrong, the cutter goes into the wrong place.

### Where things are

| Thing | Where on the screen |
| --- | --- |
| **Workspace switcher** (DESIGN / MANUFACTURE) | Fusion: far left of the toolbar, top-left |
| **Save** ![Save icon: a grey floppy disk](../../assets/fusion/icon-save.png) | Fusion: top-left, in the bar above the toolbar |
| **Create Sketch** ![Create Sketch icon: a dashed sketch outline with a green plus](../../assets/fusion/icon-create-sketch.png) | Fusion: toolbar, left end of the SOLID tab |
| **SKETCH** tab | Fusion: toolbar, opens on its own while you sketch. CREATE ▾ (![2-Point Rectangle icon: a grey rectangle with blue corner dots](../../assets/fusion/icon-rectangle.png)), MODIFY (![Fillet icon: a blue curved corner](../../assets/fusion/icon-fillet.png) ![Offset icon: two blue U shapes, one inside the other](../../assets/fusion/icon-offset.png)) |
| **Toolbar** | Fusion: across the top. Sketch, Create, Modify, Setup and 2D tools |
| **Browser** | Fusion: left side, under the toolbar. Document Settings, bodies, sketches, Setups |
| **ViewCube** | Fusion: top-right corner of the canvas |
| **Sketch Palette** | Fusion: right side, shows while you sketch. **Finish Sketch** is the button at its bottom |
| **Timeline** | Fusion: along the bottom. Every feature in order; double-click one to edit it |
| **Actions** | Fusion: right end of the MANUFACTURE toolbar. Simulate and Post Process |
| **Connect to Cutter / Initialize** | Carbide Motion: middle of the start screen |
| **Jog** | Carbide Motion: top menu bar. Load Tool, Probe, Set Zero |
| **Run** | Carbide Motion: top menu bar. Load New File, Start Job |

A folded item in the **Browser** opens with the small **›** arrow on its left. Open, the arrow points down (**⌄**).

### Shop safety: read before Part 3

- **Safety glasses on** whenever the Nomad door is open or chips are being cleaned up.
- **Tie back long hair**, roll up loose sleeves, and take off dangling lanyards or jewellery.
- **Never bypass the door interlock.** The interlock key is only for probing with the spindle off, and it comes off before the job runs.
- **Emergency stop = the Power Switch** on the Nomad ([Nomad 3 Getting Started Guide](https://cdn.sparkfun.com/assets/3/5/c/6/0/Nomad3_Getting_Started_Guide_12_22_2020_v1_smaller.pdf)). Know where it is before you press Start.
- **One operator at the controls.** Everyone else stands back.
- **End mills are razor sharp.** Hold them by the shank or in a shop rag, never by the flutes.
- **Aluminum chips are sharp and hot.** Vacuum them out. Never blow them with compressed air or sweep them with bare hands.
- **Stay with the machine** for the whole job.

```brief
Part 1 · Make the object
1A · Inch design | File → New Design → Part Design | Unit System: inch (in), ouncemass
1B · Sketch the block | XY plane · 2-Point Rectangle | From the origin: 4 × 3
1C · Extrude 1 in | Create → Extrude | Distance 1 · OK
1D · Groove sketch | Top face: 3 × 2, 0.5 from edges | Fillet 0.5 · Offset 0.25 inside
1E · Cut the groove | Extrude the ring −0.0625 | Operation Cut · Save
Part 2 · Toolpath and post
2A · Manufacture | Workspace switcher → MANUFACTURE
2B · Setup | Origin: stock box point, top front-left | Stock: fixed box 4 × 3 × 1
2C · Tool #1 | 1/4 in flat end mill, 2 flutes | 10,000 rpm · 10 in/min (amber)
2D · 2D Contour | Groove bottom edge, tool inside | 0.01 steps · ramp 2° · no leads
2E · Simulate | Actions → Simulate | 7 passes, no red marks
2F · Post | Carbide 3D (Grbl) post | Save 1001.nc
Part 3 · Nomad 3 and run
3A · Hold the stock | Clean · tape · press 30 s | Front-left, 4 in along X
3B · Start | Power on · Connect to Cutter | Initialize (homes)
3C · Install the cutter | Load Tool #1 · 1/4 ER-11 collet | 3/4 in stick-out · BitSetter
3D · Touch down | BitZero front-left · clip on | Probe XYZ · remove the key
3E · Run | Load 1001.nc · door shut | Start Job · hand near Pause
3F · Finish | Wait for stop · vacuum chips | Deburr · check 0.0625 deep
Extra · Finished early? (optional)
Chamfer | Design only: Modify → Chamfer | Top edges 0.03 in · no cut
Job time | 8.36 in × 7 passes ÷ 10 in/min | About 5.9 min · compare to Simulate
```

## Part 1 · Make the object

### 1A · Start a Part Design in inches

| Setting | Value |
| --- | --- |
| Design type | Part Design |
| Unit System | inch (in), ouncemass |
| Design name | Groove Block |

1. Open Fusion. Check that the **workspace switcher** (far left of the toolbar) says **DESIGN**.
2. Open the **File** menu and choose **New Design**. The **What do you want to design?** box opens.
3. Click **Part Design** (top-left card). It turns blue, and its settings show on the right.
4. Click the **Unit System** list and choose **inch (in), ouncemass**. A tick appears beside it.

@figure new-design-dialog.png The What do you want to design? box: Part Design picked, and the Unit System list open with inch (in), ouncemass ticked.

5. Click **Create New**. A new **Untitled** tab appears along the top.
6. In the **Browser** (left side), click the small **›** arrow beside **Document Settings**. The arrow turns to point down, and the **Units** line under it starts with **in**.

@figure browser-document-settings.png Document Settings open in the Browser. This one still says mm, g: if yours does too, see Troubleshooting.

7. Click **Save** ![Save icon: a grey floppy disk](../../assets/fusion/icon-save.png) (top-left, in the bar above the toolbar). Name the design **Groove Block** and click **Save**. The tab name changes to **Groove Block**.

### 1B · Sketch the block

| Setting | Value |
| --- | --- |
| Plane | XY (lying flat) |
| Rectangle | 2-Point, from the origin, 4 × 3 in |

1. On the toolbar, click **Create Sketch** ![Create Sketch icon: a dashed sketch outline with a green plus](../../assets/fusion/icon-create-sketch.png) (at the left end of the **SOLID** tab). The three origin planes appear in the canvas.
2. Click the **XY** plane: the square lying flat on the grid, beside the red X and green Y axes. The blue Z axis points straight up. The view turns to look straight down on it.

@figure origin-planes.png The origin planes after clicking Create Sketch. The flat square on the grid is the XY plane. Blue Z points up, and the grid numbers (0.5, 1, 1.5, 2) are inches.
3. The toolbar has switched to the **SKETCH** tab. Open its **CREATE ▾** menu and choose **Rectangle → 2-Point Rectangle** ![2-Point Rectangle icon: a grey rectangle with blue corner dots](../../assets/fusion/icon-rectangle.png).
4. Click on the **origin** (the dot where the red and green axes cross). Move the mouse up and to the right. Two dimension boxes appear.
5. Type **4** and press **Tab**. Type **3** and press **Enter**. A 4 × 3 rectangle appears, starting at the origin.
6. Click **Finish Sketch**, the button at the bottom of the **Sketch Palette** (right side of the screen). The Sketch Palette closes and the toolbar goes back to the **SOLID** tab.

@figure sketch-palette.png The Sketch Palette on the right while you sketch. Finish Sketch is the button at the bottom. Leave the options as they are.

**Quick notes:** 4 in runs along X (red axis), 3 in along Y (green axis). Keeping the corner on the origin makes the front-left corner easy to find later in CAM.

### 1C · Extrude it 1 in tall

| Setting | Value |
| --- | --- |
| Distance | 1 in |
| Operation | New Body |

1. Open the **Create** menu and choose **Extrude**. The **Extrude** box opens on the right.
2. Click inside the rectangle. It turns blue and an arrow appears.
3. In **Distance**, type **1** and press **Enter**. The canvas shows a solid block 1 in tall.
4. Click **OK**. **Body1** appears in the Browser under **Bodies**. Click the **ViewCube** corner where TOP, FRONT and RIGHT meet to see the block at an angle.

@figure ../../assets/fusion/viewcube.png The ViewCube (top-right of the canvas). Click the corner where TOP, FRONT and RIGHT meet. The little house above it goes back to the home view.

### 1D · Sketch the groove on the top face

| Setting | Value |
| --- | --- |
| Rectangle | 3 in × 2 in |
| Distance from left and front edges | 0.5 in |
| Sketch fillet (4 corners) | 0.5 in |
| Offset (inside) | 0.25 in |

1. Click **Create Sketch** ![Create Sketch icon: a dashed sketch outline with a green plus](../../assets/fusion/icon-create-sketch.png), then click the **top face** of the block. The view turns to look straight down on it.
2. On the **SKETCH** tab, open **CREATE ▾** and choose **Rectangle → 2-Point Rectangle** ![2-Point Rectangle icon: a grey rectangle with blue corner dots](../../assets/fusion/icon-rectangle.png). Click anywhere inside the top face, then click again to finish a rough rectangle. Its exact size does not matter yet.
3. Open the **Create** menu and choose **Sketch Dimension**. (Shortcut: D) Click the bottom line of the new rectangle, then click below it to place the number. Type **3** and press **Enter**. The rectangle becomes 3 in wide.
4. Still in Sketch Dimension, click the left line and place the number. Type **2** and press **Enter**. The rectangle becomes 2 in tall.
5. Click the left line of the small rectangle, then the left edge of the block. Place the number, type **0.5** and press **Enter**. Do the same with the bottom line and the front edge of the block: **0.5**. The rectangle slides into the centre and its lines turn black (fully defined).
6. On the **SKETCH** tab, click **Fillet** ![Fillet icon: a blue curved corner](../../assets/fusion/icon-fillet.png) (the first button under **MODIFY**). Click the two lines that meet at one corner, type **0.5** and press **Enter**. That corner rounds. Do the other three corners the same way.
7. Click **Offset** ![Offset icon: two blue U shapes, one inside the other](../../assets/fusion/icon-offset.png) (the third button under **MODIFY**). Click one line of the rounded rectangle. The whole loop highlights and an arrow appears.
8. Type **0.25** in **Offset position**. If the preview line sits outside the loop, type **-0.25** instead, so the new loop sits **inside**. Click **OK**. You now see two rounded loops, 1/4 in apart.
9. Click **Finish Sketch** at the bottom of the **Sketch Palette**. The toolbar goes back to the **SOLID** tab.

### 1E · Cut the groove 1/16 in deep

| Setting | Value |
| --- | --- |
| Profile | The thin ring between the two loops |
| Distance | −0.0625 in |
| Operation | Cut |

1. **Create → Extrude.** Click the **thin ring** between the two loops. Only the ring turns blue, not the middle.
2. In **Distance**, type **-0.0625**. The arrow points down into the block.
3. Check that **Operation** says **Cut** (red preview). Click **OK**. The groove is cut into the top of the block.
4. Click **Save** ![Save icon: a grey floppy disk](../../assets/fusion/icon-save.png). Type a short note such as **groove done** and click **OK**.

- [ ] The Browser's Units line starts with **in**
- [ ] One body, a 4 × 3 × 1 in block
- [ ] A rounded-rectangle groove on top, 0.5 in from every edge, with round outer and inner corners
- [ ] The Timeline (bottom) shows Sketch, Extrude, Sketch, Extrude
- [ ] The design is saved as **Groove Block**

## Part 2 · Toolpath and post

### 2A · Switch to Manufacture

1. Click the **workspace switcher** (far left of the toolbar) and choose **MANUFACTURE**. The toolbar changes to **MILLING** tools.

### 2B · The Setup: stock and work zero

The Setup tells Fusion what the stock is, where zero is, and which way is up. If any of these is wrong, the machine cuts in the wrong place.

| Setup setting | Value | Why |
| --- | --- | --- |
| Operation Type | Milling | The Nomad is a 3-axis mill |
| Orientation | Z up, X along the 4 in side | Matches how the block sits in the Nomad |
| Origin (red) | Stock box point: top, front-left corner | The BitZero finds this same corner in Part 3 |
| Stock | Fixed size box 4 × 3 × 1 in, 0 offsets | The block is already cut to size; only the groove is machined |
| Program | 1001, WCS offset 0 | Names the file; uses G54, the default work offset |

1. On the toolbar, click **Setup → New Setup**. The **Setup** box opens on the right, on its **Setup** tab. An orange box (the stock) appears around the part.
2. Set **Operation Type** to **Milling**.
3. Under **Work Coordinate System (WCS)**, set **Orientation** to **Model orientation**. The WCS arrows show Z pointing straight up out of the top face. If Z points sideways, choose **Select Z axis/plane & X axis**, click the top face, then click the front 4 in edge.
4. Set **Origin** to **Stock box point**. Small dots appear on the corners and edges of the stock box. Click the dot on the **top, front-left corner**. The WCS arrows jump to that corner.
5. Check that **Model** shows **Body1**.
6. Click the **Stock** tab. Set **Mode** to **Fixed size box**. Type **Width (X) 4**, **Depth (Y) 3**, **Height (Z) 1**. Set every offset to **0** so the stock box sits exactly on the block.
7. Click the **Post Process** tab. Set **Program Name/Number** to **1001** and **Program Comment** to **Groove Block**. Leave **WCS Offset** at **0**.
8. Click **OK**. **Setup1** appears in the Browser.

**Quick notes:** Zero = top of the stock in Z, front-left corner in X and Y. Every Z move in the program is negative, into the metal. The groove bottom is Z −0.0625.

### 2C · Make the 1/4 in end mill

| Cutting data | Value |
| --- | --- |
| Spindle speed (amber) | 10,000 rpm |
| Cutting feedrate (amber) | 10 in/min |
| Feed per tooth (chip load) | 0.0005 in |
| Plunge feedrate | 2 in/min |
| Ramp feedrate | 5 in/min |
| Coolant | Disabled |
| Tool number | 1 |

1. On the toolbar, click **Manage → Tool Library**. The **Tool Library** window opens.
2. On the left, under **My Libraries**, click **Local**. Click the **+** (New tool) button at the top and choose **Flat end mill**.
3. On the **Cutter** tab, enter the numbers from your end mill's package. Typical values for a 1/4 in 2-flute: **Number of flutes 2**, **Diameter 0.25**, **Shaft diameter 0.25**, **Flute length 0.75**, **Overall length 2.5**, **Body length 1**. Set **Unit** to **inches** if it isn't already.
4. On the **Post processor** tab, set **Number** to **1**. Carbide Motion uses this number when it asks you to load the tool.
5. On the **Cutting data** tab, enter the values in the table above. Set **Coolant** to **Disabled**.
6. On the **Info** tab, type the description **1/4 2FL aluminum**. Click **Accept**. The tool appears in the list. Close the Tool Library.

**Quick notes:** 10,000 rpm × 2 flutes × 0.0005 in = 10 in/min. These are cautious starting numbers. Carbide 3D publishes no 1/4 in aluminum recipe for the Nomad, and owners report its 130 W spindle struggles with 1/4 in tools in aluminum ([Carbide 3D forum](https://community.carbide3d.com/t/nomad-3-bogging-down/44765)). Test on a scrap block first.

### 2D · The 2D Contour toolpath for the groove

| 2D Contour setting | Value |
| --- | --- |
| Tool | #1, 1/4 2FL aluminum |
| Geometry | Outer bottom edge of the groove, tool on the inside |
| Bottom height | Selected contour(s), offset 0 (Z −0.0625) |
| Multiple Depths (amber) | On, Maximum Roughing Stepdown 0.01 in (7 passes) |
| Lead-In / Lead-Out | Off |
| Ramp | On, 2° |

1. On the toolbar, click **2D → 2D Contour**. The **2D Contour** box opens on its **Tool** tab.
2. Click **Select** beside **Tool**. Pick **1/4 2FL aluminum** and click **Select**. The feeds and speeds fill in from the tool.
3. Click the **Geometry** tab. Click the **outer bottom edge** of the groove, where the groove floor meets its outer wall. The whole loop turns blue and a red arrow appears.
4. The red arrow must point to the **inside** of the loop, so the cutter rides inside the groove. If the preview tool sits outside, click the arrow to flip it.
5. Click the **Heights** tab. Leave **Top Height** at **Stock top**. Check **Bottom Height** says **Selected contour(s)** with **Offset 0**.
6. Click the **Passes** tab. Tick **Multiple Depths** and set **Maximum Roughing Stepdown** to **0.01 in**. Leave **Stock to Leave** unticked.
7. Click the **Linking** tab. Untick **Lead-In (Entry)** and **Lead-Out (Exit)**: an arc lead-in would cut outside the groove. Tick **Ramp** and set **Ramp Angle** to **2 deg**, so the cutter slopes into the metal instead of plunging straight down.
8. Click **OK**. Fusion calculates and lines appear along the groove. **2D Contour1** appears under Setup1.

### 2E · Simulate

1. In the Browser, click **Setup1**. Open **Actions** (right end of the toolbar) and choose **Simulate**. The **Simulate** box opens and the stock turns solid.
2. Press **Play** along the bottom. Watch the cutter ramp in and go around the groove seven times.
3. Check that the groove is cut and nothing else is touched. Red marks on the bottom timeline mean a collision or a cut in the wrong place: stop and fix the Setup or the contour side.
4. Note the **Machining time** in the Simulate box (about 6 to 8 minutes is expected). Click **Close**.

### 2F · Post with the Carbide 3D post processor

| Post setting | Value |
| --- | --- |
| Post processor | Carbide 3D (Grbl), carbide3d.cps, from the Fusion Library |
| Program name | 1001 |
| Units | Inches |

1. With **Setup1** selected, open **Actions** and choose **Post Process**. The **Post Process** window opens.
2. Click the post processor list, search for **Carbide 3D** and choose **Carbide 3D (Grbl)** from the **Fusion Library** ([Carbide 3D: Fusion 360](https://docs.carbide3d.com/software-faq/fusion360/)). Tick its star to keep it in your favourites.
3. Check **Program name** is **1001** and **Units** are **Inches**. Choose an **Output folder** you can reach from the Nomad's computer (USB stick or shared drive).
4. Click **Post**. A **1001.nc** file is saved and usually opens in a text window.
5. Look at the first lines. You should see **G20** (inches), **T1**, **S10000 M3** (spindle on at 10,000 rpm) and a **G0** move to a safe height. Close the window.

> **Licence note:** On the free Personal use licence of Fusion, rapid moves are slowed to the cutting feed, so the job runs longer. The school Education licence does not have that limit.

- [ ] **Setup1** shows the WCS on the top, front-left corner of the stock, with Z up
- [ ] The stock box is exactly 4 × 3 × 1 in
- [ ] Tool **#1** is a 1/4 in 2-flute flat end mill at 10,000 rpm and 10 in/min
- [ ] **2D Contour1** simulates seven passes inside the groove with no red marks
- [ ] A **1001.nc** file is saved where the Nomad computer can reach it

## Part 3 · Nomad 3 and run

### 3A · Prepare the stock and the bed

| Item | Value |
| --- | --- |
| Stock size check | 4 × 3 × 1 in with calipers |
| Hold-down | Double-sided tape over most of the bottom |
| Placement | Front-left of the bed, 4 in side along X |

1. Put on **safety glasses**.
2. Measure the block with calipers. It should be 4 × 3 × 1 in, within a few thousandths. File any sharp saw edges.
3. Wipe the bottom of the block and the Nomad's MDF wasteboard with isopropyl alcohol. Tape will not stick to oil or dust.
4. Cover most of the bottom of the block with strips of the **double-sided tape** that came with the Nomad.
5. Place the block near the **front-left** of the bed, the 4 in side running left to right (along X). Leave room around the front-left corner for the BitZero.
6. Press down hard for about 30 seconds. Try to slide it with your hand: it must not move.

> **Safety:** A part that comes loose can break the end mill and throw pieces. If the tape will not hold, use the Nomad clamps or a small vise, with every clamp away from the groove path.

### 3B · Start and home the Nomad

1. Close the Nomad door. Turn on the **Power Switch**.
2. Open **Carbide Motion** on the computer and click **Connect to Cutter**. The status changes to connected.
3. Click **Initialize**. The Nomad homes each axis. Keep your hands out while it moves.

### 3C · Install the 1/4 in end mill

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

### 3D · Touch down: set zero with the BitZero V2

This sets X, Y and Z zero on the top, front-left corner of the block, the same corner as the Fusion Setup.

1. Open the door. Set the **BitZero V2** on the **front-left corner** of the block, its locating edges pressed against the front and left sides ([BitZero V2 for Nomad 3 guide](https://my.carbide3d.com/pdf/BitZero_V2_Nomad3_Setup_and_User_Guide__03-08-2021_v1.pdf)).
2. Clip the BitZero's magnetic ground lead onto the **collet nut**.
3. Place the **interlock key** on the door's interlock sensor, as the guide shows. The spindle stays **off** during probing.
4. In Carbide Motion's **Jog** screen, jog the end mill until it is over the BitZero's hole, about 1/4 in above it.
5. Click **Probe**, choose **XYZ**, and choose the **1/4 in end mill** as the probing tool. Click **Start**. The end mill touches the inside of the hole, then the top. Carbide Motion shows the new zero.
6. Jog Z up about 1/2 in. Take off the ground clip, the BitZero and the **interlock key**. Close the door.

> **Safety:** The interlock key must come off before the job runs. With it on, opening the door will not stop the spindle.

### 3E · Load and run the program

1. Click **Run** (top menu bar), then **Load New File**. Open **1001.nc**. A preview of the groove path appears with the job time.
2. Check that the preview is a rounded rectangle inside the block, and the time is close to the Fusion simulation.
3. If you like, put a few drops of cutting fluid or WD-40 along the groove line now, with the door open and the spindle stopped.
4. Close the door. Put your hand near **Pause**, and know where the **Power Switch** is.
5. Click **Start Job**. The spindle spins up and the end mill ramps into the top of the block.
6. Watch the first full pass. A steady hiss with small chips is good. Loud squealing, chatter or a bogging spindle means **Pause** (see Troubleshooting).
7. Let all seven passes finish. Wait for the spindle to **stop completely** before you open the door.

### 3F · Clean up and finish

1. Vacuum the chips out of the groove and the machine. Do not use compressed air.
2. Slide a plastic scraper under the block to release the tape. A little isopropyl alcohol helps.
3. Deburr the groove edges with a deburring tool or fine file. Wipe the part clean.
4. Measure the groove depth with the depth rod of the calipers: about **0.0625 in**.
5. Click **Load Tool** and take the end mill out with the rag. Put it back in its case.

- [ ] The block stayed tight and did not move during the cut
- [ ] The end mill was installed through **Load Tool** and measured by the BitSetter
- [ ] Zero was set with the BitZero on the top, front-left corner, and the interlock key was removed
- [ ] The groove is centred, 1/4 in wide, about 0.0625 in deep, with round corners
- [ ] The edges are deburred and the machine is vacuumed clean

## Extra · Finished early?

Optional. These don't change the cut.

- **Chamfer in Design only:** switch back to **DESIGN**, choose **Modify → Chamfer**, click the four top outer edges of the block and type **0.03**. Watch the Timeline grow. Do not post or cut this.
- **Work out the job time by hand:** the groove's centre line is a 2.75 × 1.75 in rounded rectangle with 0.375 in corners, about **8.36 in** long. Seven passes at 10 in/min is about **5.9 minutes**. Compare that with Fusion's Simulate time and explain the difference (ramps, rapid moves).

## Troubleshooting

| Problem | Fix |
| --- | --- |
| The Units line says mm, not in | In the Browser, hover over **Units** and click the pencil at the end of the line. Set **Unit System** to **inch (in), ouncemass** and click **OK**. |
| Fusion says the toolpath is empty | Flip the red arrow to the inside of the groove, and untick Lead-In and Lead-Out. |
| Simulation cuts outside the groove | Re-select the **bottom** outer edge of the groove, not the top edge. |
| Cut is in the wrong spot on the block | The Fusion origin and the BitZero corner must both be the **top, front-left** corner. Re-probe. |
| Groove too deep or too shallow | The tool was changed without **Load Tool**. Use Load Tool, then re-probe zero. |
| Loud squeal or chatter | Shorten the stick-out, add a little cutting fluid, and change the feed in small steps on scrap. |
| Spindle bogs down | The cut is too heavy for the 130 W spindle. Try stepdown 0.005 in or feed 6 in/min, or switch to a 1/8 in end mill. |
| Carbide Motion rejects the file | Re-post with **Carbide 3D (Grbl)**, units inches. |
| Block moves during the cut | Pause, power off, clean both surfaces, re-tape or clamp, then re-zero. |
