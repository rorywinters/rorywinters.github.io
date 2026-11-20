---
title: A Window Texture on Every Side of a Cube
program: Blender
lesson: 7
blurb: A short first look at UVs: put one window picture on every side of a cube with no nodes, then reset the UVs so each side shows the whole window.
---
You wrap a cube with a picture so one full window shows on each side. There are no nodes in this lesson. It's the first step for the Apartment Cube in Lesson 8.

**You need:** `apartment_window_tile.png`, shared by your teacher in Google Classroom.

**The big idea:** in the UV Editor, the picture covers one square. Whatever part of that square a face covers is what shows on the face. **UV → Reset** makes every face cover the whole square, so every face shows the whole picture.

This lesson has no heavy settings.

```brief
Part 1 · Add the picture
1A · Material | Material tab · New
1B · Image | Base Color dot → Image Texture | Open apartment_window_tile.png
1C · See it | Material Preview | stretched across the cube
Part 2 · Reset the UVs
2A · Select all | UV Editing tab · Edit Mode · Select → All
2B · Reset | UV → Reset | one full window per side
```

## Part 1 · Add the picture

You put the picture on first, so you can see what the UVs do to it in Part 2.

### 1A · Material

1. Start a new **General** file and click the cube.
2. On the far right, click the bottom tab icon in the **Properties** editor, the red-and-white sphere. This is **Material Properties**.
3. If you see a **New** button, click it. A material called **Material** appears.

### 1B · The image

| Material Properties → Surface | Value |
| --- | --- |
| Base Color | **Image Texture** → `apartment_window_tile.png` |

1. Under **Surface**, find **Base Color**. It has a white bar beside it.
2. Click the small yellow dot to the left of the white bar. Don't click the white bar itself.
3. Choose **Image Texture** from the menu.
4. Click **Open** and choose `apartment_window_tile.png`.

> **Pick the right one:** click the **yellow dot**, not the white bar. The white bar opens a colour picker, and the dot opens the list with **Image Texture**.

### 1C · See it

1. Hover over the 3D viewport and click the third shading button, **Material Preview**, at the top right. (Shortcut: Z → Material Preview)

Look at each side. The window may be cut off or stretched on some faces, because the cube's starting UVs give each face only part of the picture.

- [ ] The window picture shows on the cube in Material Preview

## Part 2 · Reset the UVs

### 2A · Select the whole cube

1. Click the **UV Editing** tab at the top of Blender. The **UV Editor** opens on the left and the 3D viewport on the right, in **Edit Mode**.
2. Hover over the 3D viewport and choose **Select → All**. The whole cube turns orange. In the UV Editor you see a cross shape: the cube's six faces laid flat. (Shortcut: A)

### 2B · Reset

1. In the 3D viewport, choose **UV → Reset**. (Shortcut: U → Reset)

Every side now shows one complete window. In the UV Editor, the cross shape is gone: all six faces sit on top of each other in one square that fills the picture.

- [ ] One full window shows on every side of the cube
- [ ] The UV Editor shows one square instead of a cross

## Troubleshooting

| Problem | Fix |
| --- | --- |
| The cube still looks plain grey | You're in Solid view. Switch to Material Preview. |
| The cube is pink | Blender can't find the image file. Go back to 1B and use Open to choose the image again. |
| Only part of the window shows on a face | The UVs weren't reset. Repeat Part 2, and check the whole cube is selected before UV → Reset. |
| A window is sideways | Reset can turn the picture on some faces. Lesson 8, Part 5 shows how to turn it. |
