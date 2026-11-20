---
title: Shell Maker: Raup's Three Numbers in Geometry Nodes
program: Blender
lesson: 14
blurb: Build one Geometry Nodes setup that grows a nautilus, an ammonite, a snail, a tower snail or a clam, by changing only three numbers.
---
You build one Geometry Nodes setup in Blender 5.2 that can grow a nautilus, an ammonite, a snail, a tower snail or a clam. Only three numbers change.

In 1966 the paleontologist David Raup showed that most coiled shells are a tube that spirals around an axis and gets wider as it grows. He described every shell with three numbers:

| Number | Name | What it controls |
| --- | --- | --- |
| **W** | Whorl expansion rate | How many times wider the opening gets with each full turn |
| **D** | Distance from the axis | How far the tube sits from the centre line. 0 = the coils touch the centre, near 1 = a wide gap |
| **T** | Translation | How far the tube slides along the axis each turn. 0 = flat coil, high = tall spire |

You also add a fourth input, **Turns**. It isn't one of Raup's numbers. It only sets how long the shell has been growing.

| Colour | Meaning |
| --- | --- |
| Green | Safe to change. No real effect on speed. |
| Amber | Raises the load a little. Fine at the values given, slower if pushed higher. |
| Red | Use with caution. Big effect on speed or memory. |

There are no red settings. The two amber settings are **Count** on Resample Curve and **Resolution** on Curve Circle. Together they set how many points the shell has.

| Where things are in Blender | Location on screen |
| --- | --- |
| **Geometry Nodes** workspace tab | Top of the window |
| **Node editor** | Bottom half of the Geometry Nodes workspace |
| **N panel** (Group tab in the node editor, Item tab in the 3D view) | Right edge of that editor (View → Sidebar) |
| **Modifier sliders** (W, D, T, Turns) | Properties editor, wrench tab (right side) |

```brief
Part 1 · Object and inputs
1.1 · Object | default Cube · rename Shell | Location 0 · Rotation 0 · Scale 1
1.2 · Modifier | Geometry Nodes tab · New | group Shell Maker
1.3 · Inputs | W 2 (1.01–100000) · D 0.2 (0–0.95) | T 0 (0–20) · Turns 4 (0.1–20)
Part 2 · Plain tube
2.1–2.2 · Line | Curve Line End Z 4 m → Resample Curve Count 400 | not Mesh Line
2.3–2.4 · Tube | Curve Circle Res 32 · 1 m | Curve to Mesh → Group Output · not Mesh to Curve
Part 3 · Coil into rings
3.1 · Set Position | between Resample and Curve to Mesh
3.2–3.4 · Angle | Spline Parameter Factor × Turns | × 6.2832
3.5–3.6 · Rotate | Combine XYZ X 3 → Vector Rotate Z Axis | → Set Position Position
Part 4 · W: growth
4.1–4.2 · Growth | (Factor × Turns) − Turns | Power: W ^ that
4.3 · Push out | Vector Math Scale between Combine XYZ and Vector Rotate
4.4–4.5 · Fatter | Set Curve Radius ← Power | Radius → Curve to Mesh Scale
Part 5 · D: open the centre
5 · D formula | (1 + D) ÷ (1 − D) | → Combine XYZ X
Part 6 · T: make a spire
6.1 · Height | Divide × T | → Combine XYZ Z
6.2 · Upright | Shell Rotation X 180°
```

## Part 1 · Set up the object and the inputs

By the end of this part you have an empty node tree with four sliders on the modifier: **W**, **D**, **T** and **Turns**.

### 1.1 · Add the object

| Setting | Axis | Value |
| --- | --- | --- |
| **Location** | X | 0 m |
|  | Y | 0 m |
|  | Z | 0 m |
| **Rotation** | X | 0° |
|  | Y | 0° |
|  | Z | 0° |
| **Scale** | X | 1 |
|  | Y | 1 |
|  | Z | 1 |

1. Start a new **General** file. Keep the default **Cube**.
2. Select the cube. Choose **View → Sidebar** and pick the **Item** tab. (Shortcut: N)
3. Check the values match the table. Type them in if they don't.
4. Rename the cube **Shell**: double-click its name in the **Outliner** (top-right panel) and type the new name. (Shortcut: F2)

