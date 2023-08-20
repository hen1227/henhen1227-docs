# BluetoothSerialJoystick Class

The `BluetoothSerialJoystick` class encapsulates the behavior and attributes of a joystick connected via Bluetooth. It provides methods for retrieving joystick's position, rotation, and magnitude.

## Table of Contents

- [Constructors](#constructors)
- [Methods](#methods)

## Constructors

### BluetoothSerialJoystick()

Default constructor that initializes joystick values to zero.

### BluetoothSerialJoystick(double rot, double mag)

Parameterized constructor for specifying initial joystick values.

**Parameters**:

- `rot`: Initial rotation value in degrees.
- `mag`: Initial magnitude or distance from the center.

---

## Methods

### void updateValues(double rot, double mag)

Updates the joystick's rotation and magnitude values.

**Parameters**:

- `rot`: New rotation value in degrees.
- `mag`: New magnitude or distance from center.

### double getX()

Retrieve the joystick's horizontal (X-axis) position.

**Returns**: the `x` position of the joystick, ranging from -1 to 1.

### double getY()

Retrieve the joystick's vertical (Y-axis) position.

**Returns**: the `y` position of the joystick, ranging from -1 to 1.

### double getRotationDeg(double offset = 0)

Retrieve the joystick's rotation in degrees.

**Parameters**:

- `offset`: (Optional) Degree offset to adjust the returned value.

**Returns**: The rotation of the joystick in degrees, adjusted by the offset.

### double getRotationRad(double offset = 0)

Retrieve the joystick's rotation in radians.

**Parameters**:

- `offset`: (Optional) Radian offset to adjust the returned value.

**Returns**: The rotation of the joystick in radians, adjusted by the offset.

### double getMagnitude()

Retrieve the joystick's distance from the center.

**Returns**: The magnitude of the joystick's position, with a maximum of 1.00.
