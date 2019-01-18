'use strict';

goog.provide('Blockly.Python.raspberrypi');

goog.require('Blockly.Python');

//#################################################
// class Pin – control I/O pins
//#################################################
// ---- raspberrypi constants generator ---- //

// digital pin number
Blockly.Python['raspberrypi_digital_pin'] = function(block) {
    var pin = block.getFieldValue('pin');

    Blockly.Python.definitions_['import_raspberrypi_pin'] =
        'from raspberrypi import Pin';

    var code = '';
    code += pin;
    return [code, Blockly.Python.ORDER_ATOMIC];
};
// analog pin number
Blockly.Python['raspberrypi_analog_pin'] = function(block) {
    var pin = block.getFieldValue('pin');

    Blockly.Python.definitions_['import_raspberrypi_pin'] =
        'from raspberrypi import ADC';

    var code = '';
    code += pin;
    return [code, Blockly.Python.ORDER_ATOMIC];
};

// device pin number
Blockly.Python['raspberrypi_device_pin'] = function(block) {
    var pin = block.getFieldValue('pin');

    var code = '';
    code += pin;
    return [code, Blockly.Python.ORDER_ATOMIC];
};
// pwm pin number
Blockly.Python['raspberrypi_pwm_pin'] = function(block) {
    var pin = block.getFieldValue('pin');

    var code = '';
    code += pin;
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['raspberrypi_pin_irq_trigger'] = function(block) {
    var trigger = block.getFieldValue('irq_trigger');

    var code = '';
    code += trigger;

    return [code, Blockly.Python.ORDER_ATOMIC];
};

// ---- Pin functions generator ---- //
Blockly.Python['raspberrypi_pin_set_value'] = function(block) {
    var pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
    var value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);

    if (pin.startsWith('"D') || (pin in ['LED', 'SW'])) {
        Blockly.Python.definitions_['import_raspberrypi_pin'] = 'from raspberrypi import Pin';
        var obj = 'Pin(' + pin + ')';
        var setValue = 'value';
    } else if (pin.startsWith('"P')) {
        Blockly.Python.definitions_['import_raspberrypi_pwm'] = 'from raspberrypi import PWM';
        var obj = 'PWM(' + pin + ')';
        var setValue = 'pulse_width';
    }

    var code = '';
    var code = obj + '.' + setValue + '(' + value + ')\n';
    return code;
};

Blockly.Python['raspberrypi_pin_get_value'] = function(block) {
    var pin =
        Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);

    if (pin.startsWith('"D') || (pin in ['LED', 'SW'])) {
        Blockly.Python.definitions_['import_raspberrypi_pin'] = 'from raspberrypi import Pin';
        var obj = 'Pin(' + pin + ')';
        var getValue = 'value';
    } else if (pin.startsWith('"A')) {
        Blockly.Python.definitions_['import_raspberrypi_pin'] = 'from raspberrypi import ADC';
        var obj = 'ADC(' + pin + ')';
        var getValue = 'read';
    }

    var code = '';
    code += obj + '.' + getValue + '()\n';
    return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Python['raspberrypi_pin_on'] = function(block) {
    var pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);

    Blockly.Python.definitions_['import_raspberrypi_pin'] = 'from raspberrypi import Pin';

    var code = 'Pin(' + pin + ').on()\n';

    return code;
};

Blockly.Python['raspberrypi_pin_off'] = function(block) {
    var pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);

    Blockly.Python.definitions_['import_raspberrypi_pin'] = 'from raspberrypi import Pin';

    var code = 'Pin(' + pin + ').off()\n';

    return code;
};

Blockly.Python['raspberrypi_pin_irq'] = function(block) {
    var pin = Blockly.Python.valueToCode(block, 'irq_pin', Blockly.Python.ORDER_ATOMIC);
    var trigger = Blockly.Python.valueToCode(block, 'irq_trigger', Blockly.Python.ORDER_ATOMIC);
    var statements_irq_handler = Blockly.Python.statementToCode(block, 'irq_handler');

    var callback_function = 'callback_' + pin.replace('(', '').replace(')', '');

    var code = '';
    code += 'def ' + callback_function + '(chn):\n';
    code += statements_irq_handler + '\n';
    code += 'Pin(' + pin + ').irq(' + callback_function + ', ' + trigger + ')\n';

    return code;
};

Blockly.Python['raspberrypi_servo_set_angle'] = function(block) {
    var value_pin = Blockly.Python.valueToCode(block, 'servo_pin', Blockly.Python.ORDER_ATOMIC);
    var value_angle = Blockly.Python.valueToCode(block, 'angle', Blockly.Python.ORDER_ATOMIC);

    Blockly.Python.definitions_['import_servo'] = 'from raspberrypi import Servo';

    var code = 'Servo(' + value_pin + ').angle(' + value_angle + ')\n';

    return code;
};


