'use strict';

goog.provide('Blockly.Msg.raspberrypi.en');

goog.require('Blockly.Msg');

MSG.catRaspberryPi = "Raspberry Pi";

MSG.raspberrypi_description = "The Raspberry Pi is a series of small single-board computers developed in the United Kingdom by the Raspberry Pi Foundation to promote the teaching of basic computer science in schools and in developing countries."

Blockly.Msg.RASPBERRYPI_DIGITAL_PIN_TITLE = "D"
Blockly.Msg.RASPBERRYPI_DIGITAL_PIN_TOOLTIP = "Digital pin number";

Blockly.Msg.RASPBERRYPI_ANALOG_PIN_TITLE = "A"
Blockly.Msg.RASPBERRYPI_ANALOG_PIN_TOOLTIP = "Analog pin number";

Blockly.Msg.RASPBERRYPI_PWM_PIN_TITLE = "PWM"
Blockly.Msg.RASPBERRYPI_PWM_PIN_TOOLTIP = "PWM pin number";

Blockly.Msg.RASPBERRYPI_DEVICE_PIN_TOOLTIP = "Device pin number";

Blockly.Msg.RASPBERRYPI_PIN_STATUS_TOOLTIP = "GPIO pin status";

Blockly.Msg.RASPBERRYPI_PIN_IRQ_TRIGGER = "irq trigger";
Blockly.Msg.RASPBERRYPI_PIN_IRQ_TRIGGER_TOOLTIP = "IRQ trigger";


Blockly.Msg.RASPBERRYPI_CONNECT_WIFI_TITLE1 = "Connect WiFi"
Blockly.Msg.RASPBERRYPI_CONNECT_WIFI_TITLE2 = "Country"
Blockly.Msg.RASPBERRYPI_CONNECT_WIFI_TITLE3 = "Ssid"
Blockly.Msg.RASPBERRYPI_CONNECT_WIFI_TITLE4 = "Password"
Blockly.Msg.RASPBERRYPI_CONNECT_WIFI_TOOLTIP = "Connect WiFi, Please enter the country's abbreviation (2 uppercase letters), reference link: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2";

Blockly.Msg.RASPBERRYPI_TASKMGR_TITLE1 = "get";
Blockly.Msg.RASPBERRYPI_TASKMGR_TITLE2 = "value";
Blockly.Msg.RASPBERRYPI_TASKMGR_TOOLTIP = "Get CPU、temperature、internal storage、Disk share value.";





Blockly.Msg.RASPBERRYPI_PIN_SET_VALUE_TITLE1 = "set pin";
Blockly.Msg.RASPBERRYPI_PIN_SET_VALUE_TITLE2 = "value to";
Blockly.Msg.RASPBERRYPI_PIN_SET_VALUE_TOOLTIP = "Set pin value to low/high";

Blockly.Msg.RASPBERRYPI_PIN_GET_VALUE_TITLE1 = "get pin";
Blockly.Msg.RASPBERRYPI_PIN_GET_VALUE_TITLE2 = "value";
Blockly.Msg.RASPBERRYPI_PIN_GET_VALUE_TOOLTIP = "Get pin value";

Blockly.Msg.RASPBERRYPI_PIN_ON_TITLE1 = "set pin";
Blockly.Msg.RASPBERRYPI_PIN_ON_TITLE2 = "on";
Blockly.Msg.RASPBERRYPI_PIN_ON_TOOLTIP = "Set pin on";

Blockly.Msg.RASPBERRYPI_PIN_OFF_TITLE1 = "set pin";
Blockly.Msg.RASPBERRYPI_PIN_OFF_TITLE2 = "off";
Blockly.Msg.RASPBERRYPI_PIN_OFF_TOOLTIP = "Set pin off";

Blockly.Msg.RASPBERRYPI_PIN_IRQ_TITLE1 = "add event detect";
Blockly.Msg.RASPBERRYPI_PIN_IRQ_TITLE2 = "pin";
Blockly.Msg.RASPBERRYPI_PIN_IRQ_TITLE3 = "trigger";
Blockly.Msg.RASPBERRYPI_PIN_IRQ_TITLE4 = "handler";
Blockly.Msg.RASPBERRYPI_PIN_IRQ_TOOLTIP = "The event_detected() function is designed to be used in a loop with other things, \n\
        but unlike polling it is not going to miss the change in state of an input while the CPU is busy working on other things. ";



Blockly.Msg.RASPBERRYPI_SERVO_SET_ANGLE_TITLE1        = "Servo pin"
Blockly.Msg.RASPBERRYPI_SERVO_SET_ANGLE_TITLE2        = "set angle"
Blockly.Msg.RASPBERRYPI_SERVO_SET_ANGLE_TITLE3        = "time"
Blockly.Msg.RASPBERRYPI_SERVO_SET_ANGLE_TOOLTIP       = "Sets the angle of the servo:\n\
        angle is the angle to move to in degrees.\n\
        time is the number of milliseconds to take to get to the specified angle. If omitted, then the servo moves as quickly as possible to its new position."
        


Blockly.Msg.RASPBERRYPI_I2C_IS_READY_TITLE1 = "get I2C  status";
Blockly.Msg.RASPBERRYPI_I2C_IS_READY_TOOLTIP = "Check if an I2C device responds to the given address.";

Blockly.Msg.RASPBERRYPI_I2C_SCAN_TITLE1 = "Scan I2C  address";
Blockly.Msg.RASPBERRYPI_I2C_SCAN_TOOLTIP = "Scan all I2C addresses from 0x01 to 0x7f and return a list of those that respond.";

Blockly.Msg.RASPBERRYPI_I2C_SEND_TITLE1 = "I2C send";
Blockly.Msg.RASPBERRYPI_I2C_SEND_TITLE2 = "address";
Blockly.Msg.RASPBERRYPI_I2C_SEND_TOOLTIP = "Send data on the bus.";

Blockly.Msg.RASPBERRYPI_I2C_RECV_TITLE1 = "I2C recv";
Blockly.Msg.RASPBERRYPI_I2C_RECV_TITLE2 = "address";
Blockly.Msg.RASPBERRYPI_I2C_RECV_TOOLTIP = "Receive data on the bus.";

Blockly.Msg.RASPBERRYPI_I2C_MEM_WRITE_TITLE1 = "I2C memory write  data";
Blockly.Msg.RASPBERRYPI_I2C_MEM_WRITE_TITLE2 = "address";
Blockly.Msg.RASPBERRYPI_I2C_MEM_WRITE_TITLE3 = "memaddress";
Blockly.Msg.RASPBERRYPI_I2C_MEM_WRITE_TOOLTIP = "Read from the memory of an I2C device.";

Blockly.Msg.RASPBERRYPI_I2C_MEM_READ_TITLE1 = "I2C memory read  data";
Blockly.Msg.RASPBERRYPI_I2C_MEM_READ_TITLE2 = "address";
Blockly.Msg.RASPBERRYPI_I2C_MEM_READ_TITLE3 = "memaddress";
Blockly.Msg.RASPBERRYPI_I2C_MEM_READ_TOOLTIP = "Returns the read data. ";

Blockly.Msg.RASPBERRYPI_SPI_TITLE1 = "SPI  bus";
Blockly.Msg.RASPBERRYPI_SPI_TITLE2 = "device";
Blockly.Msg.RASPBERRYPI_SPI_TOOLTIP = "Read I2C";