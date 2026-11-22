---
title: Sharp Turn Wedge Robot: Drive and Push
program: Unreal Engine
lesson: 8
blurb: Bring the wedge robot from Blender into Unreal and program it in Blueprint so it drives like a tank, spins on the spot and pushes physics cubes.
---
You bring the wedge robot from Blender into Unreal Engine and program it in Blueprint so it drives like a tank, spins on the spot, pushes cubes, and finally plays a sumo ring game that ends with a **YOU LOSE!** banner.

| Key | What the robot does |
| --- | --- |
| **W** | Drives forward (toward the thin front edge of the wedge) |
| **S** | Drives backward |
| **A** | Spins left on the spot |
| **D** | Spins right on the spot |

Before you start, have **Robot.fbx** from the Blender build ready, with the front of the robot facing **+X**.

**Golden rules for the whole build**

- The front of the robot must point toward **+X** (the red axis). Unreal treats +X as forward.
- In Unreal, keep everything in **your own folder** so nobody overwrites your work.

**How each step is laid out**

1. A **settings table** first, laid out like the Unreal **Details** panel (or the Blender **N** panel), so you can see the finished values at a glance.
2. For Blueprint steps, a **node diagram** and **node tables** come before the written steps.
3. Then the numbered steps. Shortcuts are in brackets after the panel method.
4. **Pick the right one** notes follow any node that has look-alikes in the search list.

**Colour key: how hard a setting works your computer**

| Colour | Meaning |
| --- | --- |
| **Green** | Safe to change. No real effect on speed. |
| **Amber** | Adds a little load. Fine at the value given, slower if pushed higher. |
| **Red** | Use with caution. Big effect on speed or memory. Too high can freeze or crash Unreal. A lighter working value is given. |

In tables, the setting's name cell is coloured. In written steps, the colour is named in brackets after the setting, e.g. **Spawn Count** (red).

The sumo ring game continues this build in [Robot Sumo Ring Game](../lesson-09-robot-sumo-ring-game/).

```brief
Part 0 · Create the project
0 · New project | Games → Blank · Blueprint | Desktop · no Starter Content · WedgeRobot
Part 1 · Import the robot
1 · Import | Content → your name → Robot | drag Robot.fbx · Import defaults
Part 2 · Wedge collision
2 · Auto Convex | Remove Collision · Auto Convex | Hull Count 1 · Max Hull Verts 16 · not Box
Part 3 · Robot Blueprint
3A · Parts | Pawn BP_SharpTurnRobot · RobotMesh root | Floating Pawn Movement 600 · SpringArm 600, −30
3B · Variable | TurnSpeed · Float · 150
Part 4 · Drive (W and S)
4A · Start | Event Tick → Sequence (Then 0–3) | Get Player Controller
4B · W | Branch ← Is Input Key Down W | Add Movement Input ← Forward Vector · 1.0
4C · S | copy · key S · Scale −1.0
Part 5 · Sharp turns (D and A)
5A · D | Add Actor Local Rotation · split | Z (Yaw) ← TurnSpeed × Delta Seconds
5B · A | copy · key A | extra Multiply × −1
5C · Test | drop in level · End · Z +5 | Auto Possess Player 0
Part 6 · Game Mode and level
6A · Game Mode | GM_SharpTurnRobot | Default Pawn Class None
6B · Level | L_SharpTurn | GameMode Override
6C · Robot | End · Z +5 · Player 0
Part 7 · Push objects
7A–7B · Physics cube | Movable · Simulate Physics | Mass 5 kg
7C · Push | On Component Hit → Add Impulse | Forward Vector × 500 · Vel Change
7D · No warnings | Branch ← Is Simulating Physics
Part 8 · Test and tune
8 · Tune | Max Speed 600 · TurnSpeed 150 | Arm 600 · Impulse 500
```

## Part 0 · Create the project

Start from the **Blank** template. It is clean, and Part 6 sets up the robot's own Game Mode and level.

| Project Browser | Value |
| --- | --- |
| **Category** | Games |
| **Template** | Blank |
| **Project Defaults** | Blueprint |
| **Target Platform** | Desktop |
| **Quality Preset** | Maximum (Scalable on slower computers) |
| **Starter Content** | Off |
| **Project Location** | A local folder, not OneDrive |
| **Project Name** | WedgeRobot |

