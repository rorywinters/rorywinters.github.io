---
title: Rolling Hills Grass Scene
program: Unreal Engine
lesson: 1
blurb: Sculpt a landscape of rolling hills in Unreal, model a clump of grass in Blender, and let Unreal spread thousands of grass clumps over the hills automatically.
---
You sculpt a landscape of rolling hills and cover it with 3D grass that appears automatically. You model the grass yourself in Blender, so you don't need any downloaded content. In the Blender section this is Lesson 15.

**You need:** Unreal Engine 5, Blender, and your own project folder. Work through the parts in order and save (Ctrl+S) at the end of each part.

| Where things are in Unreal | Location on screen |
| --- | --- |
| **Modes** drop-down (Select, Landscape) | Main toolbar, top left |
| **Landscape** tool tabs (Manage, Sculpt) and brush settings | Left side panel, once Landscape mode is on |
| **Details** panel | Right side of the window |
| **Outliner** | Top-right panel |
| **Content Drawer** | Bottom-left corner button |
| **Play** (green ▶) | Main toolbar, top middle |

| Colour | Meaning |
| --- | --- |
| Green | Safe to change. No real effect on speed. |
| Amber | Raises the load a little. Fine at the values given. |
| Red | Use with caution. Big effect on speed or memory. |

The red setting is **Grass Density** in Part 4. Use **50** while you work if the editor slows down, and 100 for the final look.

```brief
Part 1 · Set up the project
1 · Project | Games → Third Person · Blueprint · GrassHills | New Level → Basic · delete Floor · Hills_Level
Part 2 · Sculpt the hills
2A · Landscape | Modes → Landscape · Manage → Create
2B · Sculpt | Brush 8192 · Strength 0.29 | Shift-drag lowers
2C · Smooth | Brush 2048 · Strength 0.29
Part 3 · Grass in Blender
3A · One blade | Plane · stand up · 0.02 wide · 0.18 tall | 3 loop cuts · pointed, bent tip
3B · Clump | 5 copies · Rotate Z 72 · Join | Apply All Transforms
3C · Export | FBX · Selected Objects | SM_Grass.fbx → Unreal Import
3D · Material | M_GrassBlade · Two Sided | green → Base Color
Part 4 · Spread the grass
4A · Grass type | GT_Grass · SM_Grass | Density 100 (red, work 50) · Cull 3000–6000
4B · Ground material | M_Ground dark green | Landscape Grass Output ← Constant 1
4C · Apply | Select mode · landscape | Landscape Material M_Ground
Part 5 · Test
5 · Walk | PlayerStart over a hill · End | Play · WASD
```

## Part 1 · Set up the project

The **Third Person** template gives you a character, so you can walk on your hills later.

| Project Browser | Value |
| --- | --- |
| **Category** | Games |
| **Template** | Third Person |
| **Project Defaults** | Blueprint |
| **Project Location** | your own folder |
| **Project Name** | GrassHills |

1. Open Unreal Engine and choose **Games → Third Person**.
2. Select **Blueprint**, not C++.
3. Set the location to your own folder and name the project **GrassHills**. Click **Create**.
4. Choose **File → New Level → Basic**. A plain level with a floor opens.
5. Click the **Floor** in the viewport and press **Delete**. The floor disappears.
6. Choose **File → Save Current Level As** and name the level **Hills_Level**. The level tab now reads Hills_Level.

- [ ] The level tab reads Hills_Level and there's no floor

## Part 2 · Sculpt the rolling hills

Use a large brush and low strength. Rolling hills have long, gentle slopes with no sharp peaks.

### 2A · Create the landscape

1. Open the **Modes** drop-down (main toolbar, top left) and select **Landscape**. The landscape tools open in the left side panel.
2. On the **Manage** tab (left side panel), leave the default settings and click **Create**. A large flat grid appears.

### 2B · Sculpt the hills

| Sculpt tool (left side panel) | Value |
| --- | --- |
| **Brush Size** | 8192 |
| **Tool Strength** | 0.29 |

