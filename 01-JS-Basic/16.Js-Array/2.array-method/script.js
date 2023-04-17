  //1.Creating an array using split:convert string to array

  let js = 'JavaScript'
  const charsInJavaScript = js.split('')
  console.log(charsInJavaScript) // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

  let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
  const companies = companiesString.split(',')
  console.log(companies) // ["Facebook", " Google", " Microsoft", " Apple", " IBM", " Oracle", " Amazon"]

  let txt =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
  const words = txt.split(' ')
  console.log(words);// the text has special characters think how you can just get only the words
                      // ["I", "love", "teaching", "and", "empowering", "people.", "I", "teach", "HTML,", "CSS,", "JS,", "React,", "Python"]


//2.Accessing array items using index:

const fruits = ['banana', 'orange', 'mango', 'lemon']
let firstFruit = fruits[0] // we are accessing the first item using its index
console.log(firstFruit) // banana

secondFruit = fruits[1]
console.log(secondFruit) // orange

let lastFruit = fruits[3]
console.log(lastFruit) // lemon
// Last index can be calculated as follows

let lastIndex = fruits.length - 1
lastFruit = fruits[lastIndex]
console.log(lastFruit)  // lemon


//3.Modifying array element

const numbers8 = [1, 2, 3, 4, 5]
numbers8[0] = 10      // changing 1 at index 0 to 10
numbers8[1] = 20      // changing  2 at index 1 to 20
console.log(numbers8) // [10, 20, 3, 4, 5]

const countries = [
'Albania',
'Bolivia',
'Canada',
'Denmark',
'Ethiopia',
'Finland',
'Germany',
'Hungary',
'Ireland',
'Japan',
'Kenya'
]
countries[0] = 'Afghanistan'  // Replacing Albania by Afghanistan
let lastIndex1 = countries.length - 1
countries[lastIndex1] = 'Korea' // Replacing Kenya by Korea
console.log(countries)

//4.Methods to manipulate array

//i.Array Constructor:Array:To create an array.

const arr = Array() // creates an an empty array
console.log(arr)
const eightEmptyValues = Array(8) // it creates eight empty values
console.log(eightEmptyValues) // [empty x 8]

//ii.Creating static values with fill

const arra = Array() // creates an an empty array
console.log(arra)
const eightXvalues = Array(8).fill('X') // it creates eight element values filled with 'X'
console.log(eightXvalues) // ['X', 'X','X','X','X','X','X','X']
const eight0values = Array(8).fill(0) // it creates eight element values filled with '0'
console.log(eight0values) // [0, 0, 0, 0, 0, 0, 0, 0]
const four4values = Array(4).fill(4) // it creates 4 element values filled with '4'
console.log(four4values) // [4, 4, 4, 4]

//iii.Concatenating array using concat

const firstList = [1, 2, 3]
const secondList = [4, 5, 6]
const thirdList = firstList.concat(secondList)
console.log(thirdList) // [1, 2, 3, 4, 5, 6]

//iv.Getting array length

const numbers7 = [1, 2, 3, 4, 5]
console.log(numbers7.length) // -> 5 is the size of the array

//v.Getting index an element in arr array

const numbers6 = [1, 2, 3, 4, 5]
console.log(numbers6.indexOf(5)) // -> 4
console.log(numbers6.indexOf(0)) // -> -1
console.log(numbers6.indexOf(1)) // -> 0
console.log(numbers6.indexOf(6)) // -> -1

//vi.Getting last index of an element in array

const numbers5 = [1, 2, 3, 4, 5, 3, 1, 2]
console.log(numbers5.lastIndexOf(2)) // 7
console.log(numbers5.lastIndexOf(0)) // -1
console.log(numbers5.lastIndexOf(1)) //  6
console.log(numbers5.lastIndexOf(4)) //  3
console.log(numbers5.lastIndexOf(6)) // -1

//vii.Checking array

const numbers4 = [1, 2, 3, 4, 5]
console.log(Array.isArray(numbers4)) // true

const numb = 100
console.log(Array.isArray(numb)) // false

//viii.Converting array to string

const numbe = [1, 2, 3, 4, 5]
console.log(numbe.toString()) // 1,2,3,4,5

const names1 = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
console.log(names1.toString()) // Asabeneh,Mathias,Elias,Brook

//ix.Joining array elements is -convert array to string

