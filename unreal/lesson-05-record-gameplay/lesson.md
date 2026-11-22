---
title: Record Gameplay and Export to MP4
program: Unreal Engine
video: https://youtu.be/7SwtJIer1yU
blurb: Record yourself playing with Take Recorder, then render the take to a clean MP4 with Movie Render Queue. No screen recorder needed, and it stays smooth even on a slow computer.
---
You record yourself playing your game with **Take Recorder**, then turn the recording into an **MP4** with **Movie Render Queue**. You don't need OBS or any other screen recorder. Unreal renders every frame properly, so the video is smooth even if the game ran slowly while you played. This is the best way to hand in a game project. Every part has a ▶ link that jumps the video to that step.

**You need:** any project you can play, such as your [Third Person](../third-person-basics/) project.

| Where things are in Unreal | Location on screen |
| --- | --- |
| **Edit** and **Window** menus | Menu bar, top left |
| **Content Drawer** | Bottom-left corner button |
| **Play** (green ▶) | Main toolbar, top middle |
| **Take Recorder** and **Movie Render Queue** | Open as their own tabs (**Window → Cinematics**) |

| Colour | Meaning |
| --- | --- |
| Green | Safe to change. |
| Amber | Adds some load. Fine at the value given. |
| Red | Use with caution. |

**Rendering** is amber: a short take renders quickly on the lab computers, but keep takes under about a minute.

```brief
Part 1 · Turn on the plugins
1 · Plugins | Edit → Plugins | Take Recorder ✓ · Movie Render Queue ✓ · Restart Now | [▶ 0:27](https://youtu.be/7SwtJIer1yU?t=27)
Part 2 · Record
2 · Take Recorder | Window → Cinematics → Take Recorder | + Source → Player · Play · Record · Esc stops | [▶ 1:18](https://youtu.be/7SwtJIer1yU?t=78)
Part 3 · Find and rename the take
3 · Take | Content → Cinematics → Takes | F2 rename · double-click to open | [▶ 2:23](https://youtu.be/7SwtJIer1yU?t=143)
Part 4 · Render to MP4
4 · Movie Render Queue | Window → Cinematics → Movie Render Queue | + Add take · MP4 · your folder · Render (Local) | [▶ 2:50](https://youtu.be/7SwtJIer1yU?t=170)
```

## Part 1 · Turn on the plugins (once per project)

[▶ Watch this part (0:27)](https://youtu.be/7SwtJIer1yU?t=27)

| Edit → Plugins | Value |
| --- | --- |
| **Take Recorder** | ticked |
| **Movie Render Queue** | ticked |

1. Open your project. Choose **Edit → Plugins**. The Plugins window opens.
2. Search **take recorder** and tick it.
3. Search **movie render queue** and tick it. (It's often unticked.)
4. Click **Restart Now** at the bottom. Unreal closes and opens again.

- [ ] Window → Cinematics lists Take Recorder and Movie Render Queue

## Part 2 · Record

[▶ Watch this part (1:18)](https://youtu.be/7SwtJIer1yU?t=78)

1. Choose **Window → Cinematics → Take Recorder**. The Take Recorder tab opens.
2. Click **+ Source** and choose **Player**. Player appears in the Sources list and the red **Record** button wakes up.
3. Click **Play** (green ▶). Before clicking into the game, click the red **Record** button. It counts down 3, 2, 1. Have your hands ready so there's no gap at the start.
4. Click into the game and play: run, jump, move the camera.
5. Press **Esc**. That stops playing **and** the recording.

> **Pick the right one:** **+ Source → Player**, not an actor from the level. Player follows whatever you are controlling.

If the mouse is stuck in the game and you can't reach Record, press **Shift+F1** to free it.

- [ ] Take Recorder shows a finished take

## Part 3 · Find and rename the take

[▶ Watch this part (2:23)](https://youtu.be/7SwtJIer1yU?t=143)

1. Open the **Content Drawer**. A new **Cinematics** folder is there. Open **Cinematics → Takes** (and today's date folder if there is one).
2. Click your take, press **F2** and give it a name you'll recognise. Press **Enter**.
3. Double-click it. It opens in the **Sequencer** along the bottom of the window.

If the render later comes out black or from the wrong view, check here for a **Camera Cuts** track at the top. If there isn't one, click **+ Add → Camera Cut Track** and pick a camera.

- [ ] My take has my name for it and opens in the Sequencer

## Part 4 · Render to MP4

[▶ Watch this part (2:50)](https://youtu.be/7SwtJIer1yU?t=170)

| Movie Render Queue | Value |
| --- | --- |
| **Output type** | MP4 (not PNG) |
| **Output Directory** | your folder (e.g. Videos → Unreal) |
| **When finished** | Do Nothing |

1. Choose **Window → Cinematics → Movie Render Queue**. The queue is empty. Drag the window bigger if you need to.
2. Click **+ Add** (or **+ Render**) and choose your take. A row appears.
3. Set the output to **MP4**, not PNG pictures.
4. Click the **Output Directory** folder and pick a folder. You can right-click in the folder picker to make a new folder.
5. Leave **When finished** on **Do Nothing**. (Open Directory opens the old default folder, not the one you chose.)
6. Click **Render (Local)**. A window shows the frames (the video had 431) and the percentage.
7. At 100%, close that window. Open your folder in File Explorer and play the MP4.

You might see a small mark where the character started. That's normal for this method.

- [ ] One MP4 file is in my folder
- [ ] It plays my gameplay smoothly from start to finish

## Troubleshooting

| Problem | Fix |
| --- | --- |
| No Take Recorder in Window → Cinematics | Part 1: tick the plugin and restart. |
| Can't click Record while playing | Press Shift+F1 to free the mouse first. |
| The render is black or from the wrong view | Add a Camera Cuts track (Part 3) and pick the camera. |
| A pile of picture files instead of an MP4 | The output is set to PNG. Change it to MP4 and render again. |
| Rendering is very slow | Keep takes short and close other programs. |

## Video chapters

Copy this list into the YouTube description to add chapters to the video.

```
0:00 Intro
0:27 Turn on the plugins
0:51 Movie Render Queue plugin and restart
1:18 Open Take Recorder
1:33 Add the Player source and record
2:13 Esc stops the recording
2:23 Find and rename your take
2:50 Open Movie Render Queue
3:04 Add the take and choose MP4
3:20 Pick an output folder
3:49 Render
4:12 Play the MP4
4:34 Handing in your project
```
