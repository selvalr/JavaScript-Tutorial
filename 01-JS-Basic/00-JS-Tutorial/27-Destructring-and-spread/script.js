//Destructuring and Spread

//1.Destructing Arrays

//example1:
const numbers = [1, 2, 3];
let [numOne, numTwo, numThree] = numbers;
console.log(numOne, numTwo, numThree);

//example2:
const names = ["Asabeneh", "Brook", "David", "John"];
let [firstPerson, secondPerson, thirdPerson, fourthPerson] = names;
console.log(firstPerson, secondPerson, thirdPerson, fourthPerson);

//example3:
const scientificConstants = [2.72, 3.14, 9.81, 37, 100];
let [e, pi, gravity, bodyTemp, boilingTemp] = scientificConstants;
console.log(e, pi, gravity, bodyTemp, boilingTemp);

//example4:
const fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];
const [frontEnd, backEnd] = fullStack;
console.log(frontEnd);
console.log(backEnd);

//example5:If we like to skip on of the values in the array we use additional comma. The comma helps to omit the value at that specific index
const numbers1 = [1, 2, 3];
let [numOne1, , numThree1] = numbers1; //2 is omitted
console.log(numOne1, numThree1);

const names2 = ["Asabeneh", "Brook", "David", "John"];
let [, secondPerson2, , fourthPerson2] = names2; // first and third person is omitted
console.log(secondPerson2, fourthPerson2);

//example6:We can use default value in case the value of array for that index is undefined:
const names3 = [undefined, "Brook", "David"];
let [
  firstPerson3 = "Asabeneh",
  secondPerson3,
  thirdPerson3,
  fourthPerson3 = "John",
] = names3;
console.log(firstPerson3, secondPerson3, thirdPerson3, fourthPerson3);

//example7:We can not assign variable to all the elements in the array. We can destructure few of the first and we can get the remaining as array using spread operator(...).
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let [num1, num2, num3, ...rest] = nums;
console.log(num1, num2, num3);
console.log(rest);

//2.Destructuring during iteration

//exxample1:
const countries = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];
for (const [country, city] of countries) {
  console.log(country, city);
}

//example2:
const fullStack1 = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];
for (const [first, second, third] of fullStack1) {
  console.log(first, second, third);
}

//3.Destructuring Object

//When we destructure the name of the variable we use to destructure should be exactly the same as the key or property of the object. See the example below.

//example1:
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
};
let { width, height, area, perimeter } = rectangle;
console.log(width, height, area, perimeter);

//4.Renaming during structuring:

const rectangle1 = {
  width: 20,
  height: 10,
  area: 200,
};
let { width: w, height: h, area: a, perimeter: p } = rectangle1;
console.log(w, h, a, p);

//If the key is not found in the object the variable will be assigned to undefined. Sometimes the key might not be in the object, in that case we can give a default value during declaration. See the example.

//i.
const rectangle2 = {
  width1: 20,
  height1: 10,
  area1: 200,
};
let { width1, height1, area1, perimeter1 = 60 } = rectangle2;
console.log(width1, height1, area1, perimeter1); //20 10 200 60
//Let us modify the object:width to 30 and perimeter to 80

//ii.
const rectangle3 = {
  width2: 30,
  height2: 10,
  area2: 200,
  perimeter2: 80,
};
let { width2, height2, area2, perimeter2 = 60 } = rectangle3;
console.log(width2, height2, area2, perimeter2); //30 10 200 80

//5.Object parameter without destructuring

//i.
// Without destructuring
const rect = {
  width: 20,
  height: 10,
};
const calculatePerimeter = (rectangle) => {
  return 2 * (rectangle.width + rectangle.height);
};
console.log(calculatePerimeter(rect)); // 60
//with destructuring

//ii.
//Another Example
const person = {
  firstName: "Asabeneh",
  lastName: "Yetayeh",
  age: 250,
  country: "Finland",
  job: "Instructor and Developer",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Redux",
    "Node",
    "MongoDB",
    "Python",
    "D3.js",
  ],
  languages: ["Amharic", "English", "Suomi(Finnish)"],
};
// Let us create a function which give information about the person object without destructuring

const getPersonInfo = (obj) => {
  const skills = obj.skills;
  const formattedSkills = skills.slice(0, -1).join(", ");
  const languages = obj.languages;
  const formattedLanguages = languages.slice(0, -1).join(", ");

  personInfo = `${obj.firstName} ${obj.lastName} lives in ${
    obj.country
  }. He is  ${obj.age} years old. He is an ${
    obj.job
  }. He teaches ${formattedSkills} and ${
    skills[skills.length - 1]
  }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`;

  return personInfo;
};
console.log(getPersonInfo(person));

//6.Object parameter with destructuring

//i.

const calculatePerimeter2 = ({ width, height }) => {
  return 2 * (width + height);
};
console.log(calculatePerimeter2(rect)); // 60

//ii.
// Let us create a function which give information about the person object with destructuring
const getPersonInfo1 = ({
  firstName,
  lastName,
  age,
  country,
  job,
  skills,
  languages,
}) => {
  const formattedSkills = skills.slice(0, -1).join(", ");
  const formattedLanguages = languages.slice(0, -1).join(", ");

  personInfo = `${firstName} ${lastName} lives in ${country}. He is ${age} years old. He is an ${job}. He teaches ${formattedSkills} and ${
    skills[skills.length - 1]
  }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`;

  return personInfo;
};
console.log(getPersonInfo1(person));
/*
Asabeneh Yetayeh lives in Finland. He is  250 years old. He is an Instructor and Developer. He teaches HTML, CSS, JavaScript, React, Redux, Node, MongoDB, Python and D3.js. He speaks Amharic, English and a little bit of Suomi(Finnish)
*/

//7.Destructuring object during iteration
const todoList = [
  {
    task: "Prepare JS Test",
    time: "4/1/2020 8:30",
    completed: true,
  },
  {
    task: "Give JS Test",
    time: "4/1/2020 10:00",
    completed: false,
  },
  {
    task: "Assess Test Result",
    time: "4/1/2020 1:00",
    completed: false,
  },
];

for (const { task, time, completed } of todoList) {
  console.log(task, time, completed);
}

const { task, time, completed } = todoList;

function signs({ task }) {
  return task;
}
console.log(signs(todoList));

//8.nested destructuring
// nested destructuring
const users = [
  { userId: 1, firstName: "harshit", gender: "male" },
  { userId: 2, firstName: "mohit", gender: "male" },
  { userId: 3, firstName: "nitish", gender: "male" },
];

const [{ firstName: user1firstName, userId }, , { gender: user3gender }] =
  users;
console.log(user1firstName);
console.log(userId);
console.log(user3gender);
