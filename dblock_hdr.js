/*
 * Decriptor Block Header Parser and generator for NodeJS
 *
 */
//
var SEMICOLON = /;/;
var FIELD = /^(ts|nt|ddblock):([tf]|[0-9]+)$/;
function parse(header){
	var obj = {};
	for(var i=0;i<64;++i)
		if(header[i]==0)break;
	var hdr = header.slice(0,i).toString('ASCII').split(SEMICOLON);
	var fld;
	for(var i=0;i<hdr.length;++i)
		if(fld=hdr[i].match(FIELD))
			obj[fld[1]]=fld[2];
	return {
		ts:parseInt(obj.ts),
		nt:parseInt(obj.nt),
		ddblock:obj.ddblock=='t'
	} ;
}
function generate(ts,nt,ddblock){
	var s = 'ts:'+(Math.floor(ts))+';nt:'+(Math.floor(nt))+';ddblock:'+(ddblock?'t':'f');
	if(s.length>64)return null;
	var buf = new Buffer(64);
	var l = buf.write(s);
	if(l<64)buf[l]=0;
	// TODO: add some Random data behind the \0 terminator.
	return buf;
}

module.exports={
  parse:parse,
  generate:generate
};