Everything else stays at its default.

1. Open Unreal Engine. In the Project Browser, click **Games**, then **Blank**.
2. Under **Project Defaults**, choose **Blueprint** (not C++).
3. Set **Target Platform** to **Desktop** and **Quality Preset** (amber) to **Maximum**. On slower computers, use **Scalable**.
4. Leave **Starter Content** (green) off. Turn it on only if you want ready-made floor materials for your arena.
5. Pick a local folder, not OneDrive, and name the project **WedgeRobot**. Don't rename it later.
6. Click **Create** and wait for the editor to open.

> **Pick the right one:** use **Blank**, not **Third Person**. Third Person brings its own character and Game Mode, which are easy to mix up with the robot.

- [ ] The Unreal editor is open on an empty Blank level
- [ ] The project is called WedgeRobot, in a local folder

## Part 1 · Import the robot

Make your folders first, then import, so the robot lands in the right place.

| Content Browser | Name |
| --- | --- |
| **Content** | (already there) |
|  └ **Your folder** | Your first name |
|   └ **Robot** | Robot |

**Folders**

1. In the **Content Browser**, right-click the **Content** folder → **New Folder**. Name it with your **first name**.
2. Inside it, make a folder called **Robot** and open it.

**Import**

| FBX Import Options | Value |
| --- | --- |
| **All settings** | Defaults |

1. Drag **Robot.fbx** from File Explorer into the **Robot** folder. Click **Import** and keep the defaults.
2. You get one static mesh (the robot) plus **RobotColor**, **WheelColor** and **AxleColor**.

**Imported into the wrong folder?** Select the mesh and all its materials, drag them onto the Robot folder and choose **Move Here**. Then right-click the old folder → **Update Redirector References**. Never move Unreal files in File Explorer. It breaks the links between the mesh and its materials.

- [ ] Your first-name folder holds a Robot folder
- [ ] The robot mesh and its three materials are in the Robot folder

## Part 2 · Wedge-shaped collision

Collision is the invisible shape Unreal uses for bumping. A box doesn't fit a wedge, so use **Auto Convex**.

| Convex Decomposition | Value |
| --- | --- |
| **Hull Count** | 1 |
| **Max Hull Verts** | 16 |
| **Hull Precision** | Default |

The other fields stay at their defaults.

1. Double-click the robot mesh to open the **Static Mesh Editor**.
2. Find the **Collision** drop-down. It's in the menu bar along the very top of the Static Mesh Editor (next to File, Edit, Asset and Window), and also as a button on the toolbar just below it.
3. If there is already collision, click **Collision → Remove Collision**.
4. Click **Collision → Auto Convex Collision**. A **Convex Decomposition** panel appears.
5. Set **Hull Count** (amber) to **1** and **Max Hull Verts** (amber) to **16**, then click **Apply**.
6. Check the thin green outline around the robot. That is the collision. The info box at top left should read **Num Collision Primitives: 1**, and the outline should follow the slope. If the wheels stick out, try **Hull Count** **2** or **3** and apply again.
7. No outline? Click the **eye icon** in the viewport toolbar, between **Lit** and **LOD Auto**, and tick **Simple Collision**.
8. Press **Ctrl + S** to save, then close the editor.

> **Pick the right one:** choose **Auto Convex Collision**, not **Add Box Simplified Collision** or **Add 10DOP**. A box or 10DOP leaves a gap under the slope, so cubes catch on thin air.

- [ ] The green collision outline follows the slope of the wedge
- [ ] Num Collision Primitives reads 1

## Part 3 · Make the robot Blueprint

A Blueprint is the robot's parts plus its instructions. Here you add the parts and one variable.

**What "done" looks like in the Components panel**

- **RobotMesh** (root)
  - **SpringArm**
    - **Camera**
- **FloatingPawnMovement**

### 3A · The parts

| RobotMesh → Static Mesh | Value |
| --- | --- |
| **Static Mesh** | Your robot mesh |

| FloatingPawnMovement → Floating Pawn Movement | Value |
| --- | --- |
| **Max Speed** | 600.0 |

