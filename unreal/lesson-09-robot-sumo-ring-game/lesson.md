---
title: Robot Sumo Ring Game
program: Unreal Engine
lesson: 9
blurb: Model a sumo ring in Blender, bring it into Unreal, and turn the wedge robot into a game: reset when it drives off, bouncy balls that drop faster and faster, and a YOU LOSE! banner at 10 balls.
---
This lesson continues the **Sharp Turn Wedge Robot** (Unreal Lesson 8). Use the same project, folder and robot. Parts 9 to 11 are in **Blender**; Parts 12 to 19 are in **Unreal**. The part numbers carry on from Lesson 8 so they match the video. In the Blender section this is Lesson 12.

| Colour | Meaning |
| --- | --- |
| **Green** | Safe to change. No real effect on speed. |
| **Amber** | Adds a little load. Fine at the value given, slower if pushed higher. |
| **Red** | Use with caution. Big effect on speed or memory. Too high can freeze or crash Unreal. A lighter working value is given. |

The red setting is **Spawn Count** in Part 18. Use 300 while testing.

```brief
Part 9 · Model the ring (Blender)
9 · Cylinder | 128 verts · Radius 7.7 m · Depth 0.5 m | Location 0, 0, 0
Part 10 · Colour the ring (Blender)
10 · Two slots | RingWhite FFFFFF · RingBlack 000000 | Inset top 0.5 m → Assign black
Part 11 · Smooth and export (Blender)
11 · Export | Shade Auto Smooth · Poke Faces if dark | Apply All · FBX Mesh only
Part 12 · Sumo level (Unreal)
12 · L_SumoRing | GameMode Override · floor Scale 3 | ring at 0, 0, 25
Part 13 · Robot on the ring
13 · Place | Y −300 · End · Z +5 · Yaw 180 | Player 0
Part 14 · Reset when off
14A · Start spot | BeginPlay → StartLocation
14B · Check | Then 4 · Vector Length XY > 770
14C · Send back | Delay 1 · red Print String | Set Actor Location ← StartLocation
Part 15 · Bouncy ball
15A · PM_Bouncy | Restitution 0.1–0.9 · Friction 1 | Combine Max
15B · BP_BouncyBall | Sphere · Simulate Physics | Mass 2 · PM_Bouncy
Part 16 · Ball pops
16A · NS_BallPop | Omnidirectional Burst
16B · Pop | Length XY > 800 | Spawn System · Scale 5 · Destroy Actor
Part 17 · Ball spawner
17 · BP_BallSpawner | Set Timer by Event 2 s · Looping | Spawn Actor · X, Y random ±500 · Z 1500
Part 18 · You lose at 10
18A · WBP_YouLose | YOU LOSE! · 240 · red · centred
18B · NS_RobotPop | Spawn Count 1000 (red, test 300)
18C · Lose | Get All Actors ≥ 10 (test 3) · Do Once | widget · explode · hide · clear timer
Part 19 · Faster drops
19 · SpawnDelay | 2.0 · not looping | − 0.1 each ball · Max 0.5
```

## Part 9 · Model the sumo ring (Blender)

The robot is 2 m wide, so the ring is 15.4 m across, 0.5 m tall, with a 0.5 m white edge (10 times a real sumo ring).

| Add Cylinder (operator panel, bottom-left) | Value |
| --- | --- |
| **Vertices** | **128** |
| **Radius** | **7.7 m** |
| **Depth** | **0.5 m** |
| **Cap Fill Type** | N-Gon |

| N panel → Item | Axis | Value |
| --- | --- | --- |
| **Location** | X | 0 m |
|  | Y | 0 m |
|  | Z | 0 m |

Everything else stays at its default.

1. Make a new Blender file. Delete the default cube.
2. **Add → Mesh → Cylinder** (Shortcut: Shift + A).
3. Open the operator panel in the bottom-left corner. Set **Vertices** (amber) to **128**, **Radius** to **7.7 m** and **Depth** to **0.5 m**. 128 keeps the edge round. Use **64** if your computer is slow.
4. Open the **N** panel, **Item** tab, and check **Location** is **0, 0, 0**.
5. Save as **SumoRing.blend** in your WedgeRobot folder.

> **Pick the right one:** **Mesh → Cylinder**, not **Mesh → Circle** (no top or sides) or **Curve → Circle**.

