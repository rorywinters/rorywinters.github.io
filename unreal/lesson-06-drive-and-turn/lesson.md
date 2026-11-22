---
title: Robot Sharp Turns: Drive and Turn with Enhanced Input
program: Unreal Engine
video: https://youtu.be/EeumtTpH4H8
blurb: Build a cube robot you drive like a tank, using Unreal's Enhanced Input system: Input Actions, an Input Mapping Context and a small Event Graph.
---
By the end, your robot is a cube you drive like a tank: **W** goes forward, **S** goes backward, **A** turns left and **D** turns right. Everything is done in Blueprint, with no code. This lesson teaches Unreal's **Enhanced Input** system (Input Actions and a Mapping Context), which most Unreal games use.

Work through the parts in order. Click **Compile** after every step in the Event Graph: if something breaks, you'll know which step did it. Every part has a ▶ link that jumps the video to that step.

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
Part 0 · Project and level
0 · Blank project | Games → Blank · Blueprint | File → New Level → Basic | [▶ 0:20](https://youtu.be/EeumtTpH4H8?t=20)
Part 1 · Robot Blueprint
1 · BP_Robot | Pawn · Cube as root | Spring Arm (400, Pitch −20) › Camera (Pitch 0) · Floating Pawn Movement | [▶ 1:07](https://youtu.be/EeumtTpH4H8?t=67)
Part 2 · Let it turn
2 · Class Defaults | Use Controller Rotation Yaw ☑ | [▶ 3:56](https://youtu.be/EeumtTpH4H8?t=236)
Part 3 · Input files
3A · Actions | Input folder | IA_Move · IA_Turn · Axis1D (float) | [▶ 4:31](https://youtu.be/EeumtTpH4H8?t=271)
3B · Mapping | IMC_Robot | W, S (Negate) → IA_Move · D, A (Negate) → IA_Turn | [▶ 6:02](https://youtu.be/EeumtTpH4H8?t=362)
Part 4 · Event Graph
4A · Controls on | BeginPlay → Add Mapping Context (IMC_Robot) | ← Enhanced Input Local Player Subsystem | [▶ 8:53](https://youtu.be/EeumtTpH4H8?t=533)
4B · Drive | IA_Move Triggered → Add Movement Input | Forward Vector · Action Value → Scale | [▶ 10:37](https://youtu.be/EeumtTpH4H8?t=637)
4C · Turn | IA_Turn Triggered → Add Controller Yaw Input | Action Value → Val | [▶ 12:05](https://youtu.be/EeumtTpH4H8?t=725)
Part 5 · Place and test
5 · Play | drag into level · Location 0, 0, 80 | Auto Possess Player 0 · WASD | [▶ 12:55](https://youtu.be/EeumtTpH4H8?t=775)
```

## Part 0 · Project and level

[▶ Watch this part (0:20)](https://youtu.be/EeumtTpH4H8?t=20)

| New Project | Value |
| --- | --- |
| Category | Games |
| Template | Blank |
| Project type | Blueprint |

1. Click **New Project**, choose **Games → Blank**, keep **Blueprint**, and click **Create**.
2. The project opens on a snowy mountain level. Choose **File → New Level**, pick **Basic** and click **Create**. You get a flat floor.

- [ ] A Basic level with a flat floor is open

## Part 1 · Make the robot Blueprint

[▶ Watch this part (1:07)](https://youtu.be/EeumtTpH4H8?t=67)

**What "done" looks like in the Components panel**

- **Cube** (root)
  - **SpringArm**
    - **Camera**
- **FloatingPawnMovement**

| SpringArm (Details) | Value |
| --- | --- |
| **Target Arm Length** | 400 (300 is fine too) |

| SpringArm → Transform | X | Y | Z |
| --- | --- | --- | --- |
| **Rotation** | 0.0° (Roll) | **-20.0°** (Pitch) | 0.0° (Yaw) |

| Camera → Transform | X | Y | Z |
| --- | --- | --- | --- |
| **Rotation** | 0.0° (Roll) | **0.0°** (Pitch) | 0.0° (Yaw) |

1. Open the **Content Drawer** (bottom-left corner) and click the **Content** folder. Don't use the Engine folder.
2. Click **+ Add → Blueprint Class**. In the window that opens, click **Pawn** (not DefaultPawn this time).
3. Name the Blueprint **BP_Robot** and double-click it to open it.
4. In the **Components** panel (top-left), click **+ Add**, type **Cube**, and click it. This is your robot's body.
5. Drag the **Cube** up and drop it onto **DefaultSceneRoot**. The Cube becomes the top item in the list. This matters: the top item is what bumps into other robots.
6. With the Cube selected, click **+ Add** and choose **Spring Arm**.
7. With the Spring Arm selected, click **+ Add** and choose **Camera**. The camera sits underneath the Spring Arm.
8. Click **+ Add**, type **Floating Pawn Movement**, and click it. This is what lets the robot move.
9. Click the Spring Arm and set **Target Arm Length** to **400** and **Rotation Y (Pitch)** to **−20** in the **Details** panel (right side). The red line tips up behind the cube.
10. Click the **Camera**. It may point upward: set its own **Rotation Y (Pitch)** to **0**.
11. Click **Compile**, then **Save**.

- [ ] The Components list matches the "done" list above

## Part 2 · Let the robot turn

[▶ Watch this part (3:56)](https://youtu.be/EeumtTpH4H8?t=236)

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

[▶ Watch this part (4:31)](https://youtu.be/EeumtTpH4H8?t=271)

| Input Action | Value Type |
| --- | --- |
| **IA_Move** | Axis1D (float) |
| **IA_Turn** | Axis1D (float) |

1. In the **Content Drawer**, inside Content, right-click an empty spot, choose **New Folder**, and name it **Input**. Double-click it to go inside.
2. Right-click an empty spot, hover over **Input**, and choose **Input Action**. Name it **IA_Move**.
3. Double-click **IA_Move**, set **Value Type** to **Axis1D (float)**, then save and close it.
4. Make a second one called **IA_Turn** the same way. (Shortcut: right-click IA_Move → Duplicate, and rename the copy.)

### 3B · The mapping context

[▶ Watch this part (6:02)](https://youtu.be/EeumtTpH4H8?t=362)

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

[▶ Watch this part (8:53)](https://youtu.be/EeumtTpH4H8?t=533)

1. Right-click an empty spot and add **Get Player Controller**.
2. Drag from its blue **Return Value** pin and add **Get Enhanced Input Local Player Subsystem**.
3. Drag from that node's blue **Return Value** pin and add **Add Mapping Context**.
4. On Add Mapping Context, set the **Mapping Context** drop-down to **IMC_Robot**.
5. Drag from the white arrow on the right of **Event BeginPlay** to the white arrow at the top left of **Add Mapping Context**.
6. Click **Compile**. It should say it compiled successfully.

> **Pick the right one:** **Get Enhanced Input Local Player Subsystem** (Local Player Subsystem), not the Enhanced Input **Component** one. Drag it off the Return Value pin: if you search in empty space with **Context Sensitive** off, you get many more look-alikes.

### 4B · Drive forward and backward

[▶ Watch this part (10:37)](https://youtu.be/EeumtTpH4H8?t=637)

1. Right-click an empty spot and type **IA_Move**. Choose the one under **Enhanced Action Events**. A red IA_Move node appears.
2. Drag from its **Triggered** arrow and add **Add Movement Input** (in the video it's the bottom one in the list).
3. Drag from the **World Direction** pin on Add Movement Input and add **Get Actor Forward Vector**.
4. Drag the green **Action Value** pin on IA_Move to the **Scale Value** pin on Add Movement Input.
5. Click **Compile**.

> **Pick the right one:** the **IA_Move** event under **Enhanced Action Events** (red node with Triggered), not the **Action Value** getter.

### 4C · Turn left and right

[▶ Watch this part (12:05)](https://youtu.be/EeumtTpH4H8?t=725)

1. Right-click an empty spot and type **IA_Turn**. Choose the Enhanced Action Events one.
2. Drag from its **Triggered** arrow and add **Add Controller Yaw Input**.
3. Drag the green **Action Value** pin on IA_Turn to the **Val** pin on Add Controller Yaw Input.
4. Click **Compile** (you want a green tick), then **Save**.

- [ ] Every wire in the table above is connected
- [ ] Compile shows a green tick

## Part 5 · Put the robot in the level and test

[▶ Watch this part (12:55)](https://youtu.be/EeumtTpH4H8?t=775)

| BP_Robot (in the level) → Transform | X | Y | Z |
| --- | --- | --- | --- |
| **Location** | 0 | 0 | 80 |

| BP_Robot (in the level) → Pawn | Value |
| --- | --- |
| **Auto Possess Player** | Player 0 |

1. Drag **BP_Robot** from the Content Drawer into the level. Type the **Location** values so it sits in the middle, above the floor. To find it in the viewport, click it in the Outliner and press **F**.
2. With the robot selected, search the **Details** panel (right side) for **auto possess** and set **Auto Possess Player** to **Player 0**. This makes you control this robot when you press Play.
3. If an older robot in the level is also set to Player 0, delete it or set it back to **Disabled**.
4. Click **Play** (green ▶), then click inside the game view. W and S drive, and A and D turn. Press **Esc** to stop.
5. If A turns the same way as D, see the fix at [14:16 in the video](https://youtu.be/EeumtTpH4H8?t=856): open **IMC_Robot**, open the **A** key with its ▶ arrow, and make sure its modifier is **Negate**, not None. Save and try again.
6. Record a short clip of your robot driving and hand it in (see [Record Gameplay](../lesson-05-record-gameplay/)).

- [ ] W and S drive forward and back
- [ ] A and D turn left and right

## Troubleshooting

| Problem | What to check |
| --- | --- |
| W and S work, but A and D do nothing | Class Defaults: tick Use Controller Rotation Yaw (Part 2). |
| Nothing moves, but Compile shows a green tick | BP_Robot needs a Floating Pawn Movement component (Part 1). |
| Nothing moves at all | Event BeginPlay is wired to Add Mapping Context, the drop-down says IMC_Robot, and Auto Possess Player is Player 0. |
| Robots pass through each other | The Cube must be the top item in the Components list (Part 1, step 5). |
| S goes forward, or A turns the wrong way | The Negate modifier is missing or reset to None, or it's on W or D instead of S or A. |
| Typing IA_Move shows nothing in the search | Untick **Context Sensitive** at the top right of the search box and try again. |
| Two IA_Move choices show up | Pick the one under Enhanced Action Events. |
| Compile shows an error | A pin is wired to the wrong place. Check against the wire table in Part 4. |

**Turn faster:** drag off **Action Value** on IA_Turn, add a **Multiply** node, type **2** in its bottom box, and plug its result into **Val**.

## Video chapters

Copy this list into the YouTube description to add chapters to the video.

```
0:00 Intro
0:20 New Blank project and Basic level
1:07 Blueprint from Pawn: BP_Robot
1:42 Add a cube
2:29 Spring Arm
3:07 Camera
3:36 Floating Pawn Movement
3:56 Use Controller Rotation Yaw
4:31 Input folder and IA_Move
5:28 IA_Turn
6:02 Input Mapping Context: IMC_Robot
7:00 W, and S with Negate
7:41 D, and A with Negate
8:28 The finished Event Graph
8:53 Get Player Controller and the subsystem
9:53 Add Mapping Context
10:37 IA_Move and Add Movement Input
11:24 Get Actor Forward Vector
12:05 IA_Turn and Add Controller Yaw Input
12:55 Place the robot in the level
13:32 Auto Possess Player 0
13:45 Test drive
14:16 Fix: A turns the wrong way
```
