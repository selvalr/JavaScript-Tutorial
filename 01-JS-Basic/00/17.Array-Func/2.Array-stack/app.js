//Stack method is LIFO(last in first Out)

let num = new Array(1, 2, 3, 4, 5, 6);
console.log(num);//[1,2,3,4,5,6]

let count = num.push(7);
console.log(count);//7
console.log(num);//[1,2,3,4,5,6,7]

let removeNum = num.pop();
console.log(removeNum);//7
console.log(num.length);//6
console.log(num);//[1,2,3,4,5,6]
