---
title: Drive the VR Robot 5 Squares: Blocks, Switch and Python
program: Robotics
lesson: 0
blurb: Make the VEX VR robot drive forward 5 grid squares three ways (Blocks, Switch and typed Python) and see how blocks turn into code. Runs in the browser.
---
```brief
Part 1 · Open VEXcode VR and the Grid Map
1A · Open | vr.vex.com · sign in
1B · Playground | Select Playground → Grid Map | Not Number Grid Map
1C · Dashboard | Start at X -900, Y -900
Part 2 · Method 1: Blocks
2A · Build | when started → move pen down | drive forward for 1000 mm
2B · Run | Start · 5 squares | Dashboard reads 100 · Reset
Part 3 · Method 2: Switch (Premium only)
3A · Drive block | Convert Block to Switch Block | drivetrain.drive_for(FORWARD, 1000, MM)
3B · Pen block | pen.move(DOWN) · Start
3C · Edit | 600 = 3 squares · back to 1000
Part 4 · Method 3: Python
4A · Text project | File → New Text Project · Grid Map
4B · Type | pen.move(DOWN) | drivetrain.drive_for(FORWARD, 1000, MM) · 4 spaces
4C · Run | Start · 5 squares · Reset
Part 5 · Compare, challenge, hand in
5A · Compare | Blocks · Switch · Python
5B · Challenges | Back · turn right · 5 × 5 square
5C · Hand in | Windows + Alt + R · Classroom
```
**Links for this lesson:**

