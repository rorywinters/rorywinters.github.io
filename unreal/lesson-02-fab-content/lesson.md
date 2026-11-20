---
title: Bringing Fab Content into Unreal
program: Unreal Engine
lesson: 2
blurb: Add free models and asset packs from Fab, Epic's asset store, to a Third Person project, place them at a sensible size, and make sure the character bumps into them.
---
By the end you'll have free models from **Fab** placed in your Third Person level, sized correctly and blocking the player like real objects.

[Fab](https://www.fab.com/) is Epic Games' asset store. It replaced the old Unreal Marketplace, Quixel Megascans and the Sketchfab store. Unreal 5.8 has Fab built into the editor, so most of the time you don't need a web browser.

**You need:** your Epic Games account (the one the Epic Games Launcher uses), Unreal Engine 5.8, and about 30 minutes.

**Free only.** Never enter a credit card. If something asks for payment, close it and pick a different asset.

| Where things are in Unreal | Location on screen |
| --- | --- |
| **Window** menu (Fab is under Get Content) | Menu bar, top left |
| **Content Drawer** (and its **Fab** button beside + Add) | Bottom-left corner button |
| **Details** panel | Right side of the window |
| **Play** (green ▶) | Main toolbar, top middle |
| **Shader compile** counter | Bottom-right corner |

This lesson has no heavy settings, but **quality level** matters: always choose **Medium**. High and Raw are much larger downloads.

**Links for this lesson:** [fab.com](https://www.fab.com/)

```brief
Part 1 · Test project
1 · Project | Games → Third Person | FabTest_FirstnameL · Content Drawer
Part 2 · Get a free asset
2A · Open Fab | Window → Fab (Get Content) | or Content Drawer → Fab
2B · Find | search · Price: Free · Compatibility: your version | Unreal Engine format · under 500 MB
2C · Two steps | Add to My Library | then Add to Project (+) · Medium quality
Part 3 · Place and test
3 · Place | drag Static Mesh in · End | Play: size · collision · textures · on the floor
Part 4 · Collision
4 · Box collision | open the mesh | Collision → Add Box Simplified Collision · Save
Part 5 · Plan B: import by hand
5 · Download | fab.com → Download FBX (or GLB) · Extract All | drag into ImportedAssets · Import
Part 6 · Save and credit
6 · Save | File → Save All | credits table
```

## Part 1 · Set up a test project

Try new assets in a practice project first. Fab assets can be large, and a broken one is easier to delete from a test project than from your real game.

| Project Browser | Value |
| --- | --- |
| **Template** | Games → Third Person |
| **Project Defaults** | Blueprint |
| **Project Name** | FabTest_FirstnameL (your first name and last initial) |

1. Open Unreal Engine 5.8 and choose **Games → Third Person**.
2. Name the project from the table. This stops you overwriting a classmate's project.
3. Click **Create** and wait for the editor to finish loading. The first launch can take a few minutes.
4. Open the **Content Drawer** (bottom-left corner button). You'll find your assets here later. (Shortcut: Ctrl+Space)

Already have a project you want to use? That's fine, but choose **File → Save All** first.

- [ ] Your FabTest project is open with the Third Person character in the level

## Part 2 · Get a free asset from the Fab window

Getting an asset is **two separate steps**: **Add to My Library** (it now belongs to your account) and **Add to Project** (it's copied into this project). Students often do the first and forget the second.

### 2A · Open Fab inside Unreal

1. Open the **Window** menu (menu bar, top left) and choose **Fab**, under **Get Content**. Or click the **Fab** button beside **+ Add** in the Content Drawer.
2. Sign in with your Epic Games account if it asks.
3. Fab opens on the **Discover** page. It only shows products that work in Unreal.

### 2B · Find something free

| Fab filters | Value |
| --- | --- |
| **Price** | Free |
| **Compatibility** | your Unreal version |

1. Type a simple word in the search bar, for example **crate**, **barrel**, **rock**, **chair** or **medieval props**.
2. Set the **Price** filter to **Free** and **Compatibility** to your Unreal version.
3. Click a product to open its preview. Before you take it, check:
   - It says **Free** (not a sale price).
   - **Included formats** lists **Unreal Engine**.
   - It's an **asset pack**, not a plugin or a complete project.
   - The download is small (under about 500 MB). A smaller pack is best for your first try.

### 2C · Add it to your library, then your project

1. Click **Add to My Library**. Accept the Fab agreement if you're asked. Nothing is in your project yet.
2. Click **Add to Project**. It may be on the same page, or under **My Library** at the top of the Fab window as a **+** icon in the bottom-right corner of the tile.
3. If it asks for a quality level (common with Megascans rocks and plants), choose **Medium**.
4. If Unreal says the pack doesn't match your engine version, choose the closest version in the drop-down and click **Add to Project** again.
5. Wait for the download bar to finish. Don't close Unreal while it downloads.
6. Open the **Content Drawer**. A new folder appears, usually named **Fab** or after the pack. Open it and find the **Static Mesh** (the 3D model icon), often in a **Meshes** folder.

> **Pick the right one:** if Fab asks you to pick an **export target** or a **file format** (FBX, GLB, OBJ) instead of offering Add to Project, that product isn't Unreal-ready. Choose a different asset, or use Part 5.

- [ ] The asset shows in My Library
- [ ] A new folder with a Static Mesh is in your Content Drawer

## Part 3 · Place it and test it

| Check | What good looks like | If it's wrong |
| --- | --- | --- |
| **Size** | Looks right next to the character (a chair reaches about hip height) | Change **Scale** in the Details panel (right side), e.g. 0.5 or 2.0 |
| **Collision** | The character bumps into it instead of walking through | Part 4 |
| **Look** | Colours and textures show, not grey or checkered | Wait for shaders to finish compiling (counter, bottom-right corner) |
| **Ground** | It sits on the floor, not floating or sunk | Select it and press **End** to drop it to the floor |

1. Drag the Static Mesh from the Content Drawer into the viewport, near the player start.
2. With it selected, use the **Details** panel (right side) to set **Location**, **Rotation** and **Scale**. Open each with its **▶** arrow if it shows as one line. (Shortcut: W move, E rotate, R scale)
3. Press **End** to drop it onto the floor.
4. Place a few more objects near the player start.
5. Click **Play** (green ▶, top middle) and walk up to each one. Check the four things in the table. Press **Esc** to stop. Make changes only when Play is stopped.

- [ ] Your objects sit on the floor at a sensible size
- [ ] Textures show, not grey or checkered

## Part 4 · Fix collision

If your character walks through an object, that mesh needs collision.

1. In the level, select the object. In the **Details** panel (right side), double-click its static mesh. The **Static Mesh Editor** opens.
2. Open the **Collision** menu (top of the Static Mesh Editor) and choose **Add Box Simplified Collision**. A green box outline appears around the mesh.
3. Click **Save** in the Static Mesh Editor, then close it.
4. Click **Play** and test again.

A box works well for crates and walls. For an arch or another shape the character must walk through, a box blocks the opening, so ask for help or use a separate mesh.

> **Pick the right one:** **Add Box Simplified Collision** for boxy objects. **Auto Convex Collision** follows rounder shapes more closely (see Unreal Lesson 8, Part 2).

- [ ] Your character bumps into every object instead of walking through

## Part 5 · Plan B: download and import by hand

Use this only when a free asset has no **Add to Project** button and only offers file formats.

| Download format | Choose |
| --- | --- |
| 1st choice | **FBX** |
| 2nd choice | **GLB / glTF** |
| Avoid | OBJ (it often loses its textures) |

1. Go to [fab.com](https://www.fab.com/) in a web browser and sign in.
2. Open the asset, click **Add to My Library**, then **Download**. Pick the format from the table.
3. Find the downloaded .zip in your Downloads folder. Right-click it and choose **Extract All**.
4. In Unreal's Content Drawer, right-click → **New Folder** and name it **ImportedAssets**.
5. Open that folder, then drag the .fbx or .glb file from Windows into it.
6. An import window appears. Leave the defaults and click **Import**. A Static Mesh, plus Material and Texture files, appear. Go back to Part 3 to place and test it.

If the model imports grey, the textures were in a separate folder in the zip. Drag those image files (.png / .jpg) into the same Unreal folder too.

- [ ] (Only if you used Plan B) the imported mesh shows its textures

## Part 6 · Save and give credit

1. Choose **File → Save All**. (Shortcut: Ctrl+Shift+S)
2. Close and reopen the project. Check your objects are still in the level.
3. Fill in a credits table in your project notes. Free doesn't mean "no rules": some assets (marked **CC BY**) require you to credit the creator.

| Asset name | Creator | Fab link | Licence |
| --- | --- | --- | --- |
|  |  |  |  |

**Class rules**

- Free only. No purchases, no payment details, ever.
- Keep it small: Medium quality, one or two assets at a time. Big packs fill the school drives.
- Your own folders and projects, named with your name.
- School-appropriate content only. If Fab shows a mature-content warning, skip that asset.

**Show your teacher**

- [ ] My test project is named with my name
- [ ] I added a free asset to My Library and to my project
- [ ] It's placed in my level at a sensible size, and my character can't walk through it
- [ ] I filled in the credits table and saved with File → Save All

**Extra challenge:** add three different assets and build a small scene (a campsite, a storage room, a sumo ring arena).

## Troubleshooting

| Problem | Try this |
| --- | --- |
| No Fab in the Window menu | Edit → Plugins, search "Fab", tick Enabled, restart Unreal. |
| Fab window is blank or won't sign in | Close and reopen the Fab window; check the school network isn't blocking it; tell your teacher. |
| The pack isn't in My Library | Check you're signed in to the same Epic account, then search for it in Fab again. |
| Asks for an export target or format instead of Add to Project | The asset isn't Unreal-ready (or it's a plugin or complete project). Pick another, or use Part 5. |
| Can't find the asset after it downloaded | Type its name in the Content Drawer search bar. Check the Fab folder. |
| Model is grey or checkered | Wait for shaders to compile, or import the missing texture images (Part 5 tip). |
| Model is huge or tiny | Change Scale in the Details panel. |
| Character walks through it | Part 4. |
| Project suddenly very large or slow | You picked High/Raw quality or a big pack. Delete it and re-add at Medium. |
| "Out of date" or won't open in 5.8 | The asset was made for an older version. Pick a different one. |

Sources: [Fab in Unreal Engine (Epic docs)](https://dev.epicgames.com/documentation/en-us/unreal-engine/fab-in-unreal-engine) · [fab.com](https://www.fab.com/)
