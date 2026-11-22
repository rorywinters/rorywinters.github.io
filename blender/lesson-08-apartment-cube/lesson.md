---
title: Texturing a 3×3×3 Apartment Cube
program: Blender
lesson: 8
blurb: Cut a cube into a 3 × 3 grid on every side and turn it into a small apartment building with windows, a roofline, a door and a drain pipe, then export it to Unreal.
---
You turn a cube into a small apartment building. Each side gets 9 squares: windows, a roofline across the top row, a ground strip across the bottom row, a door in the bottom middle square of one side, and a drain pipe on another side. Then you export it to Unreal Engine. There are no nodes in this lesson.

**Do [A Window Texture on Every Side of a Cube](../lesson-07-window-on-every-side/) first.** It shows how UV → Reset puts one full picture on every face.

**Images you need** (shared by your teacher in Google Classroom):

- `apartment_window_tile.png`
- `apartment_roofline_tile.png`
- `apartment_ground_tile.png`
- `apartment_door_single_tile.png` or `apartment_door_double_tile.png`
- `apartment_drain_top_tile.png`, `apartment_drain_middle_tile.png` and `apartment_drain_ground_tile.png`

Keep the **UV Editing** tab open for the whole lesson, so you can watch the UVs change.

This lesson has no heavy settings.

```brief
Part 1 · Make the cube bigger
1 · Scale 3 | UV Editing tab · Edit Mode · Select All | Scale 3 → 6 m wide
Part 2 · Nine squares a side
2 · Loop cuts | Edge → Loop Cut and Slide | Number of Cuts 2 · three directions
Part 3 · Window material
3 · Walls | New → Walls · Image Texture | window tile · one big stretched window
Part 4 · Reset the UVs
4 · Reset | Select All · UV → Reset | one window per square
Part 5 · Fix sideways windows
5 · Turn | Face Select · Sync Selection off | UV → Transform → Rotate 90 (or −90)
Part 6 · Roofline, ground, door
6A · Roofline | top row · + → New → Assign | roofline tile
6B · Ground | bottom row, not door square | ground tile
6C · Door | bottom middle, front | door tile
Part 7 · Roof
7A · Inset | top faces · Inset Faces | ledge
7B · Roof colour | + → New → Roof | Hex 424248
Part 8 · Drain pipe
8 · Drain | right column, no door | Top · Middle · Ground tiles
Part 9 · Export to Unreal
9A · Blender | Apply → All Transforms | FBX · Copy + Embed · FBX Units Scale
9B · Unreal | Content Drawer · Apartment folder | import · drag into level
```

## Part 1 · Make the cube bigger

| Scale (Edit Mode) | Value |
| --- | --- |
| X, Y and Z together | 3 |

1. Start a new **General** file and click the default cube.
2. Click the **UV Editing** tab at the top of Blender. The **UV Editor** opens on the left and the 3D viewport on the right. Check the 3D viewport says **Edit Mode** at the top left. If it doesn't, choose **Edit Mode** from the mode menu. (Shortcut: Tab)
3. Hover over the 3D viewport and choose **Select → All**. (Shortcut: A)
4. Choose **Mesh → Transform → Scale**, type **3** and press **Enter**. The cube grows to 3 times its size in every direction. (Shortcut: S, 3, Enter)

The default cube is 2 m wide, so it is now **6 m** wide. You check that in Unreal in Part 9.

- [ ] The cube is 3 times bigger

## Part 2 · Divide each side into 9 squares

| Loop Cut and Slide (operator panel) | Value |
| --- | --- |
| Number of Cuts | 2 |
| Factor | 0 (evenly spaced) |

You need 2 cuts going around the building, and 2 cuts going in each of the other two directions.

1. Choose **Edge → Loop Cut and Slide** and hover over a vertical edge until a yellow loop appears around the building. (Shortcut: Ctrl+R)
2. Click once, then right-click once. The right-click keeps the cut in the middle.
3. Open the operator panel in the bottom-left corner and set **Number of Cuts** to **2**. Two evenly spaced lines now run around the building.
4. Repeat with a top edge, so the loop runs up and over the building.
5. Repeat with a top edge on the side next to it, so the loop runs the other way.

Each side is now a 3 × 3 grid of squares.

> **Pick the right one:** use **Edge → Loop Cut and Slide** (or Ctrl+R), not the **Loop Cut** icon in the toolbar. The icon works differently: you click and drag it, and set the number of cuts in the bar at the top.

- [ ] Every side of the cube is a 3 × 3 grid of equal squares

## Part 3 · Add the window material

