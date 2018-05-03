/**
	Detect html with specific tag
	Author : chonpin
	CreateDate : 2018/05/03
*/

function Detect() {
	const cheerio = require('cheerio');	// https://github.com/cheeriojs/cheerio

	var $;
	var data = '';
	this.setData = function(data){
		this.data = data;
		$ = cheerio.load(data.toLowerCase());
	}

	this.checkTitle = function(){
		var result = $('head title').html();
		return (result===null)?false:true;
	}

	this.checkDescriptions = function(){
		var result = $('head meta[name=descriptions]').html();
		return (result===null)?false:true;
	}

	this.checkKeywords = function(){
		var result = $('head meta[name=keywords]').html();
		return (result===null)?false:true;
	}

	this.getH1Count = function(){
		var result = $('h1');
		return result.length
	}

	this.getStrongCount = function(){
		var result = $('strong');
		return result.length
	}

}

module.exports = Detect;