| SpringArm → Camera | Value |
| --- | --- |
| **Target Arm Length** | 600.0 |

| SpringArm → Transform | X | Y | Z |
| --- | --- | --- | --- |
| **Rotation** | 0.0° (Roll) | **-30.0°** (Pitch) | 0.0° (Yaw) |

| Camera → Transform | X | Y | Z |
| --- | --- | --- | --- |
| **Rotation** | 0.0° (Roll) | **0.0°** (Pitch) | 0.0° (Yaw) |

Everything else stays at its default.

1. In your **Robot** folder, right-click → **Blueprint Class** → **Pawn**. Name it **BP_SharpTurnRobot** and double-click to open it.
2. In the **Components** panel (top left), click **+ Add → Static Mesh**. Name it **RobotMesh**.
3. Drag **RobotMesh** on top of **DefaultSceneRoot**. It replaces it and becomes the root.
4. With RobotMesh selected, go to **Details → Static Mesh** and pick your robot mesh.
5. Click **+ Add → Floating Pawn Movement**. In its Details, set **Max Speed** (green) to **600**.
6. Select **RobotMesh**, then **+ Add → Spring Arm**. Set **Target Arm Length** (green) to **600** and **Rotation Y** to **-30**.
7. Select **SpringArm**, then **+ Add → Camera**. It attaches to the end of the arm.
8. With **Camera** selected, check **Transform → Rotation**. If **Y** is not **0**, type **0**. Otherwise the camera points up or down instead of along the arm.
9. Click **Compile**, then **Save**.

> **Pick the right one:** add **Floating Pawn Movement**, not **Character Movement** or **Projectile Movement**. Character Movement only works on a Character Blueprint, and Projectile Movement flies off on its own.

### 3B · The turn speed variable

| My Blueprint → Variables | Value |
| --- | --- |
| **Variable Name** | TurnSpeed |
| **Variable Type** | Float |
| **Default Value** | 150.0 |

1. Find the **My Blueprint** panel, under Components on the left. (Missing? **Window → My Blueprint**.)
2. On the **Variables** line, click **+**. Name it **TurnSpeed** and set the type to **Float**.
3. Click **Compile**. You can't set a value until you compile.
4. With TurnSpeed selected, look at the bottom of the **Details** panel. Under **Default Value**, type **150** (green) in the Turn Speed box.

150 means the robot turns 150 degrees every second while A or D is held. Higher means sharper turns. TurnSpeed is the only variable the driving part needs.

> **Pick the right one:** the type is **Float** (green pill), not **Integer** (sea-green) or **Double**. If your version only lists **Float** with a precision choice, keep the default.

- [ ] Components: RobotMesh (root) › SpringArm › Camera, plus FloatingPawnMovement
- [ ] TurnSpeed is a Float with Default Value 150

## Part 4 · Program driving (W and S)

Every frame, the robot checks which keys are held. Each key gets its own row of nodes, and a **Sequence** node runs all four rows.

**Event Graph basics**

The **Event Graph** is the big grid in the middle of the Blueprint editor (the EventGraph tab). Instead of typing code, you place **nodes** and connect them with **wires**.

- **Right-click** empty space to add a node, then type its name.
- **Hold right mouse and drag** to move around. **Scroll** to zoom.
- **White arrow pins** mean "do this next". **Coloured circle pins** carry values: blue = the player or an object, red = true/false, green = numbers, yellow = directions.
- An **output** pin (right side) can send many wires. An **input** pin (left side) takes only one.
- **Alt + click** a pin removes its wires. **Ctrl + drag** a wire end moves it to another pin.
- **Double-click** a wire to add a **reroute** dot that keeps wires tidy.

When it's done, Event Tick feeds the Sequence, Then 0 feeds the W Branch, and the Branch's True runs Add Movement Input along the robot's forward direction.

### 4A · Start the graph

| Event Tick | Value |
| --- | --- |
| **Exec out** | → Sequence |
| **Delta Seconds** | Used in Part 5 |

| Sequence | Value |
| --- | --- |
| **Pins** | Then 0, Then 1, Then 2, Then 3 (Add pin twice) |

