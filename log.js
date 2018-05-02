/*
	log.js is a Lite debug system (like log4j)
	debug level is : debug -> info -> error
	Author : chonpin
	Date : 2018/05/02

*/


function Log(){
	var debugMode = false;
	var logLevel = '';
	this.setDebugMode = function(debugMode){
		this.debugMode = debugMode;
	}
	this.setLogLevel = function(logLevel){
		this.logLevel = logLevel;
	}

	this.debug = function(message){
		if (this.debugMode && ['debug'].indexOf(this.logLevel)>-1){
			this.info(message);
			console.log('Debug : ' + message);
		}
	}

	this.info = function(message){
		if (this.debugMode && ['debug', 'info'].indexOf(this.logLevel)>-1){
			this.error(message);
			console.log('Info : ' + message);
		}
	}

	this.error = function(message){
		if (this.debugMode && ['debug', 'info', 'error'].indexOf(this.logLevel)>-1){
			console.log('Error : ' + message);
		}
	}

}
module.exports = Log;