---
title: Swap the Third Person Character for a Fab Character
program: Unreal Engine
lesson: 3
blurb: Replace the grey Third Person mannequin with a free Fab character made for the UE5 Mannequin, then walk and jump as it. One setting, no code. About one class.
---
You replace the grey Third Person mannequin with a character from [Fab](https://www.fab.com/), then walk and jump as it with **W A S D** and **Space**.

**Time:** about 1 class. **You need:** Unreal Engine 5.8 and an Epic Games account. No code.

**The one rule:** pick a character that's made for the **UE5 Mannequin**. Its Fab page will say **UE5 Mannequin**, **Manny**, **Epic skeleton** or **compatible with the Third Person template**. Those characters use the same walk, run and jump the template already has, so you only swap one setting. The class pick, **Adventure Character** (Part 2), already follows this rule.

| Use these names exactly | Name |
| --- | --- |
| Project | CharacterSwap |
| Level | CharacterLevel |

| Where things are in Unreal | Location on screen |
| --- | --- |
| **Content Browser / Content Drawer** | Bottom of the window (Content Drawer button, bottom-left corner) |
| **Components** panel (in a Blueprint) | Top-left of the Blueprint editor |
| **Details** panel | Right side of the window |
| **Play** (green ▶) | Main toolbar, top middle |

| Colour | Meaning |
| --- | --- |
| Green | Safe to change. |
| Amber | Adds some load or disk space. |
| Red | Use with caution. A lighter working value is given. |

The amber choice is the download size: one character, not a big pack.

**Links for this lesson:** Part 2 character: [Adventure Character on Fab](https://www.fab.com/listings/deecb264-3b8e-47f1-b4a1-563865f5cd88) (free), then the Epic Games Launcher → Unreal Engine → Library → Fab Library

```brief
Part 1 · Third Person project
1 · Project | Games → Third Person · no Starter Content · no Raytracing | CharacterSwap · save level CharacterLevel
Part 2 · Get a character
2 · Fab | fab.com · Adventure Character · View Unreal Engine · 3D Characters & Creatures · Formats Unreal Engine · Free · Ratings 4 & up · Listing · Not Mature · Add to My Library | Launcher → Unreal Engine → Library → Fab Library → Add to Project · find SK_ Skeletal Mesh
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

You find the character on the Fab website, then the **Epic Games Launcher** copies it into your project. This works on every computer, even when Fab doesn't show inside Unreal.

1. Click **File → Save All** in Unreal. You can leave Unreal open.
2. In your browser, go to [fab.com](https://www.fab.com/) and click **Sign in** (top right). Use your Epic Games account.
3. Set up the search exactly like this table, from top to bottom. Leave anything marked **(leave empty)** alone. Shortcut: this link opens the search with the main settings already on: [Fab search: Adventure Character, free, Unreal Engine](https://www.fab.com/search/channels/unreal-engine?q=Adventure+Character&listing_types=3d-model&categories=characters-creatures&is_free=1&asset_formats=unreal-engine).

| Where on the Fab page | Setting | Set it to |
| --- | --- | --- |
| Search box (top middle) | Search words | **Adventure Character**, then press **Enter** |
| Left side, **View** | View | **Unreal Engine** |
| Left side, **Product types** | Product type | **3D** → click the **▶** arrow → **Characters & Creatures** |
| Bar above the results | 1 · **Style** | (leave empty) |
| Bar above the results | 2 · **Technical features** | (leave empty). Our character isn't tagged Rigged or Epicskeleton, so ticking those hides it. |
| **More filters** (bar above the results) | 3 · **Formats** | tick **Unreal Engine** |
| More filters | 4 · **Tags** | (leave empty) |
| More filters | 5 · **Price** | tick **Only show free products** |
| More filters | 6 · **Discount** | **All products** |
| More filters | 7 · **Licenses** | (leave empty) |
| More filters | 8 · **Publishers** | (leave empty), or type **Bugrimov Maksim** to see only his characters |
| More filters | 9 · **Date published** | **All time** |
| More filters | 10 · **Ratings** | **4 & up** |
| More filters | 11 · **Content Type** | **Listing** (one product, not a bundle) |
| Bar above the results | **Sort by** | **Relevance** |

4. **Adventure Character** by **Bugrimov Maksim** is now first in the results. Click it. Before you add it, check the right side of its page matches this table:

| On the Fab page | It should say |
| --- | --- |
| Name and maker | **Adventure Character** by **Bugrimov Maksim** |
| Type (under the name) | **3D** · **Characters & Creatures** |
| Price | **Free** |
| Included formats | **Unreal Engine** |
| Unreal Engine versions | includes **5.8** |
| Age rating (under Details) | **Not Mature** |

5. Click **Add to My Library**. The button changes to say it's in your library.
6. Open the **Epic Games Launcher** and click **Unreal Engine** (left side), then the **Library** tab (along the top).
7. Scroll down to **Fab Library**. Your character is listed there. (If it isn't, click the refresh arrow beside the search box.)
8. Click your character, then **Add to Project**. Choose **CharacterSwap** and click **Add to Project** again. If it asks for a version, pick **5.8**, or tick **Show all projects** and choose CharacterSwap. Wait for the download to finish.
9. Back in Unreal, in the **Content Browser** (bottom of the window), open the new folder and find the character's **Skeletal Mesh**. Hover over the thumbnails: the tooltip says the type. Its name often starts with **SK_** or **SKM_**.

> **Pick the right one:** watch for look-alikes. Without the **Price** filter, the first result is **Adventure Character 01**, which costs money. Check the maker is **Bugrimov Maksim** and the price says **Free**. Choose the **Skeletal Mesh**, not the Static Mesh, Skeleton or Physics Asset. If you see two versions of the mesh (one for UE4, one for UE5), choose the **UE5** one.

> **School rule:** pick only from the class list: **Adventure Character** (first choice), [Adventure Female](https://www.fab.com/listings/22357e16-0f8e-4ae2-9ded-92702d94e22d) by the same maker, or [Rogue Character Model](https://www.fab.com/listings/15e2afd1-11c0-4679-832c-ebbfb6162583) by Wander Sols Assets. All three are free, rated **Not Mature**, and made for the UE5 skeleton. Want something else? Show your teacher the Fab page first: it must say **Free**, **Not Mature**, **Unreal Engine** and **UE5 Mannequin** or **Epic Skeleton**.

> **Shortcut if your Unreal has Fab built in:** if the **Window** menu has a **Get Content** section near the bottom with **Fab** in it, you can search and click **Add to Project** right inside Unreal instead of steps 2 to 8.

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
| Character not in the Launcher's Fab Library | Check you clicked **Add to My Library** on fab.com while signed in to the **same** Epic account as the Launcher. Click the refresh arrow in the Library tab. |
| No **Add to Project** button, or CharacterSwap isn't in the list | Tick **Show all projects**. Make sure the project was saved and Unreal 5.8 is installed in the Launcher. |
| Character stands in a T-pose or slides | It isn't made for the UE5 Mannequin. Pick another character (the one rule). |
| Still the grey mannequin on Play | Compile and Save BP_ThirdPersonCharacter (Part 3). |
| Floating, sunk in the floor or facing sideways | Select Mesh in the Blueprint and check Location Z −90 and Rotation Z −90. |
| A frozen copy stands in the level | It was dragged into the level. Select it in the Outliner (top-right panel) and press Delete. |
| Grey or checkered | Shaders are still compiling. Wait. |
