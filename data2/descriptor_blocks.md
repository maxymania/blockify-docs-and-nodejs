
# Blocks

see blocks.md

# Descriptor Blocks

A Descriptor Block is a Array. 20 Byte per element, 6553 Elements ( 6553 x 64 ~ 128 KByte).

The first element is the **Descriptor Block Header**.
The next (TupleSize x NumOfTuples) elements are SHA1-Hashes (wich are 20 Bytes big).

# Descriptor Block Header

Say you have TupleSize = 3, NumOfTuples = 500 and DDBlock = false, and 5698 Data-Bytes in the last block left, then you have the following descriptor string.

`3x500:5698`

If the Descriptorstring doesnt fills out 20 bytes, it is terminated using `'\0'` and the rest filled up to 20 Bytes with random Bytes.