| Material Properties → Surface | Value |
| --- | --- |
| Name | Walls |
| Base Color | **Image Texture** → `apartment_window_tile.png` |

1. Open **Material Properties** (red-and-white sphere at the bottom of the tab icons).
2. Click **New** and rename the material **Walls**.
3. Under **Surface**, click the small yellow dot to the left of **Base Color** and choose **Image Texture**.
4. Click **Open** and choose `apartment_window_tile.png`.
5. Hover over the 3D viewport and click the **Material Preview** shading button. (Shortcut: Z → Material Preview)

Look closely: one big window is stretched across all 9 squares on each side. That's because the UVs still use the cube's starting layout, the cross shape in the UV Editor. Part 4 fixes it.

- [ ] One big stretched window shows on each side

## Part 4 · Reset the UVs

1. Hover over the 3D viewport and choose **Select → All**. The whole cube is orange. Reset only changes the faces that are selected.
2. Choose **UV → Reset**. (Shortcut: U → Reset)

Every square now shows one complete window. In the UV Editor, you see one square filling the picture instead of a cross.

The UV Editor may look all orange. That's because Reset stacks every face on the same square, right on top of each other. Scroll in and out over the UV Editor to see the single square.

- [ ] Every square shows one full window

## Part 5 · Fix sideways windows

| UV Editor | Value |
| --- | --- |
| Sync Selection (two-arrow icon, top left) | **off** |
| UV → Transform → Rotate | 90 (or −90 if it comes out upside down) |

Reset can turn the picture a different way on some faces.

1. Click **Face Select** in the 3D viewport header. (Shortcut: 3)
2. Click a face with a sideways window, then hold **Shift** and click any others turned the same way.
3. In the UV Editor, turn off the two-arrow **Sync Selection** icon at the top left. Now only the faces you picked show there.
4. Hover over the UV Editor, choose **Select → All**, then **UV → Transform → Rotate**, type **90** and press **Enter**. The windows turn upright. (Shortcut: A, then R, 90, Enter)
5. If the window is now upside down, choose **Edit → Undo**, then rotate by **−90** instead. (Shortcut: Ctrl+Z)

While you are still rotating, a right-click cancels it. After you press **Enter**, use **Undo** instead.

**Your choice:** you can fix every square now, or only the middle row. Changing a square's material later swaps the picture, but the square keeps its rotation. If you skip the top and bottom rows, their new tiles in Parts 6 to 8 come in sideways, and you need to turn each one the same way.

- [ ] Every window you fixed stands upright

## Part 6 · Roofline, ground and door

Each new tile gets its own material slot. The steps are the same each time:

1. In **Face Select**, click the squares from the table. Hold **Shift** to add to the selection.
2. In **Material Properties**, click **+** beside the material list, then **New**, and rename it.
3. Click **Assign**. The squares turn plain white or grey.
4. Click the yellow dot beside **Base Color**, choose **Image Texture**, click **Open**, and choose the image. The tile appears on those squares.

| Section | Squares | Material name | Image |
| --- | --- | --- | --- |
| **6A** | Top row on all four sides | Roofline | `apartment_roofline_tile.png` |
| **6B** | Bottom row on all four sides, **except** the bottom middle square of the front | Ground | `apartment_ground_tile.png` |
| **6C** | Bottom middle square of the front only | Doorway | a door image |

> **Pick the right one:** click **+** before **New**. If you click **New** without adding a slot, you replace Walls and every window changes.

If rotating one square also twists the square next to it, turn off **Sync Selection**. When it's on, Blender also grabs the corners the square shares with its neighbours. When it's off, the UV Editor shows only the square you selected, so you can select it there and turn just that one.

- [ ] A roofline runs across the top row
- [ ] A ground strip runs across the bottom row, with a door in the front middle

## Part 7 · The roof

### 7A · Inset the roof

An inset adds a border around the top of the building, so the roof sits inside a ledge.

1. In **Face Select**, click every square on the top face. Hold **Shift** to add each one.
2. Choose **Face → Inset Faces**, move the mouse to size the border, then click. A ledge appears around the edge of the roof. (Shortcut: I)
3. Keep these inner faces selected for 7B.

To push the roof down a little, choose **Mesh → Transform → Move**, press **Z**, move the mouse down, and click. (Shortcut: G, Z)

### 7B · Give the roof its own colour

| Material Properties → Surface | Value |
| --- | --- |
| Name | Roof |
| Base Color → Hex | 424248 (shingle grey) or 2E2E32 (darker) |

The top of the building has windows on it right now, because Reset put the picture there too.

