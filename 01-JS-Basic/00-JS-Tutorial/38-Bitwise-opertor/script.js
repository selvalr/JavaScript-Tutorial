/*
&	AND 	 5 & 1 (0101 & 0001)	1 (1)
|	OR 	 5 | 1 (0101 | 0001)	5 (101)
~	NOT 	 ~ 5 (~0101)	10 (1010)
^	XOR 	 5 ^ 1 (0101 ^ 0001)	4 (100)
<<	left shift 	 5 << 1 (0101 << 1)	10 (1010)
>>	right shift 	 5 >> 1 (0101 >> 1)	2 (10)
>>>	zero fill right shift 	 5 >>> 1 (0101 >>> 1)	2 (10)
*/

/*
//Bitwise Operators
//Human code -> Machine code(0,1)
//1->00000001->1
//2->00000010->2

&	AND	Sets each bit to 1 if both bits are 1
|	OR	Sets each bit to 1 if one of two bits is 1
^	XOR	Sets each bit to opposite value ex: 0, 1 if only one of two bits is 1,same to value ex:1,1 false 0
~	NOT	Inverts all the bits // ~a=-a-1
<<	Zero fill left shift	Shifts left by pushing zeros in from the right and let the leftmost bits fall off
>>	Signed right shift	Shifts right by pushing copies of the leftmost bit in from the left, and let the rightmost bits fall off
>>>	Zero fill right shift	Shifts right by pushing zeros in from the left, and let the rightmost bits fall off

*/

/*
Decimal Binary
2       0010
3       0011
4       0100
5       0101
*/

document.getElementById("demo").innerHTML = 5 & 1; //(0101 & 0001)   1(1)
document.getElementById("demo1").innerHTML = 5 | 1; //(0101 | 0001)  5(101)

document.getElementById("demo2").innerHTML = 5 ^ 1; //(0101 ^ 0001 )  4(100)

document.getElementById("demo3").innerHTML = ~5; //(~0101)   -6(1010)

document.getElementById("demo4").innerHTML = 5 << 1; //(0101 << 1) 10(1010) left side one zero adding before

document.getElementById("demo5").innerHTML = 5 >> 1; //(0101 >> 1)  2(10) right one element

document.getElementById("demo6").innerHTML = 5 >>> 1; //(0101>>>1)  2(10)
