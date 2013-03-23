/*
 * The Utils for Handling Blocks
 * (We could also rename the url-sheme from blockify to something else.)
 * Specification changed: use hex instead of base64
 */

var splitSlash = /\//;
var URLParser = /^blockify\:\/\/(.+?)\/\/(\d+)\/(.+)/;
var URLPrefix = 'blockify://';


// node.js doesnt encode url-safe base64
// but it decodes both url-safe and non-url-safe base64
var urlSafeEnc = { "+":"-", "/":"_" };
function encodeUrlSafe(d){
	return d.split('').map(function(it){ return urlSafeEnc[it] || it;	}).join('');
}

// ids - block ids
// lblength - Last Block Length
// fname - Filename

function CreateUrl(ids,lblength,fname){
	return URLPrefix+(ids.map(function(it){
		return encodeUrlSafe(it.toString('base64'));
	}).join('/'))+'//'+lblength+'/'+fname;
}

function ParseUrl(url){
	var m = url.match(URLParser);
	if(m){
		var ids = m[1].split(splitSlash).map(function(it){return new Buffer(it,'base64');});
		var lblength = parseInt(m[2]);
		var fname = m[3];
		return {ids:ids,lblength:lblength,fname:fname};
	}else return null;
}

module.exports={
  URLParser:URLParser,
  CreateUrl:CreateUrl,
  ParseUrl:ParseUrl
};

