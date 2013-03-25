/*
 * The Utils for Handling Blocks
 * (We could also rename the url-sheme from blockify to something else.)
 * Specification changed: use hex instead of base64
 */

var splitSlash = /\//;
var URLParser = /^blockify\:\/\/(.+?)\/\/(.+)/;
var URLPrefix = 'blockify://';


// node.js doesnt encode url-safe base64
// but it decodes both url-safe and non-url-safe base64
var urlSafeEnc = { "+":"-", "/":"_" };
function encodeUrlSafe(d){
	return d.split('').map(function(it){ return urlSafeEnc[it] || it;	}).join('');
}

// ids - block ids
// fname - Filename

function CreateUrl(ids,fname){
	return URLPrefix+(ids.map(function(it){
		return it.toString('hex');
	}).join('/'))+'//'+fname;
}

function ParseUrl(url){
	var m = url.match(URLParser);
	if(m){
		var ids = m[1].split(splitSlash).map(function(it){return new Buffer(it,'hex');});
		var lblength = parseInt(m[2]);
		var fname = m[3];
		return {ids:ids,fname:fname};
	}else return null;
}

module.exports={
  URLParser:URLParser,
  CreateUrl:CreateUrl,
  ParseUrl:ParseUrl
};

