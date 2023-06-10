/*

Array length
Array toString()
Array pop()
Array push()
Array shift()
Array unshift()
Array join()
Array delete()
Array concat()
Array flat()
Array splice()
Array slice()

1.foreach
2.map
3.slice
4.splice
5.concat
6.sort
7.fill
8.includes
9.join
10.reverse
11.push
12.pop
13.shift
14.unshift
15.indexof
16.lastIndexof
17.every
18.some
19.find
20.findIndex
21.From
22.isArray
23.Filter
24.Flat
25.reduce



*/
//1.Js Array method

//JavaScript Array length
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits.length;
console.log(size);

//JavaScript Array toString()
console.log(fruits.toString());

//Join
console.log(fruits.join(" * "));

//pop
console.log(fruits.pop());

//push
console.log(fruits.push("baba"));

//shift
console.log(fruits.shift());

//unshift
console.log(fruits.unshift("lemon"));

//1.foreach

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//value,index,array
number.forEach((value) => {
  console.log(value);
});

number.forEach((value, index) => {
  console.log(index + "index and value" + value);
});

//2.map

const no = [2, 4, 6];

//map(value,index,array)
let sqrt = no.map((value) => {
  return Math.sqrt(value);
});
console.log(sqrt);

//3.slice(start,end)
console.log(number.slice(2));
console.log(number.slice(2, 5));
console.log(number.slice(2, 0, "s"));

//4.Splice(start,length,new element)
//splice is to remove element is array it willchange original array

const n1 = [1, 2, 3, 4, 5, 6, 7, 8];

console.log("before splice" + n1);
let remove = n1.splice(2);
console.log("removed item" + remove);
console.log("after splice" + n1);

//fill(value, start,end)

let d = [1, 2, 4];
console.log(d.fill("a")); //[a,a,a]

/*

let arr = [1,2,3,4,5];
let len = arr.length;           // length of array
let first = arr[0];             // first element
let last = arr[arr.length - 1]; // last element
arr.push(6);                    // add element to end
arr.pop();                      // remove element from end
arr.unshift(0);                 // add element to beginning
arr.shift();                    // remove element from beginning
arr.splice(2, 0, "Hello");      // add element at index 2
arr.splice(3, 1);               // remove 1 element from index 3
let newArr = arr.slice(1, 4);   // create new array from index 1 to 3
let str = arr.join(", ");       // convert array to string
let numArr = arr.map(x => x * 2);  // create new array by applying function to each element
let filteredArr = arr.filter(x => x > 3); // create new array with elements that pass condition
let sum = arr.reduce((acc, val) => acc + val, 0); // reduce array to single value

*/
