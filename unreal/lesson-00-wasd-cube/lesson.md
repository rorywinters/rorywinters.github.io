---
title: Move a Cube with WASD
program: Unreal Engine
video: https://youtu.be/chxhmYiQ0H0
blurb: Your first Unreal Blueprint: a cube with a follow camera that drives around the level with W, A, S and D, using the built-in DefaultPawn. No Event Graph wiring.
---
You make a cube that drives around the level with **W**, **A**, **S** and **D**, with a camera that follows it. It uses Unreal's built-in **DefaultPawn**, so there are no Input Actions, Mapping Contexts or Event Graph wiring. Follow the steps exactly: in the video it took about 12 tries, and one small change can stop it working. Every part has a ▶ link that jumps the video to that step.

| Where things are in Unreal | Location on screen |
| --- | --- |
| **Content Drawer** | Bottom-left corner button (opens the asset browser along the bottom) |
| **Details** panel | Right side of the window. If it's missing: **Window → Details**. |
| **Outliner** | Top-right panel (list of everything in the level) |
| **Play** (green ▶) | Main toolbar, top middle |
| **Components** panel (in a Blueprint) | Top-left of the Blueprint editor |
| **+ Add** (in a Blueprint) | Top of the Components panel |
| **Compile**, **Save**, **Class Defaults** | Blueprint editor toolbar, along the top |

This lesson has no heavy settings.

```brief
Part 1 · Project and level
1 · New project | Games → Blank · Blueprint · Create | File → New Level → Basic | [▶ 0:08](https://youtu.be/chxhmYiQ0H0?t=8)
Part 2 · Make the Blueprint
2 · DefaultPawn | Content Drawer → + Add → Blueprint Class | All Classes → DefaultPawn · name Rob1 | [▶ 0:47](https://youtu.be/chxhmYiQ0H0?t=47)
Part 3 · The cube
3 · New Static Mesh | (Self) · + Add → Static Mesh | Static Mesh: Cube · not the built-in Mesh | [▶ 1:33](https://youtu.be/chxhmYiQ0H0?t=93)
Part 4 · Camera
4A · Spring Arm | + Add → Spring Arm | Target Arm Length 400 · Pitch −20 | [▶ 2:33](https://youtu.be/chxhmYiQ0H0?t=153)
4B · Camera | + Add → Camera, indented under SpringArm | Pitch 0 | [▶ 3:16](https://youtu.be/chxhmYiQ0H0?t=196)
Part 5 · Movement and control
5 · Movement | + Add → Floating Pawn Movement | Class Defaults → Auto Possess Player 0 · Compile · Save | [▶ 3:39](https://youtu.be/chxhmYiQ0H0?t=219)
Part 6 · Place and test
6 · Test | Drag Rob1 into the level · raise it above the floor | Play (not Simulate) · WASD · Esc | [▶ 4:34](https://youtu.be/chxhmYiQ0H0?t=274)
```

## Part 1 · Project and level

