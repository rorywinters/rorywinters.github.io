---
title: Rigging a Character
program: Blender
lesson: 13
blurb: Build a skeleton (armature) for a Mixamo character, attach it with automatic weights, and add IK controls so the legs bend at the knee when you move the foot.
---
You build a skeleton (an **armature**), attach it to your character, and add **IK** controls so the legs move naturally. IK (Inverse Kinematics) means you move the foot and the leg follows, like a real leg.

**You need:** a character from [Mixamo](https://www.mixamo.com/) (free Adobe account). You only need the character, not an animation.

Save often (Ctrl+S). Undo mistakes with **Edit → Undo** (Ctrl+Z).

| Where things are in Blender | Location on screen |
| --- | --- |
| **Outliner** | Top-right panel (list of objects) |
| **Properties editor** | Bottom-right panel (column of tab icons) |
| **N panel** (Item, Tool tabs) | Right edge of the 3D viewport (View → Sidebar) |
| **Mode menu** (Object, Edit, Pose Mode) | Top-left of the 3D viewport header |

This lesson has no heavy settings.

**Links for this lesson:** Part 1 character: [mixamo.com](https://www.mixamo.com/)

```brief
Part 1 · Prepare the character
1A · Character | mixamo.com · delete its armature | keep the mesh
1B · Face and size | Front view · faces you | Apply → All Transforms · Scale 1
1C · First bone | Cursor to World Origin · Armature → Single Bone | In Front · bone at the hips
Part 2 · Build the skeleton
2A · Bones | Extrude: Hips → Spine → Chest → Neck → Head | left side only, names end .L
2B · Parent | child, Shift-click parent | Parent → Keep Offset
2C · Mirror | Select All · Armature → Symmetrize | X-Axis Mirror on
Part 3 · Attach the skeleton
3A · Weights | character, then Shift-click armature | Parent → With Automatic Weights
3B · Test | Pose Mode · rotate a bone | Pose → Clear Transform → All
Part 4 · Leg IK (left)
4A · IK target | extrude from ankle · Clear Parent | IK-target.L
4B · IK constraint | LowerLeg.L → Inverse Kinematics | Target IK-target.L · Chain Length 2
4C · Pole | extrude from knee, in front · IK-pole.L | Pole Target · Pole Angle −90°
4D · Foot | Foot.L → child of IK-target.L | Copy Location ← LowerLeg.L tail
Part 5 · Right leg
5 · Copy | select leg + IK bones | Armature → Symmetrize · test both feet
```

## Part 1 · Prepare the character

### 1A · Get the character

1. Download a character from [mixamo.com](https://www.mixamo.com/) as FBX, and import it with **File → Import → FBX**.
2. In **Object Mode**, click the Mixamo armature (the skeleton) in the **Outliner** and choose **Object → Delete**. Keep the character mesh. (Shortcut: X → Delete)

The orange stick bones disappear and only the character is left.

### 1B · Face and size the character

| N panel → Item (after applying) | Value |
| --- | --- |
| **Rotation** | 0°, 0°, 0° |
| **Scale** | 1.000, 1.000, 1.000 |
| **Dimensions Z** | about your height (for example 1.7 m) |

1. Choose **View → Viewpoint → Front**. The character should face **you**. If not, rotate it until it does. (Shortcut: Numpad 1)
2. Choose **View → Sidebar** and type a **Dimensions Z** of about your height. (Shortcut: N)
3. With the character selected, choose **Object → Apply → All Transforms**. (Shortcut: Ctrl+A → All Transforms)

**What changed:** the character doesn't move, but in the N panel **Rotation** reads 0 and **Scale** reads 1, while **Dimensions** stay the same. Automatic weights in Part 3 need this.

### 1C · Add the first bone

| Properties → Armature (stick figure tab) → Viewport Display | Value |
| --- | --- |
| **In Front** | ticked |

1. Choose **Object → Snap → Cursor to World Origin**. The 3D cursor jumps to the centre of the grid. (Shortcut: Shift+C)
2. Choose **Add → Armature → Single Bone**. One bone appears at the cursor.
3. In the **Properties editor**, open the **Armature** tab (stick figure) → **Viewport Display** and tick **In Front**. Now you can see the bone through the character.
4. Choose **Edit Mode**. Move and resize the bone so it sits at the base of the spine (the hips). (Shortcut: Tab, then G and S)

- [ ] The character faces you in Front view
- [ ] N panel Scale reads 1.000 on the character
- [ ] One bone shows through the character at the hips

## Part 2 · Build the skeleton

### 2A · Add the bones

| Bones | Names |
| --- | --- |
| **Centre** | Hips → Spine → Chest → Neck → Head |
| **Left side only** | Shoulder.L, UpperArm.L, LowerArm.L, Hand.L, UpperLeg.L, LowerLeg.L, Foot.L |

1. Click the round end (tip) of a bone and choose **Armature → Extrude**. A new bone grows from the tip. Click to place it. (Shortcut: E)
2. Build the centre chain, then the left arm and left leg.
3. Name each bone as you go: **Bone Properties** (bone tab) → name box. (Shortcut: F2)

Every left-side bone ends in **.L** (for example **UpperArm.L**). Centre bones need no ending. Blender uses the .L to build the right side in 2C.

### 2B · Parent the loose bones

Extruded bones are already connected to the bone they came from. Bones that started from a different spot (like **Shoulder.L** and **UpperLeg.L**) need a parent.

| Child bone | Parent bone |
| --- | --- |
| Shoulder.L | Chest |
| UpperLeg.L | Hips |

1. Click the child bone first, then **Shift**-click the parent bone.
2. Choose **Armature → Parent → Make → Keep Offset**. A dotted line appears from the child to its parent. (Shortcut: Ctrl+P → Keep Offset)

> **Pick the right one:** **Keep Offset**, not **Connected**. Connected drags the child bone's start onto the parent's tip and bends your skeleton.

### 2C · Mirror to the right side

| N panel → Tool → Options | Value |
| --- | --- |
| **X-Axis Mirror** | ticked |

1. Choose **Select → All**, then **Armature → Symmetrize**. The right-side bones appear, named **.R**. (Shortcut: A)
2. In the N panel, open the **Tool** tab → **Options** and tick **X-Axis Mirror**. Now moving a bone on one side moves its twin.

- [ ] A full skeleton fits inside the character
- [ ] Right-side bones end in .R
- [ ] Dotted lines join Shoulder.L to Chest and UpperLeg.L to Hips

## Part 3 · Attach the skeleton to the character

### 3A · Parent with Automatic Weights

1. Return to **Object Mode**. (Shortcut: Tab)
2. Click the character, then **Shift**-click the armature. The armature must be selected last.
3. Choose **Object → Parent → With Automatic Weights**. (Shortcut: Ctrl+P)

In the Outliner, the character now sits under the armature.

### 3B · Test it

1. Click the armature and choose **Pose Mode** from the mode menu.
2. Click a bone and choose **Pose → Transform → Rotate**. The character's body bends with it. (Shortcut: R)
3. To reset, choose **Select → All**, then **Pose → Clear Transform → All**. (Shortcut: A, then Alt+G, Alt+R, Alt+S)

**If it doesn't work:** an error like "Bone Heat Weighting failed" usually means the character still has unapplied scale (redo 1B) or is made of several loose pieces. Undo, fix it, then try again.

- [ ] Rotating a bone in Pose Mode bends the character
- [ ] Clear Transform puts the character back

## Part 4 · Leg IK (left leg)

### 4A · Make the IK target

1. Choose **Edit Mode** and untick **X-Axis Mirror** (N panel → Tool → Options).
2. Click the circle at the **ankle end** of **LowerLeg.L** (the end nearest the foot).
3. Choose **Armature → Extrude**, press **Y**, and move the mouse **backward** (away from the way the character faces). Click. (Shortcut: E, Y)
4. Choose **Armature → Parent → Clear → Clear Parent**. The dotted line to the leg disappears. (Shortcut: Alt+P → Clear Parent)
5. Name it **IK-target.L**. (Shortcut: F2)

### 4B · Add the IK constraint

| Bone Constraint Properties → Inverse Kinematics | Value |
| --- | --- |
| **Target** | your armature |
| **Bone** | IK-target.L |
| **Chain Length** | 2 |

1. Choose **Pose Mode** and click **LowerLeg.L**.
2. In **Bone Constraint Properties** (bone with a link icon), choose **Add Bone Constraint → Inverse Kinematics**.
3. Type the values from the table. **Chain Length 2** means the lower leg and the thigh.

> **Pick the right one:** put the constraint on **LowerLeg.L**, not on IK-target.L or Foot.L. Use **Bone Constraint Properties**, not **Object Constraint Properties**: the object tab constrains the whole armature.

### 4C · Make the pole target (controls the knee)

| Inverse Kinematics constraint | Value |
| --- | --- |
| **Pole Target** | your armature |
| **Bone** | IK-pole.L |
| **Pole Angle** | −90° (change until the knee points forward) |

1. Choose **Edit Mode** and click the **knee joint** (where UpperLeg meets LowerLeg).
2. Choose **Armature → Extrude**, press **Y**, and move it **in front of the knee**, the way the character faces. Click. (Shortcut: E, Y)
3. Choose **Armature → Parent → Clear → Clear Parent** and name it **IK-pole.L**.
4. In **Pose Mode**, on the IK constraint of **LowerLeg.L**, set **Pole Target** and **Bone** from the table.
5. Change **Pole Angle** until the knee bends the right way.

**If the leg bends weirdly:** in Front view the leg should be straight, and from the side the knee should have a slight bend.

### 4D · Keep the foot with the IK target

| Foot.L → Copy Location constraint | Value |
| --- | --- |
| **Target** | your armature |
| **Bone** | LowerLeg.L |
| **Head/Tail** | 1 |

1. In **Edit Mode**, click **Foot.L** and choose **Armature → Parent → Clear → Clear Parent**.
2. Click **Foot.L**, **Shift**-click **IK-target.L**, and choose **Armature → Parent → Make → Keep Offset**.
3. Click **IK-pole.L**, **Shift**-click **IK-target.L**, and choose **Parent → Make → Keep Offset**. Now the pole moves with the foot.
4. In **Pose Mode**, click **Foot.L** and choose **Add Bone Constraint → Copy Location**. Type the values from the table.

Step 4 hasn't been tested on every character yet. If the foot jumps away from the ankle, delete the Copy Location constraint.

- [ ] Moving IK-target.L in Pose Mode bends the left leg at the knee
- [ ] The knee points toward IK-pole.L
- [ ] The foot stays attached to the ankle

## Part 5 · Copy to the right leg

1. In **Edit Mode**, select the left leg bones and the IK bones (**IK-target.L**, **IK-pole.L**).
2. Choose **Armature → Symmetrize**. **IK-target.R** and **IK-pole.R** appear on the right.
3. In **Pose Mode**, move each IK target. (Shortcut: G)
4. Click **LowerLeg.R** and check its IK constraint points at **IK-target.R** and **IK-pole.R**, in case anything didn't copy.

- [ ] Both legs bend at the knee when you move their IK targets
- [ ] Both feet stay attached

## Troubleshooting

| Problem | Fix |
| --- | --- |
| Bone Heat Weighting failed | Apply All Transforms on the character (1B), or the mesh is in loose pieces. |
| Bones hidden inside the character | Armature tab → Viewport Display → In Front. |
| Symmetrize makes no right side | The left bones don't end in .L. Rename them and try again. |
| Moving one bone also moves the other side | X-Axis Mirror is on. Untick it before making IK bones. |
| The knee bends backward | Change Pole Angle (try −90° or 90°), or move IK-pole.L further in front of the knee. |
| The whole leg spins | Chain Length is 0. Set it to 2. |