- [ ] A wide, flat cylinder sits at the centre of the grid
- [ ] N panel Location reads 0, 0, 0

## Part 10 · Colour the ring (Blender)

| Material slot | Name | Base Color (hex) | Roughness |
| --- | --- | --- | --- |
| **Slot 1** | RingWhite | **FFFFFF** | 0.5 (default) |
| **Slot 2** | RingBlack | **000000** | **0.8** |

| Inset Faces (operator panel) | Value |
| --- | --- |
| **Thickness** | **0.5 m** |
| **Depth** | 0 m |

1. In the **Material** tab, click **New**. Name it **RingWhite** and set **Base Color** hex to **FFFFFF**.
2. Click **+** for an empty slot, then **New**. Name it **RingBlack**. Set **Base Color** to **000000** and **Roughness** to **0.8**.
3. Choose **Edit Mode**, then **Face Select**. Click the **top face**. (Shortcut: Tab, then 3)
4. **Face → Inset Faces** (Shortcut: I). In the operator panel set **Thickness** to **0.5 m**. This makes the white edge.
5. With only the middle face selected, pick **RingBlack** in the slot list and click **Assign**. The middle of the top turns black.
6. Go back to **Object Mode**. (Shortcut: Tab)

> **Pick the right one:** **Inset Faces**, not **Extrude Faces** (pulls the face up) or **Bevel** (rounds the edge).

- [ ] The top is black with a white edge, and the sides are white

## Part 11 · Smooth and export the ring (Blender)

| Export FBX → Include | Value |
| --- | --- |
| **Object Types** | **Mesh** only |
| **File name** | **SumoRing.fbx** |

Everything else stays at its default.

1. Right-click the ring → **Shade Auto Smooth**. This stops dark triangles on the side.
2. ★ Still dark patches? In Edit Mode select the top black face and the bottom face, then **Face → Poke Faces**.
3. **Object → Apply → All Transforms** (Shortcut: Ctrl + A).
4. **File → Export → FBX**. Under **Object Types**, pick **Mesh** only. Name it **SumoRing.fbx** and click **Export**.
5. Save the Blender file.

> **Pick the right one:** **Shade Auto Smooth**, not **Shade Smooth** (it smooths the sharp top edge too and makes it look melted).

- [ ] The ring has no dark patches on its sides
- [ ] SumoRing.fbx is saved in your WedgeRobot folder

## Part 12 · Sumo level and ring (Unreal)

| File → Save Current Level As | Value |
| --- | --- |
| **Folder** | Your Robot folder |
| **Name** | **L_SumoRing** |

| World Settings → Game Mode | Value |
| --- | --- |
| **GameMode Override** | **GM_SharpTurnRobot** |

| Floor → Transform | X | Y | Z |
| --- | --- | --- | --- |
| **Location** | **0.0** | **0.0** | (leave) |
| **Scale** | **3.0** | **3.0** | 1.0 |

| SumoRing → Transform | X | Y | Z |
| --- | --- | --- | --- |
| **Location** | **0.0** | **0.0** | **25.0** |
| **Rotation** | 0.0° (Roll) | 0.0° (Pitch) | 0.0° (Yaw) |
| **Scale** | 1.0 | 1.0 | 1.0 |

1. **File → New Level → Basic**.
2. **File → Save Current Level As** → your Robot folder → **L_SumoRing**. Check the tab says L_SumoRing.
3. **Window → World Settings** → set **GameMode Override** to **GM_SharpTurnRobot**.
4. Click the floor. Set **Location** X and Y to **0** and **Scale** X and Y to **3**.
5. In the Robot folder click **Import**, pick **SumoRing.fbx**, and keep the defaults.
6. Drag **SumoRing** into the level. Set **Location** to **0, 0, 25**.
7. **Ctrl + S**.

- [ ] The ring sits in the middle of a larger floor in L_SumoRing

## Part 13 · Place the robot on the ring

| BP_SharpTurnRobot (in the level) → Transform | X | Y | Z |
| --- | --- | --- | --- |
| **Location** | **0.0** | **-300.0** | Ring top **+ 5** |
| **Rotation** | 0.0° (Roll) | 0.0° (Pitch) | **180.0°** (Yaw) |

