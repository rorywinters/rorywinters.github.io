---
title: Swap the Third Person Character for a Fab Character
program: Unreal Engine
lesson: 3
blurb: Keep the Third Person player that already walks and jumps, and give it a new body from Fab. Then make it bigger or smaller. No code, about one class.
---
The grey mannequin already walks with **W A S D** and jumps with **Space**. You keep all of that and only change what it **looks like**: swap its body for a free character from [Fab](https://www.fab.com/), then make it bigger or smaller.

**Time:** about 1 class. **You need:** Unreal Engine 5.8 and an Epic Games account. No code, no input settings.

**The class character:** [Adventure Character](https://www.fab.com/listings/deecb264-3b8e-47f1-b4a1-563865f5cd88) by Bugrimov Maksim. It's free, rated Not Mature, one piece (clothes already on), and built on the same skeleton as the grey mannequin, so the walk and jump just work.

| Use these names exactly | Name |
| --- | --- |
| Project | CharacterSwap |
| Level | CharacterLevel |

| Where things are in Unreal | Location on screen |
| --- | --- |
| **Content Drawer** | Button at the bottom-left corner |
| **Components** panel (in a Blueprint) | Top-left of the Blueprint editor |
| **Details** panel | Right side of the window |
| **Play** (green ▶) | Main toolbar, top middle |

| Colour | Meaning |
| --- | --- |
| Green | Safe to change. |
| Amber | Adds some load or disk space. |
| Red | Use with caution. A lighter working value is given. |

**Links for this lesson:** [Adventure Character on Fab](https://www.fab.com/listings/deecb264-3b8e-47f1-b4a1-563865f5cd88) (free) · the **Epic Games Launcher** adds it to your project.

```brief
Part 1 · Third Person project
1 · Project | Games → Third Person · no Starter Content · no Raytracing | CharacterSwap · save level CharacterLevel
Part 2 · Get the character
2 · fab.com | Adventure Character link · Free · Add to My Library | Launcher → Unreal Engine → Library → Fab Library → Add to Project (Show all projects if needed)
Part 3 · Swap the body
3 · BP_ThirdPersonCharacter | Mesh (CharacterMesh0) | Skeletal Mesh Asset → your character · Compile · Save
Part 4 · Bigger or smaller
4 · Mesh → Scale | 2 = twice as big · 0.5 = half size | Compile · Save
Part 5 · Play and hand in
5 · Play | WASD · Space | Win+Alt+R clip → Google Classroom
```

## Part 1 · Make a Third Person project

| Project Browser | Field | Value |
| --- | --- | --- |
| **Template** |  | Games → Third Person |
| **Project Defaults** | Starter Content | Off |
|  | Raytracing | Off |
| **Project** | Project Location | C:\Unreal Projects |
|  | Project Name | CharacterSwap |

1. Open Unreal Editor 5.8. Click **Games → Third Person** and set the values from the table. Click **Create**.
2. Click **Play** (green ▶, top middle). You walk around as the grey mannequin. Press **Esc**.
3. Choose **File → Save Current Level As**, type **CharacterLevel**, and click **Save**.

- [ ] The grey mannequin walks and jumps on Play
- [ ] The level tab reads CharacterLevel

## Part 2 · Get the character from Fab

You add the character on the **Fab website**, then the **Epic Games Launcher** copies it into your project. This works on every school computer.

1. In Unreal, click **File → Save All**. You can leave Unreal open.
2. In your browser, open [Adventure Character on Fab](https://www.fab.com/listings/deecb264-3b8e-47f1-b4a1-563865f5cd88). Click **Sign in** (top right) if asked, with your Epic Games account.
3. Check the right side of the page matches this table:

| On the Fab page | It should say |
| --- | --- |
| Name and maker | **Adventure Character** by **Bugrimov Maksim** |
| Price | **Free** |
| Age rating (under Details) | **Not Mature** |

4. Click **Add to My Library**.
5. Open the **Epic Games Launcher**. Click **Unreal Engine** (left side), then the **Library** tab (along the top), and scroll down to **Fab Library**. (Don't see it? Click the refresh arrow beside the search box.)
6. Click **Adventure Character**, then **Add to Project**. Click **CharacterSwap**, then **Add to Project** again. Wait for the download to finish (bottom-left of the Launcher).

> **"No compatible user projects found"?** The character was made for an older Unreal, so the Launcher hides your 5.8 project. Tick **Show all projects** (top right), click **CharacterSwap**, pick the **newest version** in the box that appears under it, and click **Add to Project**.

> **Pick the right one:** if you search Fab instead of using the link, the first result can be **Adventure Character 01**, which costs money. Check the maker is **Bugrimov Maksim** and the price says **Free**.

- [ ] Adventure Character finished downloading in the Launcher
- [ ] In Unreal, a new folder shows under **Content** in the Content Drawer

## Part 3 · Swap the body

The player is a Blueprint called **BP_ThirdPersonCharacter**. It already has the walking, jumping and camera. You only change its **Mesh** (its body).

| Mesh (CharacterMesh0) → Details → Mesh | Value |
| --- | --- |
| **Skeletal Mesh Asset** | the Adventure Character mesh |

1. Click **Content Drawer** (bottom-left corner). Go to **Content → ThirdPerson → Blueprints** and double-click **BP_ThirdPersonCharacter**. If a small window opens, click **Open Full Blueprint Editor**.
2. In the **Components** panel (top-left), click **Mesh (CharacterMesh0)**.
3. In the **Details** panel (right side), find **Skeletal Mesh Asset** and click its dropdown. Type **Adventure** in the search box and pick the Adventure Character mesh. If there are two, pick the one that isn't marked UE4. The grey mannequin turns into your character.
4. Click **Compile**, then **Save** (top-left of the Blueprint toolbar).

> **Pick the right one:** click **Mesh (CharacterMesh0)**, not **Capsule Component**. Don't drag the character into the level: that only makes a statue.

- [ ] The Blueprint viewport shows your character standing in the capsule
- [ ] Compile shows a green tick

## Part 4 · Bigger or smaller

**Scale** changes the size of the body. The feet stay on the ground, so the character still walks normally.

| Mesh (CharacterMesh0) → Details → Transform | Value |
| --- | --- |
| **Scale** X, Y, Z | 1 = normal · **2** = twice as big (green) · **0.5** = half size (green) |

1. With **Mesh (CharacterMesh0)** still selected, find **Scale** near the top of the **Details** panel (under **Transform**).
2. Click the small **lock** icon beside Scale so the three boxes change together. Type **2** in the first box and press **Enter**. All three boxes read 2, and the character in the viewport doubles in size.
3. Click **Compile**, then **Save**. Click **Play** and run around as a giant.
4. Try **0.5** for a tiny character. Pick the size you like best for your hand-in.

> **What changed:** only the look. The player still bumps into things at normal size, so a giant's head can go through low ceilings. That's fine for this lesson.

- [ ] The character is a different size in the viewport
- [ ] On Play, it still walks and jumps

## Part 5 · Play and hand in

1. Click **Play**. Walk with **W A S D**, jump with **Space**. Press **Esc** to stop.
2. Choose **File → Save All**.
3. Record it: click **Play**, then press **Windows + Alt + R**. Walk and jump for 15 seconds, then press **Windows + Alt + R** again. (Backup: Free Cam 8, or Unreal Lesson 6.)
4. In Google Classroom, open the assignment, choose **Add → File**, pick the clip from **Videos → Captures**, and click **Hand in**.

- [ ] On Play, you are your character and it walks and jumps
- [ ] The clip is handed in

## Troubleshooting

| Problem | Fix |
| --- | --- |
| Character stands still in a **T-pose** (arms straight out) | Quick fix, 3 clicks: in the Content Drawer, open the character's folder and double-click its **Skeleton** (hover: the tooltip says Skeleton). In **Asset Details** (right side), find **Compatible Skeletons**, click **+**, pick **SK_Mannequin**, then **Save**. Play again. |
| Still a T-pose after that | The character uses a different skeleton. Go back to **Adventure Character**, or ask your teacher. |
| Launcher says **No compatible user projects found** | Tick **Show all projects**, pick CharacterSwap, choose the newest version, then Add to Project (Part 2). |
| Character not in the Launcher's Fab Library | Make sure you clicked **Add to My Library** while signed in to the **same** Epic account as the Launcher. Click the refresh arrow. |
| Still the grey mannequin on Play | Compile and Save BP_ThirdPersonCharacter (Part 3). |
| Floating, sunk in the floor or facing sideways | Select Mesh in the Blueprint and check Location Z −90 and Rotation Z −90. |
| A frozen copy stands in the level | It was dragged into the level. Select it in the Outliner (top-right panel) and press Delete. |
| Grey or checkered | Shaders are still compiling. Wait. |
