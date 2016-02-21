var Beacon = require('./node_modules/eddystone-beacon/lib/beacon');

beacon = new Beacon();

var options = {
  txPowerLevel: -22,  // override TX Power Level, default value is -21,
  tlmCount: 2,       // 2 TLM frames
  tlmPeriod: 10      // every 10 advertisements
};

var myUrl = 'http://bit.ly/1Q3Iani';

beacon.advertiseUrl(myUrl, [options]);
