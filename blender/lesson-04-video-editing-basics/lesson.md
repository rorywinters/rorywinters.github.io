---
title: Video Editing Basics in Blender 5.2
program: Blender
lesson: 4
blurb: Cut several clips into one short video in Blender's Video Sequencer, add a title, transitions and music, and export an MP4.
---
By the end, you will have cut several clips into one short video, added a title and music, and exported an MP4.

**Before you start:** you need two or three short video clips and one music file. Put them all in one project folder before you open Blender. Free music is on [Pixabay music](https://pixabay.com/music/).

| Term | Meaning |
| --- | --- |
| Sequencer | The timeline where you edit |
| Strip | One clip, image, sound or text item on the timeline |
| Channel | A numbered row. Higher channels appear in front of lower ones |
| Playhead | The vertical line that marks the current frame |
| Handle | The left or right edge of a strip, used for trimming |

| Colour | Meaning |
| --- | --- |
| Green | Safe to change. No real effect on playback or render time. |
| Amber | Raises the load a little. Fine at the values given. |
| Red | Use with caution. Big effect on speed or memory. |

This lesson has no red settings.

**Links for this lesson:** music: [pixabay.com/music](https://pixabay.com/music/)

```brief
Part 1 · Set up the project
1A · New file | File → New → Video Editing | Save in project folder
1B · Format | 1920 × 1080 · Frame Rate = your clips (often 30)
Part 2 · Bring in and preview clips
2A · Add clips | Add → Movie · one after another
2B · Preview | View → Frame All · Space plays
Part 3 · Cut and arrange
3A · Trim | drag a strip's handle inward
3B · Cut out the middle | Strip → Split ×2 · delete the middle
3C · Close gaps | drag strips together · Space to check
Part 4 · Transitions and title
4A · Crossfade | overlap 1 s on channel above | Alt-click videos → Add → Transition → Crossfade
4B · Fades | Add → Fade → Fade In / Fade Out
4C · Title | Add → Text · Strip tab · Main Title · ~3 s
Part 5 · Music and export
5A · Music | Add → Sound · Volume 0.3 · Fade Out
5B · Export | End = last frame · Media Type Video
5C · Encoding | MPEG-4 · H.264 · Audio AAC | Render Animation
```

## Part 1 · Set up the project

### 1A · Start a video editing file

1. Open Blender and choose **File → New → Video Editing**. The screen changes to a **Preview** area at the top, the **Sequencer** at the bottom, and the **Properties** editor on the right.
2. Choose **File → Save As** and save the file in your project folder. The file name shows at the top of the window. (Shortcut: Ctrl+Shift+S)

### 1B · Format

| Panel | Field | Value |
| --- | --- | --- |
| **Output → Format** | Resolution X | 1920 px |
|  | Resolution Y | 1080 px |
|  | Frame Rate | **the same as your clips** (phone video is often 30 fps) |

1. In the **Properties** editor, open **Output Properties** (printer icon) and set the values.

Set the frame rate before you start cutting. Changing it later throws off the timing of your edit, and the strips are drawn shorter or longer than the clips.

- [ ] The file name shows at the top of the window
- [ ] Output Properties shows 1920 × 1080 and your clips' frame rate

## Part 2 · Bring in and preview your clips

### 2A · Add the clips

1. Choose **Add → Movie** in the Sequencer's menu bar and select your first clip in the file browser. (Shortcut: hover over the Sequencer, Shift+A → Movie)
2. Click **Add Movie Strip**. Two linked strips appear at the playhead: a blue **video** strip and a green **sound** strip under it.
3. Drag the pair so it starts at frame **1**.
4. Repeat for your other clips, placing each one right after the last.

The video and sound strips from one file stay linked, so they select and move together.

### 2B · Move around and preview

1. Choose **View → Frame All** to fit every strip in view. Do this whenever you lose sight of your strips. (Shortcut: Home)
2. Scroll the mouse wheel to zoom in and out on the timeline.
3. Click or drag in the numbered ruler at the top of the Sequencer to move the playhead. The **Preview** area shows the frame under the playhead.
4. Click **Play** in the Timeline controls. Click **Pause** to stop. (Shortcut: Space)
5. Press the **Left** or **Right Arrow** to step one frame at a time.

- [ ] All your clips sit in a row on the Sequencer, each with a sound strip under it
- [ ] Moving the playhead changes the picture in the Preview

## Part 3 · Cut and arrange

There are two ways to remove footage: trim the ends of a strip, or split it and delete a piece from the middle.

### 3A · Trim the start or end

1. Move your mouse to the left or right edge of a strip. The edge highlights.
2. Drag the handle inward until the clip starts or ends where you want. The strip gets shorter.

Handles stop at the end of the original footage. Trimming doesn't delete anything from your file, so you can drag a handle back out later.

### 3B · Cut out the middle

1. Click the strip to select it.
2. Move the playhead to where the unwanted part starts. Choose **Strip → Split**. A line appears across the strip. (Shortcut: K)
3. Move the playhead to where the unwanted part ends. Choose **Strip → Split** again.
4. Click the middle piece to select it, then choose **Strip → Delete**. The piece disappears and leaves a gap. (Shortcut: X)

> **Pick the right one:** use **Split** (K), not **Hold Split** (Shift+K). With Hold Split, the removed footage can't be brought back by dragging the handle.

### 3C · Close the gaps

A gap on the timeline plays as black, so close any gap you didn't put there on purpose.

1. Click the strip after the gap and drag it left until it touches the strip before. To move it with the keyboard instead, choose **Strip → Transform → Move**. (Shortcut: G)
2. Drag left or right to change its time. Drag up or down to change its channel.
3. Click **Play** and watch the edit from the start.

(Shortcut for closing a gap: put the playhead just before it and press Backspace.) Undo any mistake with **Edit → Undo**. (Shortcut: Ctrl+Z)

- [ ] The unwanted parts are gone
- [ ] The video plays from start to finish with no black gaps

## Part 4 · Transitions and title

### 4A · Crossfade between two clips

A crossfade blends one clip into the next. The two video strips must overlap in time.

1. Drag the second clip up one channel, so it sits above the first.
2. Slide it left until the two clips overlap by about 1 second.
3. Hold **Alt** and click the first video strip. Only the video strip is selected, not its sound.
4. Hold **Shift+Alt** and click the second video strip.
5. Choose **Add → Transition → Crossfade**. A new strip appears above the overlap. Play it: the first clip fades into the second.

### 4B · Fade from or to black

1. Select the first or last clip in your video.
2. Choose **Add → Fade → Fade In** or **Fade Out**. Play it: the clip fades from or to black.

Fades also work on sound strips, which you use for the music in Part 5.

### 4C · Add a title

| Strip tab | Field | Value |
| --- | --- | --- |
| **Effect Strip** | Text | your title |
|  | Preset | **Main Title** |
| Strip length |  | about 3 seconds |

1. Move the playhead to where the title should appear.
2. Choose **Add → Text** and drop the strip on a channel above your video. The words "Text" appear in the Preview.
3. In the **Properties** editor, open the **Strip** tab.
4. Type your title in the text box. The Preview updates.
5. Choose the **Main Title** preset in the header of the **Effect Strip** panel. The text grows and moves to the middle.
6. Change the font size and location if needed.
7. Drag the strip's right handle to set how long the title stays on screen.

Blender 5.2 also has **Subtitles** and **Corner Title** presets.

- [ ] The crossfade blends one clip into the next
- [ ] Your title shows in the Preview for about 3 seconds

## Part 5 · Music and export

### 5A · Add the music

| Strip tab | Field | Value |
| --- | --- | --- |
| **Sound** | Volume | 0.3 (set it by ear) |

1. Choose **Add → Sound**, select your music file, and drop the strip on an empty channel.
2. Click the music strip and open the **Strip** tab.
3. Lower **Volume** in the **Sound** panel. Play it: the music should sit under any speech.
4. If the music runs past the end of the video, put the playhead on the last frame, choose **Strip → Split**, and delete the extra piece.
5. Choose **Add → Fade → Fade Out** for the music.

To silence a strip, choose **Strip → Mute** (Shortcut: H). The strip turns grey. **Strip → Unmute** turns it back on (Shortcut: Alt+H).

### 5B · Output settings

| Panel | Field | Value |
| --- | --- | --- |
| **Output → Frame Range** | End | the last frame of your edit |
| **Output → Output** | Folder | a folder you can find + file name |
|  | Media Type | **Video** |
| **Output → Post Processing** | Sequencer | on |

1. Move the playhead to the last frame of your video and note the frame number.
2. Open **Output Properties** and type that number into **End**.
3. Click the folder icon, choose a folder and file name, and click **Accept**.
4. Change **Media Type** from **Image** to **Video**. The **Encoding** panel appears.

### 5C · Encoding and render

| Panel | Field | Value |
| --- | --- | --- |
| **Output → Encoding** | Container | **MPEG-4** |
| **Encoding → Video** | Video Codec | **H.264** |
| **Encoding → Audio** | Audio Codec | **AAC** |

1. Set the values. **Audio Codec** starts at **No Audio**, so if you skip it the video is silent.
2. Save your file. (Shortcut: Ctrl+S)
3. Choose **Render → Render Animation**. A window opens and counts through the frames. (Shortcut: Ctrl+F12)
4. Don't close Blender until it finishes. Then open the MP4 and watch it through.

- [ ] The MP4 plays from start to finish
- [ ] The MP4 has sound and music

## Shortcuts and troubleshooting

Hover over the Sequencer before pressing these keys.

| Key | Action |
| --- | --- |
| Shift+A | Add a strip |
| Space | Play or stop |
| Home | Fit all strips in view |
| G | Move selected strips |
| K | Split at the playhead |
| X | Delete selected strips |
| Backspace | Remove the next gap |
| H / Alt+H | Mute / unmute |
| Ctrl+Z | Undo |
| Ctrl+S | Save |
| Ctrl+F12 | Render the video |

| Problem | Fix |
| --- | --- |
| Strip settings are missing from the N panel | Use the **Strip** tab in the Properties editor. They moved there in Blender 5.0. |
| Split does nothing | Select the strip and make sure the playhead is over it. |
| The crossfade gives an error | Sound strips were selected. Alt-click to select only the video strips. |
| The MP4 has no sound | Set Audio Codec to AAC and export again. |
| The video ends early or has black at the end | Set End to the last frame of your edit. |
| No FFmpeg Video in File Format | Blender 5.2 uses Media Type → Video instead. |
| Playback is choppy | Let it loop once so Blender can cache the frames, or close other programs. |

Sources: [Blender 5.2 release notes](https://developer.blender.org/docs/release_notes/5.2/) · [Blender 5.0 Sequencer release notes](https://developer.blender.org/docs/release_notes/5.0/sequencer/)
