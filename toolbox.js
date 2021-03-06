RaspberryPi.toolboxText =
    '  <category name="%{BKY_CATRASPBERRYPI}" colour="#CF5889">' +
    '    <block type="raspberrypi_digital_pin"></block>' +
    '    <block type="raspberrypi_analog_pin"></block>' +
    '    <block type="raspberrypi_pwm_pin"></block>' +
    '    <block type="raspberrypi_device_pin"></block>' +

    '    <block type="raspberrypi_pin_set_value">' +
    '      <value name="pin">' +
    '        <shadow type="raspberrypi_digital_pin">' +
    '        </shadow>' +
    '      </value>' +
    '      <value name="value">' +
    '        <shadow type="math_number">' +
    '          <field name="NUM">0</field>' +
    '        </shadow>' +
    '      </value>' +
    '    </block>' +

    '    <block type="raspberrypi_pin_set_value">' +
    '      <value name="pin">' +
    '        <shadow type="raspberrypi_pwm_pin">' +
    '        </shadow>' +
    '      </value>' +
    '      <value name="value">' +
    '        <shadow type="math_number">' +
    '          <field name="NUM">0</field>' +
    '        </shadow>' +
    '      </value>' +
    '    </block>' +

    '    <block type="raspberrypi_pin_get_value">' +
    '      <value name="pin">' +
    '        <shadow type="raspberrypi_digital_pin">' +
    '        </shadow>' +
    '      </value>' +
    '    </block>' +
    '    <block type="raspberrypi_pin_get_value">' +
    '      <value name="pin">' +
    '        <shadow type="raspberrypi_analog_pin">' +
    '        </shadow>' +
    '      </value>' +
    '    </block>' +

    '    <block type="raspberrypi_pin_on">' +
    '      <value name="pin">' +
    '        <shadow type="raspberrypi_pin_number">' +
    '        </shadow>' +
    '      </value>' +
    '    </block>' +
    '    <block type="raspberrypi_pin_off">' +
    '      <value name="pin">' +
    '        <shadow type="raspberrypi_pin_number">' +
    '        </shadow>' +
    '      </value>' +
    '    </block>' +

    '    <block type="raspberrypi_pin_irq">' +
    '      <value name="irq_pin">' +
    '        <shadow type="raspberrypi_pin_number">' +
    '        </shadow>' +
    '      </value>' +
    '      <value name="irq_trigger">' +
    '        <shadow type="raspberrypi_pin_irq_trigger">' +
    '        </shadow>' +
    '      </value>' +
    '    </block>' +

    '    <label> Servo </label>' +
    '    <block type="raspberrypi_servo_set_angle">' +
    '      <value name="servo_pin">' +
    '        <shadow type="raspberrypi_pwm_pin">' +
    '        </shadow>' +
    '      </value>' +
    '      <value name="angle">' +
    '        <shadow type="math_number">' +
    '          <field name="NUM">0</field>' +
    '        </shadow>' +
    '      </value>' +
    '      <value name="time">' +
    '        <shadow type="math_number">' +
    '          <field name="NUM">0</field>' +
    '        </shadow>' +
    '      </value>' +
    '    </block>' +

    '    <label> System </label>' +
    '    <block type="raspberrypi_connect_wifi"></block>' +
    '    <block type="raspberrypi_taskmgr"></block>' +


    '    <block type="raspberrypi_i2c_is_ready"></block>' +
    '    <block type="raspberrypi_i2c_scan"></block>' +
    '    <block type="raspberrypi_i2c_send"></block>' +
    '    <block type="raspberrypi_i2c_recv"></block>' +
    '    <block type="raspberrypi_i2c_mem_write"></block>' +
    '    <block type="raspberrypi_i2c_mem_read"></block>' +

    '    <block type="raspberrypi_pwm_pulse_width">' +
    '      <value name="value">' +
    '        <shadow type="math_number">' +
    '        </shadow>' +
    '      </value>' +
    '    </block>' +
    '    <block type="raspberrypi_pwm_pulse_width_precentage">' +
    '      <value name="value">' +
    '        <shadow type="math_number">' +
    '        </shadow>' +
    '      </value>' +
    '    </block>' +

    '  </category>' +

    '  <category name="%{BKY_CATTIME}" colour="292">' +
    '    <block type="time_localtime">' +
    '    </block>' +
    '    <block type="time_mktime">' +
    '    </block>' +
    '    <block type="time_sleep">' +
    '      <value name="delay_secs">' +
    '        <shadow type="math_number">' +
    '          <field name="NUM">1</field>' +
    '        </shadow>' +
    '      </value>' +
    '    </block>' +
    '    <block type="time_time">' +
    '    </block>' +
    '  </category>' +
    '  <sep></sep>'