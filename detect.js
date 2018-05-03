/**
	Detect html with specific tag
	Author : chonpin
	CreateDate : 2018/05/03
*/

function Detect(data) {
	var config = require('./config.js');
	var cheerio = require('cheerio');	// Fast, flexible, and lean implementation of core jQuery designed specifically for the server.  [ https://cheerio.js.org/ ]
	var $ = cheerio.load(data.toLowerCase());

	this.checkTitle = function(){
		var result = $('head title').html();
		if (result===null){
			console.log("<title> Not Found");
		}
		return this;
	}

	this.checkDescriptions = function(){
		var result = $('head meta[name=descriptions]').html();
		if (result===null){
			console.log("descriptions meta Not Found");
		}
		return this;
	}

	this.checkKeywords = function(){
		var result = $('head meta[name=keywords]').html();
		if (result===null){
			console.log("keywords meta Not Found");
		}
		return this;
	}

	this.checkImgAlt = function(){
		$('img').each(function(i, elem) {
  			var result = $(this).attr('alt');
  			if (result==undefined){
  				console.log("Detect <img> tag without alt attribute");
	  			return false;
	  		}
		});
		return this;
	}

	this.checkARel = function(){
		$('a').each(function(i, elem) {
  			var result = $(this).attr('rel');
  			if (result==undefined){
  				console.log("Detect <a> tag without rel attribute");
	  			return false;
	  		}
		});
		return this;
	}

	this.checkH1 = function(){
		var result = $('h1').length;
		if (result>1){
			console.log("More than one <H1> tag");
		}
		return this;
	}

	this.checkStrong = function(){
		var result = $('strong').length;
		if (result>config.maxStrongTagCount){
			console.log("Too More <strong> tag ("+result+"/"+config.maxStrongTagCount+")");
		}
		return this;
	}
}

module.exports = Detect;
