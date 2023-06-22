/*
  Splice is to Remove Elements in array
  It will change original array

  removed_element=Splice(start,length,new elements)
*/

const n1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("Before Splice : " + n1);
let removed_elements = n1.splice(2);
console.log("Removed Items : " + removed_elements);
console.log("After Splice :" + n1);

const n2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Before Splice : " + n2);
removed_elements = n2.splice(2, 2);
console.log("Removed Items : " + removed_elements);
console.log("After Splice :" + n2);

const n3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Before Splice : " + n3);
removed_elements = n3.splice(2, 2, [25, 36, 45]);
console.log("Removed Items : " + removed_elements);
console.log(n3);

const n4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Before Splice : " + n4);

n4.splice(2, 0, 100, 300);
console.log("After Splice :" + n4);

//2. splice method
// start , delete , insert

const myArray = ["item1", "item2", "item3"];

// delete
// const deletedItem = myArray.splice(1, 2);
// console.log("delted item", deletedItem);
// insert
// myArray.splice(1, 0,'inserted item');

// insert and delete
const deletedItem = myArray.splice(1, 2, "inserted item1", "inserted item2");
console.log("delted item", deletedItem);
console.log(myArray);
