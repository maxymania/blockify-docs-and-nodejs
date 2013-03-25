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


function DiskKV(path){
	this.Get=function(key,callback){
		fs.readFile(path+(key.toString('hex')),callback);
	};
	this.Put=function(key,value,callback){
		fs.writeFile(path+(key.toString('hex')),value,callback);
	};
}

module.exports={
  DiskKV:DiskKV
};
