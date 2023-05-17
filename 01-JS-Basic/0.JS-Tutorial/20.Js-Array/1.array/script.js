
    /*
    Array-variables that hold multiple values
    Array is an object which can store a collection of items under a single variable name

    syntax:
    let arrayName = [value1, value2, ...]; // Method 1
    let arrayName = new Array(); // Method 2
*/

    //1.JavaScript array literal

    // Initializing while declaring
    var house = ['saood', 'harish', true, 910];
    console.log(house);//['saood', 'harish', true, 910]
    console.log(house[0]);//saood

    //.
    let myArra=[];
    myArra[0]="selva";
    myArra[1]="tamil";
    myArra[2]=true;
    console.log(myArra);
    //2.JavaScript Array directly (new keyword)

    var i;
    var emp = new Array();
    emp[0] = 'Arun';
    emp[1] = 'Varun';
    emp[2] = 'John';

    for (i = 0; i < emp.length; i++) {
      document.write(emp[i] + '<br>');
    }

    //3.JavaScript array constructor (new keyword)

    // syntax
    const arr = Array()
    // or
    // let arr = new Array()
    console.log(arr) // []


    //1.How to create an empty array

    //Using Array constructor
    // syntax
    const arra = Array()
    // or
    // let arr = new Array()
    console.log(arra) // []

    //Using square brackets([])
    // syntax
    // This the most recommended way to create an empty list
    const arra1 = []
    console.log(arra1)





    //2.How to create an array with values
    const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // array of numbers
    const fruits = ['banana', 'orange', 'mango', 'lemon'] // array of strings, fruits
    const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of strings, vegetables
    const animalProducts = ['milk', 'meat', 'butter', 'yoghurt'] // array of strings, products
    const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] // array of web technologies
    const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'] // array of strings, countries

    // Print the array and its length

    console.log('Numbers:', numbers)
    console.log('Number of numbers:', numbers.length)

    console.log('Fruits:', fruits)
    console.log('Number of fruits:', fruits.length)

    console.log('Vegetables:', vegetables)
    console.log('Number of vegetables:', vegetables.length)

    console.log('Animal products:', animalProducts)
    console.log('Number of animal products:', animalProducts.length)

    console.log('Web technologies:', webTechs)
    console.log('Number of web technologies:', webTechs.length)

    console.log('Countries:', countries)
    console.log('Number of countries:', countries.length)

    //Array can have items of different data types
    const arr1 = [
      'Asabeneh',
      250,
      true,
      { country: 'Finland', city: 'Helsinki' },
      { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] }
    ] // arr containing different data types
    console.log(arr1)

    //3.Creating an array using split

    let js = 'JavaScript'
    const charsInJavaScript = js.split('')

    console.log(charsInJavaScript) // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

    let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
    const companies = companiesString.split(',')

    console.log(companies) // ["Facebook", " Google", " Microsoft", " Apple", " IBM", " Oracle", " Amazon"]
    let txt =
      'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
    const words = txt.split(' ')

    console.log(words)
// the text has special characters think how you can just get only the words
// ["I", "love", "teaching", "and", "empowering", "people.", "I", "teach", "HTML,", "CSS,", "JS,", "React,", "Python"]
  



//nested Array

let ourArray=[["selva",23],["karthi",25]];

console.log(ourArray[0][1]);//23


//Multi dimenson array

let ourArray2=[["selva",23],["karthi",25,["Police"]],[["bass",32],"hosur"]];

console.log(ourArray2[1][2][0]);//police
