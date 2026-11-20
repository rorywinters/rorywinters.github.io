---
title: Move a Cube 5 m Left with C#
program: Unity
lesson: 0
blurb: Your first C# program in Unity: one line that makes a cube jump, a loop that makes it hop, then a smooth 5 m slide at 1 m per second. Same lesson as the Unreal C++ version, so you can compare the two.
---
```brief
Part 1 · Make the project, floor and cube
1A · Project | Unity Hub → New project | 6000.0.30f1 · Universal 3D | CubeMoveUnity
1B · Floor | GameObject → 3D Object → Plane | Position 0, 0, 0 · Scale 2, 1, 2
1C · Cube | GameObject → 3D Object → Cube | Position 0, 0.5, 0 · Ctrl+S
Part 2 · Create the MoveCube script
2A · Script | Assets → Create → Scripting | MonoBehaviour Script · MoveCube
2B · Attach | Drag onto Cube | Move Cube (Script) shows
Part 3 · Your first program: jump the cube
3A · Open | External Script Editor → Visual Studio | Game tab → Play Unfocused
3B · Left | Translate(-5, 0, 0) | X = -5
3C · Up | Translate(0, 3, 0) | Y = 3.5
3D · Away | Translate(0, 0, 5) | Z = 5
3E · Hop | IEnumerator Start · for 5 | WaitForSeconds(1) · X = -5
Part 4 · Level up: slide the cube
4 · Slide script | distance 5 · speed 1 | MoveTowards in Update · not Lerp
Part 5 · Play and test
5A · Play | Slides left for 5 s | X = -5
5B · Inspector | Distance 8 · Speed 2 | X = -8 after 4 s
5C · Challenges | Right · up · there and back
Part 6 · Hand it in
6A · Record | Windows + Alt + R · Play
6B · Post | Classroom → Add → File · Hand in
```
**Links for this lesson:**

