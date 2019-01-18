'use strict';
goog.provide('Blockly.Blocks.raspberrypi'); // Deprecated
goog.provide('Blockly.Constants.RaspberryPi');

goog.require('Blockly.Blocks');
goog.require('Blockly.Msg');

Blockly.Constants.RaspberryPi.RGB = '#CF5889';
Blockly.Blocks.raspberrypi.RGB = Blockly.Constants.RaspberryPi.RGB;


Blockly.Constants.RaspberryPi.DIGITAL_PINS = [
    ['D0', '"D0"'],
    ['D1', '"D1"'],
    ['D2', '"D2"'],
    ['D3', '"D3"'],
    ['D4', '"D4"'],
    ['D5', '"D5"'],
    ['D6', '"D6"'],
    ['D7', '"D7"'],
    ['D8', '"D8"'],
    ['D9', '"D9"'],
];

Blockly.Constants.RaspberryPi.ANALOG_PINS = [
    ['A0', '"A0"'],
    ['A1', '"A1"'],
    ['A2', '"A2"'],
    ['A3', '"A3"'],
    ['A4', '"A4"'],
    ['A5', '"A5"'],
    ['A6', '"A6"'],
    ['A7', '"A7"'],
];

Blockly.Constants.RaspberryPi.DEVICE_PINS = [
    ['LED', '"LED"'],
    ['switch', '"SW"'],
];

Blockly.Constants.RaspberryPi.PWM_PINS = [
    ['P0', '"P0"'],
    ['P1', '"P1"'],
    ['P2', '"P2"'],
    ['P3', '"P3"'],
    ['P4', '"P4"'],
    ['P5', '"P5"'],
    ['P6', '"P6"'],
    ['P7', '"P7"'],
];


Blockly.Constants.RaspberryPi.PIN_IRQ_TRIGGER = [
    ['falling', 'Pin.IRQ_FALLING'],
    ['rising', 'Pin.IRQ_RISING'],
];

Blockly.Constants.RaspberryPi.taskmgr = [
    ['cpu temperature', 'cpu_temperature'],
    ['gpu temperature', 'gpu_temperature'],
    ['cpu usage', 'cpu_usage'],
    ['disk used', 'disk_used'],
    ['ram used', 'ram_used'],
];
// system setup
Blockly.Blocks['raspberrypi_connect_wifi'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.RASPBERRYPI_CONNECT_WIFI_TITLE1);
        this.appendValueInput('country')
            .setCheck(null)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.RASPBERRYPI_CONNECT_WIFI_TITLE2);
        this.appendValueInput('ssid')
            .setCheck(null)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.RASPBERRYPI_CONNECT_WIFI_TITLE3);
        this.appendValueInput('password')
            .setCheck(null)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.RASPBERRYPI_CONNECT_WIFI_TITLE4);
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Constants.RaspberryPi.RGB);
        this.setTooltip(Blockly.Msg.RASPBERRYPI_CONNECT_WIFI_TOOLTIP);
        this.setHelpUrl('');
    }
};

Blockly.Blocks['raspberrypi_taskmgr'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.RASPBERRYPI_TASKMGR_TITLE1)
            .appendField(
                new Blockly.FieldDropdown(Blockly.Constants.RaspberryPi.taskmgr),
                'taskmgr');
        this.appendDummyInput().appendField(Blockly.Msg.RASPBERRYPI_TASKMGR_TITLE2);
        this.setInputsInline(true);
        this.setOutput(true, 'Number');
        this.setColour(Blockly.Constants.RaspberryPi.RGB);
        this.setTooltip(Blockly.Msg.RASPBERRYPI_TASKMGR_TOOLTIP);
        this.setHelpUrl('');
    }
};

// ---- raspberrypi constants blocks ---- //
Blockly.Blocks['raspberrypi_digital_pin'] = {
    init: function () {
        this.appendDummyInput()
            // .appendField(Blockly.Msg.RASPBERRYPI_DIGITAL_PIN_TITLE)
            .appendField(
                new Blockly.FieldDropdown(
                    Blockly.Constants.RaspberryPi.DIGITAL_PINS),
                'pin');
        this.setInputsInline(true);
        this.setOutput(true, 'Digital_Pin');
        this.setColour(Blockly.Constants.RaspberryPi.RGB);
        this.setTooltip(Blockly.Msg.RASPBERRYPI_DIGITAL_PIN_TOOLTIP);
        this.setHelpUrl('');
    }
};

