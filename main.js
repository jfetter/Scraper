"use strict";

var cheerio = require('cheerio');
var request = require('request');

request.get('http://giphy.com/search/epic-fail',
function(err, res, html) {

var $ = cheerio.load(html);
var titles = [];


$('.gifs-gif').each(function(i, el) {
 var captions = el.attribs.alt;
titles.push(captions);
});


console.log(titles)







// var titles = [];

// $rows.each(function(i, el) {
//   var title = $(el).find('th').text();
//   titles.push(title);
// });

// titles.shift();

// console.log(titles);
// console.log(titles.length);

});