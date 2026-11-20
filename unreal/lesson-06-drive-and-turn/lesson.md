---
title: Robot Sumo: Drive and Turn with Enhanced Input
program: Unreal Engine
lesson: 6
blurb: Build a cube robot you drive like a tank, using Unreal's Enhanced Input system: Input Actions, an Input Mapping Context and a small Event Graph.
---
By the end, your robot is a cube you drive like a tank: **W** goes forward, **S** goes backward, **A** turns left and **D** turns right. Everything is done in Blueprint, with no code. This lesson teaches Unreal's **Enhanced Input** system (Input Actions and a Mapping Context), which most Unreal games use.

Work through the parts in order, and click **Compile** and **Save** whenever a step tells you to.

**Sharing a project?** Make a folder inside Content with your name on it, and put everything you make in that folder, so nobody overwrites anyone else's files.

| Where things are in Unreal | Location on screen |
| --- | --- |
| **Content Drawer** | Bottom-left corner button |
| **Components** panel (in a Blueprint) | Top-left of the Blueprint editor |
| **Details** panel | Right side of the window |
| **Event Graph** tab (in a Blueprint) | Middle of the Blueprint editor |
| **Compile**, **Save**, **Class Defaults** | Blueprint editor toolbar, top |
| **Play** (green ▶) | Main toolbar, top middle |

This lesson has no heavy settings.

```brief
Part 1 · Robot Blueprint
1 · BP_Robot | Pawn · Cube as root | Spring Arm (Pitch −20) › Camera · Floating Pawn Movement
Part 2 · Let it turn
2 · Class Defaults | Use Controller Rotation Yaw ☑
Part 3 · Input files
3A · Actions | Input folder | IA_Move · IA_Turn · Axis1D (float)
3B · Mapping | IMC_Robot | W, S (Negate) → IA_Move · D, A (Negate) → IA_Turn
Part 4 · Event Graph
4A · Controls on | BeginPlay → Add Mapping Context (IMC_Robot) | ← Enhanced Input Local Player Subsystem
4B · Drive | IA_Move Triggered → Add Movement Input | Forward Vector · Action Value → Scale
4C · Turn | IA_Turn Triggered → Add Controller Yaw Input | Action Value → Val
Part 5 · Place and test
5 · Play | drag into level | Auto Possess Player 0 · WASD
```

## Part 1 · Make the robot Blueprint

**What "done" looks like in the Components panel**

- **Cube** (root)
  - **SpringArm**
    - **Camera**
- **FloatingPawnMovement**

| SpringArm → Transform | X | Y | Z |
| --- | --- | --- | --- |
| **Rotation** | 0.0° (Roll) | **-20.0°** (Pitch) | 0.0° (Yaw) |

1. Open the **Content Drawer** (bottom-left corner) and click the **Content** folder. Don't use the Engine folder.
2. Right-click an empty spot and choose **Blueprint Class**. In the window that opens, click **Pawn**.
3. Name the Blueprint **BP_Robot** and double-click it to open it.
4. In the **Components** panel (top-left), click **+ Add**, type **Cube**, and click it. This is your robot's body.
5. Drag the **Cube** up and drop it onto **DefaultSceneRoot**. The Cube becomes the top item in the list. This matters: the top item is what bumps into other robots.
6. With the Cube selected, click **+ Add** and choose **Spring Arm**.
7. With the Spring Arm selected, click **+ Add** and choose **Camera**. The camera sits underneath the Spring Arm.
8. Click **+ Add**, type **Floating Pawn Movement**, and click it. This is what lets the robot move.
9. Click the Spring Arm and set its **Rotation Y** to **-20** in the **Details** panel (right side), so the camera looks down at the robot from behind.
10. Click **Compile**, then **Save**.

- [ ] The Components list matches the "done" list above

## Part 2 · Let the robot turn

The robot needs permission to turn when you press A or D.

| Class Defaults → Pawn | Value |
| --- | --- |
| **Use Controller Rotation Yaw** | ticked |

1. In BP_Robot, click **Class Defaults** in the top toolbar.
2. In the **Details** panel (right side) search box, type **use controller rotation**. Check **Use Controller Rotation Yaw** is ticked. Without this, A and D do nothing.
3. Click **Compile**, then **Save**, and close BP_Robot for now.

- [ ] Use Controller Rotation Yaw is ticked

## Part 3 · Make the input files

These files live in the **Content Drawer**, not inside BP_Robot. An **Input Action** is a control (like "move"), and the **Input Mapping Context** links keys to those controls.

### 3A · The folder and the two actions

| Input Action | Value Type |
| --- | --- |
| **IA_Move** | Axis1D (float) |
| **IA_Turn** | Axis1D (float) |

1. In the **Content Drawer**, inside Content, right-click an empty spot, choose **New Folder**, and name it **Input**. Double-click it to go inside.
2. Right-click an empty spot, hover over **Input**, and choose **Input Action**. Name it **IA_Move**.
3. Double-click **IA_Move**, set **Value Type** to **Axis1D (float)**, then save and close it.
4. Make a second one called **IA_Turn** the same way. (Shortcut: right-click IA_Move → Duplicate, and rename the copy.)

### 3B · The mapping context

When you're done, **IMC_Robot** looks like this:

| Action | Key | Modifier |
| --- | --- | --- |
| IA_Move | W | none |
| IA_Move | S | Negate |
| IA_Turn | D | none |
| IA_Turn | A | Negate |

