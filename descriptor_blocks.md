
# Blocks

see blocks.md

# Descriptor Blocks

A Descriptor Block is a Array. 64 Byte per element, 2048 Elements ( 2048 x 64 = 128 KByte).

The first element is the **Descriptor Block Header**.
The next (TupleSize x NumOfTuples) elements are SHA512-Hashes (wich are 64 Bytes big).

# Descriptor Block Header

Say you have TupleSize = 3, NumOfTuples = 500 and DDBlock = false, than you have the following descriptor string.

`ts:3;nt:500;ddblock:f`

If the Descriptorstring doesnt fills out 64 bytes, it is terminated using `'\0'` and the rest filled up to 64 Bytes with random Bytes.

