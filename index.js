var Beacon = require('./node_modules/eddystone-beacon/lib/beacon');

beacon = new Beacon();

beacon.advertiseUrl('http://www.paypal.com');
