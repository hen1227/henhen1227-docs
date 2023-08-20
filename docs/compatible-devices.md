---
title: Compatible Devices
sidebar_position: 2
---

# Hardware Introduction

When working with Bluetooth communications, especially in embedded environments like with Arduino, the hardware forms the foundation of all operations. This introduction provides a comprehensive look into how hardware connections are made and lists some of the common devices compatible with our app/library.

## Connection Basics

Every microcontroller is built with pins designated for specific functions. Among these are the Rx (Receive) and Tx (Transmit) pins, which play a pivotal role in serial communication. The essence of these pins is to facilitate a two-way communication channel where:

- **Rx (Receive)**: This pin is designed to receive data. It listens for incoming signals/data from other devices.
- **Tx (Transmit)**: As the name suggests, this pin sends out data/signals to other devices.

It's crucial to ensure that the Tx pin of one device connects to the Rx pin of another (and vice-versa) to ensure proper two-way communication.

## SoftwareSerial Library

In situations where the built-in Rx and Tx pins are either unavailable or are needed for other tasks, the SoftwareSerial library in Arduino comes to the rescue. This powerful library lets users designate any digital pins for serial communication, providing a lot of flexibility in hardware configurations. This means that if the default Rx/Tx pins are occupied, you can use SoftwareSerial to bypass this limitation.

## Compatible Devices

While our documentation provides a list of devices known to be compatible with our app/library, it's essential to remember that this list is by no means exhaustive. As the tech landscape evolves and new devices emerge, some might be compatible, even if not explicitly listed.

### Compatible Bluetooth Modules

> **Note**: This library probably works with a lot more bluetooth modules. The list below shows all the bluetooth modules that have been tested.

- **HM10**: Easy to use bluetooth module. (approx. $12).

:::warning Important
The iOS app is only compatible with BLE (Bluetooth Low Energy) modules. This is due to the built-in technology in iOS devices.
:::

### NOT Compatible Bluetooth Modules

The following bluetooth modules are a few examples of devices that are **NOT** compatible with the iOS app:

- **HC-05**: This is a classic bluetooth module. It is not compatible with the iOS app because it is not BLE (Bluetooth Low Energy).
- **HC-06**: This is a classic bluetooth module. It is not compatible with the iOS app because it is not BLE (Bluetooth Low Energy).


### Compatible Microcontrollers

> **Note**: This library works with almost all microcontrollers. The list below shows all the microcontrollers that have been tested. 

- Teensy 3.1/3.2
- Arduino Uno
- Arduino Nano

Always ensure you consult the respective device's datasheet or manual to confirm compatibility and to understand its specific connection requirements.

> **Note**: We encourage users to contribute and expand these lists. If you've successfully used our app/library with a device not listed, please let us know!



## Wrapping Up

Hardware configuration and compatibility form the backbone of any successful project in this domain. Ensure your connections are accurate, and always stay updated with the latest compatibility lists to make the most of our app/library.
