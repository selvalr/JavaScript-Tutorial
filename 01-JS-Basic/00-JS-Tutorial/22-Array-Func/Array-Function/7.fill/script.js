//Fill(value,start,end)

let n = [1, 2, 3, 4, 5, 6];

console.log("Before Fill : " + n);
//n.fill(20);
//n.fill(20,3)
n.fill(20, 3, 5);
console.log("After Fill  : " + n);

//2.// fill method
// value , start , end

// const myArray = new Array(10).fill(0);
// console.log(myArray);

const myArray = [1, 2, 3, 4, 5, 6, 7, 8];
myArray.fill(0, 2, 5);
console.log(myArray);