| BP_SharpTurnRobot (in the level) → Pawn | Value |
| --- | --- |
| **Auto Possess Player** | **Player 0** |

1. Drag **BP_SharpTurnRobot** onto the ring.
2. Set **Location** X to **0** and Y to **-300**. Press **End** to drop it onto the ring, then add **5** to **Z**.
3. Set **Rotation Z** to **180** (side-on, like a real sumo start).
4. In **Details**, search **possess** and set **Auto Possess Player** to **Player 0**.
5. **Ctrl + S**, then **Play** to test.

- [ ] On Play, the robot starts side-on on the ring and you can drive it

## Part 14 · Reset when the robot drives off

Work in **BP_SharpTurnRobot → Event Graph**. The ring's edge is 770 from the centre, so past that the robot waits 1 second, shows a red message and jumps back to where it started.

When it's done, BeginPlay saves Start Location once, and the new Then 4 row checks the distance every frame.

### 14A · Save the start spot

| Get Actor Location | Value |
| --- | --- |
| **Target** | self |
| **Return Value** | → Promote to Variable → **StartLocation** |

| SET StartLocation | Value |
| --- | --- |
| **Exec in** | ← Event BeginPlay |
| **Start Location** | ← Get Actor Location |

1. Add **Event BeginPlay**.
2. Add **Get Actor Location**. Right-click its yellow **Return Value** → **Promote to Variable** → name it **StartLocation**.
3. Wire BeginPlay into the **SET** node.

### 14B · Check every frame

| Sequence (from Part 4) | Value |
| --- | --- |
| **New pin** | **Then 4** (Add pin) |

| Vector Length XY | Value |
| --- | --- |
| **A** | ← Get Actor Location |
| **Return Value** | → Greater top input |

| Greater (>) | Value |
| --- | --- |
| **Top input** | ← Vector Length XY |
| **Bottom input** | **770.0** |
| **Output** | → Branch **Condition** |

1. On the Event Tick **Sequence**, click **Add pin** (Then 4).
2. Drag off **Then 4** → **Branch**.
3. Add another **Get Actor Location** → drag off **Return Value** → **Vector Length XY**.
4. Drag off its green Return Value → **Greater (>)**. Type **770** in the bottom box.
5. Wire the red output into the Branch **Condition**.

### 14C · Send it back

| Delay | Value |
| --- | --- |
| **Duration** | **1.0** |

| Print String | Value |
| --- | --- |
| **In String** | **Out of bounds, restart** |
| **Text Color** (under the arrow) | **FF0000FF** (red) |

| Set Actor Location | Value |
| --- | --- |
| **Target** | self |
| **New Location** | ← **StartLocation** (Get) |
| **Sweep** | Unticked |
| **Teleport** | Unticked |

1. Drag off **True** → **Delay**. Set **Duration** to **1**.
2. Drag off **Completed** → **Print String**. Type **Out of bounds, restart**. Open the small arrow and set **Text Color** to red (**FF0000FF**).
3. Drag off Print String → **Set Actor Location**.
4. Drag **StartLocation** in from My Blueprint → **Get** → wire into **New Location**.
5. Compile, Save, test.

> **Pick the right one:** **Vector Length XY** (ignores height), not **Vector Length** or **Vector Length Squared**: with plain Vector Length the robot's height adds to the distance. **Greater (>)** for floats, not **Greater Equal (>=)** or the Integer version. **Delay**, not **Retriggerable Delay**. **Set Actor Location** (Target is Actor), not **Set World Location** on a component or **Teleport To**.

- [ ] Driving off the edge prints "Out of bounds, restart" in red and puts the robot back at the start

## Part 15 · The bouncy ball

### 15A · Bounce material

| PM_Bouncy → Physical Material | Value |
| --- | --- |
| **Friction** | **1.0** |
| **Restitution** | **0.1** (deflated) to **0.9** (super bouncy) |
| **Restitution Combine Mode** | **Max** |
| **Override Restitution Combine Mode** | **Ticked** |

Everything else stays at its default.

1. In the Robot folder, right-click → **Physics → Physical Material** → name it **PM_Bouncy**.
2. Set **Restitution** (green) between **0.1** (deflated) and **0.9** (super bouncy). Set **Friction** to **1**.
3. Tick **Override Restitution Combine Mode** and set it to **Max**. Save.

