'use strict';

goog.provide('Blockly.Msg.raspberrypi.zh-hans');

goog.require('Blockly.Msg');

MSG.catRaspberryPi = "树莓派";
MSG.catSensorKitForPi = "树莓派传感器套件";

MSG.raspberrypi_description = "是一款基于Linux的单片机计算机。它由英国的树莓派基金会所开发";

Blockly.Msg.RASPBERRYPI_DIGITAL_PIN_TITLE = "D"
Blockly.Msg.RASPBERRYPI_DIGITAL_PIN_TOOLTIP = "数字引脚";

Blockly.Msg.RASPBERRYPI_ANALOG_PIN_TITLE = "A"
Blockly.Msg.RASPBERRYPI_ANALOG_PIN_TOOLTIP = "模拟引脚";

Blockly.Msg.RASPBERRYPI_PWM_PIN_TITLE = "PWM"
Blockly.Msg.RASPBERRYPI_PWM_PIN_TOOLTIP = "PWM 引脚";

Blockly.Msg.RASPBERRYPI_DEVICE_PIN_TOOLTIP = "内置硬件引脚";

Blockly.Msg.RASPBERRYPI_PIN_STATUS_TOOLTIP = "GPIO 引脚状态";

Blockly.Msg.RASPBERRYPI_PIN_IRQ_TRIGGER = "中断触发";
Blockly.Msg.RASPBERRYPI_PIN_IRQ_TRIGGER_TOOLTIP = "中断触发";

Blockly.Msg.RASPBERRYPI_PIN_SET_VALUE_TITLE1 = "设置引脚";
Blockly.Msg.RASPBERRYPI_PIN_SET_VALUE_TITLE2 = "的值为";
Blockly.Msg.RASPBERRYPI_PIN_SET_VALUE_TOOLTIP = "设置引脚的值为高/低";

Blockly.Msg.RASPBERRYPI_PIN_GET_VALUE_TITLE1 = "获取引脚";
Blockly.Msg.RASPBERRYPI_PIN_GET_VALUE_TITLE2 = "的值";
Blockly.Msg.RASPBERRYPI_PIN_GET_VALUE_TOOLTIP = "获取引脚的值";

Blockly.Msg.RASPBERRYPI_PIN_ON_TITLE1 = "设置引脚";
Blockly.Msg.RASPBERRYPI_PIN_ON_TITLE2 = "为打开";
Blockly.Msg.RASPBERRYPI_PIN_ON_TOOLTIP = "设置引脚为打开";

Blockly.Msg.RASPBERRYPI_PIN_OFF_TITLE1 = "设置引脚";
Blockly.Msg.RASPBERRYPI_PIN_OFF_TITLE2 = "为关闭";
Blockly.Msg.RASPBERRYPI_PIN_OFF_TOOLTIP = "设置引脚为关闭";

Blockly.Msg.RASPBERRYPI_PIN_IRQ_TITLE1 = "添加事件监测";
Blockly.Msg.RASPBERRYPI_PIN_IRQ_TITLE2 = "引脚";
Blockly.Msg.RASPBERRYPI_PIN_IRQ_TITLE3 = "中断触发";
Blockly.Msg.RASPBERRYPI_PIN_IRQ_TITLE4 = "执行";
Blockly.Msg.RASPBERRYPI_PIN_IRQ_TOOLTIP = "The event_detected() function is designed to be used in a loop with other things, \n\
        but unlike polling it is not going to miss the change in state of an input while the CPU is busy working on other things. ";


Blockly.Msg.RASPBERRYPI_TASKMGR_TITLE1 = "获取"
Blockly.Msg.RASPBERRYPI_TASKMGR_TITLE2 = "值"
Blockly.Msg.RASPBERRYPI_TASKMGR_TOOLTIP = "获取CPU温度、GPU温度、CPU使用率、磁盘使用率、内存使用率.";


Blockly.Msg.RASPBERRYPI_CONNECT_WIFI_TITLE1 = "连接WiFi"
Blockly.Msg.RASPBERRYPI_CONNECT_WIFI_TITLE2 = "国家"
Blockly.Msg.RASPBERRYPI_CONNECT_WIFI_TITLE3 = "账号"
Blockly.Msg.RASPBERRYPI_CONNECT_WIFI_TITLE4 = "密码"
Blockly.Msg.RASPBERRYPI_CONNECT_WIFI_TOOLTIP = "连接WIFI，请输入国家的缩写（两个大写的英文字母），参考链接: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2";


