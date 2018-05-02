/**
	NodeJS code challenge assignment
	Author : chonpin
	Date : 2018/05/02
*/


var fs = require('fs');
var config = require('./config.js');
var Log = require('./log.js')

log = new Log();
log.setDebugMode(config.debug);
log.setLogLevel(config.logLevel);

var data = fs.readFileSync(config.documentURI)
log.debug(data);