| Get Player Controller | Value |
| --- | --- |
| **Player Index** | 0 |
| **Return Value** | → Target of all four Is Input Key Down nodes |

1. The Event Graph starts with three faded nodes. This robot only uses **Event Tick** (amber). Click **Event BeginPlay** and **Event ActorBeginOverlap** and press **Delete**. Keep **Event Tick**.
2. **Event Tick** runs about 60 times a second and wakes up once something is connected.
3. Drag off Event Tick's white pin and add a **Sequence**. Click **Add pin** twice so it has **Then 0** to **Then 3**.
4. Right-click and add one **Get Player Controller**. All four key checks share it.

> **Pick the right one:** **Get Player Controller** (green header, Player Index 0), not **Get Controller** (it needs a Target) or **Get Player Pawn**. **Sequence** is under **Utilities → Flow Control**, not **Sequence (Level Sequence)** or anything with "Sequencer" in it.

### 4B · Then 0 – W drives forward

| Branch | Value |
| --- | --- |
| **Exec in** | ← Then 0 |
| **Condition** | ← Is Input Key Down (W) Return Value |
| **True** | → Add Movement Input |
| **False** | Not used |

| Is Input Key Down | Value |
| --- | --- |
| **Target** | ← Get Player Controller |
| **Key** | **W** |

| Add Movement Input | Value |
| --- | --- |
| **Target** | self |
| **World Direction** | ← Get Actor Forward Vector |
| **Scale Value** | **1.0** |
| **Force** | Unticked |

1. Drag off **Then 0** and add a **Branch** (Shortcut: hold **B** and click). It has **True** and **False** outputs and a red **Condition** input.
2. Drag off Get Player Controller's blue **Return Value** and add **Is Input Key Down**. Click the keyboard icon on **Key** and press **W**.
3. Wire its red **Return Value** into the Branch's **Condition**.
4. Drag off **True** and add **Add Movement Input**.
5. Add **Get Actor Forward Vector** and wire it into **World Direction**.
6. Leave **Scale Value** at **1.0** and **Force** unticked.

> **Pick the right one:** **Branch** is the plain one under **Utilities → Flow Control** (True, False, Condition), not **Switch on Bool** or **Branch (Multi-Gate)**. **Is Input Key Down** (Target and Key inputs), not **Was Input Key Just Pressed**, which fires once per tap. **Add Movement Input** (World Direction, Scale Value, Force), not **Add Input Vector** or **Add Force**. **Get Actor Forward Vector** (Target is Actor), not **Get Forward Vector**, which asks for a component.

### 4C · Then 1 – S drives backward

The S row is a copy of the W row. Only these change:

| Node | Field | W row | S row |
| --- | --- | --- | --- |
| **Sequence** | Pin | Then 0 | **Then 1** |
| **Is Input Key Down** | Key | W | **S** |
| **Add Movement Input** | Scale Value | 1.0 | **-1.0** |

1. Box-select the Branch, Is Input Key Down, Add Movement Input and Get Actor Forward Vector. Press **Ctrl + C**, then **Ctrl + V**, and move the copy down.
2. Wire **Then 1** into the new Branch.
3. Drag a second blue wire from Get Player Controller into the new Is Input Key Down's **Target**. Copies lose wires to nodes you didn't copy, so Target shows **[self]** until you connect it.
4. Change the key to **S** and **Scale Value** to **-1.0**. Check the red wire reaches the Condition. A ticked Condition box means "always true" and the robot would never stop.
5. **Compile** and **Save**.

- [ ] Sequence has Then 0 to Then 3
- [ ] W and S rows wired, with Scale Value 1.0 and -1.0

## Part 5 · Program sharp turns (D and A)

D and A rotate the robot on the spot. The amount each frame is **TurnSpeed × Delta Seconds**, so turning is the same speed on fast and slow computers.

### 5A · Then 2 – D spins right

When it's done, Then 2 feeds the D Branch, and True runs Add Actor Local Rotation with TurnSpeed × Delta Seconds wired into Z (Yaw).

| Branch | Value |
| --- | --- |
| **Exec in** | ← Then 2 |
| **Condition** | ← Is Input Key Down (D) Return Value |
| **True** | → Add Actor Local Rotation |

