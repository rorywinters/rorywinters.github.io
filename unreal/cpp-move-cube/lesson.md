---
title: Move a Cube 5 m Left with C++
program: Unreal Engine
lesson: 9
blurb: Your first C++ in Unreal: one line that makes a cube jump, then a timer that makes it hop, then a smooth 5 m slide at 1 m per second. Same lesson as the Unity C# version, so you can compare the two.
---
```brief
Part 1 · Make the project and the floor
1A · C++ project | Games → Blank · C++ | Starter Content and Raytracing off | C:\Unreal Projects · CubeMove
1B · Level | File → New Level → Basic | Save as CubeLevel · not Empty Level
1C · Default maps | Project Settings → Maps & Modes | both = CubeLevel
Part 2 · Make the class and the set-up code
2A · Class | Tools → New C++ Class → All Classes | StaticMeshActor · MoveCube
2B · MoveCube.h | Replace everything · Ctrl+S
2C · MoveCube.cpp | Replace everything · line 20 is your program
2D · Build once | File → Exit · Build Solution | Build: 1 succeeded · reopen
Part 3 · Place the cube and set the camera
3A · Place | Drag MoveCube in · Static Mesh Cube | Location 0, 0, 50
3B · Camera | F to frame · Alt + drag | Green Y points right
3C · Simulate | ⋮ beside Play → Simulate
Part 4 · Your first program: make the cube jump
4A · Left | FVector(0, -500, 0) | Y = -500
4B · Up | FVector(0, 0, 300) | Z = 350
4C · Forward | FVector(500, 0, 0) | X = 500
4D · Hop | SetTimer → Hop() every 1 s | 5 hops · Y = -500
Part 5 · Level up: a smooth slide
5A · Tick | VInterpConstantTo · not VInterpTo | Y = -500 after 5 s
5B · Details | Distance 800 · Speed 200 | Y = -800 after 4 s
5C · Challenges | Right · up · there and back
Part 6 · Hand it in
6A · Record | Windows + Alt + R · Simulate
6B · Post | Classroom → Add → File · Hand in
```
**Links for this lesson:**

