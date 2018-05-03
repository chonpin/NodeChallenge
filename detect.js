/**
	Detect html with specific tag
	Author : chonpin
	CreateDate : 2018/05/03
*/

function Detect(data) {
	var cheerio = require('cheerio');	// https://github.com/cheeriojs/cheerio
	var $ = cheerio.load(data.toLowerCase());

	this.checkTitle = function(){
		var result = $('head title').html();
		if (result!==null){
			console.log("Find <title> tag");
		}else{
			console.log("No <title> tag");
		}
		return this;
	}

	this.checkDescriptions = function(){
		var result = $('head meta[name=descriptions]').html();
		if (result!==null){
			console.log("Find descriptions meta tag");
		}else{
			console.log("No descriptions meta tag");
		}
		return this;
	}

	this.checkKeywords = function(){
		var result = $('head meta[name=keywords]').html();
		if (result!==null){
			console.log("Find keywords meta tag");
		}else{
			console.log("No keywords meta tag");
		}
		return this;
	}

	this.getH1Count = function(){
		var result = $('h1').length;
		if (result>0){
			console.log("Find "+result+" <H1> tag");
		}else{
			console.log("<H1> tag not found");
		}
		return this;
	}

	this.getStrongCount = function(){
		var result = $('strong').length;
		if (result>0){
			console.log("Find "+result+" <strong> tag");
		}else{
			console.log("<strong> tag not found");
		}
		return this;
	}

}

module.exports = Detect;
