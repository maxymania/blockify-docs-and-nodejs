
# Blocks

Every block has a size of exactly 128 KByte (or 131072 Byte). Each block is addressable by its SHA1-Hash.

# Descriptor Blocks

see descriptor_blocks.md

# File Data Blocks

Raw data from the file.
If the file end doesnt fills the Block, then the rest is filled with random bytes.

# XOR encoding

Blocks are usually stored XOR encoded before uploaded.
There **shall** not be any unencoded Descriptor Block or File Data Block in The Block Bucket.

Say,
- you have a block **S**, wich is a Descriptor Block or a File Data Block.
- You have some additional blocks **P_1,...,P_n** (taken from the Blockify system or Random-Generated).

You calculate **O** = S XOR P_1 XOR ... XOR P_n

**O** is stored using **sha1(O)** to address it