- Before you start, Visual Studio C++ setup: [**Visual Studio Lab Install**](https://claude.ai/artifact/T58BJ8UzhS9vLm9hK7W26a)

You will write C++ that moves a cube on a flat floor. Your first program is **one line** that makes the cube **jump** left. Then you make it jump up and forward, hop in steps, and finally **slide 5 m left** at **1 m per second** and stop.

This is the same lesson as the Unity C# version, so you can compare the two engines line by line.

**Time:** about 2 classes. **You need:** Unreal Engine 5.8 and Visual Studio 2022 with the C++ workloads.

### Use these names exactly

The code in this guide is written for these names. Type them **exactly**: same capital letters, no spaces, no initials, no numbers.

| What    | Name          | Where the code uses it                      |
|---------|---------------|---------------------------------------------|
| Project | **CubeMove**  | CUBEMOVE_API in the .h file                 |
| Class   | **MoveCube**  | MoveCube.h, MoveCube.generated.h, AMoveCube |
| Level   | **CubeLevel** | Project Settings                            |

If one name is different, the build fails with errors like **cannot open source file** or **uses undefined class**. Only change a name if you know every place it appears (see Troubleshooting).

### Which way is which

Unreal measures in **centimetres** (5 m = **500**). **Z is up**, the same as Blender.

| Letter | Minus (-) | Plus (+) |
|--------|-----------|----------|
| X      | back      | forward  |
| Y      | left      | right    |
| Z      | down      | up       |

### Performance colour key

| Colour | Meaning                                                                                 |
|--------|-----------------------------------------------------------------------------------------|
| Green  | Safe to change. No real effect on speed.                                                |
| Amber  | Adds some load. Fine at the value given.                                                |
| Red    | Use with caution. Can make the editor slow or freeze. A lighter working value is given. |

## Part 1 · Make the project and the floor

### 1A · Create a C++ project

| Project Browser      | Field            | Value                                 |
|----------------------|------------------|---------------------------------------|
| **Category**         |                  | Games                                 |
| **Template**         |                  | Blank                                 |
| **Project Defaults** | Blueprint / C++  | **C++**                               |
|                      | Target Platform  | Desktop                               |
|                      | Quality Preset   | Maximum                               |
|                      | Starter Content  | Off                                   |
|                      | Raytracing       | Off                                   |
| **Project**          | Project Location | **C:\Unreal Projects** (not OneDrive) |
|                      | Project Name     | **CubeMove**                          |

1. Open **Unreal Editor 5.8**. The **Unreal Project Browser** opens.
2. Click **Games**, then **Blank**.
3. In **Project Defaults**, click **C++**. Untick **Starter Content** and **Raytracing**.
4. Click the folder icon beside **Project Location** and choose **C:\Unreal Projects**. If that folder doesn't exist, make it in File Explorer first. If you can't, ask your teacher.
5. Type **CubeMove** in **Project Name**. Exactly that.
6. Click **Create**. The first build takes a few minutes.

> **Why not OneDrive?** OneDrive tries to upload every file Unreal writes while it builds. That can lock files and make the build fail for no clear reason.

**What changed:** the editor opens, and Visual Studio may open too. In the **Content Browser** at the bottom, a **C++ Classes** folder sits under **Content**.

> **Unreal asks to install a compiler?** Visual Studio's C++ workloads are missing. Stop and tell your teacher.

### 1B · Make a level with a floor

1. **File → New Level**, click **Basic**, then **Create**. You see a grey floor and a sky.

> **Pick the right one:** **Basic**, not **Empty Level**. Empty Level is completely black.

2. **File → Save Current Level As**, choose **Content**, type **CubeLevel**, click **Save**. The level tab reads **CubeLevel**.

### 1C · Open CubeLevel every time

| Project Settings → Maps & Modes | Field              | Value     |
|---------------------------------|--------------------|-----------|
| **Default Maps**                | Editor Startup Map | CubeLevel |
|                                 | Game Default Map   | CubeLevel |

1. **Edit → Project Settings → Maps & Modes**.
2. Pick **CubeLevel** in both dropdowns, then close the window. It saves by itself.

Before Part 2, check every line. If one is wrong, fix it in the step named.

- [ ] The window title reads **CubeMove** (1A)
- [ ] Content Browser has a **C++ Classes** folder (1A)
- [ ] The viewport shows a grey floor and sky, and the tab reads **CubeLevel** (1B)
- [ ] Both Default Maps read **CubeLevel** (1C)

## Part 2 · Make the class and write all the set-up code once

A **class** is a pattern for an object in code. You start from **StaticMeshActor**, which already has a slot for a 3D shape.

In this part you write the **.h** file once, with everything the whole lesson needs, and build once. After that, every change is in the **.cpp** file, and you can keep Unreal open.

### 2A · Create the class

| Add C++ Class                         | Field  | Value           |
|---------------------------------------|--------|-----------------|
| **Choose Parent Class → All Classes** | search | StaticMeshActor |
| **Name Your New Static Mesh Actor**   | Name   | **MoveCube**    |

1. **Tools → New C++ Class**. Click the **All Classes** tab.
2. Type **StaticMeshActor** in the search box, click it, then **Next**.
3. Type **MoveCube** in **Name**. Exactly that. Click **Create Class**.

> **Pick the right one:** **StaticMeshActor** from **All Classes**, not **Actor** from Common Classes. When it is right, the next screen's heading reads **Name Your New Static Mesh Actor**.

**What changed:** Visual Studio opens **MoveCube.h** and **MoveCube.cpp**. If a **File Modification Detected** box appears, click **Reload All**.

### 2B · MoveCube.h: replace everything

```cpp
#pragma once

#include "CoreMinimal.h"
#include "Engine/StaticMeshActor.h"
#include "MoveCube.generated.h"

UCLASS()
class CUBEMOVE_API AMoveCube : public AStaticMeshActor
{
    GENERATED_BODY()

public:
    AMoveCube();                                   // runs when the cube is made
    virtual void Tick(float DeltaTime) override;   // runs every frame (used in Part 5)

protected:
    virtual void BeginPlay() override;             // runs once when Play starts

private:
    void Hop();                                    // one hop (used in Example 4)
    FTimerHandle HopTimer;                         // the timer that calls Hop (Example 4)
    int32 HopsLeft = 5;                            // hops still to go (Example 4)

    UPROPERTY(EditAnywhere, Category = "Movement")
    float Distance = 500.f;                        // centimetres to slide (Part 5)

    UPROPERTY(EditAnywhere, Category = "Movement")
    float Speed = 100.f;                           // centimetres per second (Part 5)

    FVector TargetLocation;                        // where the slide ends (Part 5)
};
```

1. Click the **MoveCube.h** tab. Select all (**Ctrl + A**), delete, paste the code above.
2. Save (**Ctrl + S**).

This file is a list: what the cube has and what it can do. Some lines are for later parts; the comments say which.

### 2C · MoveCube.cpp: replace everything

```cpp
#include "MoveCube.h"
#include "TimerManager.h"

// ---------- Set-up: leave this alone ----------
AMoveCube::AMoveCube()
{
    PrimaryActorTick.bCanEverTick = true;                                  // let Tick run
    GetStaticMeshComponent()->SetMobility(EComponentMobility::Movable);   // let the cube move
}

// ---------- Your program ----------
void AMoveCube::BeginPlay()
{
    Super::BeginPlay();

    // AddActorWorldOffset(FVector(X, Y, Z)) in centimetres
    // X = back (-) or forward (+)
    // Y = left (-) or right (+)
    // Z = down (-) or up (+)
    AddActorWorldOffset(FVector(0, -500, 0));   // jumps 5 m LEFT
}

// ---------- Used later: leave empty for now ----------
void AMoveCube::Tick(float DeltaTime)
{
    Super::Tick(DeltaTime);
}

void AMoveCube::Hop()
{
}
```

1. Click the **MoveCube.cpp** tab. Select all, delete, paste the code above.
2. Save (**Ctrl + S**).

Your first program is **line 20**: one line that jumps the cube 5 m left. Visual Studio shows line numbers down the left side.

### 2D · Build once (amber)

1. In Unreal, **File → Exit**. Click **Save Selected** if asked.
2. In Visual Studio, **Build → Build Solution** (**Ctrl + Shift + B**). The laptop works hard for a minute.

**What changed:** the **Output** tab at the bottom ends with **Build: 1 succeeded, 0 failed**.

> **Hundreds of errors in the Error List with an abc icon?** Those are IntelliSense guesses about Unreal's own files, not your code. Set the Error List dropdown to **Build Only**. Only the Output line counts.

3. Reopen the project: double-click **CubeMove.uproject** in **C:\Unreal Projects\CubeMove**. It opens on **CubeLevel**.

- [ ] Output reads **Build: 1 succeeded** (2D)
- [ ] Unreal reopened on **CubeLevel** (2D)
- [ ] Content Browser: **C++ Classes → CubeMove** shows **MoveCube** (2A)

## Part 3 · Place the cube and set the camera

### 3A · Put the cube in the level

| Details                   | Field       | Value          |
|---------------------------|-------------|----------------|
| **Static Mesh Component** | Static Mesh | Cube           |
| **Transform**             | Location    | 0.0, 0.0, 50.0 |

1. In the Content Browser, open **C++ Classes → CubeMove**. Drag **MoveCube** into the viewport and let go over the floor. **MoveCube** appears in the **Outliner**, but you can't see anything yet: it has no shape.
2. In **Details**, find **Static Mesh**, click its dropdown and type **Cube**. Pick **Cube**. A white cube appears.

> **Can't find Cube?** In that dropdown, click the gear (**View Options**) and tick **Show Engine Content**. Pick the one named exactly **Cube**, not **Shape_Cube** or **1M_Cube**.
>
> **Why two "Static Mesh" names?** At the top of Details, **StaticMeshComponent** is the slot that holds a shape. Further down, **Static Mesh** is the setting that says *which* shape goes in the slot. Same idea as a picture frame (component) and the picture in it (mesh).

3. Under **Transform**, type the **Location** from the table. The cube sits on the middle of the floor.

**What changed:** beside **Mobility**, **Movable** is already lit. The code set it for you (line 8 of the .cpp).

4. Save (**Ctrl + S**).

### 3B · Set up the camera

Look at the cube from the front so that **left on your screen is left for the cube**.

1. Click the cube in the Outliner and press **F**. The view zooms in to frame it.
2. Hold **Alt** and drag with the **left mouse button** to swing around the cube. Stop when the green **Y** arrow points to the **right** of your screen and the red **X** arrow points away from you.
3. Scroll the mouse wheel out until you can see about 6 m of floor to the left of the cube.

### 3C · Switch Play to Simulate (once)

1. Click the **⋮** beside the green **Play** button and choose **Simulate**. The big button changes to the Simulate icon.

**Why:** **Play** puts you inside the game as a player, and your camera view is lost. **Simulate** runs the game but keeps your camera where you set it. If you ever see a player view with an **eject** button (⏏) beside Stop, you pressed Play: press **Esc** and use Simulate.

- [ ] A white cube sits on the floor, in the Outliner as **MoveCube** (3A)
- [ ] Details: Location **0, 0, 50**, Mobility **Movable** (3A)
- [ ] Green Y arrow points to the right of your screen (3B)
- [ ] The big toolbar button shows **Simulate** (3C)

## Part 4 · Your first program: make the cube jump

From here on, you only change the **.cpp** file, and Unreal stays open. Each time:

1. **Stop** Simulate if it is running.
2. Change the code in Visual Studio and save (**Ctrl + S**).
3. In Unreal, click **Compile** at the bottom right of the editor (**Ctrl + Alt + F11**). A message reads **Live coding succeeded**.
4. **Simulate** (**Alt + S**).

### 4A · Example 1, jump LEFT

This is already in your code, on **line 20**:

```cpp
    AddActorWorldOffset(FVector(0, -500, 0));   // jumps 5 m LEFT
```

1. **Simulate**. The cube jumps 5 m to the left instantly.
2. Click **MoveCube** in the Outliner: **Location Y** reads **-500**.
3. **Stop** (**Esc**). The cube goes back to the start.

The jump is instant because the line runs once, when the game starts. BeginPlay is Unreal's version of Unity's Start() and Arduino's setup().

### 4B · Example 2, jump UP

Change **line 20 only**:

```cpp
    AddActorWorldOffset(FVector(0, 0, 300));    // jumps 3 m UP
```

Save, **Compile**, **Simulate**. The cube jumps up. **Location Z** reads **350**.

### 4C · Example 3, jump FORWARD

```cpp
    AddActorWorldOffset(FVector(500, 0, 0));    // jumps 5 m FORWARD
```

Save, **Compile**, **Simulate**. The cube jumps away from you. **Location X** reads **500**.

Only the three numbers changed. **Try it:** change any of them and predict where the cube lands before you Simulate.

### 4D · Example 4, hop in steps (level up)

Like Arduino's delay() in a loop. Unreal can't pause the game, so a **timer** calls Hop() once a second.

Replace **all** of MoveCube.cpp:

```cpp
#include "MoveCube.h"
#include "TimerManager.h"

// ---------- Set-up: leave this alone ----------
AMoveCube::AMoveCube()
{
    PrimaryActorTick.bCanEverTick = true;                                  // let Tick run
    GetStaticMeshComponent()->SetMobility(EComponentMobility::Movable);   // let the cube move
}

// ---------- Your program ----------
void AMoveCube::BeginPlay()
{
    Super::BeginPlay();

    // call Hop() every 1 second, again and again
    GetWorldTimerManager().SetTimer(HopTimer, this, &AMoveCube::Hop, 1.0f, true);
}

void AMoveCube::Hop()
{
    AddActorWorldOffset(FVector(0, -100, 0));   // hop 1 m LEFT
    HopsLeft--;                                  // one hop fewer to go

    if (HopsLeft <= 0)
    {
        GetWorldTimerManager().ClearTimer(HopTimer);   // stop after 5 hops
    }
}

// ---------- Used later: leave empty for now ----------
void AMoveCube::Tick(float DeltaTime)
{
    Super::Tick(DeltaTime);
}
```

Save, **Compile**, **Simulate**. The cube hops left once a second, 5 times, and stops at **Y = -500**.

**Try it:** change 1.0f to 0.5f for faster hops, or -100 to -50 for smaller ones.

- [ ] Example 1: Location Y ends at **-500** (4A)
- [ ] Example 2: Location Z ends at **350** (4B)
- [ ] Example 3: Location X ends at **500** (4C)
- [ ] Example 4: five hops, one a second, ending at Y **-500** (4D)
- [ ] You never had to close Unreal in this part

## Part 5 · Level up: a smooth slide

Now the cube **slides** 5 m left at 1 m per second. This uses **Tick**, which runs every frame, like Unity's Update() and Arduino's loop().

### 5A · MoveCube.cpp: replace everything

```cpp
#include "MoveCube.h"
#include "TimerManager.h"

// ---------- Set-up: leave this alone ----------
AMoveCube::AMoveCube()
{
    PrimaryActorTick.bCanEverTick = true;                                  // let Tick run
    GetStaticMeshComponent()->SetMobility(EComponentMobility::Movable);   // let the cube move
}

// ---------- Your program ----------
void AMoveCube::BeginPlay()
{
    Super::BeginPlay();

    // the target: the start position, Distance to the LEFT (minus Y)
    TargetLocation = GetActorLocation() + FVector(0, -Distance, 0);
}

void AMoveCube::Tick(float DeltaTime)
{
    Super::Tick(DeltaTime);

    // move a little toward the target each frame, then stop on it
    FVector NewLocation = FMath::VInterpConstantTo(GetActorLocation(), TargetLocation, DeltaTime, Speed);
    SetActorLocation(NewLocation);
}

// ---------- Not used in this part ----------
void AMoveCube::Hop()
{
}
```

Save, **Compile**, **Simulate**. The cube slides left for 5 seconds and stops. **Location Y** reads **-500**.

| Code                                          | What it does                                                               |
|-----------------------------------------------|----------------------------------------------------------------------------|
| Distance, Speed                               | Values from the .h file (500 cm, 100 cm per second).                       |
| GetActorLocation() + FVector(0, -Distance, 0) | The start position plus 500 cm left.                                       |
| DeltaTime                                     | Seconds since the last frame, so the speed is the same on any laptop.      |
| VInterpConstantTo                             | Moves Speed × DeltaTime closer each frame and stops exactly on the target. |

> **Pick the right one:** **VInterpConstantTo**, not **VInterpTo**. VInterpTo slows down near the end and takes a long time to finish.

### 5B · Change the values without code

| Details → Movement | Value |
|--------------------|-------|
| Distance           | 800.0 |
| Speed              | 200.0 |

1. With Simulate **stopped**, click the cube. In **Details**, find **Movement**: **Distance 500**, **Speed 100**. These show because of UPROPERTY(EditAnywhere) in the .h file.
2. Type the values from the table. Both are green: safe to change.
3. **Simulate**. The cube goes 8 m in 4 seconds and stops at **Y = -800**.

> **Changed the number in the code but nothing changed?** The cube in the level keeps the value in Details. Change it in Details, or click the **↶** arrow beside the value to go back to the code's number.

- [ ] The cube **slides** left, not right, and does not jump (5A)
- [ ] It stops after about **5 seconds** at **Y = -500** (5A)
- [ ] With Distance 800 and Speed 200 it stops at **Y = -800** after about **4 seconds** (5B)

All ticked? Try the challenges, then hand it in (Part 6).

### 5C · Challenges

- Make the cube slide **right**. (Hint: one minus sign in BeginPlay.)
- Make it slide **up** 3 m. (Hint: which part of the FVector is Z?)
- Make it slide left, then come back. (Hint: in Tick, when the cube reaches TargetLocation, set a new target.)

## Part 6 · Hand it in

Record a short video of your cube moving and post it to Google Classroom.

### 6A · Record

1. Make sure Simulate is **stopped** and the viewport shows the cube.
2. Press **Windows + Alt + R**. A small recording timer appears at the edge of the screen.
3. Press **Simulate** (Alt + S). Let the cube finish moving.
4. Press **Windows + Alt + R** again to stop recording.

**What changed:** a message says the clip was saved. It is in **Videos → Captures**.

If Windows + Alt + R does nothing, record with **Free Cam 8** instead.

### 6B · Post it

1. Open the assignment in **Google Classroom** and click **Add or create → File**.
2. Pick your clip from **Videos → Captures**, then click **Hand in**.

- [ ] The clip shows the cube moving, start to finish (6A)
- [ ] The clip is attached to the Classroom assignment and it says **Handed in** (6B)

## Troubleshooting

| Problem                                                                             | Fix                                                                                                               |
|-------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------|
| Unreal asks to install a compiler                                                   | Visual Studio's C++ workloads are missing. Tell your teacher.                                                     |
| **cannot open source file "MoveCube.h"** or **uses undefined class 'CUBEMOVE_API'** | A name is different. The project must be **CubeMove** and the class **MoveCube** (see "Use these names exactly"). |
| Hundreds of errors with an **abc** icon                                             | IntelliSense noise. Set the Error List to **Build Only**; check the Output tab instead.                           |
| Nothing shows after dragging MoveCube in                                            | Set **Static Mesh** to **Cube** (3A). Still nothing: the class was made from Actor, not StaticMeshActor (2A).     |
| Warning about **Mobility**                                                          | The .cpp is missing line 8 (SetMobility). Copy the code again from 2C.                                            |
| Player view and an **eject** button appear                                          | You pressed Play. Press **Esc**, switch to **Simulate** (3C).                                                     |
| Code changed but nothing changed                                                    | You didn't Compile. Stop Simulate, then **Compile** (Ctrl + Alt + F11).                                           |
| **Live coding failed**                                                              | Close Unreal, Build Solution in Visual Studio, reopen (2D).                                                       |
| Build fails for no clear reason, project in OneDrive                                | Move the project to **C:\Unreal Projects** (1A).                                                                  |
| Changed Distance in code, cube still uses the old value                             | The level keeps the Details value. Change it in Details (5B).                                                     |

**Used a different name and want to keep it?** Every name must match in four places: the .generated.h line and the _API word in the .h, the #include line and every AMoveCube:: in the .cpp. Example: project MyProject26 and class MoveCubeRJW means MoveCubeRJW.generated.h, MYPROJECT26_API, AMoveCubeRJW.

## Cheat sheet

| Job                                       | Where                                                                     |
|-------------------------------------------|---------------------------------------------------------------------------|
| New C++ class                             | **Tools → New C++ Class → All Classes → StaticMeshActor**                 |
| Build after changing the .h (Part 2 only) | Close Unreal, Visual Studio **Build → Build Solution** (Ctrl + Shift + B) |
| Build after changing the .cpp             | Stop Simulate, **Compile** (Ctrl + Alt + F11)                             |
| Frame the cube                            | Select it, press **F**                                                    |
| Orbit around it                           | **Alt** + left mouse drag                                                 |
| Simulate / Stop                           | **Alt + S** / **Esc**                                                     |
| 5 m in Unreal                             | 500                                                                       |
| Left / up                                 | minus Y / plus Z                                                          |

## Unreal C++ and Unity C# side by side

|                      | Unreal C++                                | Unity C#                            |
|----------------------|-------------------------------------------|-------------------------------------|
| Units                | centimetres (500 = 5 m)                   | metres (5 = 5 m)                    |
| Up                   | Z (same as Blender)                       | Y                                   |
| Left                 | minus Y                                   | minus X                             |
| Jump 5 m left        | AddActorWorldOffset(FVector(0, -500, 0)); | transform.Translate(-5, 0, 0);      |
| Runs once at start   | BeginPlay()                               | Start()                             |
| Runs every frame     | Tick(DeltaTime)                           | Update() with Time.deltaTime        |
| Step with a pause    | timer (SetTimer)                          | yield return new WaitForSeconds(1); |
| Move toward a point  | FMath::VInterpConstantTo                  | Vector3.MoveTowards                 |
| Files                | two (.h and .cpp)                         | one (.cs)                           |
| After changing code  | Compile (.cpp) or build (.h)              | save; Unity compiles                |
| Values in the editor | UPROPERTY(EditAnywhere)                   | public                              |
