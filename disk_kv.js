/*
 * Disk/Filesystem based KV store for storing
 * 
 */

/*
interface KeyValueStore {
	function Get(key,callback) where callback : function(err,value)
	function Put(key,value,callback) where callback : function(err)
}
*/
var fs = require('fs');
var FSSafeBase64     = {"-":"+","/":"_","=":"-"};
var FSSafeBase64_inv = {"+":"-","_":"/","-":"="};

function encBuffer(buf){
	return buf.toString('base64').split('').map(function(it){return FSSafeBase64[it]||it; }).join('');
}

function DiskKV(path){
	this.Get=function(key,callback){
		fs.readFile(path+encBuffer(key),callback);
	};
	this.Put=function(key,value,callback){
		fs.writeFile(path+encBuffer(key),value,callback);
	};
}

module.exports={
  DiskKV:DiskKV
};