const numbers00 = [1, 2, 3, 4, 5]
console.log(numbers00.join()) // 1,2,3,4,5

const names2 = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
console.log(names2.join()) // Asabeneh,Mathias,Elias,Brook
console.log(names2.join('')) //AsabenehMathiasEliasBrook
console.log(names2.join(' ')) //Asabeneh Mathias Elias Brook
console.log(names2.join(', ')) //Asabeneh, Mathias, Elias, Brook
console.log(names2.join(' # ')) //Asabeneh # Mathias # Elias # Brook

const webTechs = [
'HTML',
'CSS',
'JavaScript',
'React',
'Redux',
'Node',
'MongoDB'
] // List of web technologies
console.log(webTechs.join())       // "HTML,CSS,JavaScript,React,Redux,Node,MongoDB"
console.log(webTechs.join(' # '))  // "HTML # CSS # JavaScript # React # Redux # Node # MongoDB"

//x.Slice array elements

const numbers0 = [1,2,3,4,5]
console.log(numbers0.slice()) // -> it copies all  item
console.log(numbers0.slice(0)) // -> it copies all  item
console.log(numbers0.slice(0, numbers0.length)) // it copies all  item
console.log(numbers0.slice(1,4)) // -> [2,3,4] // it doesn't include the ending position

//xi.Splice method in array

const number = [1, 2, 3, 4, 5]
number.splice()
console.log(number)                // -> remove all items


//xii.Adding item to an array using push

// syntax
const arr3  = ['item1', 'item2','item3']
arr3.push('new item')
console.log(arr3);// ['item1', 'item2','item3','new item']

//xiii.Removing the end element using pop

const numbers9 = [1, 2, 3, 4, 5]
numbers9.pop() // -> remove one item from the end
console.log(numbers9) // -> [1,2,3,4]


//xiv.Removing an element from the beginning

const numbers = [1, 2, 3, 4, 5]
numbers.shift() // -> remove one item from the beginning
console.log(numbers) // -> [2,3,4,5]

//xv.Add an element from the beginning

const numbers1 = [1, 2, 3, 4, 5]
numbers1.unshift(0) // -> add one item from the beginning
console.log(numbers1) // -> [0,1,2,3,4,5]

//delete center
// delete numbers[2];//value 3 is a empty but prefers undefined
// console.log("delete center array value:",numbers);//[1,2,empty,4,5];

//splice
numbers1.splice(2,1);
console.log(numbers1);//[1,2,4,5];
numbers1.splice(1,1,'he');
console.log(numbers1);//[1,'he',4,5];


//xvi.Reversing array order

const numbers2 = [1, 2, 3, 4, 5]
numbers2.reverse() // -> reverse array order
console.log(numbers2) // [5, 4, 3, 2, 1]
numbers2.reverse()
console.log(numbers2) // [1, 2, 3, 4, 5]

//xvii.Sorting elements in array

const webTechs1 = [
'HTML',
'CSS',
'JavaScript',
'React',
'Redux',
'Node',
'MongoDB'
]
webTechs1.sort()
console.log(webTechs1) // ["CSS", "HTML", "JavaScript", "MongoDB", "Node", "React", "Redux"]
webTechs1.reverse() // after sorting we can reverse it
console.log(webTechs1) // ["Redux", "React", "Node", "MongoDB", "JavaScript", "HTML", "CSS"]

//i.Array of arrays-->Array can store different data types including an array itself. Let us create an array of arrays

const firstNums = [1, 2, 3]
const secondNums = [1, 4, 9]

const arrayOfArray =  [[1, 2, 3], [1, 2, 3]]
console.log(arrayOfArray[0]) // [1, 2, 3]

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = [frontEnd, backEnd]
console.log(fullStack)   // [["HTML", "CSS", "JS", "React", "Redux"], ["Node", "Express", "MongoDB"]]
console.log(fullStack.length)  // 2
console.log(fullStack[0])  // ["HTML", "CSS", "JS", "React", "Redux"]
console.log(fullStack[1]) // ["Node", "Express", "MongoDB"]


//concat and spread operater

let fArray=[1, 2, 3];
let sArray=[1, 2, 3];
let joinArray=[fArray,sArray];
console.log(joinArray);//[[1, 2,3],[1,2,3]]

//concat
fArray.concat(sArray);
console.log(fArray.concat(sArray));

//spreard
console.log([...fArray,...sArray]);