| Is Input Key Down | Value |
| --- | --- |
| **Target** | ← Get Player Controller |
| **Key** | **D** |

| Multiply | Value |
| --- | --- |
| **Top input** | ← Turn Speed (Get) |
| **Bottom input** | ← Event Tick **Delta Seconds** |
| **Output** | → Delta Rotation **Z (Yaw)** |

| Add Actor Local Rotation | Value |
| --- | --- |
| **Target** | self |
| **Delta Rotation → X (Roll)** | 0.0 |
| **Delta Rotation → Y (Pitch)** | 0.0 |
| **Delta Rotation → Z (Yaw)** | ← Multiply |
| **Sweep** | Unticked |
| **Teleport** | Unticked |

1. Drag off **Then 2** and add a **Branch**.
2. Add an **Is Input Key Down** and set its key to **D**.
3. Drag a blue wire from **Get Player Controller** into its **Target**. If Target shows **[self]**, it isn't connected yet.
4. Wire its red **Return Value** into the Branch's **Condition**. The ticked box on Condition disappears once it's wired.
5. Drag off **True** and add **Add Actor Local Rotation**.
6. **Split the Delta Rotation pin.** Right-click the small purple circle left of **Delta Rotation** → **Split Struct Pin**. You now see **X (Roll)**, **Y (Pitch)** and **Z (Yaw)**.
   - Not in the menu? Alt + click the pin to remove any wire, or compile first.
   - Still stuck? Drag off the purple circle and add **Make Rotator**, then use its **Z (Yaw)**.
7. Drag **TurnSpeed** (green) from My Blueprint into the graph and choose **Get**.
8. Add a **Multiply**. Wire **TurnSpeed** into one input and **Delta Seconds** (green pin on Event Tick) into the other. **Neither input should still show 0.0.**
9. Wire the Multiply's output into **Z (Yaw)**, not Y (Pitch), which tips the nose up. Leave X and Y at 0.0.
10. **Compile**, **Save**.

> **Pick the right one:** **Add Actor Local Rotation** (Target is Actor), not **Add Local Rotation (RobotMesh)**, which spins only the mesh and leaves the camera behind, and not **Add Relative Rotation** or **Add Actor World Rotation**. **Multiply** is the plain one under **Math → Operators** (two inputs, one output), not **Multiply (Vector)** or **Multiply by Pi**. When you drag in **TurnSpeed**, choose **Get** (a pill with one output), not **Set** (it has white arrow pins).

### 5B · Then 3 – A spins left

The A row matches the D row, plus a second Multiply that turns the number negative.

| Node | Field | D row | A row |
| --- | --- | --- | --- |
| **Sequence** | Pin | Then 2 | **Then 3** |
| **Is Input Key Down** | Key | D | **A** |
| **Second Multiply** | Bottom input | (none) | **-1.0** |

1. Drag off **Then 3** and add a **Branch**.
2. Add an **Is Input Key Down** set to **A**. Wire a blue wire from **Get Player Controller** into its **Target** (no **[self]** showing), and its red Return Value into the Branch's **Condition**.
3. Select the D row's **Add Actor Local Rotation**, **Multiply** and **TurnSpeed** (Ctrl + click each). Copy and paste them near the new Branch.
4. Wire the new Branch's **True** into the new Add Actor Local Rotation.
5. **Re-wire Delta Seconds.** Pasting keeps the wire from TurnSpeed but loses the wire from Event Tick, so the new Multiply shows **0.0**. Drag from **Delta Seconds** into that 0.0 input.
6. Drag off the new Multiply's output and add a second **Multiply**. Type **-1** in its empty box.
7. Wire that second Multiply into **Z (Yaw)**.
8. **Compile**, **Save**.

**Check before you test**

- [ ] All four **Is Input Key Down** nodes have a blue wire in **Target** (none shows **[self]**).
- [ ] All four **Branch** Conditions have a red wire (no ticked box).
- [ ] W and S rows: Scale Value **1.0** and **-1.0**.
- [ ] Both **Add Actor Local Rotation** nodes: Delta Rotation is split, and only **Z (Yaw)** has a wire.
- [ ] Every **Multiply** input has a wire or a typed number. A **0.0** means a missing wire.
- [ ] The A row has the extra **× -1** Multiply.

