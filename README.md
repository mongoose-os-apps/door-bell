# IoT door bell

## Overview

This is the default Mongoose OS app + modified init.js.
It's for ringing an IoT bell over MQTT. 

For the bell, you can make one with a cheap reception bell and a 
5V solenoid. Make sure you use a relay and a relay drive circuit
and don't connect the solenoid directly to the GPIO pin.

Change relayPin, topic, or bellNumber if necessary.

## How to install this app

- Install and start [mos tool](https://mongoose-os.com/software.html)
- Switch to the Project page, find and import this app, build and flash it:

<p align="center">
  <img src="https://mongoose-os.com/images/app1.gif" width="75%">
</p>
