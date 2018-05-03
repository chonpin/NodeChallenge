/**
	NodeJS code challenge assignment
	Author : chonpin
	CreateDate : 2018/05/02
*/


var fs = require('fs');
var Log = require('./log.js')
var config = require('./config.js');
var Detect = require('./detect.js')

log = new Log();
log.setDebugMode(config.debug);
log.setLogLevel(config.logLevel);

var data = fs.readFileSync(config.documentURI).toString();
log.debug(data);

detect = new Detect(data);
detect.checkTitle().checkDescriptions().checkKeywords().checkImgAlt().checkARel().getH1Count().getStrongCount();

