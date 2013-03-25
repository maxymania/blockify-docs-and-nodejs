/*
 * Decriptor Block Header Parser and generator for NodeJS
 *
 */
//
var SEMICOLON = /;/;
var HEADER = /^(\d+)x(\d+)\:(dd|\d+)$/;
function parse(header){
	var obj = {};
	for(var i=0;i<20;++i)
		if(header[i]==0)break;
	var hdr = header.slice(0,i).toString('ASCII').match(HEADER);
	
	return hdr?{
		ts:parseInt(hdr[1]),
		nt:parseInt(hdr[2]),
		ddblock:hdr[3]=='dd',
		rest:(hdr[3]=='dd')?0:parseInt(hdr[3])
	}:null;
}
function generate(ts,nt,ddblock,rest){
	var s = ''+(Math.floor(ts))+'x'+(Math.floor(nt))+':'+(ddblock?'dd':(Math.floor(rest)));
	if(s.length>20)return null;
	var buf = new Buffer(20);
	var l = buf.write(s);
	if(l<20)buf[l]=0;
	// TODO: add some Random data behind the \0 terminator.
	return buf;
}

module.exports={
  parse:parse,
  generate:generate
};

