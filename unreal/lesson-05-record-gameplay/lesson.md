---
title: Recording Gameplay and Rendering to MP4
program: Unreal Engine
lesson: 5
blurb: Record yourself playing with Take Recorder, check the take, and render it to a clean 1080p MP4 with Movie Render Queue for Google Classroom.
---
You record yourself playing your game with **Take Recorder**, then render the recording to a clean **1080p MP4** with **Movie Render Queue**. This gives a smoother video than a screen capture.

**You need:** any project you can play, such as a Third Person project or your robot.

| Where things are in Unreal | Location on screen |
| --- | --- |
| **Edit** and **Window** menus | Menu bar, top left |
| **Content Drawer** | Bottom-left corner button |
| **Play** (green ▶) | Main toolbar, top middle |
| **Take Recorder** and **Movie Render Queue** | Open as their own tabs (Window → Cinematics) |

| Colour | Meaning |
| --- | --- |
| Green | Safe to change. |
| Amber | Adds some load. Fine at the value given. |
| Red | Use with caution. |

**Rendering** is amber: a 1080p render of a short take is fine on the lab computers, but keep takes under about a minute.

```brief
Part 1 · Turn on the plugins
1 · Plugins | Edit → Plugins | Take Recorder · Movie Render Queue · Restart Now
Part 2 · Record
2 · Take Recorder | + Source → Player | Play · Shift+F1 · Record … Shift+F1 · Stop
Part 3 · Check the take
3 · Take | Cinematics → Takes → today | Camera Cuts track · Save
Part 4 · Render to MP4
4 · Movie Render Queue | + Render → your take · your folder | 1080p · MP4 · Deferred · Render (Local)
```

## Part 1 · Turn on the plugins (once per project)

| Edit → Plugins | Value |
| --- | --- |
| **Take Recorder** | ticked |
| **Movie Render Queue** | ticked |

1. Open the **Edit** menu (menu bar, top left) and choose **Plugins**. The Plugins window opens.
2. Search for each plugin in the table and tick it.
3. Click **Restart Now**. Unreal closes and opens again.

- [ ] Window → Cinematics lists Take Recorder and Movie Render Queue

## Part 2 · Record

1. Choose **Window → Cinematics → Take Recorder**. The Take Recorder tab opens.
2. Click **+ Source** and choose **Player**. Player appears in the Sources list.
3. Click **Play** (green ▶, top middle). (Shortcut: Alt+P)
4. Press **Shift+F1** to free the mouse, then click the red **Record** button in Take Recorder. A countdown runs.
5. Click back into the game and play.
6. Press **Shift+F1**, then click **Stop** in Take Recorder. Press **Esc** to stop playing.

> **Pick the right one:** **+ Source → Player**, not an actor from the level. Player follows whatever you're controlling.

- [ ] Take Recorder shows a finished take

## Part 3 · Check the take

1. In the **Content Drawer** (bottom-left corner), open **Content → Cinematics → Takes → (today's date)**.
2. Double-click your take. It opens in the Sequencer along the bottom of the window.
3. Check for a **Camera Cuts** track at the top. If there isn't one, click **+ Add → Camera Cut Track** and pick a camera.
4. Click **Save**.

- [ ] The take has a Camera Cuts track
- [ ] Scrubbing the Sequencer replays your gameplay in the viewport

## Part 4 · Render to MP4

| Movie Render Queue settings | Value |
| --- | --- |
| **Output → Output Directory** | your folder |
| **Output → Output Resolution** | 1920 × 1080 (1080p) |
| **Exports** | MP4 |
| **Rendering** | Deferred Rendering |

1. Choose **Window → Cinematics → Movie Render Queue**.
2. Click **+ Render** and select your take. A row appears in the queue.
3. Click the settings in that row and set the values from the table. Remove any other export so you get one MP4.
4. Click **Render (Local)**. A preview window shows the frames as they render.
5. When it finishes, open your folder and play the MP4.
6. Upload the MP4 to Google Classroom.

- [ ] One MP4 file is in your folder
- [ ] The MP4 plays your gameplay from start to finish

## Troubleshooting

| Problem | Fix |
| --- | --- |
| No Take Recorder in Window → Cinematics | Part 1: tick the plugin and restart. |
| Record does nothing | Press Shift+F1 first so the mouse can reach Take Recorder. |
| The render shows the wrong view or is black | Add a Camera Cuts track (Part 3) and pick the camera. |
| You get a pile of picture files instead of an MP4 | The export is set to images. Set Exports to MP4 and render again. |
| Rendering is very slow | Keep takes short, and close other programs. |
