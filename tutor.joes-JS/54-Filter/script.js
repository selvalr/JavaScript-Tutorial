/*syntax for using the filter() method:

var newArray = originalArray.filter(function(element, index, array) {
  // test the element and return true or false
});

*/


//1. Filtering an array of numbers to only include even numbers:

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers); // [2, 4, 6, 8, 10]


//2. Filtering an array of objects to only include those with a certain property value:

let user = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
    ];
    let eligible = user.filter(person =>person.age> 30);
    console.log(eligible); // [{ name: 'Charlie', age: 35 }]


//3. Filtering an array of strings to only include those of a certain length:

let words = ['cat', 'dog', 'elephant', 'fish', 'giraffe'];
let wordsWithFourLetters = words.filter(word =>word.length === 4);
console.log(wordsWithFourLetters); // ['fish']

//4. Filtering an array of numbers to only include those that are divisible by 3:

let numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numbersDivisibleBy3 = numbers1.filter(number => number % 3 === 0);
console.log(numbersDivisibleBy3); // [3, 6, 9]


//5. Filtering an array of objects to only include those with a specific value:

let items = [
    { name: "apple", category: "fruit" },
    { name: "carrot", category: "vegetable" },
    { name: "banana", category: "fruit" }
    ];
    let fruits = items.filter(item =>item.category === "fruit");
    console.log(fruits); 
// [{ name: "apple", category: "fruit" }, { name: "banana", category: "fruit" }]


//6. Filtering an array of strings to only include those that start with a specific letter:

let word = ['cat', 'dog', 'elephant', 'fish', 'giraffe'];
let wordsStartsWithE = word.filter(word =>word.startsWith('e'));
console.log(wordsStartsWithE); // ['elephant']


//7. Filtering an array of objects to only include those with a certain property value:

let products = [
    { name: 'apple', price: 1.2 },
    { name: 'orange', price: 2.5 },
    { name: 'banana', price: 3.5 }
    ];
    let expensiveProducts = products.filter(product =>product.price> 2);
    console.log(expensiveProducts); 
    // [{ name: 'orange', price: 2.5 },{ name: 'banana', price: 3.5 }]
    

//8. Filtering an array of objects to only include those that are enabled:

let buttons = [
    { name: 'Save', enabled: true },
    { name: 'Delete', enabled:false },
    { name: 'Cancel', enabled: true },
    { name: 'Submit', enabled: false }
];
let enabledButtons = buttons.filter(button =>button.enabled === true);
console.log(enabledButtons);
// [{ name: 'Save', enabled: true }, { name: 'Cancel', enabled: true }]


//9. Filtering an array of numbers to only include those greater than a certain value:

let numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numbersGreaterThan5 = numbers3.filter(number => number > 5);
console.log(numbersGreaterThan5); // [6, 7, 8, 9, 10]


//10. Filtering an array of strings to only include those that contain a specific substring:

let words1 = ['cat', 'dog', 'elephant', 'fish', 'giraffe'];
let wordsWithE = words1.filter(word =>word.includes('e'));
console.log(wordsWithE); // ['elephant', 'giraffe']


//11. Filtering an array of objects based on multiple conditions: Category Fruit and Price > 100

const product = [
    { name: 'Apple', category: 'fruit', price: 100 },
    { name: 'Carrot', category: 'vegetable', price: 50 },
    { name: 'Orange', category: 'fruit', price: 120 },
    { name: 'Broccoli', category: 'vegetable', price: 75 },
    { name: 'Mango', category: 'fruit', price: 110 }
];
let minimumHundared=product.filter((pro)=>{
    if(pro.price>100){
        console.log(pro);
    }
})


//12. Filtering an array of objects based on a search term:

let books=[
    { title: 'Eloquent JavaScript', author: 'Marijn Haverbeke', year: 2011 },
    { title: 'JavaScript: The Good Parts', author: 'Douglas Crockford', year: 2008 },
    { title: 'Learning Web Design: A Beginner\'s Guide to HTML, CSS, JavaScript, and Web Graphics', author: 'Jennifer Niederst Robbins', year: 2012 },
    { title: 'HTML and CSS: Design and Build Websites', author: 'Jon Duckett', year: 2011 },
    { title: 'CSS Secrets: Better Solutions to Everyday Web Design Problems', author: 'Lea Verou', year: 2015 },
    { title: 'JavaScript and JQuery: Interactive Front-End Web Development', author: 'Jon Duckett', year: 2014 },
    { title: 'You Don\'t Know JS', author: 'Kyle Simpson', year: '2014-2019' },
    { title: 'React: Up & Running', author: 'Stoyan Stefanov', year: 2016 },
    { title: 'Node.js Design Patterns', author: 'Mario Casciaro', year: 2014 },
    { title: 'Head First Design Patterns', author: 'Eric Freeman and Elisabeth Robson', year: 2004 }
];