1. Check the inner roof faces from 7A are still selected.
2. Click **+**, then **New**, and rename it **Roof**. Click **Assign**.
3. Click the white bar beside **Base Color**, click **Hex**, and type **424248**. The roof turns grey. This is the shingle grey from the roofline tile.

You can do the same with the bottom face, or leave it, since nobody sees it.

- [ ] The roof is grey and sits inside a ledge

## Part 8 · Add the drain pipe

| Square | Material name | Image |
| --- | --- | --- |
| Top | Drain Top | `apartment_drain_top_tile.png` |
| Middle | Drain Middle | `apartment_drain_middle_tile.png` |
| Bottom | Drain Ground | `apartment_drain_ground_tile.png` |

The drain uses three tiles stacked in one column, with the pipe near the right edge of each square. Use the right-hand column on a side without the door.

1. In **Face Select**, click the top square in the column. Only that square is orange.
2. Click **+**, then **New**, and use the material name from the table. Click **Assign**.
3. Set **Base Color** to an **Image Texture** and open that square's image.
4. Repeat for the middle square, then the bottom square.

The pipe should run in one straight line from the roof to the grass. If a piece is out of line, its square is turned differently. Select that square and turn it in the UV Editor, as in Part 5.

- [ ] The drain pipe runs in one straight line from the roof to the ground

## Part 9 · Export to Unreal Engine

You export the building as an FBX file so the mesh, materials and textures come into Unreal together.

### 9A · In Blender

| File → Export → FBX (right side) | Value |
| --- | --- |
| **Path Mode** | Copy, with **Embed Textures** on (the small box icon beside it) |
| **Limit to** | Selected Objects |
| **Transform → Apply Scalings** | FBX Units Scale |
| **Geometry → Smoothing** | Face |
| File name | `apartment_building.fbx` |

1. Save your `.blend` file. (Shortcut: Ctrl+S)
2. Return to **Object Mode** and click the building to select it. (Shortcut: Tab)
3. Choose **Object → Apply → All Transforms**. (Shortcut: Ctrl+A → All Transforms)
4. Choose **File → Export → FBX (.fbx)** and set the options from the table.
5. Type the file name and click **Export FBX**.

**What changed:** the building doesn't move. In the N panel (View → Sidebar → Item), **Rotation** reads 0 and **Scale** reads 1, while **Dimensions** still read 6 m. Unreal now gets the size you see.

### 9B · In Unreal Engine

1. Open the **Content Drawer** and make a new folder called **Apartment**.
2. Drag the `.fbx` file into that folder.
3. In the import window, check the options to import materials and textures are on, then click **Import**. This window varies a little between Unreal versions.
4. Drag the new mesh from the Content Drawer into your level.

| What to check | What to do |
| --- | --- |
| **Height** | The building's origin is at its centre, so the bottom half may sit below the floor. Raise it in Unreal, or in Blender choose Object → Set Origin before you export. |
| **Size** | It should be about **600 cm** wide in Unreal. |
| **Collision** | If a player can walk through the walls, double-click the mesh, choose **Collision → Add Box Simplified Collision**, and click **Save**. A box blocks the entrance, so the door is only a picture on the wall. |
| **Missing textures** | If a wall comes in plain white or grey, drag that PNG into the Content Drawer, then connect it to **Base Color** in that material. This step uses Unreal's material editor. |

- [ ] The building stands in your Unreal level with all its tiles showing
- [ ] It is about 600 cm wide

## Troubleshooting

| Problem | Fix |
| --- | --- |
| The cube looks plain | Switch to Material Preview. |
| The cube is pink | Blender can't find the image. Click Open again and choose the file. |
| A whole side changed material | Too many faces were selected when you clicked Assign. Select the right faces, click the correct material slot, and click Assign again. |
| The windows look stretched | The squares aren't square. Check each set of loop cuts has 2 evenly spaced lines. |
| A square looks split or folded along a diagonal | Its UV corners got twisted, usually from rotating with Sync Selection on. Select just that square, choose UV → Reset, turn off Sync Selection, and rotate it again in the UV Editor. |
| Rotate in the UV Editor does nothing | With Sync Selection off, the square shows in the UV Editor but isn't selected there yet. Choose Select → All in the UV Editor first. |

**Another way: repeat the picture without cuts.** If you skip the loop cuts, each side is one big face showing one big window. To get 3 windows across and 3 up, select everything, hover over the UV Editor, and choose **UV → Transform → Scale**, type **3**, press **Enter**. Making the UVs 3 times bigger repeats the picture 3 times across each face. It's a good way to see how UVs work, but you can't put a door or roofline on just one square this way.