1. In the Input folder, right-click, hover over **Input**, and choose **Input Mapping Context**. Name it **IMC_Robot** and double-click to open it.
2. Under **Default Key Mappings**, click the **+** next to **Mappings**. Change the drop-down from **None** to **IA_Move**.
3. Click the small keyboard button under IA_Move and press **W**.
4. Click the **+** next to IA_Move to add a second key, click its keyboard button, and press **S**.
5. Click the **▶** arrow next to S to open it. Click the **+** next to **Modifiers** and choose **Negate**. This makes S go backward.
6. Click the **+** next to Mappings again. Set the new slot to **IA_Turn** and give it the key **D**.
7. Click the **+** next to IA_Turn, press **A**, open A with its **▶** arrow, and add a **Negate** modifier the same way. This makes A turn the other way.
8. Leave the X, Y and Z ticks as they are, and ignore Mapping Profile Overrides.
9. Click the **Save** icon at the top left and close IMC_Robot.

- [ ] The Input folder holds IA_Move, IA_Turn and IMC_Robot
- [ ] IMC_Robot matches the table, with Negate on S and A

## Part 4 · Build the Event Graph

Open BP_Robot and click the **Event Graph** tab. You see three faded nodes. Keep **Event BeginPlay**. Click **Event ActorBeginOverlap** and **Event Tick** and press **Delete**, since they aren't used.

**How to add a node:** drag from a pin, let go on an empty spot of the grid, type the node's name, and click it. It connects on its own. To add a node without a pin, right-click an empty spot instead.

| From | Pin | To | Pin |
| --- | --- | --- | --- |
| Event BeginPlay | white arrow | Add Mapping Context | white arrow |
| Get Player Controller | Return Value | Get Enhanced Input Local Player Subsystem | (blue pin) |
| Get Enhanced Input Local Player Subsystem | Return Value | Add Mapping Context | Target |
| IA_Move | Triggered | Add Movement Input | white arrow |
| Get Actor Forward Vector | Return Value | Add Movement Input | World Direction |
| IA_Move | Action Value | Add Movement Input | Scale Value |
| IA_Turn | Triggered | Add Controller Yaw Input | white arrow |
| IA_Turn | Action Value | Add Controller Yaw Input | Val |

### 4A · Turn on your controls when the game starts

1. Right-click an empty spot and add **Get Player Controller**.
2. Drag from its blue **Return Value** pin and add **Get Enhanced Input Local Player Subsystem**.
3. Drag from that node's blue **Return Value** pin and add **Add Mapping Context**.
4. On Add Mapping Context, set the **Mapping Context** drop-down to **IMC_Robot**.
5. Drag from the white arrow on the right of **Event BeginPlay** to the white arrow at the top left of **Add Mapping Context**.

> **Pick the right one:** **Get Enhanced Input Local Player Subsystem** (Local Player Subsystem), not the Enhanced Input **Component** one.

### 4B · Drive forward and backward

1. Right-click an empty spot and type **IA_Move**. Choose the one under **Enhanced Action Events**. A red IA_Move node appears.
2. Drag from its **Triggered** arrow and add **Add Movement Input**.
3. Drag from the **World Direction** pin on Add Movement Input and add **Get Actor Forward Vector**.
4. Drag the green **Action Value** pin on IA_Move to the **Scale Value** pin on Add Movement Input.

> **Pick the right one:** the **IA_Move** event under **Enhanced Action Events** (red node with Triggered), not the **Action Value** getter.

### 4C · Turn left and right

1. Right-click an empty spot and type **IA_Turn**. Choose the Enhanced Action Events one.
2. Drag from its **Triggered** arrow and add **Add Controller Yaw Input**.
3. Drag the green **Action Value** pin on IA_Turn to the **Val** pin on Add Controller Yaw Input.
4. Click **Compile** (you want a green tick), then **Save**.

- [ ] Every wire in the table above is connected
- [ ] Compile shows a green tick

## Part 5 · Put the robot in the level and test

| BP_Robot (in the level) → Pawn | Value |
| --- | --- |
| **Auto Possess Player** | Player 0 |

1. Drag **BP_Robot** from the Content Drawer into the level.
2. With the robot selected, search the **Details** panel (right side) for **auto possess** and set **Auto Possess Player** to **Player 0**. This makes you control this robot when you press Play.
3. If an older robot in the level is also set to Player 0, delete it or set it back to **Disabled**.
4. Click **Play** (green ▶). W and S drive, and A and D turn. Press **Esc** to stop.

- [ ] W and S drive forward and back
- [ ] A and D turn left and right

## Troubleshooting

| Problem | What to check |
| --- | --- |
| W and S work, but A and D do nothing | Class Defaults: tick Use Controller Rotation Yaw (Part 2). |
| Nothing moves, but Compile shows a green tick | BP_Robot needs a Floating Pawn Movement component (Part 1). |
| Nothing moves at all | Event BeginPlay is wired to Add Mapping Context, the drop-down says IMC_Robot, and Auto Possess Player is Player 0. |
| Robots pass through each other | The Cube must be the top item in the Components list (Part 1, step 5). |
| S goes forward, or A turns the wrong way | The Negate modifier is missing, or it's on W or D instead of S or A. |
| Typing IA_Move shows nothing in the search | Untick **Context Sensitive** at the top right of the search box and try again. |
| Two IA_Move choices show up | Pick the one under Enhanced Action Events. |
| Compile shows an error | A pin is wired to the wrong place. Check against the wire table in Part 4. |

**Turn faster:** drag off **Action Value** on IA_Turn, add a **Multiply** node, type **2** in its bottom box, and plug its result into **Val**.
