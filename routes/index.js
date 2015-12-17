"use strict";

var express = require('express');
var router = express.Router();
var cheerio = require('cheerio');
var request = require('request');

var captions = [];

/* GET home page. */
router.get('/', function(req, res, next) {
	request.get('http://giphy.com/search/epic-fail',
	function(err, res, html) {

		var $ = cheerio.load(html);
		//var gifImages = [];

		$('.gifs-gif').each(function(i, el) {
		 var imgCap = el.attribs.alt;
		captions.push(imgCap);
		});

	});
	res.render('index', { title: 'SCRAPAER', captions: captions });
});





module.exports = router;