- Part 3, code reference: [**Vector3.MoveTowards**](https://docs.unity3d.com/ScriptReference/Vector3.MoveTowards.html) and [**Time.deltaTime**](https://docs.unity3d.com/ScriptReference/Time-deltaTime.html)

You will write your first C# program, starting with **one line** that makes a 1 m cube **jump** left, up or away from the camera. Then you level up: the cube **slides 5 m to the left** at **1 m per second**, then stops. Last, you record it and hand it in.

This is the same job as the Unreal C++ version of this lesson, so you can compare the two engines line by line.

**Time:** about 1 class.

**You need:** a school laptop. Unity 6 (6000.0.30f1) and Visual Studio are already installed on it.

### Two things to know before you start

- **Unity measures in metres.** 5 m is **5** in Unity. A basic cube is **1** m on each side.
- **Left in Unity is minus X.** X points right, Y points up and Z points forward (away from the camera). Moving left means making X smaller.

### Performance colour key

Settings that change how hard the laptop works are marked with a colour in the tables.

| Colour | Meaning                                                                                 |
|--------|-----------------------------------------------------------------------------------------|
| Green  | Safe to change. No real effect on speed.                                                |
| Amber  | Adds some load or disk space. Fine at the value given.                                  |
| Red    | Use with caution. Can make the editor slow or freeze. A lighter working value is given. |

Nothing in this lesson is red.

## Part 1 · Make the project, floor and cube

### 1A · Create the project

| New project          | Field                   | Value                                                |
|----------------------|-------------------------|------------------------------------------------------|
| **Editor version**   |                         | 6000.0.30f1 (LTS), the version on the school laptops |
| **Template**         |                         | Universal 3D                                         |
| **Right-hand panel** | Unity organization      | leave as is                                          |
|                      | Project name            | **CubeMoveUnity**                                    |
|                      | Location                | leave as is (your user folder)                       |
|                      | Use AI Assistant        | Off                                                  |
|                      | Source control provider | leave as Select provider                             |

1. In Unity Hub, click **Projects**, then **New project**.
2. Check that **Editor version** at the top reads **6000.0.30f1**. If not, pick it from the dropdown.
3. Click the **Universal 3D** template. It gets a blue outline.
4. In **Project name**, delete "My project" and type **CubeMoveUnity**. Leave the other fields as they are, and leave **Use AI Assistant** unticked.
5. Click **Create project**. The first time can take a few minutes.

> **Be patient:** the first time a project opens, Unity shows an **Importing** or **Loading** window for a minute or more while it builds the project's files. It can look stuck. Don't click Create project again; wait for the editor to appear. Later opens are faster.

**What changed:** the Unity editor opens on a scene called **SampleScene**. The **Hierarchy** on the left lists **Main Camera**, **Directional Light** and **Global Volume**.

### 1B · Add the floor

| Inspector → Transform | X   | Y   | Z   |
|-----------------------|-----|-----|-----|
| **Position**          | 0   | 0   | 0   |
| **Rotation**          | 0   | 0   | 0   |
| **Scale**             | 2   | 1   | 2   |

1. Go to **GameObject → 3D Object → Plane**. A flat grey square appears and **Plane** shows in the Hierarchy.
2. In the **Inspector** on the right, type the values from the table into **Transform**. A plane is 10 m wide, so Scale 2 makes it 20 m: room for the cube to move 5 m and more.

### 1C · Add the cube

> **Y is up in Unity.** Blender and Unreal use **Z** for up, so this catches people. In Unity, **Y** lifts the cube off the floor and **Z** moves it toward or away from the camera.

| Inspector → Transform | X   | Y   | Z   |
|-----------------------|-----|-----|-----|
| **Position**          | 0   | 0.5 | 0   |
| **Rotation**          | 0   | 0   | 0   |
| **Scale**             | 1   | 1   | 1   |

1. Go to **GameObject → 3D Object → Cube**. **Cube** shows in the Hierarchy.
2. Type the values from the table. Y = 0.5 lifts the 1 m cube so its bottom sits on the floor instead of halfway into it.
3. Click the **Game** tab above the view. You see the cube in the middle of the floor, from the Main Camera. Click the **Scene** tab to go back.
4. Save with **File → Save** (shortcut Ctrl + S). The ✱ beside **SampleScene** in the Hierarchy disappears.

> **Pick the right one:** use **GameObject → 3D Object**, not **2D Object** or **UI**. A 3D cube has a **Mesh Renderer** and **Box Collider** in the Inspector; 2D sprites and UI parts don't.

Before Part 2, check every line. If one is wrong, fix it in the step named.

- [ ] The title bar shows **CubeMoveUnity** and **SampleScene** (1A)
- [ ] Hierarchy lists **Main Camera, Directional Light, Global Volume, Plane, Cube** (1B, 1C)
- [ ] Plane **Scale** reads **2, 1, 2** (1B)
- [ ] Cube **Position** reads **0, 0.5, 0** and it sits on the floor, not in it (1C)
- [ ] The **Game** tab shows the cube in the middle of the floor (1C)
- [ ] No ✱ beside SampleScene: the scene is saved (1C)

## Part 2 · Create the MoveCube script

A **script** is a code file that gives a GameObject a new behaviour. In Unity, a script is one **.cs** file.

### 2A · Create the script

1. In the **Project** window at the bottom, click the **Assets** folder.
2. Right-click in the empty space and choose **Create → Scripting → MonoBehaviour Script**. (In older Unity versions: **Create → C# Script**.) A new file appears with its name highlighted, ready to type.
3. Type **MoveCube** straight away and press **Enter**. The file now reads **MoveCube** with a **#** script icon.

> **Pick the right one:** choose **MonoBehaviour Script**, not **ScriptableObject Script** or **Empty C# Script**. Only a MonoBehaviour script can be attached to a GameObject.
>
> **Name it before pressing Enter.** Unity writes the class name inside the file from the name you type now. If you rename the file later, the file name and the class name no longer match, and Unity won't let you attach it. If that happens, delete the file and make a new one.

### 2B · Attach the script to the cube

1. Drag **MoveCube** from the Project window onto **Cube** in the Hierarchy, and let go.
2. Click **Cube** in the Hierarchy.

**What changed:** at the bottom of the Inspector there is a new component, **Move Cube (Script)**. The script does nothing yet; you write its code in Part 3.

Another way: select **Cube**, click **Add Component** at the bottom of the Inspector, type **MoveCube**, and click it.

- [ ] **Assets** holds a file named exactly **MoveCube** (capital M, capital C, no space) (2A)
- [ ] Its icon is a script icon (**#**), not a folder or another type (2A)
- [ ] With **Cube** selected, the Inspector shows **Move Cube (Script)** under Box Collider (2B)
- [ ] The script is on the **Cube**, not on the Plane or Main Camera (2B)

## Part 3 · Your first program: jump the cube

Your first program is **one line**. It tells the cube to jump to a new spot when you press Play. You will try three versions of the same line. Only the three numbers change.

### 3A · Open the script

1. Go to **Edit → Preferences → External Tools** and set **External Script Editor** to **Visual Studio Community 2022**. Close Preferences.
2. Double-click **MoveCube** in the Project window. Visual Studio opens **MoveCube.cs**.

> **First time Visual Studio opens:** it may ask you to **sign in**. Use your school (WSD) login. If it asks for a password you don't have, click **Cancel**; Visual Studio still opens. A **GitHub Copilot Free** window may appear: click **Maybe later**. In this lesson you write the code yourself.

### Keep the Scene view when you press Play (do this once)

By default, Play jumps to the **Game** tab. To keep watching the **Scene** view instead:

1. Make sure Play is **stopped**. The setting is greyed out while the game runs.
2. Click the **Game** tab. On the toolbar just under it, find the dropdown that says **Play Focused**, to the left of the speaker icon.
3. Click it and choose **Play Unfocused**, the last of the three choices.
4. Click the **Scene** tab. From now on, Play leaves the Scene view in front.

Ignore the rest of that toolbar for this lesson. If a long list of icons and tick boxes opens, that is the **Gizmos** menu: press **Esc** to close it.

### 3B · Example 1: jump left

```csharp
using UnityEngine;

public class MoveCube : MonoBehaviour
{
    void Start()
    {
        // Translate(X, Y, Z)
        // X = left (-) or right (+)
        // Y = down (-) or up (+)
        // Z = toward the camera (-) or away from it (+)
        transform.Translate(-5, 0, 0);   // moves 5 m LEFT
    }
}
```

1. Select everything in MoveCube.cs (**Edit → Select All**, shortcut Ctrl + A) and delete it.
2. Type or paste Example 1. Lines that start with **//** are **comments**: notes for people. Unity ignores them.
3. Save with **File → Save MoveCube.cs** (shortcut Ctrl + S). The ✱ on the tab disappears.
4. Click back into Unity. Wait for the spinning circle at the bottom right to stop.
5. Press **Play** (▶). The cube jumps 5 m to the left. Select **Cube**: **Position X** reads **-5**.
6. Press **Play** again to stop. The cube goes back to the middle.

### 3C · Example 2: jump up

```csharp
        transform.Translate(0, 3, 0);    // moves 3 m UP
```

1. In Visual Studio, change only **line 11** (the Translate line) to the one above. Visual Studio shows line numbers down the left side. Keep the comments.
2. Save, click back into Unity, press **Play**. The cube jumps 3 m up and floats. **Position Y** reads **3.5**. Stop.

### 3D · Example 3: jump away from the camera

```csharp
        transform.Translate(0, 0, 5);    // moves 5 m AWAY from the camera
```

1. Change **line 11** again, save, and press **Play**. The cube jumps 5 m away and looks smaller. **Position Z** reads **5**. Stop.

**What changed:** the same line moved the cube three different ways. The first number is X (left/right), the middle is Y (up/down), the last is Z (toward/away). A minus sign flips the direction.

> **Tip for Example 3:** in the **Game** view the camera looks almost straight along Z, so moving away mostly makes the cube look **smaller**. Watch the **Scene** view to see it move, or check that **Position Z** reads **5**.

### 3E · Example 4: hop in steps, like a delay

The jumps happen in one instant. This version hops 1 m at a time, once a second, five times. It works like a **for loop** with **delay()** in Arduino.

```csharp
using System.Collections;
using UnityEngine;

public class MoveCube : MonoBehaviour
{
    IEnumerator Start()
    {
        for (int i = 0; i < 5; i++)                // repeat 5 times
        {
            transform.Translate(-1, 0, 0);        // hop 1 m LEFT
            yield return new WaitForSeconds(1);   // wait 1 second, like delay(1000)
        }
    }
}
```

1. Select everything in MoveCube.cs (Ctrl + A), delete it, and type or paste Example 4.
2. Notice two changes: the new first line **using System.Collections;**, and **Start** now begins with **IEnumerator** instead of **void**. Both are needed for the wait to work.
3. Save, click back into Unity, press **Play**. The cube hops left once a second. After 5 hops, **Position X** reads **-5**. Stop.

**Try it:** change any of the numbers. The **5** in the loop sets how many hops, the **Translate** numbers set the direction and size of each hop (X, Y or Z), and the **1** in WaitForSeconds sets the pause in seconds.

> **Why not a plain delay?** In Unity, a delay that stops the program would freeze the whole game. **yield return** pauses only this script and lets the game keep running.

- [ ] MoveCube.cs has the comments and one **Translate** line inside **Start** (3B)
- [ ] The **Console** tab has **no red** messages (yellow warnings are fine) (3B)
- [ ] Example 1 on Play: **Position X = -5** (3B)
- [ ] Example 2 on Play: **Position Y = 3.5** (3C)
- [ ] Example 3 on Play: **Position Z = 5** (3D)
- [ ] After Stop, the cube is back at **0, 0.5, 0** each time

## Part 4 · Level up: slide the cube

In Part 3 the cube **jumped**. Now it **slides** 5 m left at 1 m per second, then stops. This uses more code: values you can change in the Inspector, and a line that runs every frame. Replace all of MoveCube.cs with the code below, save, and click back into Unity.

```csharp
using UnityEngine;

public class MoveCube : MonoBehaviour
{
    public float distance = 5f;   // Unity uses metres
    public float speed = 1f;      // 1 metre per second

    private Vector3 targetPosition;

    void Start()
    {
        // In Unity, -X is left (Vector3.left = (-1, 0, 0))
        targetPosition = transform.position + Vector3.left * distance;
    }

    void Update()
    {
        transform.position = Vector3.MoveTowards(transform.position, targetPosition, speed * Time.deltaTime);
    }
}
```

1. Double-click **MoveCube** in the Project window. Visual Studio opens the file. (If nothing opens, set **Edit → Preferences → External Tools → External Script Editor** to **Visual Studio**.)
2. Select everything (**Edit → Select All**, shortcut Ctrl + A) and delete it.
3. Type or paste the code above. The tab name shows a ✱ because the file has changed.
4. Save with **File → Save MoveCube.cs** (shortcut Ctrl + S). The ✱ disappears.
5. Click back into Unity. A small spinning circle shows at the bottom right while Unity compiles the script. Unity compiles by itself; there is no build button.

**What changed:** if the code has a mistake, a red message appears in the bar at the bottom of Unity and in the **Console** tab. No red message means it compiled.

| Line                                          | What it does                                                                                                                                                                                                  |
|-----------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| public class MoveCube : MonoBehaviour         | The class. Its name must match the file name exactly.                                                                                                                                                         |
| public float distance = 5f;                   | A public value shows in the Inspector, so you can change it without code. The f means a decimal number.                                                                                                       |
| private Vector3 targetPosition;               | Where the cube is going: an X, Y, Z position. Private, so it stays hidden.                                                                                                                                    |
| Start()                                       | Runs once when you press Play.                                                                                                                                                                                |
| transform.position + Vector3.left * distance | The target: the start position, 5 m in the minus X (left) direction.                                                                                                                                          |
| Update()                                      | Runs every frame.                                                                                                                                                                                             |
| Vector3.MoveTowards(...)                      | Moves a set distance toward the target each frame and stops exactly on it. ([Unity docs](https://docs.unity3d.com/ScriptReference/Vector3.MoveTowards.html))                                                  |
| speed * Time.deltaTime                       | How far to move this frame. [Time.deltaTime](https://docs.unity3d.com/ScriptReference/Time-deltaTime.html) is the time since the last frame, in seconds, so the speed is the same on fast and slow computers. |

> **Pick the right one:** use **Vector3.MoveTowards**, not **Vector3.Lerp**. Lerp slows down as it gets close and takes a long time to finish the last few centimetres. MoveTowards moves at a steady speed.

- [ ] Visual Studio shows **MoveCube.cs** with no ✱ on its tab (saved)
- [ ] Back in Unity, the spinning circle at the bottom right has stopped
- [ ] The **Console** tab has **no red** messages (yellow warnings are fine)
- [ ] With **Cube** selected, **Move Cube (Script)** shows **Distance 5** and **Speed 1**

## Part 5 · Play and test

### 5A · Watch it move

1. Click the **Play** button (▶) at the top centre (shortcut Ctrl + P). Unity switches to the **Game** view.
2. Watch the cube slide left for 5 seconds, then stop.
3. Click **Cube** in the Hierarchy while still playing. In the Inspector, **Transform → Position X** reads **-5** once it stops.
4. Click **Play** again to stop (shortcut Ctrl + P). The cube jumps back to its start, because changes made during play are not kept.

### 5B · Change the values without code

| Inspector → Move Cube (Script) | Value |
|--------------------------------|-------|
| Distance                       | 8     |
| Speed                          | 2     |

1. With Play **stopped**, select **Cube** and type the values from the table into **Move Cube (Script)**. Both are green: safe to change.
2. Press **Play**. The cube now goes 8 m in 4 seconds, and Position X ends at **-8**.

Values typed while playing are lost when you stop. Always change them with Play stopped.

- [ ] On Play, the cube slides **left**, not right, up or toward the camera (5A)
- [ ] It stops after about **5 seconds** with **Position X = -5** (5A)
- [ ] After Stop, it is back at **0, 0.5, 0** (5A)
- [ ] With Distance 8 and Speed 2, it stops at **X = -8** after about **4 seconds** (5B)

All ticked? Try the challenges, then hand in (Part 6).

### 5C · Challenges

- Make the cube go **right** instead of left. (Hint: Vector3 has a direction that is the opposite of left.)
- Make it go **up** 3 m. (Hint: Vector3.up.)
- Make it go left, then come back. (Hint: in Update, when the cube reaches targetPosition, set a new target.)

## Part 6 · Hand it in

Record a short video of your cube moving and post it to Google Classroom.

### 6A · Record the Game view

1. In Unity, make sure Play is **stopped** and the **Game** tab is showing.
2. Press **Windows + Alt + R**. A small recording timer appears at the edge of the screen.
3. Press **Play** (▶). Let the cube finish moving.
4. Press **Windows + Alt + R** again to stop recording.

**What changed:** a message says the clip was saved. It is in **Videos → Captures**.

If Windows + Alt + R does nothing, record with **Free Cam 8** instead.

### 6B · Post it

1. Open the assignment in **Google Classroom** and click **Add or create → File**.
2. Pick your clip from **Videos → Captures**, then click **Hand in**.

- [ ] The clip shows the cube moving in the **Game** view, start to finish (6A)
- [ ] The clip is attached to the Classroom assignment and it says **Handed in** (6B)

## Troubleshooting

| Problem                                                        | Fix                                                                                                                                                      |
|----------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Can't add script component** or **class name doesn't match** | The file was renamed after it was made. Delete it and make a new MonoBehaviour Script named **MoveCube** (Part 2).                                       |
| Red error in the Console                                       | Double-click the error to jump to the line. Most often it is a missing **;** or **}**, or a typo (C# cares about capital letters: Vector3, not vector3). |
| Double-clicking the script opens Notepad or nothing            | **Edit → Preferences → External Tools → External Script Editor → Visual Studio**.                                                                        |
| Cube doesn't move                                              | Check that **Move Cube (Script)** is on the Cube, with its tick box on, and that Speed is not 0.                                                         |
| Cube moves right                                               | Vector3.right was used instead of Vector3.left.                                                                                                          |
| Cube is half inside the floor                                  | Position Y must be 0.5.                                                                                                                                  |
| Cube goes off the edge                                         | The floor Scale must be 2, 1, 2 (Part 1B).                                                                                                               |

## Cheat sheet

| Job             | Where                                                                       |
|-----------------|-----------------------------------------------------------------------------|
| New script      | Project window, right-click → **Create → Scripting → MonoBehaviour Script** |
| Compile         | Save in Visual Studio, click back into Unity (automatic)                    |
| Attach a script | Drag it onto the GameObject, or **Add Component**                           |
| Play / Stop     | ▶ button (Ctrl + P)                                                         |
| Errors          | **Console** tab (Window → General → Console)                                |
| 5 m in Unity    | 5                                                                           |
| Left in Unity   | minus X                                                                     |

## Unity and Unreal side by side

|                      | Unreal C++               | Unity C#                     |
|----------------------|--------------------------|------------------------------|
| Units                | centimetres (500 = 5 m)  | metres (5 = 5 m)             |
| Left                 | minus Y                  | minus X                      |
| Runs once at start   | BeginPlay()              | Start()                      |
| Runs every frame     | Tick(DeltaTime)          | Update() with Time.deltaTime |
| Move toward a point  | FMath::VInterpConstantTo | Vector3.MoveTowards          |
| Files                | two (.h and .cpp)        | one (.cs)                    |
| After changing code  | build in Visual Studio   | save; Unity compiles         |
| Values in the editor | UPROPERTY(EditAnywhere)  | public                       |
| Up                   | Z (same as Blender)      | Y                            |
