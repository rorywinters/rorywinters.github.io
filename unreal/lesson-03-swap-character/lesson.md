---
title: Swap the Third Person Character for a Fab Character
program: Unreal Engine
lesson: 3
blurb: Replace the grey Third Person mannequin with a free Fab character made for the UE5 Mannequin, then walk and jump as it. One setting, no code. About one class.
---
You replace the grey Third Person mannequin with a character from [Fab](https://www.fab.com/), then walk and jump as it with **W A S D** and **Space**.

**Time:** about 1 class. **You need:** Unreal Engine 5.8 and an Epic Games account. No code.

**The one rule:** pick a character that's made for the **UE5 Mannequin**. Its Fab page will say **UE5 Mannequin**, **Manny**, **Epic skeleton** or **compatible with the Third Person template**. Those characters use the same walk, run and jump the template already has, so you only swap one setting.

| Use these names exactly | Name |
| --- | --- |
| Project | CharacterSwap |
| Level | CharacterLevel |

| Where things are in Unreal | Location on screen |
| --- | --- |
| **Window** menu (Fab is near the bottom, under **Get Content**) | Menu bar, top left |
| **Content Browser / Content Drawer** (has its own **Fab** button beside **+ Add**) | Bottom of the window (Content Drawer button, bottom-left corner) |
| **Components** panel (in a Blueprint) | Top-left of the Blueprint editor |
| **Details** panel | Right side of the window |
| **Play** (green ▶) | Main toolbar, top middle |

| Colour | Meaning |
| --- | --- |
| Green | Safe to change. |
| Amber | Adds some load or disk space. |
| Red | Use with caution. A lighter working value is given. |

The amber choice is the download size: one character, not a big pack.

**Links for this lesson:** Part 2 characters: [fab.com](https://www.fab.com/) (or Window → Get Content → Fab, or the Fab button in the Content Drawer, inside Unreal)

```brief
Part 1 · Third Person project
1 · Project | Games → Third Person · no Starter Content · no Raytracing | CharacterSwap · save level CharacterLevel
Part 2 · Get a character
2 · Fab | search UE5 Mannequin character · Free | Add to My Library → Add to Project · find SK_ Skeletal Mesh
Part 3 · Swap it in
3 · BP_ThirdPersonCharacter | Mesh (CharacterMesh0) | Skeletal Mesh Asset → your character · Compile · Save
Part 4 · Play and hand in
4 · Play | WASD · Space | Win+Alt+R clip → Google Classroom
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

## Part 2 · Get a character from Fab

1. Open the **Window** menu (menu bar, top left) and **scroll down to the bottom of the list**. **Fab** is in the **Get Content** section near the end, not with the other windows at the top. (Other way: click **Content Drawer** in the bottom-left corner, then the **Fab** button beside **+ Add**.) The Fab window opens. Sign in with your Epic Games account if asked.

> **Still no Fab?** Try the first row of **Troubleshooting** at the bottom. If that doesn't work, use **Plan B** at the end of this part: get the character from the Fab website instead. Steps 2 to 5 are the same idea.

2. Search **UE5 Mannequin character** and set the **Price** filter to **Free**.
3. Open a character. Check its description says **UE5 Mannequin** (or Manny / Epic skeleton). If it doesn't, pick another.
4. Click **Add to My Library**, then **Add to Project**. Wait for the download.
5. In the **Content Browser** (bottom of the window), open the new folder and find the character's **Skeletal Mesh**. Hover over the thumbnails: the tooltip says the type. Its name often starts with **SK_** or **SKM_**.

> **Pick the right one:** one character, not a big pack of characters and levels (amber: packs can be several GB). Choose the **Skeletal Mesh**, not the Static Mesh, Skeleton or Physics Asset.

> **Plan B: get it from the website.** Go to [fab.com](https://www.fab.com/) in your browser and sign in with your Epic Games account. Find a free UE5 Mannequin character the same way (steps 2 and 3) and click **Add to My Library**. Open the **Epic Games Launcher**, click **Unreal Engine** → **Library**, scroll down to **Fab Library**, find the character and click **Add to Project**. Pick **CharacterSwap** and click **Add to Project** again. Then carry on from step 5.

- [ ] The character's folder is in the Content Browser
- [ ] You found its Skeletal Mesh and know its name

## Part 3 · Swap it in

The player is a Blueprint called **BP_ThirdPersonCharacter**. You change one setting inside it.

| Mesh (CharacterMesh0) → Details → Mesh | Value |
| --- | --- |
| **Skeletal Mesh Asset** | your character |

1. In the **Content Browser**, go to **Content → ThirdPerson → Blueprints** and double-click **BP_ThirdPersonCharacter**. If a small window opens, click **Open Full Blueprint Editor**.
2. In the **Components** panel (top-left), click **Mesh (CharacterMesh0)**.
3. In the **Details** panel (right side), set **Skeletal Mesh Asset** to your character. The grey mannequin in the Blueprint viewport turns into your character.
4. Click **Compile**, then **Save** (top-left of the Blueprint toolbar).

> **Pick the right one:** **Mesh (CharacterMesh0)**, not **Capsule Component**. Don't drag your character into the level either: that only makes a statue.

- [ ] The Blueprint viewport shows your character standing in the capsule
- [ ] Compile shows a green tick

## Part 4 · Play and hand in

1. Click **Play**. Walk with **W A S D**, jump with **Space**. Press **Esc** to stop.
2. Choose **File → Save All**.
3. Record it: click **Play**, then press **Windows + Alt + R**. Walk and jump for 15 seconds, then press **Windows + Alt + R** again. (Backup: Free Cam 8, or Unreal Lesson 6.)
4. In Google Classroom, open the assignment, choose **Add → File**, pick the clip from **Videos → Captures**, and click **Hand in**.

- [ ] On Play, you are your character and it walks and jumps
- [ ] The clip is handed in

## Troubleshooting

| Problem | Fix |
| --- | --- |
| No Fab in the Window menu | Scroll to the bottom of the Window menu: it's under **Get Content**. Or use the **Fab** button in the Content Drawer. If it's in neither, choose **Edit → Plugins**, search **Fab**, tick **Enabled** and restart Unreal. Still nothing: use **Plan B** in Part 2. |
| Character stands in a T-pose or slides | It isn't made for the UE5 Mannequin. Pick another character (the one rule). |
| Still the grey mannequin on Play | Compile and Save BP_ThirdPersonCharacter (Part 3). |
| Floating, sunk in the floor or facing sideways | Select Mesh in the Blueprint and check Location Z −90 and Rotation Z −90. |
| A frozen copy stands in the level | It was dragged into the level. Select it in the Outliner (top-right panel) and press Delete. |
| Grey or checkered | Shaders are still compiling. Wait. |
