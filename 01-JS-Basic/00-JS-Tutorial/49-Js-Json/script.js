//JSON - JavaScript Object Notation is a format for structuring data
//JSON is a format for storing and transporting data.
//JSON is often used when data is sent from a server to a web page.
//JSON use Datatype:number,string,boolean,Array,object,null

/*
JSON Syntax Rules
Data is in name/value pairs
Data is separated by commas
Curly braces hold objects
Square brackets hold arrays
*/

//example:
/*
	{
		"employees":[
			{"firstName":"John", "lastName":"Doe"},
			{"firstName":"Anna", "lastName":"Smith"},
			{"firstName":"Peter", "lastName":"Jones"}
		]
	} 
*/

/*
rules:
{"name":"value","array":[]}
- data is in name/value(any type)pairs
- Data is separated by commas
- Curly braces hold object
- square bracket hold array
*/

//JavaScript JSON Methods
//Converting JSON to JavaScript Object

//1.JSON.parse();
/*
JSON.parse(json[, reviver])
// json or text , the data
// reviver is an optional callback function
// JSON.parse(json, (key, value) => {})

*/

const usersText1 = `{
  "users":[
    {
      "firstName":"Asabeneh",
      "lastName":"Yetayeh",
      "age":250,
      "email":"asab@asb.com"
    },
    {
      "firstName":"Alex",
      "lastName":"James",
      "age":25,
      "email":"alex@alex.com"
    },
    {
    "firstName":"Lidiya",
    "lastName":"Tekle",
    "age":28,
    "email":"lidiya@lidiya.com"
    }
  ]
  }`;

const usersObj1 = JSON.parse(usersText1, undefined, 4);
console.log(usersObj1);

//i.Using a reviver function with JSON.parse()

const usersText2 = `{
  "users":[
    {
      "firstName":"Asabeneh",
      "lastName":"Yetayeh",
      "age":250,
      "email":"asab@asb.com"
    },
    {
      "firstName":"Alex",
      "lastName":"James",
      "age":25,
      "email":"alex@alex.com"
    },
    {
    "firstName":"Lidiya",
    "lastName":"Tekle",
    "age":28,
    "email":"lidiya@lidiya.com"
    }
  ]
  }`;

const usersObj2 = JSON.parse(usersText2, (key, value) => {
  let newValue =
    typeof value == "string" && key != "email" ? value.toUpperCase() : value;
  return newValue;
});
console.log(usersObj2);

//Converting Object to JSON
//2.JSON.stringfy():
/*
JSON.stringify(obj, replacer, space)
// json or text , the data
// reviver is an optional callback function
*/
const users3 = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

const txt3 = JSON.stringify(users3, undefined, 4);
console.log(txt3); // text means JSON- because json is a string form of an object.

//3.Using a Filter Array with JSON.stringify

const user4 = {
  firstName: "Asabeneh",
  lastName: "Yetayeh",
  country: "Finland",
  city: "Helsinki",
  email: "alex@alex.com",
  skills: ["HTML", "CSS", "JavaScript", "React", "Python"],
  age: 250,
  isLoggedIn: false,
  points: 30,
};

const txt4 = JSON.stringify(
  user4,
  ["firstName", "lastName", "country", "city", "age"],
  4
);
console.log(txt4);

//1.example
let a = {
  name: "selva",
  age: 21,
  friend: function () {
    return 5 * 5;
  },
  detail: {
    name: "bass",
    age: 32,
  },
  best: ["vsa", "rona", "hhjg"],
};
console.log(a); //javascript object
b = JSON.stringify(a); //js json object convert to string
console.log(b); //undefined
b = JSON.parse(b); //js json convert to javascript object
console.log(b.best);

//2.JavaScript Objects array:

let letter = [
  {
    name: "abc",
    age: 21,
  },
  {
    name: "def",
    age: 32,
  },
  {
    name: "ghi",
    age: 32,
  },
  {
    name: "jkl",
    age: 12,
  },
];

//console.log(letter[0].age); //21

console.log(letter);

var t1 = "";
for (let i = 0; i < letter.length; i++) {
  t1 += "<li>" + letter[i].name + "</li>";
}
document.getElementById("or").innerHTML = t1;

//1.JSON.parse()

const usersText = `{
  "users":[
    {
      "firstName":"Asabeneh",
      "lastName":"Yetayeh",
      "age":250,
      "email":"asab@asb.com"
    },
    {
      "firstName":"Alex",
      "lastName":"James",
      "age":25,
      "email":"alex@alex.com"
    },
    {
    "firstName":"Lidiya",
    "lastName":"Tekle",
    "age":28,
    "email":"lidiya@lidiya.com"
    }
  ]
  }`;

const usersObj = JSON.parse(usersText, undefined, 4);
console.log(usersObj);

//2.Converting Object to JSON
const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

const txt = JSON.stringify(users, undefined, 4);
console.log(txt); // text means JSON- because json is a string form of an object.