> **Pick the right one:** **Physics → Physical Material**, not **Materials → Material**. A normal Material changes how the ball looks, not how it bounces.

### 15B · Ball Blueprint

| BallMesh → Static Mesh | Value |
| --- | --- |
| **Static Mesh** | **Sphere** (path says BasicShapes) |

| BallMesh → Physics | Value |
| --- | --- |
| **Simulate Physics** | **Ticked** |
| **Mass (kg)** | Ticked, **2.0** |

| BallMesh → Collision | Value |
| --- | --- |
| **Phys Material Override** | **PM_Bouncy** |

1. Right-click → **Blueprint Class → Actor** → name it **BP_BouncyBall**.
2. **+ Add → Static Mesh**, name it **BallMesh**, and drag it onto **DefaultSceneRoot**.
3. Set **Static Mesh** to **Sphere**. Hover over it to check the path says **BasicShapes**.
4. Tick **Simulate Physics** (amber). Tick **Mass (kg)** (green) and set **2**.
5. Search **phys material** and set **Phys Material Override** to **PM_Bouncy**.
6. Compile, Save.

> **Pick the right one:** the **Sphere** from **Engine → BasicShapes**, not a Sphere from another folder. Some have no collision, so the ball floats and never falls. Blueprint Class → **Actor**, not **Pawn**: the ball isn't driven by a player.

- [ ] BP_BouncyBall shows a sphere with Simulate Physics ticked and PM_Bouncy set

## Part 16 · Ball explodes when pushed off

The ball checks its own distance from the centre every frame. Past 800 it pops and removes itself.

### 16A · The pop effect

| New Niagara System | Value |
| --- | --- |
| **Template** | **Omnidirectional Burst** |
| **Name** | **NS_BallPop** |

1. In the Robot folder, right-click → **FX → Niagara System** → **Omnidirectional Burst** → name it **NS_BallPop**.

### 16B · The pop wiring (BP_BouncyBall)

When it's done, Event Tick checks the distance, and True spawns the pop at the ball, then destroys the ball.

| Greater (>) | Value |
| --- | --- |
| **Top input** | ← Vector Length XY ← Get Actor Location |
| **Bottom input** | **800.0** |
| **Output** | → Branch **Condition** |

| Spawn System at Location | Value |
| --- | --- |
| **System Template** | **NS_BallPop** |
| **Location** | ← the same Get Actor Location |
| **Rotation** | 0, 0, 0 |
| **Scale** | **5, 5, 5** |
| **Auto Destroy** | Ticked (default) |

| Destroy Actor | Value |
| --- | --- |
| **Target** | self |

1. In **BP_BouncyBall → Event Graph**, keep **Event Tick** (amber) and delete the other two events. Every ball runs its own Event Tick, which is fine for a few dozen balls.
2. Drag off Event Tick → **Branch**.
3. Add **Get Actor Location** → **Vector Length XY** → **Greater (>)**. Type **800** in the bottom box.
4. Wire the red output into the Branch **Condition**.
5. Drag off **True** → **Spawn System at Location**. Set **System Template** to **NS_BallPop** and **Scale** (green) to **5, 5, 5**.
6. Wire the same Get Actor Location into its **Location**.
7. Drag off it → **Destroy Actor**.
8. Compile, Save.

> **Pick the right one:** **Spawn System at Location** (Niagara, has System Template), not **Spawn Emitter at Location** (the old Cascade system) or **Spawn System Attached**, which follows the ball and vanishes with it. **Destroy Actor** with Target self, not **Destroy Component**, which leaves an empty actor behind. Vector Length XY and Greater (>) are the same nodes as Part 14.

- [ ] A ball pushed off the ring pops in a burst of sparks and disappears

## Part 17 · The ball spawner

A looping timer runs a custom event every 2 seconds. The event drops a new ball from 1500 high at a random spot on the ring.

When it's done, BeginPlay starts the timer, the timer runs SpawnBallEvent, and SpawnBallEvent spawns a BP_BouncyBall at the random location.

| Set Timer by Event | Value |
| --- | --- |
| **Event** | ← **SpawnBallEvent** (red square) |
| **Time** | **2.0** |
| **Looping** | **Ticked** |
| **Return Value** | Used in Part 18 |