### 5C · Place and possess the robot, then test

| BP_SharpTurnRobot (in the level) → Transform | X | Y | Z |
| --- | --- | --- | --- |
| **Location** | (where you drop it) | (where you drop it) | Floor height **+ 5** |

| BP_SharpTurnRobot (in the level) → Pawn | Value |
| --- | --- |
| **Auto Possess Player** | **Player 0** |

1. Compile and Save, then go back to the level tab.
2. Drag **BP_SharpTurnRobot** from the Content Browser into the level.
3. With it selected, press **End** to drop it to the floor, then add **5** to **Location Z**.
4. In **Details**, search **possess** and set **Auto Possess Player** to **Player 0**. Without this, Play gives you Unreal's floating camera instead of the robot's, and WASD moves that camera.

Test with **Play**: D should spin the robot right and A left.

## Part 6 · Game Mode and level

You place the robot yourself and tell the game you control it. A Game Mode with no default pawn stops Unreal adding its own floating sphere.

### 6A · Game Mode

| GM_SharpTurnRobot → Classes | Value |
| --- | --- |
| **Default Pawn Class** | **None** |

Everything else stays at its default.

1. In your **Robot** folder, right-click → **Blueprint Class** → **Game Mode Base** (a big button under Common Classes). Name it **GM_SharpTurnRobot**.
2. Open it. It shows a list of settings (a data-only Blueprint). That's normal.
3. Under **Classes**, set **Default Pawn Class** to **None** (top of the list).
4. **Compile**, **Save** and close.

> **Pick the right one:** **Game Mode Base**, not **Game Mode** or **Game State Base**. Game Mode adds match rules this project doesn't need, and Game State only stores scores.

### 6B · Level

| File → Save Current Level As | Value |
| --- | --- |
| **Folder** | Your Robot folder |
| **Name** | L_SharpTurn |

| World Settings → Game Mode | Value |
| --- | --- |
| **GameMode Override** | **GM_SharpTurnRobot** |
| **Selected GameMode → Default Pawn Class** | None (check only) |

1. In the main editor, go to **File → New Level → Basic**.
2. **File → Save Current Level As** (Shortcut: Ctrl + Alt + S). Pick your **Robot** folder, name it **L_SharpTurn**, and click **Save**. Check the level tab at the top now reads **L_SharpTurn**. If Ctrl + S ever asks for a name, the level you're in was never saved. Cancel and use Save Current Level As instead.
3. **Window → World Settings**. A World Settings tab opens beside Details. Set **GameMode Override** to **GM_SharpTurnRobot**. Under **Selected GameMode**, Default Pawn Class should read **None**.

### 6C · Place and possess the robot

| BP_SharpTurnRobot (in the level) → Transform | X | Y | Z |
| --- | --- | --- | --- |
| **Location** | (where you drop it) | (where you drop it) | Floor height **+ 5** |

| BP_SharpTurnRobot (in the level) → Pawn | Value |
| --- | --- |
| **Auto Possess Player** | **Player 0** |

1. Drag **BP_SharpTurnRobot** from the Content Browser into the level.
2. **Don't eyeball the height.** With the robot selected, press **End** to drop it onto the floor, then add **5** to **Location Z**. Floating movement has no gravity, so it stays there, and the small gap stops it snagging on the floor.
3. In the **Details** tab (not World Settings), search **possess** and set **Auto Possess Player** to **Player 0**.
4. **Ctrl + S** to save the level.

A selected object turns orange-yellow in the viewport. Press **Esc** to deselect.

- [ ] World Settings shows GameMode Override GM_SharpTurnRobot
- [ ] The robot sits just above the floor with Auto Possess Player 0

## Part 7 · Push objects

Add shapes to the level and make the robot shove them, driving forward or backward.

### 7A · Drive into a plain cube

| Quick Add → Shapes | Value |
| --- | --- |
| **Shape** | Cube |
| **Place** | A little in front of the robot |

