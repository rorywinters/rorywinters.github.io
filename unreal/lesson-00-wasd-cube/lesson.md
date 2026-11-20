---
title: Move a Cube with WASD
program: Unreal Engine
lesson: 0
blurb: Your first Unreal Blueprint: a cube with a follow camera that drives around the level with W, A, S and D, using the built-in DefaultPawn. No Event Graph wiring.
---
You make a cube that drives around the level with **W**, **A**, **S** and **D**, with a camera that follows it. It uses Unreal's built-in **DefaultPawn**, so there are no Input Actions, Mapping Contexts or Event Graph wiring to set up. This version was built and tested end to end.

| Where things are in Unreal | Location on screen |
| --- | --- |
| **Content Drawer** | Bottom-left corner button (opens the asset browser along the bottom) |
| **Details** panel | Right side of the window |
| **Outliner** | Top-right panel (list of everything in the level) |
| **Play** (green ▶) | Main toolbar, top middle |
| **Components** panel (in a Blueprint) | Top-left of the Blueprint editor |
| **Compile** and **Save** (in a Blueprint) | Top-left of the Blueprint editor toolbar |
| **Class Defaults** (in a Blueprint) | Blueprint editor toolbar |

This lesson has no heavy settings.

```brief
Part 1 · Make the Blueprint
1 · DefaultPawn | Content Drawer → Add → Blueprint Class | All Classes → DefaultPawn · BP_WASDCube
Part 2 · The cube
2 · New Static Mesh | select (Self) → + Add → Static Mesh | Static Mesh: Cube · Scale 1 · not the built-in Mesh
Part 3 · Camera
3 · Spring Arm + Camera | Arm Length 500 · Pitch −20 | Camera under SpringArm · rotation 0, 0, 0
Part 4 · Movement and control
4 · Movement | + Add → Floating Pawn Movement | Class Defaults → Auto Possess Player 0
Part 5 · Place and test
5 · Test | drag into level · Location Z 50 | Play (not Simulate) · WASD
```

## Part 1 · Make the Blueprint

| Pick Parent Class | Value |
| --- | --- |
| **All Classes** search | DefaultPawn |
| **Name** | BP_WASDCube |

1. Open the **Content Drawer** (bottom-left corner button). Click **+ Add** and choose **Blueprint Class**.
2. Open **All Classes** at the bottom of the window, search for **DefaultPawn**, select it, and click **Select**. A new Blueprint appears in the Content Drawer.
3. Name it **BP_WASDCube** and double-click it. The **Blueprint editor** opens in a new tab.

> **Pick the right one:** **DefaultPawn**, not **Pawn** or **Character**. DefaultPawn already knows how to move with WASD, which is why this lesson needs no wiring.

- [ ] The Blueprint editor is open on BP_WASDCube

## Part 2 · Add a fresh Static Mesh component

DefaultPawn already has its own built-in **Mesh Component**. Don't reuse or edit it: swapping its shape made the mesh invisible in Play, even though everything looked right in the editor. Add a brand-new one instead.

| StaticMesh (Details, right side) | Value |
| --- | --- |
| **Static Mesh** | a Cube |

| StaticMesh → Transform | X | Y | Z |
| --- | --- | --- | --- |
| **Scale** | 1.0 | 1.0 | 1.0 |

1. In the **Components** panel (top-left), click the top item, the Blueprint name with **(Self)**, so the new component attaches at the root.
2. Click **+ Add** and add a **Static Mesh** component.
3. With it selected, find **Static Mesh** in the **Details** panel (right side). Click the drop-down, type **Cube**, and pick one of the cube options. A cube appears in the Blueprint viewport.
4. Leave **Scale** at 1, 1, 1 and leave the material alone for now. Get it working first.

> **Pick the right one:** add a **new Static Mesh** with + Add. Don't change the built-in **MeshComponent** that DefaultPawn came with.

- [ ] A cube shows in the Blueprint viewport
- [ ] The new StaticMesh sits in the Components list under (Self)

## Part 3 · Add the Spring Arm and Camera

