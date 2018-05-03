/*
	log.js is a Lite debug system (like log4j)
	debug level is : debug -> info -> error
	Author : chonpin
	CreateDate : 2018/05/02

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

	this.debug = function(message, description){
		if (this.debugMode && ['debug'].indexOf(this.logLevel)>-1){
			this.info(message, description);
			this.show("Debug", message, description);
		}
	}

	this.info = function(message, description){
		if (this.debugMode && ['debug', 'info'].indexOf(this.logLevel)>-1){
			this.error(message, description);
			this.show("Info", message, description);
		}
	}

	this.error = function(message, description){
		if (this.debugMode && ['debug', 'info', 'error'].indexOf(this.logLevel)>-1){
			this.show("Error", message, description);
		}
	}

	// print log to console for two display style with description
	this.show = function(logLevel, message, description){
		if (description){
			console.log('[' + logLevel + '] : \n   Description : ' + description+'\n   Message : ' + message);
		}else{
			console.log('[' + logLevel + '] ' + message);
		}
	}

}
module.exports = Log;