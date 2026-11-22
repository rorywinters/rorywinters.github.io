---
title: Model a Wedge Sumo Robot
program: Blender
video: https://youtu.be/30wfJMyzoKw
blurb: Build a wedge-shaped sumo robot from a cube and two cylinders: Merge at Last for the wedge, Mirror and Boolean for the wheel wells, separate wheels, colours, then export an FBX ready for Unreal.
---
You build a simple wedge-shaped sumo robot from basic shapes. You make the wedge with **Merge at Last**, cut wheel wells with the **Mirror** and **Boolean** modifiers, separate the two wheels, colour everything and export it as an **FBX** for Unreal. These steps are for Blender 5.2. Every part has a ▶ link that jumps the video to that step.

Next, the robot drives in Unreal in [Sharp Turn Wedge Robot: Drive and Push](../../unreal/lesson-08-wedge-robot/). To make each wheel spin on its own axle, see [Separate the Wheels](../lesson-11-separate-the-wheels/).

| Colour | Meaning |
| --- | --- |
| Green | Safe to change. No real effect on speed. |
| Amber | Raises the load a little. Fine at the values given. |
| Red | Use with caution. Big effect on speed or memory. |

The **Boolean** modifier (Part 3) is amber: it is slow to update on detailed objects, so apply it once it looks right. This lesson has no red settings.

### Where things are

| Thing | Where on the screen |
| --- | --- |
| **Mode menu** | Top-left of the 3D Viewport (Object Mode / Edit Mode). (Shortcut: Tab) |
| **Vertex / Edge / Face Select** | The three small square buttons beside the Mode menu (Shortcut: 1, 2, 3) |
| **Sidebar** (N panel), **Item** tab | Right edge of the 3D Viewport. **View → Sidebar** (Shortcut: N) |
| **Navigation gizmo** | Top-right of the 3D Viewport. Click **X**, **Y** or **Z** to look along that axis. |
| **Outliner** | Top-right of the window. The **eye** icon hides an object; double-click a name to rename. |
| **Modifier Properties** | Properties editor (bottom-right), the blue wrench icon |
| **Material Properties** | Properties editor, the red sphere icon |

```brief
Part 1 · The wedge
1A · Flatten | Edit Mode · Face Select · top face | G Z down | [▶ 0:00](https://youtu.be/30wfJMyzoKw?t=0)
1B · Wedge | Vertex Select · top corner, then Shift-click bottom corner | Merge → At Last (M) · both sides | [▶ 0:28](https://youtu.be/30wfJMyzoKw?t=28)
Part 2 · Wheel cutter
2A · Cylinder | Object Mode · Add → Mesh → Cylinder | Rotation X 90° · Z 90° | [▶ 0:59](https://youtu.be/30wfJMyzoKw?t=59)
2B · Place it | G X to +X side · S smaller | G Y near back · G Z down | [▶ 1:45](https://youtu.be/30wfJMyzoKw?t=105)
2C · Spare | Duplicate (Shift+D) · X · move aside | for the axle | [▶ 2:38](https://youtu.be/30wfJMyzoKw?t=158)
Part 3 · Mirror and cut
3A · Names | F2 · Wheel · Wedge | [▶ 3:10](https://youtu.be/30wfJMyzoKw?t=190)
3B · Mirror | Wheel: Add Modifier → Generate → Mirror | Axis X · Mirror Object Wedge | [▶ 2:58](https://youtu.be/30wfJMyzoKw?t=178)
3C · Boolean | Wedge: Add Modifier → Generate → Boolean | Difference · Object Wheel · hide Wheel · Apply | [▶ 3:38](https://youtu.be/30wfJMyzoKw?t=218)
Part 4 · Wheels and axle
4A · Wheels | Show Wheel · S smaller to fit the wells | [▶ 4:22](https://youtu.be/30wfJMyzoKw?t=262)
4B · Axle | Spare cylinder · S X across · G X | F2 · Axle | [▶ 4:39](https://youtu.be/30wfJMyzoKw?t=279)
Part 5 · Separate the wheels
5A · Apply | Object Mode · Wheel: Mirror ▾ → Apply | [▶ 6:23](https://youtu.be/30wfJMyzoKw?t=383)
5B · Split | Edit Mode · hover a wheel · L | P → Selection · F2 Right Wheel / Left Wheel | [▶ 6:40](https://youtu.be/30wfJMyzoKw?t=400)
Part 6 · Colours
6 · Materials | Wedge Color dark green | Axle Color copper · Metallic 1 | Wheel Black on both wheels | [▶ 7:41](https://youtu.be/30wfJMyzoKw?t=461)
Part 7 · Ready for Unreal
7A · Join | Object Mode · select all · Join (Ctrl+J) | F2 · Green Wedge Robot | [▶ 9:11](https://youtu.be/30wfJMyzoKw?t=551)
7B · Face +X | Rotation Z until the thin front points +X | Apply → All Transforms | [▶ 9:38](https://youtu.be/30wfJMyzoKw?t=578)
7C · On the floor | Move up until wheels touch the red line | Apply → All Transforms | [▶ 10:48](https://youtu.be/30wfJMyzoKw?t=648)
7D · Save and export | Save As · Blender Assets folder | File → Export → FBX · Mesh only | [▶ 11:31](https://youtu.be/30wfJMyzoKw?t=691)
Bonus · Quick animation
B · Animate | I = keyframe · G forward · I | [▶ 12:23](https://youtu.be/30wfJMyzoKw?t=743)
```