Blockly.Python['raspberrypi_taskmgr'] = function(block) {
    var taskmgr = block.getFieldValue('taskmgr');

    var code = '';
    code += 'Taskmgr().' + taskmgr + '()\n';
    return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['raspberrypi_connect_wifi'] = function(block) {
    var country = Blockly.Python.valueToCode(block, 'country', Blockly.Python.ORDER_ATOMIC);
    var ssid = Blockly.Python.valueToCode(block, 'ssid', Blockly.Python.ORDER_ATOMIC);
    var password = Blockly.Python.valueToCode(block, 'password', Blockly.Python.ORDER_ATOMIC);

    Blockly.Python.definitions_['import_raspberrypi_wifi'] = 'from raspberrypi import WiFi';

    var code = '';
    var code = 'WiFi(' + country + ', ' + ssid + '，' + password + ').write()\n';
    return code;
};

// I2C  SPI
Blockly.Python['raspberrypi_write_i2c'] = function(block) {
    var address = Blockly.Python.valueToCode(block, 'address', Blockly.Python.ORDER_ATOMIC);
    var Register_address = Blockly.Python.valueToCode(block, 'Register_address', Blockly.Python.ORDER_ATOMIC);

    var code = '';
    var code = 'I2C().send(' + address + ', ' + Register_address + ')\n';
    return code;
};

// Blockly.Python['raspberrypi_write_i2c'] = function(block) {
//     var  = Blockly.Python.valueToCode(block, 'address',
//     Blockly.Python.ORDER_ATOMIC); var Register_address =
//     Blockly.Python.valueToCode(block, 'Register_address',
//     Blockly.Python.ORDER_ATOMIC); var data =
//     Blockly.Python.valueToCode(block, '', Blockly.Python.ORDER_ATOMIC);

//     var code = '';
//     var code = 'I2C().send(' + Register_address + ', ' + address + ')\n';
//     return code;
// };

Blockly.Python['raspberrypi_read_i2c'] = function(block) {
    var data = Blockly.Python.valueToCode(block, 'data', Blockly.Python.ORDER_ATOMIC);

    var code = '';
    var code = 'I2C().recv(' + data + ')\n';
    return code;
};

Blockly.Python['raspberrypi_spi'] = function(block) {
    var bus = Blockly.Python.valueToCode(block, 'bus', Blockly.Python.ORDER_ATOMIC);
    var device = Blockly.Python.valueToCode(block, 'device', Blockly.Python.ORDER_ATOMIC);

    var code = '';
    var code = 'SPI(' + bus + ', ' + device + ')\n';
    return code;
};



Blockly.Python['raspberrypi_i2c_is_ready'] = function(block) {
    var address = Blockly.Python.valueToCode(block, 'address', Blockly.Python.ORDER_ATOMIC);

    var code = '';
    var code = 'I2C().is_ready(' + address + ')\n';
    return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Python['raspberrypi_i2c_scan'] = function(block) {
    var code = '';
    var code = 'I2C().scan()\n';
    return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['raspberrypi_i2c_send'] = function(block) {
    var send = Blockly.Python.valueToCode(block, 'send', Blockly.Python.ORDER_ATOMIC);
    var addr = Blockly.Python.valueToCode(block, 'addr', Blockly.Python.ORDER_ATOMIC);

    var code = '';
    var code = 'I2C().send(' + send + ', ' + addr + ')\n';
    return code;
};


Blockly.Python['raspberrypi_i2c_recv'] = function(block) {
    var recv = Blockly.Python.valueToCode(block, 'recv', Blockly.Python.ORDER_ATOMIC);
    var addr = Blockly.Python.valueToCode(block, 'addr', Blockly.Python.ORDER_ATOMIC);

    var code = '';
    var code = 'I2C().recv(' + recv + ', ' + addr + ')\n';
    return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Python['raspberrypi_i2c_mem_write'] = function(block) {
    var data = Blockly.Python.valueToCode(block, 'data', Blockly.Python.ORDER_ATOMIC);
    var addr = Blockly.Python.valueToCode(block, 'addr', Blockly.Python.ORDER_ATOMIC);
    var memaddr = Blockly.Python.valueToCode(block, 'memaddr', Blockly.Python.ORDER_ATOMIC);

    var code = '';
    var code = 'I2C().mem_write(' + data + ', ' + addr + ', ' + memaddr + ')\n';
    return code;
};


Blockly.Python['raspberrypi_i2c_mem_read'] = function(block) {
    var data = Blockly.Python.valueToCode(block, 'data', Blockly.Python.ORDER_ATOMIC);
    var addr = Blockly.Python.valueToCode(block, 'addr', Blockly.Python.ORDER_ATOMIC);
    var memaddr = Blockly.Python.valueToCode(block, 'memaddr', Blockly.Python.ORDER_ATOMIC);

    var code = '';
    var code = 'I2C().mem_read(' + data + ', ' + addr + ', ' + memaddr + ')\n';
    return [code, Blockly.Python.ORDER_NONE];
};



// PWM
Blockly.Python['raspberrypi_pwm_pulse_width'] = function(block) {
    var value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
    var code = '';
    var code = 'pulse_width(' + value + ')\n';
    return code;
};


Blockly.Python['raspberrypi_pwm_pulse_width_precentage'] = function(block) {
        var value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
        var code = '';
        var code = 'pulse_width_percentage(' + value + ')\n';
        return code;