| Spawn Actor from Class | Value |
| --- | --- |
| **Class** | **BP_BouncyBall** |
| **Spawn Transform Location** | ← Make Vector (split the Spawn Transform pin) |
| **Collision Handling Override** | Default |

| Make Vector | Value |
| --- | --- |
| **X** | ← Random Float in Range (Min **-500.0**, Max **500.0**) |
| **Y** | ← Random Float in Range (Min **-500.0**, Max **500.0**) |
| **Z** | **1500.0** |

1. Right-click → **Blueprint Class → Actor** → name it **BP_BallSpawner**.
2. In the Event Graph, delete **ActorBeginOverlap** and **Event Tick**.
3. Drag off **BeginPlay** → **Set Timer by Event**. Set **Time** (amber) to **2** and tick **Looping**. A smaller Time drops balls faster and adds more physics work.
4. Drag off its red **Event** pin → **Add Custom Event** → name it **SpawnBallEvent**.
5. Drag off SpawnBallEvent → **Spawn Actor from Class**. Set **Class** to **BP_BouncyBall**.
6. Right-click **Spawn Transform** → **Split Struct Pin**. Drag off **Spawn Transform Location** → **Make Vector**. Set **Z** to **1500**.
7. Drag off **X** → **Random Float in Range**. Set **Min** to **-500** and **Max** to **500**. Do the same for **Y**.
8. Compile, Save. Drag **BP_BallSpawner** into the level. Play.

> **Pick the right one:** **Set Timer by Event** (red Event pin), not **Set Timer by Function Name**, which needs the event name typed exactly. **Spawn Actor from Class**, not **Spawn Actor from Object** or **Spawn AI from Class**. **Random Float in Range**, not **Random Integer in Range** (whole numbers only) or **Random Float** (always 0 to 1). **Make Vector**, not **Make Vector 2D**.

- [ ] On Play, a ball drops onto a random spot on the ring every 2 seconds

## Part 18 · You lose at 10 balls

After each spawn, the spawner counts the balls. At 10 it shows a big **YOU LOSE!**, blows up the robot, hides it and stops dropping balls.

### 18A · The big text (WBP_YouLose)

| Text → Slot (Canvas Panel Slot) | X | Y |
| --- | --- | --- |
| **Anchors** | Centre | Centre |
| **Position** | **0.0** | **0.0** |
| **Alignment** | **0.5** | **0.5** |
| **Size To Content** | Ticked |  |

| Text → Content and Appearance | Value |
| --- | --- |
| **Text** | **YOU LOSE!** |
| **Color and Opacity** | Red (**FF0000FF**) |
| **Font → Size** | **240** |

1. Right-click → **User Interface → Widget Blueprint** → **User Widget** → name it **WBP_YouLose**.
2. From the **Palette**, drag a **Canvas Panel** into the middle.
3. From the **Palette**, drag a **Text** onto the canvas. Set **Text** to **YOU LOSE!**, **Font Size** to **240** and the colour to red.
4. Set **Anchors** to the centre one, **Position** to **0, 0** and **Alignment** to **0.5, 0.5**. Tick **Size To Content**.
5. Compile, Save.

> **Pick the right one:** **Widget Blueprint** → **User Widget**, not **Editor Utility Widget** (editor only, never shows in the game). In the Palette use **Text**, not **Text Box** (players can type in it) or **Rich Text Block**.

### 18B · The robot explosion (NS_RobotPop)

| Emitter module | Field | Value | While working |
| --- | --- | --- | --- |
| **Spawn Burst Instantaneous** | Spawn Count | **1000** | 300 |
| **Initialize Particle** | Lifetime Mode | **Direct** |  |
|  | Lifetime | **5.0** | 2.0 |
|  | Sprite Size Min / Max | **6 / 14** |  |
|  | Color | Random Range Linear Color |  |
|  | Color Min | **00FF00FF** (green) |  |
|  | Color Max | **FF0000FF** (red) |  |

