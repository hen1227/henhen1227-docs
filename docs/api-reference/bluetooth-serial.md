---
sidebar_position: 1
---


# BluetoothSerial Class

`BluetoothSerial` manages the Bluetooth communication, ensuring efficient reading/writing of messages, sending alerts, and handling connected devices. This class encapsulates the intricacies of Bluetooth communication, making it straightforward for the user to send and receive data.

## Table of Contents

- [Constructors](#constructors)
- [Methods](#methods)

## Constructors

### BluetoothSerial(HardwareSerial& serial, bool verbose = true)

Initializes the `BluetoothSerial` object.

**Parameters**:

- `serial`: Reference to a HardwareSerial object (e.g., Serial1).
- `verbose`: (Optional) Indicates if debug messages should be printed to the Serial. Default is `true`.

---

## Methods

### void begin(int baudRate = 9600)

Initializes the serial communication.

**Parameters**:

- `baudRate`: (Optional) The baud rate for serial communication. Default is `9600`.

### void readSerial(char terminator = '\n', int terminatingTimeout = 50)

Reads and processes input from the Bluetooth serial connection. Required to update the events sent from the app.

**Parameters**:

- `terminator`: (Optional) Character that indicates the end of a message. Default is '\n'.
- `terminatingTimeout`: (Optional) Duration (in milliseconds) to wait for the terminator. Default is 50ms.

### void writeSerial(String message)

Sends a message a raw message to the app. The BluetoothSerial Connect app won't process these. Longer messages may experience delays.

**Parameters**:

- `message`: The content to be sent.

### void sendAlert(String message)

Sends an alert message to the app. Longer messages may experience delays.

**Parameters**:

- `message`: Alert content.

### void setDisplay(String message, int displayID)

Displays a message on a display element in the app. Longer messages may experience delays.

**Parameters**:

- `message`: The content to display on the app.
- `displayID`: Identifier for a specific display element in the app.

### void clearBuffer()

Clears the record of pressed buttons. After calling this method, all button states are set to "not pressed" until they are read again by `readSerial()`. Typically called at the end of the Arduino `loop()` function.

### String getMessage();

Gets string messages from app. Sent through the console section of the board.

### bool isButtonPressed(int id)

Checks if a specific button is currently pressed.

**Parameters**:

- `id`: The identifier for the button as defined in the app.
- **Returns**: `true` if the button is pressed, `false` otherwise.

### bool isJoystickUpdated(int id);

Checks if a specific joystick has been updated since last call.

**Parameters**:

- `id`: The identifier for the joystick as defined in the app.
- **Returns**: True if the joystick is updated, false otherwise.

### BluetoothSerialJoystick getJoystick(int id)

Retrieves the current state of a specific joystick.

**Parameters**:

- `id`: The identifier for the joystick as defined in the app.
- **Returns**: A `BluetoothSerialJoystick` object representing the joystick's current state.