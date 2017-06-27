load('api_gpio.js');
load('api_mqtt.js');
load('api_sys.js');

// GPIO pin which is connected to a relay driver circuit
let relayPin = 13;
GPIO.set_mode(relayPin, GPIO.MODE_OUTPUT);
GPIO.write(relayPin, 0);

// MQTT topic
let topic = 'bell';

// Bell #
let bellNumber = 1;

// Subscribe to the topic to ring the bell
MQTT.sub(topic, function(conn, topic, msg) {
  print('Topic: ', topic, 'message:', msg);
  let obj = JSON.parse(msg);
  
  if(obj.number === bellNumber || obj.number === 0){ //use bell #0 to ring all the bells
    print('ok');
    GPIO.write(relayPin, 1);
    Sys.usleep(20000); //wait for 20msec
    GPIO.write(relayPin, 0);
    Sys.usleep(200000); //wait for 200msec
    GPIO.write(relayPin, 1);
    Sys.usleep(20000); //wait for 20msec
    GPIO.write(relayPin, 0);
  }
}, null);