The cube's own shape is replaced, so it doesn't matter what it looks like.

### 1.2 · Add the Geometry Nodes modifier

1. Click the **Geometry Nodes** workspace tab at the top of the screen.
2. With **Shell** selected, click **New** at the top of the node editor. Two nodes appear: **Group Input** and **Group Output**.
3. Rename the node group **Shell Maker** by double-clicking its name beside the **New** button.

### 1.3 · Add the four inputs

| Name | Type | Default | Min | Max |
| --- | --- | --- | --- | --- |
| **W** | Float | 2 | 1.01 | 100000 |
| **D** | Float | 0.2 | 0 | 0.95 |
| **T** | Float | 0 | 0 | 20 |
| **Turns** | Float | 4 | 0.1 | 20 |

All other socket settings stay at their defaults.

1. With your mouse over the node editor, choose **View → Sidebar** and pick the **Group** tab. (Shortcut: N)
2. Under **Interface**, click the **+** button and choose **Input**.
3. Type **W** in the **Name** field. Set **Type** to **Float**.
4. Type the **Default**, **Min** and **Max** values from the table.
5. Repeat for **D**, **T** and **Turns**, in that order.

W has a minimum of 1.01 because a W of 1 means no growth at all, and D stops at 0.95 because the maths breaks when D reaches 1.

- [ ] The node editor shows Group Input and Group Output
- [ ] The modifier (wrench tab) shows four sliders: W, D, T and Turns

## Part 2 · Make a plain tube

When this part is done, a straight line is turned into a tube by sweeping a circle along it, and you see a fat cylinder 4 m tall.

### 2.1 · Curve Line

| Curve Line | Value |
| --- | --- |
| Mode | Points |
| Start | 0 m, 0 m, 0 m |
| End | 0 m, 0 m, **4 m** |

Connect **Curve** → Resample Curve **Curve**.

1. Move your mouse over the node editor and open the **Add** menu. (Shortcut: Shift+A)
2. Click **Search** and type **Curve Line**. Place it below the Group Input node.
3. Click the **End Z** field and type **4**.

> **Pick the right one:** **Add → Curve → Primitives → Curve Line**. Not **Mesh Line**, which is under Mesh → Primitives and has a Count field instead of Start and End.

### 2.2 · Resample Curve

| Resample Curve | Value |
| --- | --- |
| Mode | Count |
| Count (amber) | **400** |

Connect **Curve** → Curve to Mesh **Curve**.

1. Add a **Resample Curve** node to the right of Curve Line.
2. Drag a wire from Curve Line **Curve** to Resample Curve **Curve**.
3. Type **400** in **Count**. This gives the shell 400 points along its length, so the spiral looks smooth. 400 is fine; a few thousand makes the sliders lag.

> **Pick the right one:** **Add → Curve → Operations → Resample Curve**. Not **Subdivide Curve**, which adds points between the ones you have instead of setting an exact count.

### 2.3 · Curve Circle

| Curve Circle | Value |
| --- | --- |
| Mode | Radius |
| Resolution (amber) | **32** |
| Radius | 1 m |

Connect **Curve** → Curve to Mesh **Profile Curve**.

1. Add a **Curve Circle** node below Resample Curve.
2. Type **32** in **Resolution**. This is the number of points around the opening. Much higher adds load for no visible gain.
3. Leave **Radius** at **1 m**. The opening of the finished shell is always this size.

> **Pick the right one:** **Add → Curve → Primitives → Curve Circle**. Not **Mesh Circle**, which is under Mesh → Primitives and outputs a mesh. Curve Circle has a green **Curve** output.

### 2.4 · Curve to Mesh

| Curve to Mesh | Value |
| --- | --- |
| Scale | 1 |
| Fill Caps | Off |

Connect **Mesh** → Group Output **Geometry**.

1. Add a **Curve to Mesh** node to the right of Resample Curve.
2. Connect Resample Curve **Curve** to Curve to Mesh **Curve**.
3. Connect Curve Circle **Curve** to Curve to Mesh **Profile Curve**.
4. Connect Curve to Mesh **Mesh** to Group Output **Geometry**. This replaces the old wire from Group Input, so the cube disappears and a tube appears.
5. Leave **Fill Caps** off. Shells are open at the mouth.