1. On the main toolbar, click the **Quick Add** button (the cube with a +), then **Shapes → Cube**. Move it a little in front of the robot.
2. Press **Play** and drive into the cube. The robot stops dead at the cube, and the cube doesn't move.

★ **If your robot goes through the floor:**

| FloatingPawnMovement → Planar Movement | Value |
| --- | --- |
| **Constrain to Plane** | Ticked |
| **Plane Constraint Axis Setting** | **Z** |

Open the Robot Blueprint and select **FloatingPawnMovement**. Search **plane** in Details, tick **Constrain to Plane** and set **Plane Constraint Axis Setting** to **Z**. Compile and Save.

### 7B · Make the cube a physics object

| Cube → Transform | Value |
| --- | --- |
| **Mobility** | **Movable** |

| Cube → Physics | Value |
| --- | --- |
| **Simulate Physics** | Ticked |
| **Mass (kg)** | Ticked, **5.0** |

1. Click the cube from 7A to select it.
2. In Details (**All** tab), set **Mobility** to **Movable**.
3. Search **simulate** and tick **Simulate Physics** (amber). Physics objects fall, so it drops to the floor when you play.
4. Search **mass**, tick **Mass (kg)** (green) and change **100** to **5**.
5. Test one cube first, then press **Ctrl + D** to duplicate it. Copies keep the same settings. Every physics cube adds a little load (amber), so a dozen is plenty.

### 7C · Give the robot a push

Floating movement stops against objects instead of pushing them, so the robot gives a push whenever it hits something.

When it's done, On Component Hit runs Add Impulse on the thing it hit, using the robot's forward direction × 500.

| On Component Hit (RobotMesh) | Value |
| --- | --- |
| **Exec out** | → Add Impulse |
| **Other Comp** | → Add Impulse **Target** |

| Get Actor Forward Vector | Value |
| --- | --- |
| **Target** | self |
| **Return Value** | → Multiply top input |

| Multiply | Value |
| --- | --- |
| **Top input** | ← Get Actor Forward Vector |
| **Bottom input** | Float (double precision) **500.0** |
| **Output** | → Add Impulse **Impulse** |

| Add Impulse | Value |
| --- | --- |
| **Target** | ← Other Comp |
| **Impulse** | ← Multiply |
| **Bone Name** | None |
| **Vel Change** | **Ticked** |

1. Open the **Robot** Blueprint and click **RobotMesh** in Components.
2. Right-click empty space in the Event Graph and type **component hit**. Pick **Add On Component Hit**.
3. Drag from its blue **Other Comp** pin and add **Add Impulse** (not "at location").
4. Right-click and add **Get Actor Forward Vector**. Drag off its **Return Value** and add a **Multiply** (Operator).
5. Right-click the Multiply's bottom input → **Convert Pin** → **Float (double precision)**. Type **500** (green).
6. Wire the Multiply's output into **Impulse**. Tick **Vel Change**.
7. Compile, Save and test driving forward and backward into a cube.

The robot pushes the cube the way it is facing. Too strong or weak? Change **500**. Backing into a cube pushes it forward, toward the robot, so drive forward to push.

> **Pick the right one:** with **RobotMesh** selected, the menu shows **Add On Component Hit** for RobotMesh. Don't pick **Event Hit** (the whole actor) or **On Component Begin Overlap** (fires on overlaps, not bumps). Use **Add Impulse** (Target, Impulse, Bone Name, Vel Change), not **Add Impulse at Location**, **Add Force** or **Add Radial Impulse**. The **Multiply** here starts as vector × vector, so its bottom pin must be converted to a Float before you can type 500.

### 7D · Stop the floor warnings

If the Message Log fills with "has to have Simulate Physics enabled" warnings, the robot is trying to push the floor. Only push things that have physics.

When it's done, a Branch sits between the hit event and Add Impulse, and only objects with physics get the push.

| Is Simulating Physics | Value |
| --- | --- |
| **Target** | ← Other Comp |
| **Return Value** | → Branch **Condition** |

| Branch | Value |
| --- | --- |
| **Exec in** | ← On Component Hit |
| **Condition** | ← Is Simulating Physics |
| **True** | → Add Impulse |

