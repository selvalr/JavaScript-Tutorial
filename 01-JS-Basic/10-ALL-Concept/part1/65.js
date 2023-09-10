// splice method
// start , delete , insert

const myArray = ["item1", "item2", "item3"];

// delete
const deletedItem = myArray.splice(1, 2);
console.log("delted item", deletedItem); //['item2', 'item3]
// insert
myArray.splice(1, 0, "inserted item");
console.log(myArray); //['item1', 'inserted item']

// insert and delete
const deletedItem1 = myArray.splice(1, 2, "inserted item1", "inserted item2");
console.log("delted item", deletedItem1); //delted item ['inserted item']
console.log(myArray); //['item1', 'inserted item1', 'inserted item2']
