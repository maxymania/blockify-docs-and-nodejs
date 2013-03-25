/*
 * Block Storage Util
 *
 */
//
var crypto=require('crypto');
/*
interface KeyValueStore {
	function Get(key,callback) where callback : function(err,value)
	function Put(key,value,callback) where callback : function(err)
}
*/

function store(kvs,block,callback){
	var keygen = crypto.createHash('sha1');
	keygen.update(block);
	var digest = keygen.digest();
	kvs.Put(digest,block,callback);
	return digest;
}
function load(kvs,key,callback){
	kvs.Get(key,callback);
}

module.exports={
  store:store,
  load:load,
};

