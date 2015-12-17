"use strict";

var cheerio = require('cheerio');
var request = require('request');

request.get('http://giphy.com/search/epic-fail',
function(err, res, html) {

var $ = cheerio.load(html);
var titles = [];
//var gifImages = [];


$('.gifs-gif').each(function(i, el) {
 var captions = el.attribs.alt;
titles.push(captions);
});


// $('figure').each(function(i, el){
// 	gifImages.push(el);
// })

//console.log(titles)
//console.log(gifImages[0].children[4].prev)







// var titles = [];

// $rows.each(function(i, el) {
//   var title = $(el).find('th').text();
//   titles.push(title);
// });

// titles.shift();

// console.log(titles);
// console.log(titles.length);

});