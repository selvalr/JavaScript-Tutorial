/*

&	AND	Sets each bit to 1 if both bits are 1
|	OR	Sets each bit to 1 if one of two bits is 1
^	XOR	Sets each bit to 1 if only one of two bits is 1
~	NOT	Inverts all the bits
<<	Zero fill left shift	Shifts left by pushing zeros in from the right and let the leftmost bits fall off
>>	Signed right shift	Shifts right by pushing copies of the leftmost bit in from the left, and let the rightmost bits fall off
>>>	Zero fill right shift	Shifts right by pushing zeros in from the left, and let the rightmost bits fall off

*/

document.getElementById('demo').innerHTML = 5 & 1; //(0101 & 0001)   1(1)
document.getElementById('demo1').innerHTML = 5 | 1; //(0101 | 0001)  5(101)

document.getElementById('demo2').innerHTML = 5 ^ 1; //(0101 ^ 0001 )  4(100)

document.getElementById('demo3').innerHTML = ~5; //(~0101)   10(1010)

document.getElementById('demo4').innerHTML = 5 << 1; //(0101 << 1) 10(1010)

document.getElementById('demo5').innerHTML = 5 >> 1; //(0101 >> 1)  2(10)

document.getElementById('demo6').innerHTML = 5 >>> 1; //(0101>>>1)  2(10)
