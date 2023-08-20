---
sidebar_position: 1
---

# Introduction

Welcome to the BluetoothSerial library documentation. This library offers an effortless method to establish Bluetooth connections between your Arduino project and your iOS app. In this documentation, we'll guide you through the initial setup, provide a comprehensive overview of the library's capabilities, and assist you in achieving seamless communication between devices.

## Getting Started

Before diving into the implementation details, ensure you have the following prerequisites:

### Prerequisites

1. **Arduino IDE**: Make sure you have the [Arduino IDE](https://www.arduino.cc/en/main/software) installed.
2. **BluetoothSerial Library**: Download the latest release of the BluetoothSerial library from our GitHub repository.
3. **iOS App**: Ensure your iOS device has our companion app installed (link provided).
4. **Compatible Bluetooth Module**: While a comprehensive list of compatible modules can be found [here](compatible-devices), common modules include the HC-05, HC-06, and ESP32.

### Installation

1. Open the Arduino IDE.
2. Navigate to **Sketch** > **Include Library** > **Add .ZIP Library...**
3. Locate and select the downloaded `BluetoothSerial.zip` file.
4. Ensure the library has been added by checking **Sketch** > **Include Library** for the `BluetoothSerial` entry.

## Library Overview

The `BluetoothSerial` library consists of two primary classes:

1. **BluetoothSerial**: Manages the Bluetooth communication, handling tasks like reading/writing messages, sending alerts, and managing connected devices.
2. **BluetoothSerialJoystick**: Represents a joystick's state, with functionalities to retrieve joystick position and rotation in various formats.

For detailed explanations and examples of each class and function, navigate to the **API Reference** section.

## Next Steps

- **Hello World Tutorial**: Start with the [Hello World](/docs/hello-world/) tutorial to establish a basic connection and send "Hello, World!" from your Arduino to the iOS app.
- **Compatible Bluetooth Chips**: Check out our detailed [list](/docs/compatible) of supported Bluetooth chips and modules.
- **API Reference**: Dive deep into each class, function, and method available in the library in our [API Reference](link-to-api-reference) section.

---

We hope this documentation provides clarity on using the BluetoothSerial library. Happy coding!