1. Click the **Sculpt** tab, then select the **Sculpt** tool (left side panel).
2. Type the **Brush Size** and **Tool Strength**.
3. Click and drag on the landscape to raise wide hills. Use short strokes and leave low ground between them.
4. Hold **Shift** while dragging to lower an area and make a valley.

### 2C · Smooth the hills

| Smooth tool (left side panel) | Value |
| --- | --- |
| **Brush Size** | 2048 |
| **Tool Strength** | 0.29 |

1. Select the **Smooth** tool and type the values.
2. Drag over bumps and sharp edges until the hills flow into each other. Stop before they turn flat.

Undo a stroke with **Ctrl+Z**. Save with **Ctrl+S** when you're happy with the shape.

- [ ] Wide, gentle hills with low valleys between them
- [ ] No sharp peaks or spikes

## Part 3 · Model the grass in Blender

You make one small clump of 5 blades. Unreal copies it thousands of times, so keep it simple.

### 3A · Make one blade

| Edit Mode transform (operator panel, bottom left) | Axis | Value |
| --- | --- | --- |
| **Rotate** | X | 90° |
| **Scale** | X | 0.02 |
| **Scale** | Z | 0.18 |
| **Move** | Z | 0.18 m |

| Loop Cut and Slide (operator panel) | Value |
| --- | --- |
| **Number of Cuts** | 3 |

1. Open a new **General** file in Blender and delete the default cube (**Object → Delete**).
2. Choose **Add → Mesh → Plane**.
3. Choose **Edit Mode** from the mode menu (top-left of the 3D viewport). All of the plane is selected. (Shortcut: Tab)
4. Use **Mesh → Transform → Rotate**, **Scale** and **Move** with the values from the table, one at a time, pressing the axis letter and typing the number. The plane stands up as a thin strip with its bottom edge on the ground. (Shortcut: R X 90, S X 0.02, S Z 0.18, G Z 0.18)
5. Choose **Edge → Loop Cut and Slide** and hover over a long side so the cut runs across the blade. Click, right-click, and set **Number of Cuts** to **3** in the operator panel. (Shortcut: Ctrl+R)
6. Click **Edge Select** in the header and click the top edge. Choose **Mesh → Merge → At Center**. The top becomes a point. (Shortcut: 2, then M)
7. Click **Vertex Select**, click the tip, choose **Mesh → Transform → Move**, press **Y**, type **0.1** and press Enter. The tip bends.
8. Select the 2 vertices just below the tip and move them **Y 0.04** the same way. The blade curves gently.
9. Return to **Object Mode**.

### 3B · Make the clump

| Each copy (Object Mode) | Value |
| --- | --- |
| **Rotate Z** | 72° |
| **Move X** | 0.03 m |

1. Choose **Object → Duplicate Objects**, then right-click so the copy stays in place. (Shortcut: Shift+D)
2. Rotate it **Z 72** and move it **X 0.03**. (Shortcut: R Z 72, G X 0.03)
3. Repeat until you have **5** blades.
4. Choose **Select → All**, then **Object → Join**. The 5 blades become one object. (Shortcut: A, then Ctrl+J)
5. Choose **Object → Apply → All Transforms**. (Shortcut: Ctrl+A)

**What changed:** the clump doesn't move, but the N panel (View → Sidebar → Item) now reads Rotation 0 and Scale 1. Unreal gets the size you see.

### 3C · Export and import

| File → Export → FBX | Value |
| --- | --- |
| **Limit to** | Selected Objects |
| **File name** | SM_Grass.fbx |

1. Choose **File → Export → FBX**. Tick **Selected Objects**, name the file **SM_Grass.fbx**, and click **Export FBX**.
2. In Unreal, open the **Content Drawer** (bottom-left corner) and click **Import**. Choose **SM_Grass.fbx** and accept the default settings.
3. Drag **SM_Grass** into the level beside the character to check its size. It should look like a small clump. Then delete this copy from the level.

### 3D · The grass material

