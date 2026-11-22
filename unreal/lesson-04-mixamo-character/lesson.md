---
title: Mixamo Character to Unreal Game
program: Unreal Engine
lesson: 4
blurb: Download a Mixamo character, import it into a Third Person project, retarget the walk and jump animations to it, and play as your own character.
---
By the end, your **Mixamo** character is the player in your Unreal game, walking with **W A S D** and jumping with **Space**. This is harder than Lesson 3 because a Mixamo skeleton isn't the UE5 Mannequin, so you copy (retarget) the animations to it.

**You need:** an Unreal project made from the **Third Person** template, and a free Adobe account to sign in to [mixamo.com](https://www.mixamo.com/).

In these steps, **YourCharacter** stands for your character's name. Use your own name for folders and files so you don't overwrite anyone else's work.

| Where things are in Unreal | Location on screen |
| --- | --- |
| **Content Drawer** | Bottom-left corner button |
| **Components** panel (in a Blueprint) | Top-left of the Blueprint editor |
| **Details** panel | Right side of the window |
| **Outliner** | Top-right panel |
| **Play** (green ▶) | Main toolbar, top middle |

This lesson has no heavy settings.

**Links for this lesson:** Part 1 characters: [mixamo.com](https://www.mixamo.com/)

```brief
Part 1 · Download from Mixamo
1 · Character | Characters tab · Download | FBX Binary · T-pose
Part 2 · Import into Unreal
2 · Import | Content → YourCharacter (+ Anims folder) | drag .fbx · Skeletal Mesh · Skeleton empty
Part 3 · Copy the animations
3 · Retarget | right-click ABP_Unarmed → Retarget Animations | Target: your character · Export to Anims
Part 4 · Make it the player
4 · BP_ThirdPersonCharacter | Mesh → Skeletal Mesh Asset: your character | Anim Class: YourCharacter_ABP_Unarmed
Part 5 · Fit the capsule
5 · Mesh transform | Location Z −90 · Rotation Z −90 | Scale (lock) until feet touch
Part 6 · Save and test
6 · Play | PlayerStart · save level in Maps | idle · walk · jump
```

## Part 1 · Download the character from Mixamo

Download the character only, standing in a T-pose. Unreal supplies the animations later.

| Mixamo → Download | Value |
| --- | --- |
| **Format** | FBX Binary (.fbx) |
| **Pose** | T-pose |

1. Sign in to [mixamo.com](https://www.mixamo.com/) and click the **Characters** tab.
2. Pick a character. It appears in the preview on the right.
3. Click **Download**, set the options from the table, and click **Download** again. Save the .fbx somewhere you can find it.

You can also use a character you rigged yourself in Blender ([Rigging a Character](../../blender/lesson-13-rigging-a-character/)) and uploaded to Mixamo. The steps are the same.

- [ ] The .fbx file is saved where you can find it

## Part 2 · Import the character into Unreal

Give your character its own folder so its files stay together.

| FBX Import Options | Value |
| --- | --- |
| **Import as** | Skeletal Mesh |
| **Skeleton** | empty (Unreal makes a new one) |

1. Open the **Content Drawer** (bottom-left corner button).
2. Click **Content**, right-click in the empty area, choose **New Folder**, and name it **YourCharacter**.
3. Inside that folder, make one more folder called **Anims**. You use it in Part 3.
4. Open the **YourCharacter** folder (not Anims) and drag your .fbx file into it.
5. In the import window, check it's importing a **Skeletal Mesh** and leave **Skeleton** empty.
6. Click **Import**. Ignore warnings about smoothing groups.
7. Click **Save All**.

You now see several new items: a **Skeletal Mesh** (your character, its thumbnail shows the whole body in a T-pose), a **Skeleton**, a **Physics Asset**, and materials and textures.

Don't drag the character into the level. That makes a statue that can't move. The game places your character for you.

- [ ] The YourCharacter folder holds a Skeletal Mesh in a T-pose

## Part 3 · Copy the walking and jumping animations

The Third Person template's animations were made for Unreal's mannequin skeleton, not your Mixamo skeleton. If you skip this part, your character stays frozen in a T-pose. **Retargeting** makes copies of the animations that fit your character.

| Retarget Animations window | Value |
| --- | --- |
| **Source Skeletal Mesh** | leave it (SKM_Quinn_Simple or SKM_Manny) |
| **Target Skeletal Mesh** | your character |
| **Auto Generate Retargeter** | ticked |
| **Export folder** | YourCharacter → Anims |
| **Prefix** | YourCharacter_ |

1. In the Content Drawer, go to **Characters → Mannequins → Anims → Unarmed**.
2. **Right-click** (don't double-click) **ABP_Unarmed** and choose **Retarget Animations**.
3. Set **Target Skeletal Mesh** from the table and leave the rest.
4. In the list at the bottom right, click **ABP_Unarmed** so it's highlighted.
5. Check the preview. Both characters stand side by side in the same pose, and the message at the bottom says **Success**.
6. Click **Export Animations**. When it asks where to save, open **YourCharacter → Anims**. If it asks for a prefix, type **YourCharacter_**.
7. Click **Export** and wait while it copies. Then click **Save All**.

Your Anims folder now holds a new animation blueprint, such as **YourCharacter_ABP_Unarmed**, plus idle, walk, run and jump animations.

- [ ] The Anims folder holds YourCharacter_ABP_Unarmed and the walk and jump animations

## Part 4 · Make your character the player

The player is a Blueprint called **BP_ThirdPersonCharacter**. You swap its body and animations for yours.

| Mesh → Details | Value |
| --- | --- |
| **Mesh → Skeletal Mesh Asset** | your character |
| **Animation → Anim Class** | YourCharacter_ABP_Unarmed |

1. In the Content Drawer, go to **ThirdPerson → Blueprints** and double-click **BP_ThirdPersonCharacter**.
2. In the **Components** panel (top-left), click **Mesh**. Don't click the Capsule Component.
3. In the **Details** panel (right side), set **Skeletal Mesh Asset** and **Anim Class** from the table.
4. Click **Compile**, then **Save**.

Your character is probably the wrong size or in the wrong spot inside the capsule. Part 5 fixes that.

> **Pick the right one:** **Mesh**, not **Capsule Component**. For Anim Class, pick **YourCharacter_ABP_Unarmed** (the copy), not ABP_Unarmed.

- [ ] Your character shows in the Blueprint viewport (even if it's the wrong size)

## Part 5 · Fit the character inside the capsule

The capsule is the invisible shape that touches the floor. Your character's feet must sit at the very bottom of it, or they float or sink.

| Mesh → Transform (start here) | X | Y | Z |
| --- | --- | --- | --- |
| **Location** | 0 | 0 | -90 |
| **Rotation** | 0° (Roll) | 0° (Pitch) | -90° (Yaw) |
| **Scale** | 1 | 1 | 1 |

Stay in BP_ThirdPersonCharacter with **Mesh** selected. Type the starting numbers in **Details → Transform** (open each line with its **▶** arrow if needed), then adjust while looking at the **Viewport** tab:

1. **Too small or too big?** Click the lock icon beside **Scale**, then change one Scale number. All three change together.
2. **Floating or sunk into the floor?** Change **Location Z** until the feet just touch the bottom of the capsule outline.
3. **Facing sideways?** Change **Rotation Z** to -90 or 90 so the character faces the same way as the blue arrow.
4. Click **Compile**, then **Save**.

Always change the Mesh, never the Capsule Component.

- [ ] The feet touch the bottom of the capsule
- [ ] The character faces the same way as the blue arrow

## Part 6 · Save the level and test

1. Go back to the level tab. Check there's a **Player Start** in the **Outliner** (top-right panel); that's where your character appears.
2. Press **Ctrl+S**. If the level has never been saved, a **Save Level As** window opens.
3. In that window, make a folder called **Maps** inside **Content**, open it, and name the level something like **L_YourCharacterTest**. Click **Save**.
4. Click **Play** (green ▶, top middle). Press **Esc** to stop.

- [ ] Your character stands in an idle pose, not a T-pose
- [ ] The feet touch the ground
- [ ] W A S D walks, and the character faces the way it walks
- [ ] Space jumps and lands

## Troubleshooting

| Problem | Fix |
| --- | --- |
| Character stays in a T-pose | Anim Class is still ABP_Unarmed or empty. Do Part 3, then set Anim Class to your copied blueprint (Part 4). |
| Your animation blueprint isn't in the Anim Class list | It was made for a different skeleton. Redo Part 3 and pick your character as the Target Skeletal Mesh. |
| No Retarget Animations option | You double-clicked ABP_Unarmed. Close that window and right-click it in the Content Drawer instead. |
| Character is tiny or huge | Change the Mesh's Scale (Part 5). |
| Character floats or sinks | Change the Mesh's Location Z (Part 5). |
| Character walks sideways | Change the Mesh's Rotation Z to -90 or 90 (Part 5). |
| A second, frozen copy is in the level | You dragged it into the level. Click it in the Outliner and press Delete. |
| You still play as the old mannequin | You edited a different Blueprint. Open ThirdPerson → Blueprints → BP_ThirdPersonCharacter and check Part 4. |
| Exported animations landed in the wrong folder | Select them, drag them onto the Anims folder, choose Move Here, then Save All. |
