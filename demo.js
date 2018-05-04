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

log.info("Load HTML file...");
var data = fs.readFileSync(config.documentURI).toString();
log.debug(data, "HTML content : ");

log.info("Detect HTML for SEO...");
detect = new Detect(data);
detect.checkTitle().checkDescriptions().checkKeywords().checkImgAlt().checkARel().checkH1().checkStrong();

