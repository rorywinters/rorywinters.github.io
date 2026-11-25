---
title: Camera Moves 4: Lighting for a Moving Camera
program: Blender
blurb: Lesson 4 of 5. Check the lighting from every part of your fly-through, then fix the dark spots with a free Poly Haven HDRI, a big soft fill light and a corner light. About 10 minutes.
---
A still picture only has to look good from one spot. A moving camera sees the room from many spots, so a corner that looked fine at the start can be dark by the end. In this lesson you check the lighting along the whole fly-through and fix it. These steps are for Blender 5.2.

The lights belong to the room, not the camera. When the camera moves, it sees the same lights from new angles. Lights never show up in the video themselves, only the light they give, so you can put them wherever they help.

- **Learning objective:** We are learning to light a scene so it looks good from every point on a camera move.
- **Prior knowledge:** [Camera Moves 3: Fly-Through on a Path](../camera-3-fly-through/) and your `camera3_yourname.blend` file from it
- **File you need:** one free HDRI from [Poly Haven's indoor HDRIs](https://polyhaven.com/hdris/indoor) (you download it in Part 2)
- **Time:** about 10 minutes

### Success criteria

- I can preview real lighting in the viewport with Rendered shading.
- I can check the lighting at several frames of a camera move.
- I can light the whole room with an HDRI.
- I can add an area light and a point light to fix dark spots.

### Key vocabulary

| Word | Meaning |
| --- | --- |
| **Rendered shading** | A viewport mode that shows the real lights and materials, close to the final video. |
| **Scrub** | Drag the playhead through the Timeline by hand to check different frames. |
| **World** | Everything around the scene: the background and the light that comes from it. |
| **HDRI** | A 360° photo that also stores how bright the light was. Used as the World, it lights the scene like the real place did. |
| **Fill light** | A big, soft light that lifts the shadows so nothing is black. |
| **Area light** | A flat panel of light. Bigger panels give softer shadows. |
| **Point light** | A light that shines in every direction from one spot, like a bare bulb. |

**The camera series:** [1 Push-in](../camera-1-push-in/) · [2 Smooth moves and orbits](../camera-2-smooth-orbit/) · [3 Fly-through on a path](../camera-3-fly-through/) · 4 Lighting for a moving camera (this lesson) · [5 Cinematic polish](../camera-5-cinematic/)

| Colour | Meaning |
| --- | --- |
| Green | Safe to change. No real effect on playback or render time. |
| Amber | Raises the load a little. Fine at the values given. |
| Red | Use with caution. Big effect on speed or memory. |

This lesson's amber and red settings:

- **Rendered shading** is amber. Scrub frame by frame in it; don't press Play, because playback gets choppy. Switch back to Solid shading before you play.
- **HDRI size** is amber at 1K and red at 4K or more. Download the **1K** file.
- **Raytracing**, **Resolution %** and **Output Quality** are amber.

### Where things are

| Thing | Where on the screen |
| --- | --- |
| **Viewport Shading** buttons | Top-right of the 3D Viewport header: four small spheres. The fourth one is **Rendered**. |
| **World Properties** | Properties editor, the red globe icon |
| **Object Data Properties** for a light | Properties editor, the green light-bulb icon. Only shows while a light is selected. |
| **Render Properties**, **Output Properties**, **N panel**, **Outliner** | Same places as in Lesson 1 |

```brief
Part 1 · Find the dark spots
1A · Open | camera3_yourname.blend | Save As camera4_yourname
1B · Rendered view | Camera view · Viewport Shading → Rendered (amber) | Scrub frames 1 · 80 · 160 · 240
Part 2 · Light the room with an HDRI
2A · Download | [polyhaven.com/hdris/indoor](https://polyhaven.com/hdris/indoor) | 1K · HDR (not 4K, red)
2B · World | World Properties → Color dot → Environment Texture | Open the .hdr · Strength 0.8
Part 3 · Add lights where it's dark
3A · Fill Light | Add → Light → Area · Location 0 · −3 · 2.9 · Rot X 30° | Power 200 W · Size 3 m
3B · Corner Light | Add → Light → Point · Location −3 · −2.4 · 2.2 | Power 80 W
Part 4 · Check and render
4A · Raytracing | Render Properties → Raytracing on (amber) | Scrub 1 · 80 · 160 · 240 again
4B · MP4 | Solid shading to play · End 240 · 50% (amber) | Path //camera4_lit_v1_ · Ctrl+F12
Extra · Finished early? (optional)
Warm lamp | Desk Lamp Light Power 40 → 100 W | Colour stays warm
```

## Part 1 · Find the dark spots

### 1A · Open your Lesson 3 file

1. Choose **File → Open** and open `camera3_yourname.blend`.
2. Choose **File → Save As** and name it `camera4_yourname.blend`.

### 1B · Look through the camera with real lighting

| What to check | Frame 1 | Frame 80 | Frame 160 | Frame 240 |
| --- | --- | --- | --- | --- |
| Is anything nearly black? |  |  |  |  |
| Can you see the walls clearly? |  |  |  |  |

1. Look through the camera: **View → Cameras → Active Camera**. (Shortcut: Numpad 0)
2. Click the fourth sphere in the **Viewport Shading** buttons (top-right of the viewport) to switch to **Rendered**. The room now shows the real lights: a pool of light under the ceiling light and dark edges.
3. In the Timeline, type **1** in the current frame box. Look at the room.
4. Do the same at frames **80**, **160** and **240**. Watch the front-left corner by the plant, the front of the furniture and the walls.

Most rooms built this way have the same problem: the ceiling light lights the middle, and everything near the walls and the open front fades to dark. As the camera moves, those dark areas slide in and out of the shot.

- [ ] The viewport is in Rendered shading
- [ ] You've looked at frames 1, 80, 160 and 240 and found the dark spots

## Part 2 · Light the room with an HDRI

### 2A · Download an HDRI

| Poly Haven download | Value |
| --- | --- |
| Category | Indoor |
| Size (amber at 1K, red at 4K+) | **1K** |
| Format | HDR |

1. Go to [Poly Haven's indoor HDRIs](https://polyhaven.com/hdris/indoor) and click any HDRI you like.
2. On its page, set the size dropdown to **1K** and the format to **HDR**, then click **Download**.
3. Save the `.hdr` file in the same folder as `camera4_yourname.blend`.

Poly Haven files are free to use for anything, with no sign-up.

### 2B · Use it as the World

| World Properties → Surface | Field | Value |
| --- | --- | --- |
| **Surface** | Color | Environment Texture → your .hdr |
|  | Strength | 0.8 |

1. Open **World Properties** (the red globe icon).
2. In the **Surface** panel, click the small dot to the left of **Color**. A menu of node types opens.
3. Choose **Environment Texture**. An **Open** button appears under Color.
4. Click **Open**, pick your `.hdr` file and click **Open Image**. The whole room brightens with soft light from every side, and the photo appears behind the walls.
5. Set **Strength** to **0.8**.

> **Pick the right one:** choose **Environment Texture**, not **Image Texture**. Image Texture wraps the picture the wrong way and the room stays dark.

- [ ] The room is lit softly from all sides in Rendered shading
- [ ] The HDRI photo shows above and around the walls

## Part 3 · Add lights where it's dark

### 3A · A big soft fill light

| Fill Light | Setting | Value |
| --- | --- | --- |
| **N panel → Location** | X | 0 m |
|  | Y | −3 m |
|  | Z | 2.9 m |
| **N panel → Rotation** | X | 30° |
|  | Y | 0° |
|  | Z | 0° |
| **Object Data Properties** | Type | Area |
|  | Power | 200 W |
|  | Shape | Square |
|  | Size | 3 m |

1. Go to frame **1**. Choose **Add → Light → Area**. A square light appears in the middle of the floor.
2. In the Outliner, double-click its name and rename it **Fill Light**.
3. In the N panel, type the Location and Rotation from the table. The light moves up near the top of the walls at the front, tilted to shine toward the back of the room.
4. Open the light's **Object Data Properties** (green light-bulb icon). Set **Power** to **200 W** and **Size** to **3 m**. The front of the furniture and the walls lift out of the dark.

A big area light acts like a window: soft light with gentle shadows. Small lights give hard, sharp shadows.

### 3B · A light for the dark corner

| Corner Light | Setting | Value |
| --- | --- | --- |
| **N panel → Location** | X | −3 m |
|  | Y | −2.4 m |
|  | Z | 2.2 m |
| **Object Data Properties** | Type | Point |
|  | Power | 80 W |

1. Choose **Add → Light → Point** and rename it **Corner Light**.
2. Type its Location from the table. It sits above and in front of the plant.
3. Set **Power** to **80 W**. The plant and the front-left corner brighten.

- [ ] Fill Light and Corner Light are in the Outliner
- [ ] The plant corner is no longer dark in Rendered shading

## Part 4 · Check and render

### 4A · Better light bounce

| Render Properties | Field | Value |
| --- | --- | --- |
| **Raytracing** (amber) | ticked | on |

1. Open **Render Properties** and tick **Raytracing**. Light now bounces off the floor and walls, and the globe picks up reflections.
2. Scrub to frames **1**, **80**, **160** and **240** again and compare with your notes from Part 1. Every frame should show the whole room clearly, with no black corners.
3. If one spot is still dark, raise **Fill Light** or **Corner Light** power in steps of 50 W. If the room looks washed out, lower the World **Strength** to 0.5.

### 4B · Render

| Where | Field | Value |
| --- | --- | --- |
| **Output → Format** | % (amber) | 50% for tests, 100% for the final |
| **Output → Frame Range** | End | 240 |
| **Output → Output** | Path | `//camera4_lit_v1_` (or the folder icon + `camera4_lit_v1_`) |

Media Type, Container and Output Quality are still set from Lesson 3.

1. Click the second sphere in **Viewport Shading** to go back to **Solid**, so playback is smooth.
2. Set the path, click in the box to check it, and press **Esc**.
3. Choose **Render → Render Animation**. (Shortcut: Ctrl+F12) Each frame takes a little longer than before because of the extra lights and Raytracing.
4. Open the folder and play `camera4_lit_v1_0001-0240.mp4`. Compare it with `camera3_flythrough_v1_0001-0240.mp4`.

- [ ] Raytracing is ticked
- [ ] Your MP4 shows the whole room lit clearly from start to finish

## Extra · Finished early?

Optional. Render it as `camera4_lit_v2`.

**Warm lamp:** select **Desk Lamp Light** and raise its **Power** from 40 W to **100 W**. The desk corner gets a warm glow, and the room looks like evening. Try lowering the World **Strength** to **0.3** to make the lamp stand out more.

## Troubleshooting

| Problem | Fix |
| --- | --- |
| The viewport is still grey with no shadows | You're in Solid shading. Click the fourth Viewport Shading sphere (Rendered). |
| Playback is choppy | Switch to Solid shading to play. Use Rendered only to check still frames. |
| The room turned pink | Blender lost the HDRI file. In World Properties, click **Open** and pick the .hdr again. Keep it in the same folder as your .blend. |
| The HDRI made no difference | Check you chose **Environment Texture** and that Strength isn't 0. |
| The fill light lights the floor only | Check its **Rotation X** is **30°**. At 0° it points straight down. |
| Everything is too bright and flat | Lower World **Strength** and the light **Power** values a little at a time. |
| A bright square shows on the globe | That's the Fill Light's reflection in the shiny globe. It's normal. Lights themselves never show in the video. |
| Rendering is very slow | Untick **Raytracing** while testing and use **50%** resolution. Turn them back on for the final. |
