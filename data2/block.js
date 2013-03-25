/*
 * The Utils for Handling Blocks
 */
//
var INT_128KB = 131072;

function XorBlock(block,other){
	for(var i=0;i<INT_128KB;++i)
		block[i]^=other[i];
}


module.exports={
  INT_128KB:INT_128KB,
  XorBlock:XorBlock
};