> **Pick the right one:** **Add → Curve → Operations → Curve to Mesh**. Not **Mesh to Curve**, which does the opposite. Curve to Mesh has **Curve** and **Profile Curve** inputs; Mesh to Curve has **Mesh** and **Selection**.

Keep the **Group Input** node. You plug its four sliders in during the next parts.

- [ ] A fat cylinder 4 m tall stands where the cube was

## Part 3 · Coil the tube into rings

When this part is done, the straight tube wraps around the Z axis and looks like a doughnut. Every turn sits on top of the last one because nothing grows yet.

**How it works:** **Spline Parameter Factor** counts from 0 at the start of the line to 1 at the end. Multiplying it by **Turns** tells each point how many turns along the shell it is. Multiplying that by **6.2832** (one full turn in radians) gives the angle, and **Vector Rotate** swings each point around the Z axis by that angle.

### 3.1 · Set Position

| Set Position | Value |
| --- | --- |
| Selection | On (default) |
| Offset | 0 m, 0 m, 0 m |

Connect Resample Curve **Curve** → Set Position **Geometry**, and Set Position **Geometry** → Curve to Mesh **Curve**.

1. Add a **Set Position** node.
2. Drag it onto the wire between **Resample Curve** and **Curve to Mesh**. When the wire highlights, let go and it drops into place.

> **Pick the right one:** **Add → Geometry → Write → Set Position**. Not **Set Point Radius** or the other Set nodes. It has **Position** and **Offset** inputs.

### 3.2 · Spline Parameter

Connect **Factor** → the first **Value** on the first Multiply node.

1. Add a **Spline Parameter** node above the Group Input node. It has no settings.

> **Pick the right one:** **Add → Curve → Read → Spline Parameter**. Not **Spline Length** or **Curve Length**. It has three outputs: **Factor**, **Length** and **Index**.

### 3.3 · Multiply by Turns

| Math | Value |
| --- | --- |
| Operation | **Multiply** |
| Value | from Spline Parameter **Factor** |
| Value | from Group Input **Turns** |

Connect **Value** → the first **Value** on the second Multiply node.

1. Add a **Math** node. It starts as **Add**. Click the drop-down and pick **Multiply**.
2. Connect **Spline Parameter Factor** to the first **Value**.
3. Connect **Group Input Turns** to the second **Value**.

> **Pick the right one:** **Add → Utilities → Math → Math**. Searching "multiply" lists several nodes. Pick **Math ▸ Multiply**, not **Vector Math**, **Integer Math** or **Mix**. The right one has grey sockets and a **Clamp** checkbox. Every Add, Subtract, Multiply, Divide and Power node in this lesson is this same Math node.

If the wire from Group Input gets long, add a second **Group Input** node closer to where you need it. It shows the same sliders.

### 3.4 · Multiply to get the angle

| Math | Value |
| --- | --- |
| Operation | **Multiply** |
| Value | from the first Multiply |
| Value | **6.2832** |

Connect **Value** → Vector Rotate **Angle**.

1. Add another **Math** node and set it to **Multiply**.
2. Connect the first Multiply's **Value** output to its first **Value**.
3. Type **6.2832** in the second **Value**.

### 3.5 · Combine XYZ

| Combine XYZ | Value |
| --- | --- |
| X | **3** |
| Y | 0 |
| Z | 0 |

Connect **Vector** → Vector Rotate **Vector**.

1. Add a **Combine XYZ** node.
2. Type **3** in **X**. This is a placeholder distance from the axis. Part 5 replaces it with **D**.

> **Pick the right one:** **Add → Utilities → Vector → Combine XYZ**. Not **Combine Color**, **Combine Transform** or **Combine Matrix**. It has three inputs named **X**, **Y** and **Z** and a purple **Vector** output.

### 3.6 · Vector Rotate

| Vector Rotate | Value |
| --- | --- |
| Type | **Z Axis** |
| Center | 0 m, 0 m, 0 m |
| Invert | Off |

Connect **Vector** → Set Position **Position**.