Blockly.Blocks['raspberrypi_analog_pin'] = {
    init: function () {
        this.appendDummyInput()
            // .appendField(Blockly.Msg.RASPBERRYPI_ANALOG_PIN_TITLE)
            .appendField(
                new Blockly.FieldDropdown(
                    Blockly.Constants.RaspberryPi.ANALOG_PINS),
                'pin');
        this.setInputsInline(true);
        this.setOutput(true, 'Analog_Pin');
        this.setColour(Blockly.Constants.RaspberryPi.RGB);
        this.setTooltip(Blockly.Msg.RASPBERRYPI_ANALOG_PIN_TOOLTIP);
        this.setHelpUrl('');
    }
};

Blockly.Blocks['raspberrypi_device_pin'] = {
    init: function () {
        this.appendDummyInput().appendField(
            new Blockly.FieldDropdown(Blockly.Constants.RaspberryPi.DEVICE_PINS),
            'pin');
        this.setInputsInline(true);
        this.setOutput(true, 'Digital_Pin');
        this.setColour(Blockly.Constants.RaspberryPi.RGB);
        this.setTooltip(Blockly.Msg.RASPBERRYPI_DEVICE_PIN_TOOLTIP);
        this.setHelpUrl('');
    }
};

Blockly.Blocks['raspberrypi_pwm_pin'] = {
    init: function () {
        this.appendDummyInput()
            // .appendField(Blockly.Msg.RASPBERRYPI_PWM_PIN_TITLE)
            .appendField(
                new Blockly.FieldDropdown(Blockly.Constants.RaspberryPi.PWM_PINS),
                'pin');
        this.setInputsInline(true);
        this.setOutput(true, 'PWM_Pin');
        this.setColour(Blockly.Constants.RaspberryPi.RGB);
        this.setTooltip(Blockly.Msg.RASPBERRYPI_PWM_PIN_TOOLTIP);
        this.setHelpUrl('');
    }
};

Blockly.Blocks['raspberrypi_pin_irq_trigger'] = {
    init: function () {
        this.appendDummyInput().appendField(
            Blockly.Msg.RASPBERRYPI_PIN_IRQ_TRIGGER);
        this.appendDummyInput().appendField(
            new Blockly.FieldDropdown(
                Blockly.Constants.RaspberryPi.PIN_IRQ_TRIGGER),
            'irq_trigger');
        this.setInputsInline(true);
        this.setOutput(true, 'IRQ_TRIGGER');
        this.setColour(Blockly.Constants.RaspberryPi.RGB);
        this.setTooltip(Blockly.Msg.RASPBERRYPI_PIN_IRQ_TRIGGER_TOOLTIP);
        this.setHelpUrl('');
    }
};

// ---- Pin functions blocks ---- //
Blockly.Blocks['raspberrypi_pin_set_value'] = {
    init: function () {
        this.appendValueInput('pin')
            .setCheck(['Digital_Pin', 'PWM_Pin'])
            .appendField(Blockly.Msg.RASPBERRYPI_PIN_SET_VALUE_TITLE1);
        this.appendValueInput('value').setCheck(null).appendField(
            Blockly.Msg.RASPBERRYPI_PIN_SET_VALUE_TITLE2);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Constants.RaspberryPi.RGB);
        this.setTooltip(Blockly.Msg.RASPBERRYPI_PIN_SET_VALUE_TOOLTIP);
        this.setHelpUrl('');
    }
};

Blockly.Blocks['raspberrypi_pin_get_value'] = {
    init: function () {
        this.appendValueInput('pin')
            .setCheck(['Digital_Pin', 'Analog_Pin', 'Device_Pin'])
            .appendField(Blockly.Msg.RASPBERRYPI_PIN_GET_VALUE_TITLE1);
        this.appendDummyInput().appendField(
            Blockly.Msg.RASPBERRYPI_PIN_GET_VALUE_TITLE2);
        // this.setInputsInline(true);
        this.setOutput(true, 'Number');
        this.setColour(Blockly.Constants.RaspberryPi.RGB);
        this.setTooltip(Blockly.Msg.RASPBERRYPI_PIN_GET_VALUE_TOOLTIP);
        this.setHelpUrl('');
    }
};