## Part 1 · The wedge

### 1A · Flatten the cube

[▶ Watch this part (0:00)](https://youtu.be/30wfJMyzoKw?t=0)

1. Choose **File → New → General**. Choose **File → Save As** and name it `wedge_robot_yourname.blend`.
2. Click the cube and switch to **Edit Mode**. (Shortcut: Tab)
3. Click **Face Select**. (Shortcut: 3) Click the **top face**. It turns orange.
4. Choose **Mesh → Transform → Move**, press **Z** and move down until the block is about half as tall. Click. (Shortcut: G, Z)

### 1B · Make the wedge with Merge at Last

[▶ Watch (0:28)](https://youtu.be/30wfJMyzoKw?t=28)

1. Click **Vertex Select**. (Shortcut: 1)
2. On one side of the block, click a **top front corner**. Hold **Shift** and click the **bottom front corner** under it. The one you click **last** is where they meet.
3. Choose **Mesh → Merge → At Last**. The top corner drops onto the bottom one and that side slopes. (Shortcut: M → At Last)
4. Do the same on the other side: click the top front corner, Shift-click the bottom one, **Merge → At Last**.

> **Pick the right one:** **At Last**, not **At Center**. At Center would meet halfway up and you'd get a tent shape instead of a ramp.

- [ ] The block is a wedge: tall at the back, sloping down to a thin front edge

## Part 2 · The wheel cutter

You use a cylinder to cut round wheel wells into the wedge. It also becomes the wheel.

### 2A · Add and turn a cylinder

[▶ Watch this part (0:59)](https://youtu.be/30wfJMyzoKw?t=59)

| Setting | Axis | Value |
| --- | --- | --- |
| **Rotation** | X | 90° |
|  | Y | 0° |
|  | Z | 90° |

1. Switch to **Object Mode**. (Shortcut: Tab)
2. Choose **Add → Mesh → Cylinder**.
3. Choose **Object → Transform → Move**, move the cylinder away from the wedge and click. (Shortcut: G)
4. Open the **Sidebar**, **Item** tab, and type the **Rotation** values. The cylinder turns so it rolls like a wheel along the wedge's side. (Shortcut: N)
5. Click **X** on the **Navigation gizmo** to look from the side and check.

### 2B · Place it on the side

[▶ Watch (1:45)](https://youtu.be/30wfJMyzoKw?t=105)

1. Press **G**, then **X**, and move the cylinder so it pokes through the **+X** side of the wedge (the side the red arrow points to). Click.
2. Choose **Object → Transform → Scale** and make it smaller, about the size of a wheel. (Shortcut: S)
3. Press **G**, then **Y**, and slide it toward the **back** of the wedge. The axle should be just ahead of the back edge.
4. Press **G**, then **Z**, and move it down so it sticks out below the wedge a little. That's how far the wheel will touch the ground.

### 2C · A spare for the axle

[▶ Watch (2:38)](https://youtu.be/30wfJMyzoKw?t=158)

1. Choose **Object → Duplicate Objects**, press **X**, move it to the side and click. (Shortcut: Shift+D, X) Leave it there for now: it becomes the axle in Part 4.

- [ ] One cylinder sticks through one side of the wedge near the back
- [ ] A spare cylinder waits beside the robot

## Part 3 · Mirror and cut the wheel wells

### 3A · Name things

[▶ Watch this part (3:10)](https://youtu.be/30wfJMyzoKw?t=190)

1. Click the cylinder in the wedge. Choose **Object → Rename Active Item**, type **Wheel** and press **Enter**. (Shortcut: F2) The name changes in the **Outliner**.
2. Click the wedge and rename it **Wedge**.

### 3B · Mirror the wheel to the other side

[▶ Watch (2:58)](https://youtu.be/30wfJMyzoKw?t=178)

| Mirror modifier | Value |
| --- | --- |
| Axis | X |
| Mirror Object | Wedge |

1. Click **Wheel**. Open **Modifier Properties** (blue wrench).
2. Click **Add Modifier → Generate → Mirror**.
3. Click the **Mirror Object** box and choose **Wedge**. A second wheel appears on the other side of the wedge.

**Why Mirror Object?** The wheel's own centre is out on the side, so mirroring around itself would put the copy right beside it. Mirroring around the **Wedge** puts the copy on the far side.

### 3C · Cut the wells with a Boolean

[▶ Watch (3:38)](https://youtu.be/30wfJMyzoKw?t=218)

| Boolean modifier (amber) | Value |
| --- | --- |
| Operation | Difference |
| Object | Wheel |

1. Click **Wedge**. Click **Add Modifier → Generate → Boolean**.
2. Check **Difference** is chosen, then click the **Object** box and choose **Wheel**.
3. In the **Outliner**, click the **eye** beside **Wheel** to hide it. You see two round holes cut into the wedge: the wheel wells.
4. With **Wedge** still selected, click the **▾** on the Boolean modifier and choose **Apply**. The holes stay, and the modifier is gone.
5. Click the eye again to show **Wheel**.

> **Pick the right one:** Put the Boolean on the **Wedge** (the thing being cut), not on the Wheel. **Difference** cuts away; **Union** joins; **Intersect** keeps only the overlap.

- [ ] The wedge has a round wheel well on each side

## Part 4 · Wheels and axle

### 4A · Shrink the wheels

[▶ Watch this part (4:22)](https://youtu.be/30wfJMyzoKw?t=262)

1. Click **Wheel** and press **S**. Scale it down a little so there's a gap inside each well. Both wheels change, because the second one is a mirror. Click.
2. Look from behind (**Y** on the gizmo) to check the gap.

### 4B · Make the axle

[▶ Watch (4:39)](https://youtu.be/30wfJMyzoKw?t=279)

1. Click the spare cylinder. Move it into the middle of the wheels (G X), then scale it down so it is thinner than the wheel (S).
2. Press **S**, then **X**, and stretch it so it reaches across both wheels.
3. Press **S**, **X** again and pull it back in so it only sticks out a little past each wheel.
4. Rename it **Axle** (F2).

- [ ] Two wheels sit in the wells with a gap around them
- [ ] A thin axle runs between them and sticks out a little

## Part 5 · Separate the wheels

### 5A · Apply the Mirror

[▶ Watch this part (6:23)](https://youtu.be/30wfJMyzoKw?t=383)

The second wheel is only a reflection until you apply the Mirror.

1. Switch to **Object Mode** and click **Wheel**.
2. On the **Mirror** modifier, click **▾ → Apply**.

**What changed:** the Mirror modifier is gone from the list, but both wheels are still there. In Edit Mode you can now click points on the second wheel too.

### 5B · Split them apart

[▶ Watch (6:40)](https://youtu.be/30wfJMyzoKw?t=400)

1. Hide **Wedge** and **Axle** with their eye icons, so only the wheels show.
2. Click **Wheel** and switch to **Edit Mode**. Choose **Select → None**. (Shortcut: Alt+A)
3. Hover over one wheel and press **L**. Only that wheel turns orange.
4. Choose **Mesh → Separate → Selection**. (Shortcut: P → Selection)
5. Switch to **Object Mode**. The **Outliner** now lists two wheel objects.
6. Rename them **Right Wheel** and **Left Wheel** (F2). Show **Wedge** and **Axle** again.

> **Pick the right one:** **Selection** separates only the orange part. **By Loose Parts** would split every separate piece at once, which also works here. [Separate the Wheels](../lesson-11-separate-the-wheels/) shows both, plus how to give each wheel its own origin so it can spin.

- [ ] The Outliner shows Wedge, Axle, Right Wheel and Left Wheel

## Part 6 · Colours

[▶ Watch this part (7:41)](https://youtu.be/30wfJMyzoKw?t=461)

| Material | Base Color | Metallic | Used on |
| --- | --- | --- | --- |
| Wedge Color | dark green | 0 | Wedge |
| Axle Color | copper | 1 | Axle |
| Wheel Black | almost black | 0 | both wheels |

1. Click **Material Preview** (third shading circle) so you can see colours. (Shortcut: Z → Material Preview)
2. Click **Wedge**. In **Material Properties**, click **New**, name it **Wedge Color** and pick a dark green **Base Color**.
3. Click **Axle**, click **New**, name it **Axle Color**, pick a copper colour and set **Metallic** to **1**.
4. Click **Right Wheel**, click **New**, name it **Wheel Black**. Click the Base Color box and drag the brightness bar almost to the bottom.
5. Click **Left Wheel**. Click the **sphere** button beside **New** (Browse Material) and choose **Wheel Black**. You don't need a new one.

- [ ] The wedge is green, the axle copper, and both wheels black

## Part 7 · Ready for Unreal

### 7A · Join everything

[▶ Watch this part (9:11)](https://youtu.be/30wfJMyzoKw?t=551)

1. In **Object Mode**, click the wedge, then hold **Shift** and click the axle and both wheels.
2. Choose **Object → Join**. They become one object. (Shortcut: Ctrl+J)
3. Rename it, for example **Green Wedge Robot** with your number (F2).

### 7B · Face +X

[▶ Watch (9:38)](https://youtu.be/30wfJMyzoKw?t=578)

Unreal treats **+X** (the red arrow) as forward.

1. Click **Z** on the **Navigation gizmo** to look from above.
2. In the Sidebar, change **Rotation Z** until the thin front edge of the wedge points the same way as the red X arrow (try **90** or **−90**).
3. Move the robot so the middle between its wheels sits on the red and green lines: that's the point it will spin around in Unreal.
4. Choose **Object → Apply → All Transforms**.

**What changed:** the Sidebar's Location and Rotation now read **0** and Scale reads **1**, but the robot hasn't moved. Unreal will now import it facing the right way at the right size.

### 7C · Sit it on the floor

[▶ Watch (10:48)](https://youtu.be/30wfJMyzoKw?t=648)

1. Click **Y** on the gizmo to look from the side. Move the robot up (G Z) until the bottom of the wheels touches the red line.
2. Choose **Object → Apply → All Transforms** again.

### 7D · Save and export

[▶ Watch (11:31)](https://youtu.be/30wfJMyzoKw?t=691)

| FBX export | Value |
| --- | --- |
| Object Types | **Mesh** only |
| Everything else | Defaults |

1. Choose **File → Save As**. Save it in a folder you'll find again, such as **Blender Assets**, with your number in the name.
2. Choose **File → Export → FBX (.fbx)**.
3. Under **Include → Object Types**, click so only **Mesh** is highlighted. Leave the rest.
4. Use the same name and click **Export FBX**. (The Unreal lesson calls this file **Robot.fbx**; any name works.)

- [ ] The robot faces +X and sits on the floor line
- [ ] I have a `.blend` file and an `.fbx` file in my folder

## Bonus · A quick animation

[▶ Watch this part (12:23)](https://youtu.be/30wfJMyzoKw?t=743)

1. Move the robot back (G Y or G X). Hover over the Sidebar's **Location** fields and press **I**. They turn yellow.
2. Move the playhead in the **Timeline** to a later frame. Move the robot forward and press **I** again.
3. Click **Play**. The robot drives forward. See [Animating a Cube](../lesson-00-animating-a-cube/) for more.

## Video chapters

Copy this list into the YouTube description to add chapters to the video.

```
0:00 Flatten the cube
0:28 Merge at Last for the wedge
0:59 A cylinder for the wheel well
1:45 Place the wheel
2:38 A spare for the axle
2:58 Mirror modifier
3:10 Name objects with F2
3:38 Boolean: cut the wheel wells
4:22 Scale the wheels
4:39 Shape the axle
6:23 Apply the modifiers
6:40 Separate the wheels
7:41 Colours: wedge, axle, wheels
9:11 Join everything
9:38 Face +X for Unreal
10:34 Apply All Transforms
11:31 Save the file
11:57 Export to FBX
12:23 Bonus: quick animation
```
