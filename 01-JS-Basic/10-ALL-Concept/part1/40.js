// spread operator
const array1 = [1, 2, 3];
const array2 = [5, 6, 7];

const newArray = [...array1, ...array2, 89, 69];
console.log(newArray); //[1,2,3,5,6,7,89,69]

const newArray1 = [..."123456789"];
console.log(newArray1); //['1', '2', '3', '4', '5', '6', '7', '8','9']

// spread operator in objects
const obj1 = {
  key1: "value1",
  key2: "value2",
};
const obj2 = {
  key1: "valueUnique",
  key3: "value3",
  key4: "value4",
};

const newObject1 = { ...obj2, ...obj1, key69: "value69" };
console.log(newObject1); //{key1: "valueUnique", key3: "value3",key4: "value4","key1: "value1","key2: "value","key69":"value69"}
const newObject2 = { ...["item1", "item2"] };
console.log(newObject2); //{0:"item1","1":"item2}
const newObject3 = { ..."abcdefghijklmnopqrstuvwxyz" };
console.log(newObject3); //[0:'a',1:'b',2:'c',3:'d','e',...]