1. Add a **Vector Rotate** node.
2. Change its type drop-down from **Axis Angle** to **Z Axis**.
3. Connect Combine XYZ **Vector** to Vector Rotate **Vector**.
4. Connect the second Multiply's **Value** to Vector Rotate **Angle**.
5. Connect Vector Rotate **Vector** to Set Position **Position**. The tube bends into a ring.

> **Pick the right one:** **Add → Utilities → Vector → Vector Rotate**. Not **Rotate Vector** or **Rotate Rotation**, which are in the Rotation menu, and not **Rotate Instances**. Vector Rotate has a **Type** drop-down and an **Angle** input.

**Check:** you see a ring. Drag **Turns** on the modifier down to **0.5** and you get half a ring. Set it back to **4** when you're done.

- [ ] The tube wraps into a doughnut ring
- [ ] Turns 0.5 shows half a ring

## Part 4 · Add W, the whorl expansion rate

When this part is done, the doughnut becomes a flat spiral like an ammonite. With **W** at **2**, each turn is twice the size of the one inside it, and the coils just touch.

**How it works:** **Power** works out W to the power of how many turns each point is from the mouth. That number, the growth factor, does two jobs: **Vector Math Scale** pushes the point away from the axis, and **Set Curve Radius** makes the tube fatter. Subtracting **Turns** first makes the growth factor exactly 1 at the mouth and smaller toward the tip. The opening stays 1 m wide no matter what W is, and the tip shrinks to a point.

### 4.1 · Subtract

| Math | Value |
| --- | --- |
| Operation | **Subtract** |
| Value | from Multiply (Part 3) **Value** |
| Value | from Group Input **Turns** |

Connect **Value** → Power **Exponent**.

1. Add a **Math** node and set it to **Subtract**.
2. Connect the **first** Multiply node from Part 3 (the one that multiplies by Turns) to the first **Value**. That wire stays connected to the second Multiply too. One output can feed many inputs.
3. Connect Group Input **Turns** to the second **Value**.

### 4.2 · Power

| Math | Value |
| --- | --- |
| Operation | **Power** |
| Base | from Group Input **W** |
| Exponent | from Subtract **Value** |

Connect **Value** → Vector Math **Scale** and → Set Curve Radius **Radius**.

1. Add a second **Group Input** node near where you are working (**Add → Input → Group → Group Input**).
2. Add a **Math** node and set it to **Power**.
3. Connect Group Input **W** to **Base**.
4. Connect Subtract **Value** to **Exponent**.

### 4.3 · Vector Math (Scale)

| Vector Math | Value |
| --- | --- |
| Operation | **Scale** |
| Vector | from Combine XYZ **Vector** |
| Scale | from Power **Value** |

Connect **Vector** → Vector Rotate **Vector**.

1. Add a **Vector Math** node. It starts as **Add**. Change it to **Scale**.
2. Drag it onto the wire between **Combine XYZ** and **Vector Rotate** so it drops into place.
3. Connect Power **Value** to Vector Math **Scale**.

> **Pick the right one:** **Add → Utilities → Vector → Vector Math**, or search "scale" and pick **Vector Math ▸ Scale**. Not **Scale Elements** or **Scale Instances**. The right one has a purple **Vector** input and a grey **Scale** input.

### 4.4 · Set Curve Radius

| Set Curve Radius | Value |
| --- | --- |
| Selection | On (default) |
| Radius | from Power **Value** |

Connect **Curve** → Set Position **Geometry**.

1. Add a **Set Curve Radius** node.
2. Drag it onto the wire between **Resample Curve** and **Set Position** so it drops into place.
3. Connect Power **Value** to **Radius**.

> **Pick the right one:** **Add → Curve → Write → Set Curve Radius**. Not **Set Point Radius**, which is for point clouds. Set Curve Radius has a green **Curve** input and output.

### 4.5 · Radius

Connect **Radius** → Curve to Mesh **Scale**.

1. Add a **Radius** node (**Add → Curve → Read**, or search for **Radius**).
2. Connect it to Curve to Mesh **Scale**. The tube now grows fatter toward the mouth.

> **Pick the right one:** **Add → Curve → Read → Radius**. It's a small node with one grey **Radius** output and no inputs. It isn't Set Curve Radius, and it isn't the Radius field on Curve Circle.