1. Duplicate **NS_BallPop** → name it **NS_RobotPop**. Open it.
2. In **Spawn Burst Instantaneous**, set **Spawn Count** (red) to **1000**. While building and testing, use **300**, then raise it at the end.
3. In **Initialize Particle**, set **Lifetime Mode** to **Direct** and **Lifetime** (amber) to **5**. Set **Sprite Size** (green) to **6** to **14**.
4. Next to **Color**, click the small arrow → **Random Range Linear Color**. Set **Min** to **00FF00FF** (green) and **Max** to **FF0000FF** (red).

### 18C · Count the balls and lose (BP_BallSpawner)

When it's done, every spawn counts the balls, and the 10th runs the lose chain once: banner, explosion, hidden robot, stopped timer.

| Get All Actors Of Class | Value |
| --- | --- |
| **Exec in** | ← Spawn Actor from Class (Part 17) |
| **Actor Class** | **BP_BouncyBall** |
| **Out Actors** | → Length |

| Greater Equal (>=) | Value |
| --- | --- |
| **Top input** | ← Length |
| **Bottom input** | **10** (use **3** while testing) |
| **Output** | → Branch **Condition** |

| Create Widget | Value |
| --- | --- |
| **Class** | **WBP_YouLose** |
| **Return Value** | → Add to Viewport **Target** |

| Spawn System at Location | Value |
| --- | --- |
| **System Template** | **NS_RobotPop** |
| **Location** | ← Get Actor Location ← Get Player Pawn |
| **Scale** | **20, 20, 20** |

| Set Actor Hidden In Game | Value |
| --- | --- |
| **Target** | ← Get Player Pawn |
| **New Hidden** | **Ticked** |

| Clear and Invalidate Timer by Handle | Value |
| --- | --- |
| **Handle** | ← Set Timer by Event **Return Value** |

**Count the balls**

1. Drag off the **Spawn Actor from Class** white output → **Get All Actors Of Class** (amber). Set the class to **BP_BouncyBall**. It searches the whole level, which is fine once every 2 seconds.
2. Drag off **Out Actors** → **Length** → **Greater Equal (>=)**. Type **10** in the bottom box.
3. Add a **Branch**. Wire the red output into **Condition** and Get All Actors into its white input.
4. Drag off **True** → **Do Once**.

**Show it and blow up the robot**

1. Drag off Do Once **Completed** → **Create Widget**. Set **Class** to **WBP_YouLose**.
2. Drag off it → **Add to Viewport**. Wire Create Widget's **Return Value** into **Target**.
3. Drag off → **Spawn System at Location**. Set the template to **NS_RobotPop** and **Scale** (amber) to **20, 20, 20**.
4. Add **Get Player Pawn** → **Get Actor Location** → wire into **Location**.
5. Drag off → **Set Actor Hidden In Game**, and tick **New Hidden**. Wire **Get Player Pawn** into **Target**.
6. Drag off → **Clear and Invalidate Timer by Handle**. Wire Set Timer by Event's blue **Return Value** into **Handle**.
7. Compile, Save. ★ For testing, set the 10 to 3.

> **Pick the right one:** **Get All Actors Of Class**, not **Get Actor Of Class** (returns one) or **Get All Actors with Tag**. **Length** is the array node (Utilities → Array), not **Len** (counts letters in text). **Greater Equal (>=)** for Integers, since Length gives a whole number. **Do Once**, not **DoN** or **Gate**. **Set Actor Hidden In Game**, not **Set Visibility** on a component or **Destroy Actor**, which also removes the camera and leaves a blue sky. **Clear and Invalidate Timer by Handle**, not **Pause Timer by Handle**.

**If something goes wrong**

| Problem | Fix |
| --- | --- |
| Dark triangles on the ring's side | Shade Auto Smooth in Blender; Poke Faces if still there (Part 11) |
| Robot resets the moment you press Play | Distance in the top of Greater, 770 in the bottom, red wire into Condition (Part 14) |
| Ball floats and never falls | Use the BasicShapes Sphere (it has collision) (Part 15) |
| Blue sky after losing | Use Set Actor Hidden In Game, not Destroy Actor, so the camera stays |
| Robot explodes on every new ball | Add Do Once and clear the timer |
| Balls bounce too much to hit | Lower Restitution in PM_Bouncy |
| Editor stutters when the robot explodes | Lower NS_RobotPop Spawn Count to 300 and Lifetime to 2 while testing |

- [ ] With 10 balls on the ring (3 while testing), YOU LOSE! appears and the robot explodes

