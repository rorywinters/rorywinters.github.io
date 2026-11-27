---
title: Set Up Carbide Motion for the Nomad 3
program: Nomad
blurb: Install Carbide Motion, run the Machine Setup Wizard for the Nomad 3, then connect and home the machine for the first time. Do this once on each computer before any Nomad job. About 20 minutes.
---
You set up a computer to run the Carbide 3D Nomad 3: install Carbide Motion, tell it you have a Nomad 3, then connect and home the machine. You only do this once on each computer. These steps are for **Carbide Motion build 667** on Windows.

- **Learning objective:** We are learning to set up the control software for a CNC mill so the computer and the machine can talk to each other.
- **Prior knowledge:** none. This is the first Nomad lesson.
- **What you need:** a Windows computer, the Nomad 3 with its power cable and USB cable, and [Carbide Motion](https://carbide3d.com/carbidemotion/download) (free download from Carbide 3D).
- **Time:** about 20 minutes

### Success criteria

- I can install Carbide Motion and plug the Nomad 3 into the computer.
- I can run the Machine Setup Wizard, send it the Nomad 3 settings, and home the machine.
- I can connect to the Nomad 3 from the start screen and home it again.

### Key vocabulary

| Word | Meaning |
| --- | --- |
| **Carbide Motion** | The free program that controls Carbide 3D machines. It sends the cutting instructions (G-code) to the Nomad. |
| **Machine Setup Wizard** | A set of screens in Carbide Motion that asks which machine you have and saves the answers. |
| **Spindle** | The motor that spins the cutter. The Nomad 3 has its own built-in spindle. |
| **Configuration** | The saved settings that tell Carbide Motion which machine it is talking to. |
| **Connect to Cutter** | The button that opens the USB link between Carbide Motion and the machine. |
| **Homing** | The machine moves until it touches its limit switches, so it knows exactly where it is. On the Nomad 3, home is the back right corner. |

| Colour | Meaning |
| --- | --- |
| Green | Safe to change. Nothing moves. |
| Amber | Changes how Carbide Motion talks to the machine. Fine at the values given. |
| Red | Use with caution. The machine moves, or a wrong choice sends it the wrong settings. |

The machine type, **Nomad 3** (2B and 2D), is red: picking a Shapeoko or another Nomad gives the Nomad 3 the wrong settings. **Initialize Machine** (2E and 3A) is red too: the spindle moves, so the door is shut and hands are out.

### Where things are

| Thing | Where on the screen |
| --- | --- |
| **Setup New Machine** | Carbide Motion start screen: green button at the bottom middle |
| **Connect to Cutter** | Carbide Motion start screen: light green button in the middle |
| **Next** / **Cancel** | Machine Setup Wizard: bottom right of every page |
| **Back arrow** ← | Machine Setup Wizard: top left, beside the words Machine Setup Wizard |
| **Machine list** | Machine Setup Wizard, power-up page: drop-down box at the top |
| **Connect to Machine**, **Download**, **Initialize Machine**, **Save Changes** | Machine Setup Wizard: middle of their pages |
| **Finish** | Machine Setup Wizard, last page: bottom right, where Next was |
| **RUN** / **SETTINGS** | Carbide Motion: green bar along the top, right side |

If the wizard window disappears, it is usually hidden behind the main Carbide Motion window. Click it on the Windows taskbar (bottom of the screen) to bring it back.

### Shop safety: read before you start

- **Safety glasses on** whenever the Nomad door is open.
- **Clear the bed.** Take tools, wrenches and loose parts out of the Nomad before it moves.
- **Door shut** whenever the machine moves. Keep hands out while it homes.
- **Emergency stop = the Power Switch** on the Nomad ([Nomad 3 Getting Started Guide](https://cdn.sparkfun.com/assets/3/5/c/6/0/Nomad3_Getting_Started_Guide_12_22_2020_v1_smaller.pdf)). Know where it is before you press Initialize.

```brief
Part 1 · Install and plug in
1A · Install | Download Carbide Motion | Run the installer
1B · Plug in | USB + power cable | Power off for now
Part 2 · Machine Setup Wizard
2A · Start the wizard | Not Connected screen | Setup New Machine · Next
2B · Pick the machine | Drop-down: Nomad 3 | Power on · Next
2C · Connect | Verify Power is On | Connect to Machine · Connection Established · Next
2D · Download settings | Machine Type: Nomad 3 | Download · Next
2E · Home | Door shut · bed empty | Initialize Machine · Next
2F · Spindle | Spindle Type: Nomad 3 spindle · BitRunner off | Save Changes · Next
2G · Options | Units: Inch · Remote Access off | Save Changes · Next
2H · Done | Setup Complete | Finish
Part 3 · Connect and home
3A · Connect and home | Connect to Cutter | Door shut · Initialize Machine
Extra · Finished early? (optional)
Check | SETTINGS · machine shows Nomad 3 | Jog a little with the arrows
```

## Part 1 · Install and plug in

### 1A · Install Carbide Motion

| Item | Value |
| --- | --- |
| Program | [Carbide Motion](https://carbide3d.com/carbidemotion/download) |
| Build | 667 |

1. Open the [Carbide Motion download page](https://carbide3d.com/carbidemotion/download) and download the Windows version.
2. Open the downloaded installer and follow its steps. If Windows asks for an administrator password, ask your teacher.
3. When it finishes, a **Carbide Motion** icon is in the Start menu.

### 1B · Plug in the Nomad 3

1. Check the Nomad's **Power Switch** is off.
2. Plug the power cable into the Nomad and the wall.
3. Plug the USB cable into the back of the Nomad and into the computer.
4. Take everything out of the Nomad's bed and close the door.

- [ ] Carbide Motion is installed and in the Start menu
- [ ] The Nomad has its power and USB cables plugged in, with the power still off
- [ ] The bed is empty and the door is shut

## Part 2 · Machine Setup Wizard

### 2A · Start the wizard

1. Open **Carbide Motion** from the Start menu. It opens on the **Not Connected** screen and says **No machine found**. That is normal: it has not been told what machine you have yet.

@figure cm-not-connected.png The Carbide Motion 667 start screen. Connect to Cutter (middle) is pale because no machine is set up yet. Setup New Machine is the darker green button at the bottom.

2. Click **Setup New Machine** (green button, bottom middle). The **Machine Setup Wizard** window opens on the **Introduction** page.

@figure wizard-introduction.png The Introduction page. Your answers are saved as you go, page by page.

3. Click **Next** (bottom right).

### 2B · Pick the Nomad 3 and power it on

| Setting | Value |
| --- | --- |
| Machine | **Nomad 3** (red) |
| Nomad Power Switch | On |

1. The next page shows a drop-down box at the top and a picture of a machine. Click the drop-down box. A list of Carbide 3D machines opens.
2. Click **Nomad 3**. The picture changes to show where the Nomad 3's power switch is.

@figure wizard-machine-list.png The machine list. Pick Nomad 3, not Nomad 4, Nomad Pro or Nomad 883. The pictures underneath show the Shapeoko until you pick.

3. Turn on the Nomad's **Power Switch**. Its lights come on.
4. Click **Next**.

### 2C · Connect inside the wizard

The **Verify Power is On** page links Carbide Motion to the Nomad through the USB cable.

1. Look at the Nomad: its power light should be on.
2. Click **Connect to Machine** (middle of the page). Under it, **Wait for connection...** and **Wait for reply from machine...** stay on the page while Carbide Motion talks to the Nomad. After a few seconds, **Connection Established** appears in bold underneath.

@figure wizard-connection-established.png The Verify Power is On page after connecting. The two "Wait for..." lines stay; the bold Connection Established line underneath is the one that tells you it worked.

3. Click **Next**.

### 2D · Download the Nomad 3 settings

| Setting | Value |
| --- | --- |
| Machine Type, first box | **Nomad 3** (red) |
| Machine Type, size box | Leave it as it shows for the Nomad 3 |

The **Download Settings to your Machine** page sends the Nomad 3's settings (its size, speeds and limits) into the machine itself. Do not skip it on a new machine.

1. Click the first **Machine Type** box (middle of the page). It may show a Shapeoko to start with. Pick **Nomad 3** from the list.
2. Look at the second box, the machine size. The Nomad 3 comes in one size only, so leave it as it shows.
3. Click **Download**. Carbide Motion sends the settings to the Nomad.
4. Click **Next**.

@figure wizard-download-settings.png The Download Settings page. This picture was taken on a Shapeoko 5 Pro 2x2: on the Nomad, pick **Nomad 3** in the first box instead.

### 2E · Initialize and home the Nomad

| Item | Value |
| --- | --- |
| Door | Shut, bed empty |
| **Initialize Machine** | Red: the machine moves |
| Home position | Back right corner |

The **Initialize and Home your Machine** page homes the Nomad for the first time: it moves until it touches its switches, so it knows exactly where it is.

1. Check the door is shut and nothing is in the bed. Keep your hands out.
2. Under **Homing Switch State** (middle of the page) are four round dots: **Home X**, **Home Y**, **Home Y2** and **Home Z**. Each one fills in while its switch is pressed. You don't need to touch them: they are only for testing the switches.
3. Click **Initialize Machine**. The Nomad moves to the back right corner, one axis at a time, and stops.
4. Click **Next**.

@figure wizard-initialize-home.png The Initialize and Home page before homing. Home Y2 is for machines with two Y motors, like the Shapeoko; the Nomad 3 has one.

### 2F · Spindle Setup

| Setting | Value |
| --- | --- |
| Spindle Type | The Nomad 3's own spindle (amber) |
| Use BitRunner to control router | Unticked |
| Show popups on RPM change | As it shows |

The **Spindle Setup** page tells Carbide Motion what spins the cutter. The Nomad 3 has its own built-in spindle, and the program sets its speed by itself. The other choices are routers for the Shapeoko.

1. Click the **Spindle Type** box. Pick the Nomad 3's spindle from the list.
2. Leave **Use BitRunner to control router** unticked. The BitRunner is a Shapeoko add-on.
3. Leave **Show popups on RPM change** as it is.
4. Click **Save Changes**, then **Next**.

@figure wizard-spindle-setup.png The Spindle Setup page, taken on a Shapeoko 5 Pro with the Carbide Compact Router. On the Nomad 3, pick its own spindle in the Spindle Type box.

### 2G · Set Machine Options

| Setting | Value |
| --- | --- |
| Select User Interface Units | **Inch** (green) |
| Enable Touch Keyboard | As it shows (green) |
| Enable Remote Access | Unticked (green) |

The **Set Machine Options** page only changes how Carbide Motion looks. Nothing here changes how the Nomad cuts. The **units** are just what the screen shows. They match the Groove Block lessons, which are in inches.

1. Click the **Select User Interface Units** box (top of the page) and pick **Inch**.
2. Leave **Enable Touch Keyboard** as it is. It puts a keyboard on the screen for touchscreens.
3. Leave **Enable Remote Access** unticked.
4. Click **Save Changes**, then **Next**.

@figure wizard-machine-options.png The Set Machine Options page. This picture shows MM; pick Inch to match the Groove Block lessons.

### 2H · Setup Complete

1. The last page says **Setup Complete** and **Your machine should now be ready to run.**
2. Click **Finish** (bottom right, where Next was). The wizard closes. Carbide Motion saves the setup and disconnects from the Nomad, so you connect again in Part 3.

@figure wizard-setup-complete.png The Setup Complete page. Finish replaces Next at the bottom right.

- [ ] The wizard shows **Nomad 3** as the machine
- [ ] The wizard said **Connection Established** and the settings were downloaded
- [ ] The Nomad homed to the back right corner and stopped
- [ ] The wizard closed and Carbide Motion is back on its start screen

## Part 3 · Connect and home

### 3A · Connect and home the Nomad

| Item | Value |
| --- | --- |
| Door | Shut |
| Home position | Back right corner |

1. Click **Connect to Cutter** (middle of the start screen). The screen changes to show the machine is connected.
2. Check the door is shut and nothing is in the bed.
3. Click **Initialize Machine**. The Nomad moves to the back right corner, one axis at a time, and stops. Keep your hands out while it moves.

- [ ] Carbide Motion says it is connected
- [ ] The Nomad homed to the back right corner and stopped

## Extra · Finished early?

Optional.

- **Check the setup:** click **SETTINGS** (top right). Check that the machine shown is the **Nomad 3**.
- **Try jogging:** click **Jog** and press the **arrow keys** a few times. The spindle moves left, right, back and forward. Press **Page Up** to lift it. Click **Initialize Machine** again to send it home.

## Troubleshooting

| Problem | Fix |
| --- | --- |
| No **Connection Established** in the wizard | Check the Power Switch is on and the USB cable is pushed in at both ends, then click **Connect to Machine** again. |
| **Connect to Cutter** stays pale, or **No machine found** | Check the Power Switch is on and the USB cable is pushed in at both ends. Try another USB port, then click Connect to Cutter again. |
| Wrong machine picked in the wizard | Click **Setup New Machine** again and start over, picking **Nomad 3**. |
| The wizard window disappeared | It is behind the main window. Click it on the Windows taskbar. |
| "Please close machine door" or the screen says BUSY | The door is not fully shut, so the interlock holds the machine. Close the door firmly. |
| The installer asks for an administrator password | Ask your teacher. |