Set Curve Radius stores the tube size on each point. The Radius node reads it back after the curve has been bent, so the tube width follows the spiral.

**Check:** you see a flat spiral with about four coils that just touch. Try **W 1.5**, then **W 4**. Low W makes many slow-growing coils that overlap. High W makes a few coils that open up fast. Set W back to **2**.

- [ ] A flat spiral with about four coils that just touch
- [ ] Changing W makes the coils grow faster or slower

## Part 5 · Add D, the distance from the axis

When this part is done, the **D** slider opens and closes the hole in the middle of the shell. At **D 0** the inner edge of the tube touches the axis. As D gets close to 1, the tube moves far out and the coils separate like a ram's horn.

**How it works:** Raup defined D as the inner edge's distance from the axis divided by the outer edge's distance. Turning that into the centre of the tube takes one formula: (1 + D) ÷ (1 − D). That number replaces the placeholder **3** in Combine XYZ X. At D 0.5 the formula gives exactly 3, so the shell looks the same as at the end of Part 4.

| Math node | Operation | Top Value | Bottom Value | Output goes to |
| --- | --- | --- | --- | --- |
| **5.1** | **Add** | Group Input **D** | **1** | Divide, top Value |
| **5.2** | **Subtract** | **1** | Group Input **D** | Divide, bottom Value |
| **5.3** | **Divide** | Add | Subtract | Combine XYZ **X** |

### 5.1 · Add

1. Add a **Math** node. Leave it on **Add**.
2. Connect Group Input **D** to the first **Value**. Type **1** in the second **Value**.

### 5.2 · Subtract

1. Add a **Math** node and set it to **Subtract**.
2. Type **1** in the first **Value**. Connect Group Input **D** to the second **Value**. The order matters: it has to be 1 minus D, not D minus 1.

### 5.3 · Divide

1. Add a **Math** node and set it to **Divide**.
2. Connect Add to the first **Value** and Subtract to the second **Value**.
3. Connect Divide **Value** to Combine XYZ **X**. The typed 3 disappears because the field is now driven by the wire.

> **Pick the right one:** all three nodes in this part are the plain **Math** node from 3.3 (grey sockets), not Vector Math or Integer Math.

**Check:** set **D** to **0.5** and the shell looks exactly like it did at the end of Part 4. Then try **D 0**, where the coils wrap over each other like a nautilus, and **D 0.8**, where a wide gap opens in the middle.

- [ ] D 0.5 matches the Part 4 shell
- [ ] D 0.8 opens a gap in the middle

## Part 6 · Add T, the translation along the axis

When this part is done, the **T** slider pulls the flat spiral up into a cone, and the shell turns into a snail. At **T 0** it stays flat. The higher T goes, the taller and thinner the spire.

**How it works:** T is multiplied by the same distance that sets X, so the height of each turn grows at the same rate as its width. That keeps the spire a clean cone at any size.

### 6.1 · Multiply

| Math | Value |
| --- | --- |
| Operation | **Multiply** |
| Value | from Divide **Value** |
| Value | from Group Input **T** |

Connect **Value** → Combine XYZ **Z**.

1. Add a **Math** node and set it to **Multiply**.
2. Connect Divide **Value** to the first **Value**. Divide stays connected to Combine XYZ X as well.
3. Connect Group Input **T** to the second **Value**.
4. Connect Multiply **Value** to Combine XYZ **Z**.

### 6.2 · Turn the shell upright

| Setting | Axis | Value |
| --- | --- | --- |
| **Rotation** | X | **180°** |
|  | Y | 0° |
|  | Z | 0° |

All other values stay as they were set in 1.1.

The shell grows upward, so the mouth ends up at the top and the tip at the bottom. Snail shells are usually shown tip up.

1. Click in the 3D viewport and select **Shell**.
2. In the N panel, **Item** tab, type **180** in **Rotation X**. (Shortcut: R, X, 180, Enter)

**Check:** set **W 2**, **D 0.1**, **T 2.5** and **Turns 4**. You see a garden snail shell. Drag T slowly from 0 to 6 and watch the flat coil stretch into a tower.

- [ ] W 2, D 0.1, T 2.5, Turns 4 makes a garden snail shell, tip up