Blockly.Blocks['raspberrypi_pin_on'] = {
    init: function () {
        this.appendValueInput('pin')
            .setCheck('Digital_Pin')
            .appendField(Blockly.Msg.RASPBERRYPI_PIN_ON_TITLE1);
        this.appendDummyInput().appendField(Blockly.Msg.RASPBERRYPI_PIN_ON_TITLE2);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Constants.RaspberryPi.RGB);
        this.setTooltip(Blockly.Msg.RASPBERRYPI_PIN_ON_TOOLTIP);
    }
};

Blockly.Blocks['raspberrypi_pin_off'] = {
    init: function () {
        this.appendValueInput('pin')
            .setCheck('Digital_Pin')
            .appendField(Blockly.Msg.RASPBERRYPI_PIN_OFF_TITLE1);
        this.appendDummyInput().appendField(Blockly.Msg.RASPBERRYPI_PIN_OFF_TITLE2);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Constants.RaspberryPi.RGB);
        this.setTooltip(Blockly.Msg.RASPBERRYPI_PIN_OFF_TOOLTIP);
    }
};

Blockly.Blocks['raspberrypi_pin_irq'] = {
    init: function () {
        this.appendDummyInput().appendField(Blockly.Msg.RASPBERRYPI_PIN_IRQ_TITLE1);
        this.appendValueInput('pin')
            .setCheck('Digital_Pin')
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.RASPBERRYPI_PIN_IRQ_TITLE2);
        this.appendValueInput('irq_trigger')
            .setCheck('IRQ_TRIGGER')
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.RASPBERRYPI_PIN_IRQ_TITLE3);
        this.appendStatementInput('irq_handler')
            .appendField(Blockly.Msg.RASPBERRYPI_PIN_IRQ_TITLE4);
        this.setColour(Blockly.Constants.RaspberryPi.RGB);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.RASPBERRYPI_PIN_IRQ_TOOLTIP);
        this.setHelpUrl('');
    }
};

Blockly.Blocks['raspberrypi_servo_set_angle'] = {
    init: function () {
        this.appendValueInput('servo_pin')
            .setCheck('PWM_Pin')
            .appendField(Blockly.Msg.RASPBERRYPI_SERVO_SET_ANGLE_TITLE1);
        this.appendValueInput('angle').setCheck('Number').appendField(
            Blockly.Msg.RASPBERRYPI_SERVO_SET_ANGLE_TITLE2);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Constants.RaspberryPi.RGB);
        this.setTooltip(Blockly.Msg.RASPBERRYPI_SERVO_SET_ANGLE_TOOLTIP);
        this.setHelpUrl('');
    }
};


// I2c  Spi
Blockly.Blocks['raspberrypi_spi'] = {
    init: function () {
        this.appendValueInput('bus')
            .setCheck(null)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.RASPBERRYPI_SPI_TITLE1);
        this.appendValueInput('device')
            .setCheck(null)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.RASPBERRYPI_SPI_TITLE2);
        this.setColour(Blockly.Constants.RaspberryPi.RGB);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.RASPBERRYPI_SPI_TOOLTIP);
        this.setHelpUrl('');
    }
};

Blockly.Blocks['raspberrypi_i2c_is_ready'] = {
    init: function () {
        this.appendValueInput('address')
            .setCheck('math_hex')
            .appendField(Blockly.Msg.RASPBERRYPI_I2C_IS_READY_TITLE1);
        this.setHelpUrl('');
        this.setInputsInline(false);
        this.setOutput(true, 'Boolean');
        this.setColour(Blockly.Constants.RaspberryPi.RGB);
        this.setTooltip(Blockly.Msg.RASPBERRYPI_I2C_IS_READY_TOOLTIP);
        this.setHelpUrl('');
    }
};

