---
title: Overview of the Connection Process
---

# Overview of the Connection Process

Connecting your iOS app to an Arduino device through Bluetooth may seem daunting at first, but with the right steps, it becomes a straightforward task. This page provides a high-level understanding of the process to bridge the two worlds of your iOS app and Arduino.

## What We'll Achieve

At the end of this connection process:

1. Your iOS app will be able to discover and pair with your Bluetooth-equipped Arduino device.
2. Your Arduino will be set up to listen for incoming Bluetooth connections and communicate data.
3. You'll be familiar with the foundational operations of the `BluetoothSerial` class, understanding how it refreshes to capture joystick positions and button presses.

## The Connection Pipeline

Here's a summarized pipeline of the connection process:

### 1. **Physical Connection**

Your Bluetooth chip needs to be attached to your microcontroller. The primary communication with most chips happens via Rx (Receive) and Tx (Transmit) pins. If you're new to Rx and Tx pins, it's worth diving deeper into their functions and operations.

### 2. **Software Bridge**

With the physical setup ready, the next layer is the software. Every update cycle (usually within the Arduino `loop()` function), the Bluetooth module reads its buffer to check for new data.

### 3. **Data Refresh with BluetoothSerial**

Each time the `readSerial` method of the `BluetoothSerial` class is invoked, the class updates its internal state. It captures:

- The latest positions of the joysticks.
- A list of buttons that are currently pressed.

## Why is this Important?

Establishing a robust and reliable connection ensures:

- **Seamless Interaction**: A strong connection ensures that joystick movements and button presses on the iOS app are reflected in real-time on the Arduino side.
- **Expandability**: Once this foundational connection is established, you can extend its functionalities, such as sending custom alerts from the Arduino to the iOS app, or even reflecting sensor data from the Arduino on the app.

## What's Next?

With a clear view of what lies ahead, let's dive into ensuring you have everything ready. The next page will walk you through the prerequisites and the initial setup steps. Onward!