## Shell recipes and challenges

Type these values into the modifier sliders to grow each of the main shell types. They are starting points. Real shells vary, so nudge the numbers until it looks right to you.

| Shell | W | D | T | Turns | What to look for |
| --- | --- | --- | --- | --- | --- |
| **Nautilus** | 3 | 0 | 0 | 3 | Flat, and each coil wraps over the one inside it |
| **Ammonite** | 2 | 0.45 | 0 | 5 | Flat, with many coils that just touch |
| **Open coil** (ram's horn, Spirula) | 2 | 0.7 | 0 | 3 | Flat, with a gap between the coils |
| **Garden snail** | 2 | 0.1 | 2.5 | 4 | Low, round spire |
| **Tower snail** (Turritella) | 1.3 | 0.1 | 6 | 10 | Tall, thin spire with many slow-growing turns |
| **Clam** (one half) | 1000 | 0 | 0.2 | 0.5 | A wide cap that flares fast from a small curled tip |

Three patterns to notice:

- **T** sorts the shells into two families: flat coilers (T = 0) and spired snails (T above 0).
- **W** sets how fast the shell grows. Snails grow slowly (W around 1.3 to 2), and clams grow so fast (W in the hundreds or thousands) that they only get through half a turn.
- **D** decides whether the coils overlap, touch or separate.

The tower snail has 10 turns spread over the same 400 points, so it can look blocky. Raise **Count** on Resample Curve to **800** if you need it smoother. 800 is fine on the class laptops, but set it back to 400 while you experiment.

### Challenge 1 · Find the shells that never existed

Raup drew his three numbers as a cube and found that real shells fill only a few small corners of it. Try **W 1.1, D 0.9, T 0** or **W 50, D 0.8, T 5**. Describe what you get and suggest a reason no animal grows a shell like that.

### Challenge 2 · Flatten the opening

| Transform Geometry | Value |
| --- | --- |
| Translation | 0 m, 0 m, 0 m |
| Rotation | 0°, 0°, 0° |
| Scale | **0.4**, 1, 1 |

Connect **Geometry** → Curve to Mesh **Profile Curve**.

1. Add a **Transform Geometry** node.
2. Drag it onto the wire between **Curve Circle** and **Curve to Mesh** so it drops into place.
3. Type **0.4** in **Scale X**. Load the clam recipe, then try the 0.4 in **Scale Y** instead and decide which looks more like a real clam.

> **Pick the right one:** **Add → Geometry → Operations → Transform Geometry**. Not **Translate Instances**, **Rotate Instances** or **Scale Instances**. It has **Translation**, **Rotation** and **Scale** inputs.

### Challenge 3 · Give the shell some thickness

| Panel | Field | Value |
| --- | --- | --- |
| **Solidify** | Thickness (amber) | **0.05 m** |
|  | Offset | -1 |

1. In the **Properties** editor, wrench tab, choose **Add Modifier → Generate → Solidify**. It must sit below the Geometry Nodes modifier.
2. Type **0.05** in **Thickness**. It doubles the mesh, which is fine here, but switch it off while you drag sliders if they lag.

### Challenge 4 · Left-handed shells

Most snails coil to the right, but a few species coil to the left. In the N panel, type **-1** in **Scale X** to mirror your shell. Find out which way your shell coiled before you mirrored it.

## Troubleshooting

| What you see | Likely cause | Fix |
| --- | --- | --- |
| The shell vanishes or shoots off into huge spikes | D is 1 or more, or W is 1 or less | Keep D at 0.95 or less and W at 1.01 or more |
| The tube is the same width all the way along | Radius isn't connected | Connect the **Radius** node to Curve to Mesh **Scale** |
| The tip is huge and the mouth is tiny | Subtract inputs are swapped | Subtract must be the Multiply output minus **Turns** |
| D 0.5 doesn't match the Part 4 shell | The Subtract in Part 5 is swapped | It must be **1** minus **D** |
| The rings never move off the Z axis | Combine XYZ X is 0 or not connected | Connect Divide to **X**, or type 3 if you're still on Part 3 |
| Sliders lag | Count or Resolution too high | Set **Count** back to 400 and **Resolution** to 32 |
