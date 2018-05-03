/**
	NodeJS code challenge assignment
	Author : chonpin
	CreateDate : 2018/05/02
*/


var fs = require('fs');
var config = require('./config.js');
var Log = require('./log.js')
var Detect = require('./detect.js')

log = new Log();
log.setDebugMode(config.debug);
log.setLogLevel(config.logLevel);

var data = fs.readFileSync(config.documentURI).toString();
log.debug(data);

detect = new Detect();
detect.setData(data);
//log.info(detect.getImgCount(), 'img tag');
log.info(detect.checkTitle(), 'head');
