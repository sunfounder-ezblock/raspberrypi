
'use strict';

goog.provide('Blockly.JavaScript.raspberrypi');

goog.require('Blockly.JavaScript');


Blockly.JavaScript['raspberrypi_digital_pin'] = function (block) {//digital pin number
  var pin = block.getFieldValue('pin');

  var code = '';
  code += 'Pin(' + pin + ')';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['raspberrypi_digital_pin'] = function (block) {//digital pin number
  var pin = block.getFieldValue('pin');

  var code = '';
  code += 'Pin(' + pin + ')';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['raspberrypi_analog_pin'] = function (block) {//digital pin number
  var pin = block.getFieldValue('pin');

  var code = '';
  code += 'ADC(' + pin + ')';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['raspberrypi_device_pin'] = function (block) {//digital pin number
  var pin = block.getFieldValue('pin');

  var code = '';
  code += 'Pin(' + pin + ')';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['raspberrypi_pwm_pin'] = function (block) {//digital pin number
  var pin = block.getFieldValue('pin');

  var code = '';
  code += 'PWM(' + pin + ')';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['raspberrypi_pin_irq_trigger'] = function (block) {
  var trigger = block.getFieldValue('irq_trigger');

  var code = '';
  code += trigger;

  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// ---- Pin functions generator ---- //
Blockly.JavaScript['raspberrypi_pin_set_value'] = function (block) {
  var pin = Blockly.JavaScript.valueToCode(block, 'pin', Blockly.JavaScript.ORDER_ATOMIC);
  var value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);

  if (pin.startsWith('Pin')) {
    var getValue = '.value'
  }
  else if (pin.startsWith('PWM')) {
    var getValue = '.pulse_width'
  }

  var code = '';
  code += pin + getValue + '(' + value + ')\n';
  return code;
};

Blockly.JavaScript['raspberrypi_pin_get_value'] = function (block) {
  var pin = Blockly.JavaScript.valueToCode(block, 'pin', Blockly.JavaScript.ORDER_ATOMIC);

  if (pin.startsWith('Pin')) {
    var getValue = '.value'
  }
  else if (pin.startsWith('ADC')) {
    var getValue = '.read'
  }

  var code = '';
  code += pin + getValue + '()';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['raspberrypi_pin_on'] = function (block) {
  var pin = Blockly.JavaScript.valueToCode(block, 'pin', Blockly.JavaScript.ORDER_ATOMIC);

  var code = pin + '.on()\n';

  return code;
};

Blockly.JavaScript['raspberrypi_pin_off'] = function (block) {
  var pin = Blockly.JavaScript.valueToCode(block, 'pin', Blockly.JavaScript.ORDER_ATOMIC);

  var code = pin + '.off()\n';

  return code;
};

Blockly.JavaScript['raspberrypi_pin_irq'] = function (block) {
  var pin = Blockly.JavaScript.valueToCode(block, 'irq_pin', Blockly.JavaScript.ORDER_ATOMIC);
  var trigger = Blockly.JavaScript.valueToCode(block, 'irq_trigger', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_irq_handler = Blockly.JavaScript.statementToCode(block, 'irq_handler');

  var callback_function = 'callback_' + pin.replace('(', '').replace(')', '').replace('"', '').replace('"', '');

  var code = '';
  code += 'function ' + callback_function + '(chn){\n';
  code += statements_irq_handler + '}\n';
  code += pin + '.irq(' + callback_function + ', ' + trigger + ')\n';

  return code;
};



