# blockify docs and nodejs-code

Blockify (see [libblockify](https://github.com/maxymania/libblockify)) functionality in javascript for node-js, AND documentation and internals.

This is because *aindigo* and I decided to implement blockify in node-js,
cause i stuck in implementing a network functionality and *aindigo* proposed to use BitTorrent's DHT to find
the blocks in the network.

# Documents

- blocks.md
- descriptor_blocks.md

# (node.js)-JavaScript Files

- dblock_hdr.js : a block-header parser and generator
- block.js : block utils (currently XOR)
- block_store_util.js : block store util
- url.js : the blockify-url-parser
- disk_kv : a KV store (for storing blocks) written in pure Javascript

# TODO

port that all
