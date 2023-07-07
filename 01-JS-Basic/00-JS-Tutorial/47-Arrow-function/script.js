// arrow functions
// const singHappyBirthday = function(){
//     console.log("happy birthday to you ......");
// }

//1.
const singHappyBirthday = () => {
  console.log("happy birthday to you ......");
};

singHappyBirthday(); //happy birthday to you

//2.
const sumThreeNumbers = (number1, number2, number3) => {
  return number1 + number2 + number3;
};

//3.
const ans = sumThreeNumbers(2, 3, 4);
console.log(ans); //9

// const isEven = function(number){
//     return number % 2 === 0;
// }

//4.
const isEven = (number) => number % 2 === 0;

console.log(isEven(4)); //true

//5.
const firstChar = (anyString) => anyString[0];
console.log(firstChar("harshit")); //h

//6.
const findTarget = (array, target) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
};

console.log(findTarget([1, 2, 3, 4], 4)); //3
