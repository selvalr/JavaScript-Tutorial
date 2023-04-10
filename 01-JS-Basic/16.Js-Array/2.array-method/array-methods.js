/*
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

//1.foreach

const number=[1,2,3,4,5,6,7,8,9,10];

//value,index,array
number.forEach((value)=>{
    console.log(value);
});

number.forEach((value,index)=>{
    console.log(index+"index and value"+value);
});

//2.map

const no=[2,4,6];

//map(value,index,array)
let sqrt=no.map((value)=>{
return Math.sqrt(value);
})
console.log(sqrt);

//3.slice(start,end)
console.log(number.slice(2));
console.log(number.slice(2,5));

//4.Splice(start,length,new element)
//splice is to remove element is array it willchange original array

const n1=[1,2,3,4,5,6,7,8];

console.log("before splice"+n1);
let remove=n1.splice(2);
console.log("removed item"+remove);
console.log("after splice"+n1);

//fill(value, start,end)

let d=[1,2,4];
console.log(d.fill('a'));//[a,a,a]