## Part 19 · Balls drop faster over time

The first ball waits 2 seconds. After each ball, the wait gets 0.1 seconds shorter, down to 0.5 seconds. Instead of one looping timer, the spawner sets a fresh one-shot timer after every ball, using a **SpawnDelay** variable.

When it's done, the Part 18 Branch's False pin shortens SpawnDelay and sets a new one-shot timer for the next ball.

### 19A · The SpawnDelay variable (BP_BallSpawner)

| My Blueprint → Variables | Value |
| --- | --- |
| **Variable Name** | SpawnDelay |
| **Variable Type** | Float |
| **Default Value** | **2.0** |

1. In **BP_BallSpawner**, click **+** on the **Variables** line. Name it **SpawnDelay** and set the type to **Float**.
2. Click **Compile**, then set **Default Value** to **2**.

### 19B · Change the first timer

| Set Timer by Event (from BeginPlay) | Value |
| --- | --- |
| **Time** | ← **SpawnDelay** (Get) |
| **Looping** | **Unticked** |

1. On the Set Timer by Event from Part 17, untick **Looping**.
2. Drag **SpawnDelay** in, choose **Get**, and wire it into **Time**.

### 19C · Shorten the wait after every ball

| Subtract | Value |
| --- | --- |
| **Top input** | ← SpawnDelay (Get) |
| **Bottom input** | **0.1** |

| Max (Float) | Value |
| --- | --- |
| **Top input** | ← Subtract |
| **Bottom input** | **0.5** |

| SET SpawnDelay | Value |
| --- | --- |
| **Exec in** | ← Part 18 Branch **False** |
| **Spawn Delay** | ← Max |

| Set Timer by Event (second one) | Value |
| --- | --- |
| **Event** | ← **SpawnBallEvent** red square |
| **Time** | ← SpawnDelay (Get) |
| **Looping** | Unticked |

1. Find the Part 18 **Branch** (the one checking for 10 balls). Drag off its **False** pin and add **SET SpawnDelay**.
2. Drag in **SpawnDelay** (Get) → **Subtract**. Type **0.1** in the bottom box.
3. Drag off Subtract → **Max (Float)**. Type **0.5** in the bottom box. Wire Max into the SET node's **Spawn Delay**.
4. Drag off the SET node → **Set Timer by Event**. Wire **SpawnBallEvent**'s red square into its **Event**, and wire **SpawnDelay** (Get) into **Time**. Leave **Looping** unticked.
5. Compile, Save, Play. Balls should come faster and faster.

When you lose, the True side runs instead, so no new timer is set and the balls stop. **Clear and Invalidate Timer by Handle** from Part 18 can stay.

> **Pick the right one:** **Max (Float)**, not **Min** (that would make the wait grow back) or **Clamp**. **Subtract** is the plain one under **Math → Operators**. Use **SET SpawnDelay** with white arrow pins, not the Get pill.

**Tuning**

| Setting | Where | Try |
| --- | --- | --- |
| **SpawnDelay** | Default Value | 2.0 start, 3.0 for an easier start |
| **Step** | Subtract bottom input | 0.1 normal, 0.2 harder |
| **Fastest** | Max bottom input | 0.5 normal, 0.3 very hard |

A fastest value below **0.3** (amber) means many physics balls at once and can slow the editor.

- [ ] Balls drop faster and faster, down to one every 0.5 seconds

## Cheat sheet

| Program | Keys | What it does |
| --- | --- | --- |
| Unreal | Right-click (graph) | Add a node |
| Unreal | B + click | Add a Branch |
| Unreal | Alt + click pin | Remove wires |
| Unreal | Ctrl + drag wire | Move a wire to another pin |
| Unreal | Double-click wire | Add a reroute dot |
| Unreal | End | Drop selected actor to the floor |
| Unreal | Ctrl + D | Duplicate the selected actor |
| Unreal | Ctrl + Alt + S | Save level as |
| Unreal | Esc | Deselect / stop playing |
| Blender | Shift + A | Add menu |
| Blender | Tab | Edit Mode / Object Mode |
| Blender | 3 | Face select (in Edit Mode) |
| Blender | I | Inset Faces |
| Blender | N | N panel (Item tab) |
| Blender | Ctrl + A | Apply transforms |
