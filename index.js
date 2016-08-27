var beacon = require('eddystone-beacon');

var options = {
  txPowerLevel: -22,  // override TX Power Level, default value is -21,
  tlmCount: 2,       // 2 TLM frames
  tlmPeriod: 10      // every 10 advertisements
};

var myPayPalMe = 'http://bit.ly/1Q3Iani';
var myLinkedIn = 'http://bit.ly/1SLiO3n';
var myGitHub = 'http://bit.ly/1Ld89Mg';

beacon.advertiseUrl(myGitHub, [options]);
