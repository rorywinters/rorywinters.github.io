---
title: Separate the Wheels
program: Blender
lesson: 11
blurb: Two wheels built as one object share one origin dot, so they can't spin on their own axles. Split them into separate objects and give each its own origin.
---
When two wheels are built inside one object, they share **one origin dot**. Blender treats them as one object, so they can't spin on their own axles. You split them into separate objects, then give each one its own origin. You use this on the [Wedge Sumo Robot](../wedge-robot/).

There are two ways: split **every** loose piece at once, or pick out **one piece at a time**.

This lesson has no heavy settings.

```brief
Part 1 · Make two joined wheels
1 · Wheels | Cylinder · Rotation Y 90 | Edit Mode · Duplicate · Move X 3 · one origin dot
Part 2 · Separate all the pieces
2A · Split | Edit Mode | Mesh → Separate → By Loose Parts
2B · Origins | Object Mode · both selected | Set Origin → Origin to Geometry
Part 3 · Separate one piece
3 · One wheel | Select → None · hover · Select Linked (L) | Separate → Selection
```

## Part 1 · Make two joined wheels

Skip this part if you already have wheels that share one origin, such as on your robot.

| Add Cylinder (operator panel) | Value |
| --- | --- |
| Radius | 1 m |
| Depth | 0.4 m |
| Rotation Y | 90° |

| Duplicate (Edit Mode) | Value |
| --- | --- |
| Move X | 3 m |

1. Start a new **General** file. Click the cube and choose **Object → Delete**. (Shortcut: X)
2. Choose **Add → Mesh → Cylinder** and type the values in the operator panel. A wheel stands on its edge.
3. Choose **Edit Mode** and **Select → All**. (Shortcut: Tab, A)
4. Choose **Mesh → Duplicate**, press **X**, type **3** and press **Enter**. A second wheel appears beside the first. (Shortcut: Shift+D, X, 3, Enter)
5. Return to **Object Mode** and click either wheel. Both wheels highlight, and there is only **one** orange origin dot, on the first wheel.

- [ ] Two wheels side by side, highlighting together, with one origin dot

## Part 2 · Separate all the pieces at once

### 2A · Split by loose parts

1. With the wheels selected, choose **Edit Mode**. (Shortcut: Tab)
2. Choose **Mesh → Separate → By Loose Parts**. (Shortcut: P → By Loose Parts)
3. Return to **Object Mode**. (Shortcut: Tab)

In the **Outliner** there are now two objects, for example **Cylinder** and **Cylinder.001**. Click one wheel: only that wheel highlights.

### 2B · Give each wheel its own origin

1. Select both wheels (click one, **Shift**-click the other).
2. Choose **Object → Set Origin → Origin to Geometry**.

The second wheel gets its own orange dot in its centre. Each wheel now rotates around its own axle.

> **Pick the right one:** **Origin to Geometry**, not **Geometry to Origin**. Geometry to Origin moves the wheel to where the dot was, so the second wheel jumps onto the first.

- [ ] Two objects in the Outliner
- [ ] Each wheel has its own origin dot in its centre

## Part 3 · Separate one piece at a time

Use this method when you only want to pull out one part, such as one wheel from a robot body.

1. Select the object and choose **Edit Mode**. (Shortcut: Tab)
2. Choose **Select → None**. (Shortcut: Alt+A)
3. Hover over one wheel and choose **Select → Select Linked → Linked**, or just press **L** over it. The whole wheel turns orange, and nothing else. (Shortcut: L)
4. Choose **Mesh → Separate → Selection**. (Shortcut: P → Selection)
5. Return to **Object Mode**, select the new wheel, and choose **Object → Set Origin → Origin to Geometry**.

That wheel is now its own object with its own origin dot. The rest stays as it was.

- [ ] The wheel you picked is its own object with its own origin dot

## Troubleshooting

| Problem | Fix |
| --- | --- |
| By Loose Parts makes only one object | The wheels are joined by an edge or face, so they're one piece. Use Part 3 and select by hand instead. |
| L selects the whole robot | The wheel is joined to the body. Use Select → Box and Edit Mode instead, then Separate → Selection. |
| The new wheel still spins around the old dot | Do Set Origin → Origin to Geometry with the new wheel selected. |
| The wheel jumped to another spot | You chose Geometry to Origin. Undo (Ctrl+Z) and choose Origin to Geometry. |