| SpringArm (Details, right side) | Value |
| --- | --- |
| **Target Arm Length** | 500 |

| SpringArm → Transform | X | Y | Z |
| --- | --- | --- | --- |
| **Rotation** | 0.0° (Roll) | **-20.0°** (Pitch) | 0.0° (Yaw) |

| Camera → Transform | X | Y | Z |
| --- | --- | --- | --- |
| **Rotation** | 0.0° (Roll) | 0.0° (Pitch) | 0.0° (Yaw) |

1. In the **Components** panel, click the top item **(Self)** again.
2. Click **+ Add** and add a **Spring Arm**.
3. With the Spring Arm selected, set **Target Arm Length** and **Rotation Y (Pitch)** in the **Details** panel (right side).
4. With the Spring Arm still selected, click **+ Add** and add a **Camera**. It must sit indented directly under SpringArm in the Components list, not beside it.
5. Click the Camera and check its own **Rotation** is 0, 0, 0. It takes the −20 pitch from the Spring Arm; if the Camera's own rotation isn't zero, the angles stack and the view points somewhere unexpected.

- [ ] Components list: Camera is indented under SpringArm
- [ ] SpringArm Pitch is −20 and Camera rotation is 0, 0, 0

## Part 4 · Add movement and set who controls it

| Class Defaults (Details, right side) | Value |
| --- | --- |
| **Auto Possess Player** | Player 0 |
| **Auto Possess AI** | leave as it is |

1. Click **(Self)** again, click **+ Add**, and add **Floating Pawn Movement**.
2. Click **Class Defaults** in the Blueprint toolbar. In the **Details** panel (right side), search **possess** and set **Auto Possess Player** to **Player 0**. Auto Possess AI only matters for AI-controlled pawns.
3. Click **Compile**, then **Save** (top-left of the Blueprint toolbar). The Compile button shows a green tick. Close the Blueprint tab.

> **Pick the right one:** **Floating Pawn Movement**, not **Character Movement** (only works on a Character) or **Projectile Movement** (flies off on its own).

- [ ] Compile shows a green tick
- [ ] Auto Possess Player reads Player 0

## Part 5 · Place it and test

| BP_WASDCube (in the level) → Transform | X | Y | Z |
| --- | --- | --- | --- |
| **Location** | (where you drop it) | (where you drop it) | **50** |

1. Drag **BP_WASDCube** from the **Content Drawer** into the level.
2. With it selected, set **Location Z** to about **50** in the **Details** panel (right side) so it sits above the floor.
3. Click **Play** (green ▶, top middle of the main toolbar). Click inside the game view, then drive with **W**, **A**, **S** and **D**. Press **Esc** to stop.

> **Pick the right one:** the green triangle is **Play**, not **Simulate**. Simulate doesn't accept WASD input.

- [ ] On Play, the camera looks down at the cube from behind
- [ ] W, A, S and D move the cube around the level

## Troubleshooting and next steps

| Problem | Fix |
| --- | --- |
| Cube is invisible or won't respond | Check Auto Possess Player is Player 0, not Disabled, and that only one pawn in the level has Player 0 set. |
| Mesh shows in the editor but not in Play | The built-in Mesh Component's shape was swapped. Add a brand-new Static Mesh component instead. |
| Camera shows only floor or sky | SpringArm Pitch should be about −20, and the Camera nested under the SpringArm with its own rotation at 0, 0, 0. |
| The mouse rotates the view | On the Spring Arm, untick **Use Pawn Control Rotation**. |
| Nothing moves at all | Don't use **Constrain to Plane** on the movement component; it froze all movement in testing. |
| Changes don't show up | After any change in the Blueprint, press **Compile** and then **Save** before testing. |

**Make it look like a robot (after it works)**

- Scale the new Static Mesh component, not the Collision Component: for example X and Y about 1 to 2, and Z about 0.2 to 0.3.
- Give it a clearly visible material (not the default grid material, which can blend into the floor).
- If the camera feels too low or too high, raise or lower the Spring Arm's **Location Z** a little.
