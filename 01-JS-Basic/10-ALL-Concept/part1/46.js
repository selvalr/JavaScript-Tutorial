// arrow functions
// const singHappyBirthday = function(){
//     console.log("happy birthday to you ......");
// }

const singHappyBirthday = () => {
  console.log("happy birthday to you ......");
};

singHappyBirthday(); //happy birthday to you

const sumThreeNumbers = (number1, number2, number3) => {
  return number1 + number2 + number3;
};

const ans = sumThreeNumbers(2, 3, 4);
console.log(ans); //9

// const isEven = function(number){
//     return number % 2 === 0;
// }

const isEven = (number) => number % 2 === 0;

console.log(isEven(4)); //true

const firstChar = (anyString) => anyString[0];

console.log(firstChar("harshit")); //h

const findTarget = (array, target) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
};
