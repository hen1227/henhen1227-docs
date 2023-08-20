---
title: Software Configuration
---

# Software Configuration

Once the hardware is set up, the next crucial step is ensuring the software is correctly configured. This guide provides an overview of how to set up your Arduino sketch to communicate with the HM10 Bluetooth chip.

## Using the Built-in Serial Ports

Every standard Arduino board comes equipped with at least one hardware serial port. For example, on an Arduino Uno, the built-in Serial port uses pins 0 (Rx) and 1 (Tx). To use the built-in serial, you would typically use the `Serial` keyword in your Arduino sketches. This is especially straightforward but can pose conflicts if these pins are otherwise engaged, say, during code upload.

```c++
#define blueSerial Serial1
```

Note that some Arduino boards come equipped with multiple hardware serial ports, so make sure that you are using the same one that bluetooth module is connected to. 

## Using Software Serial Ports
For those who wish to use pins other than the default Rx and Tx for communication (or if you're using an Arduino with multiple serial ports), the SoftwareSerial library allows this. With this library, you can turn any digital pins into Rx and Tx.

To use SoftwareSerial, you'd define which pins you want to act as Rx and Tx:

```c++
#include <SoftwareSerial.h>
SoftwareSerial blueSerial(2, 3);  // RX, TX
```

In the above case, pin 2 would act as Rx and pin 3 as Tx.

## Example Sketch
Below is a complete example showing how to read data from the HM10 Bluetooth chip using the built-in Serial port:

```c++
/*
   Hello_World.ino
   Henry Abrahamsen
   8/12/23
   Simple code using the basic features of Bluetooth Serial
   Details available at https://docs.henhen1227.com/
*/

#include <BluetoothSerial.h>

#define bluetoothModuleSerial Serial1

// Create a BluetoothSerial object
// Serial port that the bluetooth module is connected
// Verbose mode: true
BluetoothSerial blueSerial(bluetoothModuleSerial, true);

void setup() {
  // Start communication with bluetooth device
  bluetoothModuleSerial.begin(9600);
  Serial.begin(9600);

  Serial.println("Setup Complete");
}


void loop() {
  blueSerial.readSerial();

  // If the button with id `B0`
  if (blueSerial.isButtonPressed(0)) {
    Serial.println("The button `B0` has been pressed!");

    // Send alert to the BluetoothSerial Connect App
    blueSerial.sendAlert("Hello from the Arduino");
  }

  // Check if the Joystick with id `J0` has updated
  if (blueSerial.isJoystickUpdated(0)) {
      
    // Get the Joystick object
    BluetoothSerialJoystick joystick = blueSerial.getJoystick(0);

    // Get the Joysticks rotation and magnitude
    String rotation = String(joystick.getRotationDeg(), 0);
    String magnitude = String(joystick.getMagnitude() * 100, 0); // As a percent %

    /// String(a, 0) is the double a with 0 trailing zeros as a String

    // Update the display inside the BluetoothSerial Connect App
    blueSerial.setDisplay("Joystick: " + rotation + "deg, " + magnitude + "%", 0);
  }
}
```

Make sure you've selected the right board and port in the Arduino IDE before uploading the sketch.

## BluetoothSerial Connect Setup

Download the latest version of the BluetoothSerial Connect app from the Apple App Store. Once you've opened the app, click `Connect Board` and select the Bluetooth device you wish to connect to. Add a "Hello Board" from `Example Boards`.


## Wrapping Up
Software configuration is as crucial as the hardware setup. Properly configured software ensures that the messages sent via Bluetooth are accurately interpreted by your Arduino setup.