[▶ Watch this part (0:08)](https://youtu.be/chxhmYiQ0H0?t=8)

| New Project | Value |
| --- | --- |
| Category | Games |
| Template | Blank |
| Project type | **Blueprint** (not C++) |
| Project Name | your choice |

1. Open Unreal and click **New Project**. Choose **Games**, then **Blank**.
2. Check **Blueprint** is selected, give the project a name, and click **Create**.
3. When the editor opens, choose **File → New Level**, pick **Basic** and click **Create**. You get a floor, a sky and lighting.
4. Click in the viewport. Hold the **right mouse button** and use **W A S D** to fly around.

- [ ] A Basic level with a floor and sky is open

## Part 2 · Make the Blueprint

[▶ Watch this part (0:47)](https://youtu.be/chxhmYiQ0H0?t=47)

| Pick Parent Class | Value |
| --- | --- |
| **All Classes** search | DefaultPawn |
| **Name** | Rob1 (or BP_Rob1) |

1. Open the **Content Drawer** (bottom-left). Click **+ Add** and choose **Blueprint Class**.
2. At the bottom of the window, open **All Classes**. Type **default** and pick **DefaultPawn**. Click **Select**. (If the button is cut off, make the window bigger.)
3. Name it **Rob1** and press **Enter**. People usually start Blueprint names with **BP_**, like **BP_Rob1**; either works.
4. Double-click **Rob1**. The **Blueprint editor** opens in a new tab.

> **Pick the right one:** **DefaultPawn**, not **Pawn** or **Character**. DefaultPawn already knows how to move with WASD, which is why this lesson needs no wiring.

- [ ] The Blueprint editor is open on Rob1

## Part 3 · The cube

[▶ Watch this part (1:33)](https://youtu.be/chxhmYiQ0H0?t=93)

| StaticMesh (Details, right side) | Value |
| --- | --- |
| **Static Mesh** | a Cube |

| StaticMesh → Transform | X | Y | Z |
| --- | --- | --- | --- |
| **Scale** | 1.0 | 1.0 | 1.0 |

DefaultPawn already has its own built-in **Mesh Component**. Don't change it: swapping its shape can make it invisible in Play. Add a new one.

1. In the **Components** panel (top-left), click the top item, **Rob1 (Self)**, so the new part attaches at the root.
2. Click **+ Add** and choose **Static Mesh**. It's called **StaticMesh2** because DefaultPawn already has one.
3. In the **Details** panel (right side), find **Static Mesh**. Click **None**, type **cube**, and pick a cube. A cube appears in the Blueprint viewport.
4. If no cube shows in the list, click the settings gear in that list and tick **Show Engine Content**.
5. Leave the material alone for now. Get it working first.

> **Pick the right one:** add a **new Static Mesh** with + Add. Don't edit the built-in **MeshComponent**.

- [ ] A cube shows in the Blueprint viewport

## Part 4 · Camera

### 4A · Spring Arm

[▶ Watch this part (2:33)](https://youtu.be/chxhmYiQ0H0?t=153)

| SpringArm (Details) | Value |
| --- | --- |
| **Target Arm Length** | 400 |

| SpringArm → Transform | X | Y | Z |
| --- | --- | --- | --- |
| **Rotation** | 0.0° (Roll) | **−20.0°** (Pitch) | 0.0° (Yaw) |

1. Click **Rob1 (Self)** again, click **+ Add** and type **spring arm**. Add it. A red line appears in the viewport.
2. In the **Details** panel, set **Target Arm Length** to **400** and **Rotation Y (Pitch)** to **−20**. The red line tips up behind the cube.

### 4B · Camera

[▶ Watch (3:16)](https://youtu.be/chxhmYiQ0H0?t=196)

| Camera → Transform | X | Y | Z |
| --- | --- | --- | --- |
| **Rotation** | 0.0° (Roll) | **0.0°** (Pitch) | 0.0° (Yaw) |

1. With **SpringArm** selected, click **+ Add** and add a **Camera**. In the Components list, Camera must sit **indented under SpringArm**.
2. The camera may point upward. Set its own **Rotation Y (Pitch)** to **0**. It takes the −20 tilt from the Spring Arm.

- [ ] Camera is indented under SpringArm
- [ ] SpringArm Pitch is −20; Camera rotation is 0, 0, 0

## Part 5 · Movement and control

[▶ Watch this part (3:39)](https://youtu.be/chxhmYiQ0H0?t=219)

| Class Defaults (Details) | Value |
| --- | --- |
| **Auto Possess Player** | Player 0 |

1. Click **Rob1 (Self)**, click **+ Add**, type **float** and add **Floating Pawn Movement**.
2. Click **Class Defaults** in the toolbar. In the **Details** search box, type **poss**. Change **Auto Possess Player** from **Disabled** to **Player 0**.
3. Click **Compile**, then **Save**. Compile shows a green tick. Close the Blueprint tab.

> **Pick the right one:** **Floating Pawn Movement**, not **Character Movement** (only works on a Character) or **Projectile Movement** (flies off on its own).

- [ ] Compile shows a green tick and Auto Possess Player reads Player 0

## Part 6 · Place it and test

[▶ Watch this part (4:34)](https://youtu.be/chxhmYiQ0H0?t=274)

| Rob1 (in the level) → Transform | X | Y | Z |
| --- | --- | --- | --- |
| **Location** | where you drop it | where you drop it | **50** |

1. Drag **Rob1** from the **Content Drawer** into the level. It sinks into the floor.
2. In the **Details** panel, set **Location Z** to about **50** (or drag the blue arrow up) so it sits above the floor.
3. Click **Play** (green ▶). Click inside the game view and drive with **W**, **A**, **S** and **D**.
4. Press **Esc** to stop playing.
5. Record a short clip of it working and hand it in (see [Recording Gameplay](../lesson-05-record-gameplay/)).

> **Pick the right one:** the green triangle is **Play**, not **Simulate**. Simulate doesn't take WASD.

- [ ] On Play, the camera looks down at the cube from behind
- [ ] W, A, S and D move the cube around

## Troubleshooting and next steps

| Problem | Fix |
| --- | --- |
| Cube is invisible or won't respond | Auto Possess Player must be Player 0, not Disabled, and only one pawn in the level should have Player 0. |
| Mesh shows in the editor but not in Play | The built-in Mesh Component's shape was changed. Add a new Static Mesh instead. |
| Camera shows only floor or sky | SpringArm Pitch about −20; Camera under the SpringArm with rotation 0, 0, 0. |
| Camera is too far away or too close | Change the SpringArm's Target Arm Length (smaller is closer). |
| The mouse rotates the view | On the Spring Arm, untick **Use Pawn Control Rotation**. |
| Nothing moves at all | Don't use **Constrain to Plane** on the movement component. |
| Changes don't show up | After any change in the Blueprint, click **Compile** and then **Save**. |

**Make it look like a robot (after it works)**

- Scale the new Static Mesh: for example X and Y about 1 to 2, and Z about 0.2 to 0.3.
- Give it a clearly visible material.

## Video chapters

Copy this list into the YouTube description to add chapters to the video.

```
0:00 Intro
0:08 New Blank project and Basic level
0:47 Blueprint from DefaultPawn
1:33 Add a Static Mesh cube
2:33 Spring Arm
3:16 Camera
3:39 Floating Pawn Movement
4:03 Auto Possess Player, Compile and Save
4:34 Place the cube in the level
4:51 Play and drive with WASD
```