Blockly.Msg.RASPBERRYPI_SERVO_SET_ANGLE_TITLE1        = "设置舵机"
Blockly.Msg.RASPBERRYPI_SERVO_SET_ANGLE_TITLE2        = "的角度"
Blockly.Msg.RASPBERRYPI_SERVO_SET_ANGLE_TITLE3        = "time"
Blockly.Msg.RASPBERRYPI_SERVO_SET_ANGLE_TOOLTIP       = "Sets the angle of the servo:\n\
     angle is the angle to move to in degrees.\n\
     time is the number of milliseconds to take to get to the specified angle. If omitted, then the servo moves as quickly as possible to its new position."


Blockly.Msg.RASPBERRYPI_I2C_TITLE1 = "读I2C  地址";
Blockly.Msg.RASPBERRYPI_I2C_TITLE2 = "命令";
Blockly.Msg.RASPBERRYPI_I2C_TITLE3 = "数据";
Blockly.Msg.RASPBERRYPI_I2C_TOOLTIP = "读I2C";


Blockly.Msg.RASPBERRYPI_WRITE_I2C_TITLE1 = "写I2C  地址";
Blockly.Msg.RASPBERRYPI_WRITE_I2C_TITLE2 = "寄存器地址";
Blockly.Msg.RASPBERRYPI_WRITE_I2C_TITLE3 = "数据";
Blockly.Msg.RASPBERRYPI_WRITE_I2C_TOOLTIP = "写 I2C";

Blockly.Msg.RASPBERRYPI_SPI_TITLE1 = "SPI  总线";
Blockly.Msg.RASPBERRYPI_SPI_TITLE2 = "设备";
Blockly.Msg.RASPBERRYPI_SPI_TOOLTIP = "Read I2C";


Blockly.Msg.RASPBERRYPI_I2C_IS_READY_TITLE1 = "是否有I2C";
Blockly.Msg.RASPBERRYPI_I2C_IS_READY_TOOLTIP = "检查I2C设备是否响应给定的地址。";

Blockly.Msg.RASPBERRYPI_I2C_SCAN_TITLE1 = "扫描I2C地址";
Blockly.Msg.RASPBERRYPI_I2C_SCAN_TOOLTIP = "扫描从0x01到0x7f所有的I2C地址，并且返回响应这些地址的列表。";

Blockly.Msg.RASPBERRYPI_I2C_SEND_TITLE1 = "发送I2c 数据";
Blockly.Msg.RASPBERRYPI_I2C_SEND_TITLE2 = "地址";
Blockly.Msg.RASPBERRYPI_I2C_SEND_TOOLTIP = "在总线上发送数据。";

Blockly.Msg.RASPBERRYPI_I2C_RECV_TITLE1 = "接收I2c 数据";
Blockly.Msg.RASPBERRYPI_I2C_RECV_TITLE2 = "地址";
Blockly.Msg.RASPBERRYPI_I2C_RECV_TOOLTIP = "在总线上接收数据。";

Blockly.Msg.RASPBERRYPI_I2C_MEM_WRITE_TITLE1 = "在I2C设备的内存中写入  数据";
Blockly.Msg.RASPBERRYPI_I2C_MEM_WRITE_TITLE2 = "地址";
Blockly.Msg.RASPBERRYPI_I2C_MEM_WRITE_TITLE3 = "从机地址";
Blockly.Msg.RASPBERRYPI_I2C_MEM_WRITE_TOOLTIP = "在I2C设备的内存中写入。";

Blockly.Msg.RASPBERRYPI_I2C_MEM_READ_TITLE1 = "在I2C设备的内存中读取  数据";
Blockly.Msg.RASPBERRYPI_I2C_MEM_READ_TITLE2 = "地址";
Blockly.Msg.RASPBERRYPI_I2C_MEM_READ_TITLE3 = "从机地址";
Blockly.Msg.RASPBERRYPI_I2C_MEM_READ_TOOLTIP = "在I2C设备的内存中读取，并返回读取值。 ";