- Part 1A, open VEXcode VR: [**vr.vex.com**](https://vr.vex.com)
- Part 3, Switch help: [**VEX: Using Switch blocks in VEXcode VR**](https://kb.vex.com/hc/en-us/articles/13740239993876)
- Part 4, Python commands: [**VEX VR Python: drivetrain**](https://api.vex.com/vr/home/python/drivetrain.html)
- Grid Map details: [**VEX VR: Grid Map playground**](https://api.vex.com/vr/home/playgrounds/grid_map.html)

You will make the VEX VR Robot drive forward **5 grid squares**, three different ways: with **Blocks**, with **Switch** (blocks with Python inside) and with typed **Python**. All three do exactly the same thing, so you can see how blocks turn into code.

**Time:** about 1 class. **You need:** a web browser (Chrome or Edge). Nothing to install.

### 5 squares in millimetres

The robot measures distance in **millimetres (mm)**. Each square on the Grid Map is **200 mm**.

| Squares | Millimetres |
|---------|-------------|
| 1       | 200         |
| 5       | **1000**    |

So "drive 5 squares" means **drive forward 1000 mm**.

### Which methods need what

| Method | Free account | Premium licence |
|--------|--------------|-----------------|
| Blocks | Yes          | Yes             |
| Switch | No           | Yes             |
| Python | Yes          | Yes             |

If you don't see a **Switch** category in the Blocks toolbox, your account doesn't have Premium. Skip Part 3 and go to Part 4.

### Performance colour key

| Colour | Meaning                                             |
|--------|-----------------------------------------------------|
| Green  | Safe to change. No real effect on speed.            |
| Amber  | Adds some load. Fine at the value given.            |
| Red    | Use with caution. A lighter working value is given. |

Everything in this lesson is green: it runs in the browser.

## Part 1 · Open VEXcode VR and the Grid Map

### 1A · Open VEXcode VR

1. Go to [**vr.vex.com**](https://vr.vex.com) in Chrome or Edge.
2. Sign in the way your teacher tells you.

**What changed:** VEXcode VR opens with a Blocks workspace. A yellow **when started** block is already in it.

### 1B · Pick the Grid Map playground

1. Click **Select Playground** in the toolbar.
2. Click **Grid Map**.
3. Click **Open Playground**. A window opens with the robot on a grid of squares.

> **Pick the right one:** **Grid Map**, not **Number Grid Map**. Both have 200 mm squares, but Grid Map has plain squares that are easier to count.

### 1C · Turn on the Dashboard

1. In the playground window, click **Dashboard**. A panel shows the robot's **X**, **Y** and **heading**.
2. Note the starting **X** and **Y**. On Grid Map the robot starts at **(-900, -900)**, near a corner.

The Dashboard is how you check your work: 5 squares forward means one of X or Y changes by **1000**.

Before Part 2, check every line. If one is wrong, fix it in the step named.

- [ ] The playground window shows the robot on a grid of squares (1B)
- [ ] The Dashboard shows X **-900** and Y **-900** (1C)
- [ ] The workspace has a yellow **when started** block (1A)

## Part 2 · Method 1: Blocks

### 2A · Build the program

When it is done, your blocks read top to bottom:

| Block            | Category   | Setting               |
|------------------|------------|-----------------------|
| **when started** | Events     | (already there)       |
| **move pen**     | Looks      | down                  |
| **drive for**    | Drivetrain | forward, **1000**, mm |

1. In the toolbox on the left, find the **move pen** block. Drag it under **when started** until it clicks into place. Set it to **down**. The pen draws a line where the robot drives, so you can see the path.
2. Click **Drivetrain**. Drag **drive forward for 200 mm** under the pen block.
3. Click the **200** and type **1000**.

> **Pick the right one:** **drive forward for 200 mm** (it has a number and **mm**), not **drive forward** (no number). Drive forward with no number keeps going until something stops it.

### 2B · Run it

1. In the playground window, click **Start**.
2. The robot drives forward and draws a line **5 squares** long, then stops.
3. Check the Dashboard: X or Y has changed from **-900** to **100**.
4. Click **Reset** to put the robot back at the start.

- [ ] The blocks read **when started → move pen down → drive forward for 1000 mm** (2A)
- [ ] The line on the grid is exactly **5 squares** long (2B)
- [ ] The Dashboard reads **100** where it read -900 (2B)

## Part 3 · Method 2: Switch (Premium only)

Switch turns a block into a Python line, still inside a block. It is the halfway step between dragging and typing. See [**VEX: Using Switch blocks in VEXcode VR**](https://kb.vex.com/hc/en-us/articles/13740239993876).

> **No Switch category in the toolbox?** Your account doesn't have VEXcode VR Premium. Skip to Part 4.

### 3A · Convert the drive block

1. Right-click the **drive forward for 1000 mm** block.
2. Choose **Convert Block to Switch Block**.

**What changed:** the block turns into a Switch block with typed text inside:

```python
drivetrain.drive_for(FORWARD, 1000, MM)
```

This is the same command, written as Python. The three things in the brackets are the same three settings the block had: direction, distance, units.

### 3B · Convert the pen block too

1. Right-click **move pen down** and choose **Convert Block to Switch Block**. It reads pen.move(DOWN).
2. Click **Start**. The robot does exactly what it did in Part 2.

> **Pick the right one:** **Convert Block to Switch Block** changes one block. **Convert Stack to Switch Block** changes that block and every block under it into one Switch block. Either works here.

To turn a Switch block back into a normal block, click **Undo** in the toolbar.

### 3C · Edit the Python

1. Click inside the Switch block and change **1000** to **600**.
2. Click **Reset**, then **Start**. The robot drives 3 squares.
3. Change it back to **1000**.

- [ ] The drive block reads drivetrain.drive_for(FORWARD, 1000, MM) (3A)
- [ ] The pen block reads pen.move(DOWN) (3B)
- [ ] With 600 the robot drives 3 squares; with 1000, 5 squares (3C)

## Part 4 · Method 3: Python

Now you type the whole program yourself. See [**VEX VR Python: drivetrain commands**](https://api.vex.com/vr/home/python/drivetrain.html).

### 4A · Start a Python project

1. **File → New Text Project**.
2. When it asks for a playground, pick **Grid Map**.
3. Name the project and save it.

**What changed:** the workspace shows typed text instead of blocks, with a few lines already written: a def main(): line and vr_thread(main) at the bottom.

### 4B · Type the program

```python
# Add project code in "main"
def main():
    pen.move(DOWN)                            # draw a line where the robot drives
    drivetrain.drive_for(FORWARD, 1000, MM)   # 5 squares = 1000 mm

# VR threads — Do not delete
vr_thread(main)
```

1. Under def main():, type the two lines that start with pen and drivetrain. As you type drivetrain., a list pops up: pick **drive_for**.
2. Keep the **4 spaces** at the start of each line inside main. Python uses those spaces to know which lines belong to main.
3. Leave vr_thread(main) at the bottom. It starts your program.

| Part of the line          | Meaning                                                 |
|---------------------------|---------------------------------------------------------|
| def main():               | The program. Like **when started**.                     |
| drivetrain.drive_for(...) | The **drive for** block.                                |
| FORWARD, 1000, MM         | The block's three settings: direction, distance, units. |
| # ...                    | A comment. The robot ignores it.                        |

### 4C · Run it

1. Open the playground, click **Start**. The robot draws a 5-square line, exactly like Parts 2 and 3.
2. Click **Reset**.

- [ ] The project is a **text** project on **Grid Map** (4A)
- [ ] Both lines inside main start with 4 spaces (4B)
- [ ] The robot draws a line **5 squares** long and the Dashboard reads **100** (4C)

## Part 5 · Compare, challenge, hand in

### 5A · The same program three ways

| Blocks                                | Switch                                  | Python                                  |
|---------------------------------------|-----------------------------------------|-----------------------------------------|
| when started                          | when started                            | def main():                             |
| move pen **down**                     | pen.move(DOWN)                          | pen.move(DOWN)                          |
| drive **forward** for **1000** **mm** | drivetrain.drive_for(FORWARD, 1000, MM) | drivetrain.drive_for(FORWARD, 1000, MM) |

Switch and Python are the same words. Switch just keeps them inside blocks.

### 5B · Challenges

Do each one in the method you like best, then try it in another.

1. Drive **3 squares** forward, then **back** to the start. (Hint: REVERSE.)
2. Drive 5 squares, **turn right**, drive 5 more. (Hint: the **turn right for 90 degrees** block, or drivetrain.turn_for(RIGHT, 90, DEGREES).)
3. Draw a **5 × 5 square** and end where you started. (Hint: the **repeat** block, or for i in range(4): with the drive and turn lines indented under it.)

### 5C · Hand it in

1. With the playground window in front, press **Windows + Alt + R** to start recording. Click **Start**. When the robot stops, press **Windows + Alt + R** again. (Backup: Free Cam 8.)
2. In **Google Classroom**, open the assignment, **Add → File**, pick the clip from **Videos → Captures**, and **Hand in**.

- [ ] You can point to the part of each method that says **1000** (5A)
- [ ] At least one challenge works (5B)
- [ ] The clip is attached in Classroom and handed in (5C)

All ticked? You are done.

## Troubleshooting

| Problem                           | Fix                                                                                             |
|-----------------------------------|-------------------------------------------------------------------------------------------------|
| Robot keeps driving into the wall | You used **drive forward** (no number). Use **drive forward for 1000 mm** (2A).                 |
| Robot drives 1 square, not 5      | The number is still **200**. Change it to **1000**.                                             |
| No line on the grid               | The **move pen down** block or pen.move(DOWN) line is missing or below the drive. Put it first. |
| No **Switch** category            | Your account isn't Premium. Skip to Part 4.                                                     |
| Python: **IndentationError**      | A line inside main is missing its 4 spaces, or has a different number.                          |
| Python: **NameError**             | A spelling or capital-letter mistake: it must be drivetrain, FORWARD, MM exactly.               |
| Python: nothing happens           | vr_thread(main) was deleted. Type it back at the bottom, with no spaces in front.               |
| Robot starts in the wrong place   | Click **Reset** before each Start.                                                              |

## From VEX to Unity and Unreal

The same idea in all the tools you will use this year:

|                    | VEX Blocks                | VEX Python                              | Unity C#                       | Unreal C++                                |
|--------------------|---------------------------|-----------------------------------------|--------------------------------|-------------------------------------------|
| Runs once at start | when started              | def main():                             | Start()                        | BeginPlay()                               |
| Move 5 units       | drive forward for 1000 mm | drivetrain.drive_for(FORWARD, 1000, MM) | transform.Translate(-5, 0, 0); | AddActorWorldOffset(FVector(0, -500, 0)); |
| Units              | mm                        | mm                                      | metres                         | centimetres                               |
| Notes              | comment block             | # comment                              | // comment                     | // comment                                |
