# Simple Node.js & eddystone-url example

### Simple implementation of Eddystone-URL specification using Node.js ###

With Node.js installed, clone the project and run:

1. ```$ npm install eddystone-beacon -g```
2. ```$ node index.js```  

Depends of your Operating System you may need to execute the script with root previleges. So run: ```$ sudo node index.js```

For Mac, you will need to run ```$ npm install eddystone-beacon -g --force``` due **bluetooth-hci-socket@0.4.4** compile warnings.  

Done. You may be able to see your desired URL using Physical Web app on your Mobile Device.

It works in any computer with Bluetooth 4.0 hardware (check your computer specifications). You can run even into a RaspberryPi with a Bluetooth 4.0 USB Module!  

Other Eddystone specification implementation examples you find at [https://github.com/don/node-eddystone-beacon](https://github.com/don/node-eddystone-beacon)