1. Drag off **Other Comp** and add **Is Simulating Physics**.
2. Drag off the hit node's white arrow and add a **Branch**.
3. Wire **Is Simulating Physics** into the Branch's **Condition**.
4. Wire **True** into **Add Impulse**.
5. Make sure **Vel Change** is ticked on Add Impulse. Then Compile, Save and test. The warnings should stop.

> **Pick the right one:** **Is Simulating Physics** (Target is Primitive Component, red output), not **Set Simulate Physics**, which has white arrow pins and changes the setting instead of checking it.

### Bonus · spin the camera with the mouse

| SpringArm → Camera Settings | Value |
| --- | --- |
| **Use Pawn Control Rotation** | Ticked |

| Class Defaults → Pawn | Value |
| --- | --- |
| **Use Controller Rotation Yaw** | Unticked |

| Mouse X (event) → Add Controller Yaw Input | Value |
| --- | --- |
| **Axis Value** | → **Val** |

1. In the Robot Blueprint, select **SpringArm** and tick **Use Pawn Control Rotation**.
2. Click **Class Defaults** on the toolbar, search **controller rotation** and untick **Use Controller Rotation Yaw**. Now the mouse turns only the camera, not the robot.
3. In the Event Graph, right-click and add the **Mouse X** event.
4. Drag from its **Axis Value** and add **Add Controller Yaw Input**.
5. Compile, Save and test: moving the mouse left and right swings the camera around the robot.

> **Pick the right one:** the **Mouse X** event (red header, under Input → Mouse Events), not **Get Mouse X**. Use **Add Controller Yaw Input**, not **Add Controller Pitch Input** (up and down) or **Add Controller Roll Input**.

- [ ] Driving into a physics cube pushes it away
- [ ] No Simulate Physics warnings in the Message Log

## Part 8 · Test, tune and troubleshoot

Press **Play**, click inside the game window, and drive with **W**, **A**, **S** and **D**. Press **Esc** to stop.

**Tuning**

| Setting | Where | Try |
| --- | --- | --- |
| **Max Speed** | FloatingPawnMovement → Floating Pawn Movement | 400 slow, 600 normal, 1000 fast |
| **TurnSpeed** | My Blueprint → TurnSpeed → Default Value | 150 normal, 300 very sharp |
| **Target Arm Length** | SpringArm → Camera | 400 close, 800 far |
| **Impulse multiplier** | Event Graph → Multiply bottom input | 300 gentle, 500 normal, 1000 strong |

All four are green: change them as much as you like.

**Common problems**

| Problem | Fix |
| --- | --- |
| The robot drives but the camera stays put | The robot isn't possessed. Set **Auto Possess Player** to **Player 0** on the robot in the level. |
| A grey sphere appears, or the view is elsewhere | Check **World Settings → GameMode Override**, and **Default Pawn Class = None**. |
| The robot never stops driving | A Branch Condition isn't wired (ticked box = always true). Wire its Is Input Key Down. |
| It drives sideways or backwards | The front isn't facing +X. Fix it in Blender, apply rotation, re-export and re-import. |
| It turns but won't drive | Raise it a little more off the floor. |
| A or D doesn't turn | A Multiply input still shows 0.0 (usually Delta Seconds, lost when copying), or the key check's Target shows [self] (no wire from Get Player Controller). |
| The nose tips up instead of turning | The Multiply is wired into Y (Pitch). Ctrl + drag it to Z (Yaw). No Z pin at all? Split the Delta Rotation pin (Part 5). |
| A and D turn the wrong way | Move the -1 Multiply to the other row. |
| Message Log fills with Simulate Physics warnings | Add the Is Simulating Physics Branch (Part 7D). |
| The floor looks orange-yellow | It's selected. Press Esc. |

**Saving your project:** Unreal projects are stored in **Documents → Unreal Projects** by default. To move one, close Unreal and move the whole project folder. Avoid OneDrive for Unreal projects. Syncing thousands of small files can lock them.

**Challenge:** add a **Q** / **E** snap turn. Right-click and add a **Q** keyboard event. Wire **Pressed** into **Add Actor Local Rotation** with Z (Yaw) set to **-90**. Do the same for **E** with **90**.

- [ ] W, S, A and D all work and the camera follows the robot