Blockly.Blocks['raspberrypi_i2c_scan'] = {
    init: function () {
        this.appendDummyInput().appendField(
            Blockly.Msg.RASPBERRYPI_I2C_SCAN_TITLE1);
        this.setOutput(true, null);
        this.setColour(Blockly.Constants.RaspberryPi.RGB);
        this.setTooltip(Blockly.Msg.RASPBERRYPI_WRITE_I2C_TOOLTIP);
        this.setHelpUrl('');
    }
};


Blockly.Blocks['raspberrypi_i2c_send'] = {
    init: function () {
        this.appendValueInput('send')
            .setCheck(null)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.RASPBERRYPI_I2C_SEND_TITLE1);
        this.appendValueInput('addr')
            .setCheck('math_hex')
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.RASPBERRYPI_I2C_SEND_TITLE2);
        this.setColour(Blockly.Constants.RaspberryPi.RGB);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.RASPBERRYPI_I2C_SEND_TOOLTIP);
        this.setHelpUrl('');
    }
};

Blockly.Blocks['raspberrypi_i2c_recv'] = {
    init: function () {
        this.appendValueInput('recv')
            .setCheck(null)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.RASPBERRYPI_I2C_RECV_TITLE1);
        this.appendValueInput('addr')
            .setCheck('math_hex')
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.RASPBERRYPI_I2C_RECV_TITLE2);
        this.setColour(Blockly.Constants.RaspberryPi.RGB);
        this.setInputsInline(false);
        this.setOutput(true, null);
        this.setTooltip(Blockly.Msg.RASPBERRYPI_I2C_RECV_TOOLTIP);
        this.setHelpUrl('');
    }
};

Blockly.Blocks['raspberrypi_i2c_mem_write'] = {
    init: function () {
        this.appendValueInput('data')
            .setCheck(null)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.RASPBERRYPI_I2C_MEM_WRITE_TITLE1);
        this.appendValueInput('addr')
            .setCheck('math_hex')
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.RASPBERRYPI_I2C_MEM_WRITE_TITLE2);
        this.appendValueInput('memaddr')
            .setCheck(null)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.RASPBERRYPI_I2C_MEM_WRITE_TITLE3);
        this.setColour(Blockly.Constants.RaspberryPi.RGB);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.RASPBERRYPI_I2C_MEM_WRITE_TOOLTIP);
        this.setHelpUrl('');
    }
};


Blockly.Blocks['raspberrypi_i2c_mem_read'] = {
    init: function () {
        this.appendValueInput('data')
            .setCheck(null)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.RASPBERRYPI_I2C_MEM_READ_TITLE1);
        this.appendValueInput('addr')
            .setCheck('math_hex')
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.RASPBERRYPI_I2C_MEM_READ_TITLE2);
        this.appendValueInput('memaddr')
            .setCheck(null)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.RASPBERRYPI_I2C_MEM_READ_TITLE3);
        this.setColour(Blockly.Constants.RaspberryPi.RGB);
        this.setInputsInline(false);
        this.setOutput(true, null);
        this.setTooltip(Blockly.Msg.RASPBERRYPI_I2C_MEM_READ_TOOLTIP);
        this.setHelpUrl('');
    }
};


// PWM
Blockly.Blocks['raspberrypi_pwm_pulse_width'] = {
    init: function () {
        this.appendValueInput('value')
            .setCheck('Number')
            .appendField(Blockly.Msg.RASPBERRYPI_PWM_PULSE_WIDTH_TITLE1);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Constants.RaspberryPi.RGB);
        this.setTooltip(Blockly.Msg.RASPBERRYPI_PWM_PULSE_WIDTH_TOOLTIP);
        this.setHelpUrl('');
    }
};

Blockly.Blocks['raspberrypi_pwm_pulse_width_precentage'] = {
    init: function () {
        this.appendValueInput('value')
            .setCheck('Number')
            .appendField(Blockly.Msg.RASPBERRYPI_PWM_PULSE_WIDTH_PRECENTAGE_TITLE1);
        this.appendDummyInput()
            .appendField(Blockly.Msg.RASPBERRYPI_PWM_PULSE_WIDTH_PRECENTAGE_TITLE2);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Constants.RaspberryPi.RGB);
        this.setTooltip(Blockly.Msg.RASPBERRYPI_PWM_PULSE_WIDTH_PRECENTAGE_TOOLTIP);
        this.setHelpUrl('');
    }
};