| M_GrassBlade (Details, left side of the material editor) | Value |
| --- | --- |
| **Two Sided** | ticked |
| **Base Color** | ← Constant3Vector, medium green |

1. Right-click in the **Content Drawer** and choose **Material**. Name it **M_GrassBlade**.
2. Open it. In the **Details** panel (left side of the material editor), tick **Two Sided**.
3. Hold **3** and click the graph to add a colour node. Choose a medium green and connect it to **Base Color**.
4. Click **Save**.
5. Open **SM_Grass**, set its material to **M_GrassBlade**, and save.

- [ ] SM_Grass is a small clump of 5 curved blades
- [ ] SM_Grass shows green on both sides

## Part 4 · Spread grass across the landscape

A **Landscape Grass Type** tells Unreal which mesh to use. The landscape material tells Unreal where to place it.

### 4A · Create the grass type

| GT_Grass → Grass Varieties → 0 | Value |
| --- | --- |
| **Grass Mesh** | SM_Grass |
| **Grass Density** (red) | 100 (50 while working) |
| **Start Cull Distance** | 3000 |
| **End Cull Distance** | 6000 |
| **Use Grid** | On |
| **Random Rotation** | On |
| **Align to Surface** | On |

1. Right-click in the **Content Drawer** and choose **Foliage → Landscape Grass Type**. Name it **GT_Grass**.
2. Open it and click the **+** beside **Grass Varieties**. Open the new entry with its **▶** arrow.
3. Set the values from the table, then save.

### 4B · Create the ground material

| M_Ground | Value |
| --- | --- |
| **Base Color** | ← Constant3Vector, dark green |
| **Landscape Grass Output → Grass Type** | GT_Grass |
| **Landscape Grass Output input** | ← Constant **1** |

1. Create a new material named **M_Ground** and open it.
2. Hold **3** and click the graph. Choose a dark green and connect it to **Base Color**.
3. Right-click the graph, search for **Landscape Grass Output**, and add the node.
4. Click that node. In the **Details** panel (left side), set its **Grass Type** to **GT_Grass**.
5. Hold **1** and click the graph to add a **Constant** node. Set its value to **1**.
6. Connect the Constant to the input on **Landscape Grass Output**. This places grass everywhere. Click **Save**.

> **Pick the right one:** **Landscape Grass Output**, not **Landscape Layer Blend** or **Landscape Layer Sample**. It has a **Grass Type** setting in its Details.

### 4C · Apply the material

1. Change the **Modes** drop-down (top left) back to **Select**.
2. Click the landscape. In the **Details** panel (right side), find **Landscape Material**.
3. Set it to **M_Ground**. The grass may take a moment to appear while Unreal compiles shaders.

- [ ] The hills turn dark green
- [ ] Grass clumps cover the hills near the camera

## Part 5 · Test your scene

1. Find **PlayerStart** in the **Outliner** (top-right panel) and click it.
2. Move it above a hill, then press **End** to drop it onto the ground.
3. Click **Play** (green ▶, top middle).
4. Walk over the hills with **W**, **A**, **S** and **D**. Press **Esc** to stop.
5. Adjust the scene if needed, then save. (Shortcut: Ctrl+S)

- [ ] The character walks over grassy hills

## Troubleshooting

| Problem | Fix |
| --- | --- |
| No grass appears | Wait for shaders to finish compiling. Then check M_Ground has GT_Grass selected and the Constant is connected. |
| Grass is black or disappears from one side | Tick Two Sided in M_GrassBlade. |
| Grass is far too large or small | Check the size in Blender, export again, and reimport SM_Grass. |
| Editor runs slowly | Lower Grass Density in GT_Grass to 50. |
| Grass looks thin | Raise Grass Density in small steps. |
| Player falls through the ground | Move PlayerStart above the landscape and press End again. |

Sources: [Landscape Quick Start Guide](https://dev.epicgames.com/documentation/en-us/unreal-engine/landscape-quick-start-guide-in-unreal-engine) · [Grass Quick Start](https://dev.epicgames.com/documentation/en-us/unreal-engine/grass-quick-start-in-unreal-engine)
