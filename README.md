## What is javascript:

- JavaScript is the most popular client-side scripting language.

- programing language used to make website interactive

- Interpreted language(no compailer)

- Runs on client side

- Object Based language

- Javascript is a synchronous single-threaded language

## Javascript Tutorial for Beginners

- JavaScript is the world's most popular programming language.

- JavaScript is the programming language of the Web.

- JavaScript is easy to learn.

## Why Study JavaScript?

JavaScript is one of the 3 languages all web developers must learn:

1.  HTML to define the content of web pages

2.  CSS to specify the layout of web pages

3.  JavaScript to program the behavior of web pages

## JavaScript Versions:

This tutorial covers every version of JavaScript:

- The Original JavaScript ES1 ES2 ES3 (1997-1999)
- The First Main Revision ES5 (2009)
- The Second Revision ES6 (2015)
- All Yearly Additions (2016, 2017, 2018, 2019, 2020)

## Javascript History:

- JavaScript was developed by Brendan Eich in 1995, which appeared in Netscape, a popular browser of that time.

- and became an ECMA standard in 1997.

- ECMAScript is the official name of the language.

- ECMAScript versions have been abbreviated to ES1, ES2, ES3, ES5, and ES6.

- Since 2016, versions are named by year (ECMAScript 2016, 2017, 2018, 2019, 2020).

## Javascript is not java:

- light weight

- javascript is a scripting lanuage

---

## JavaScript:

- JavaScript is not Java
- JavaScript is client side programming where as Java is a multi programming
- JavaScript runs on browsers

---

## What can i do with javascript?

- Responsive
- interactive
- create cookie
- detect user,other info
- Validate form
- create animation,slideshow,etc
- Build Apps-advanced
- etc.......

---

## What is ECMAScript? (ES5 and ES6):

- ES or ECMAScript (European Computer Manufacturers Association Script) is the scripting language based on JavaScript.

- Its first version was released in the year 1997.

## JavaSCript Version

- JavaScript was invented by Brendan Eich, and in 1997 and became an ECMA standard. ECMAScript is the official language name. ECMAScript versions include ES1, ES2, ES3, ES5, and ES6

## JavaScript Functions and Events:

- A JavaScript function is a block of JavaScript code, that can be executed when "called" for.

- For example, a function can be called when an event occurs, like when the user clicks a button.

---

## JavaScript Values:

The JavaScript syntax defines two types of values:

- Fixed values called Literals. ----> 1. Numbers are written with or without decimals:10.50,1001,...

- Variable values called Variables ----> 2. Strings are text, written within double or single quotes:'selva',"selva",...

---

# Basic Js RoadMap:

## **0.JS-syntax**

**JavaScript Values**

**_a.)Fixed values (or) Literals value _**

- i).Numbers are written with or without decimals:
- `document.getElementById("demo").innerHTML = 10.50;`

- ii).Strings are text, written within double or single quotes:
- `document.getElementById("demo").innerHTML = 'John Doe';`

---

**_b.)Variable values (or) Variables_**

- i).In a programming language, variables are used to store data values.
- ```
  let x;
  x = 6;
  document.getElementById("demo").innerHTML = x;
  ```

---

**JavaScript Operators**

- i).JavaScript uses arithmetic operators ( + - _ / ) to compute values:
  -`document.getElementById("demo").innerHTML = (5 + 6) _ 10;`

- ii).JavaScript uses an assignment operator ( = ) to assign values to variables:
- ```
    let x, y;
    x = 5;
    y = 6;
    document.getElementById("demo").innerHTML = x + y;
  ```

---

**JavaScript Expressions**

-i). An expression is a combination of values, variables, and operators, which computes to a value:

- `document.getElementById("demo").innerHTML = 5 * 10;`

- ii).Expressions can also contain variable values:
- ```var x;
    x = 5;
    document.getElementById("demo").innerHTML = x * 10;
  ```

- iii).The values can be of various types, such as numbers and strings.

- For example, "John" + " " + "Doe", evaluates to "John Doe":

- `document.getElementById("demo").innerHTML = "John" + " " + "Doe";`

---

**JavaScript Keywords**

- i).The let keyword tells the browser to create variables:

- `let x, y;x = 5 + 6;y = x * 10;`

- ii).The var keyword also tells the browser to create variables:

- `var x, y;x = 5 + 6;y = x * 10;`

---

**JavaScript Identifiers / Names**

-i).A JavaScript name must begin with:

- A letter (A-Z or a-z)
- A dollar sign ($)
- Or an underscore (\_)

---

**JavaScript is Case Sensitive**

- All JavaScript identifiers are case sensitive.

- The variables lastName and lastname, are two different variables:

- ```let lastname, lastName;
    lastName = "Doe";
    lastname = "Peterson";
  ```

---

**JavaScript and Camel Case**

- i).Hyphens:--->first-name, last-name, master-card, inter-city
- ii).Underscore:--->first_name, last_name, master_card, inter_city.

- iii).Upper Camel Case (Pascal Case):-->FirstName, LastName, MasterCard, InterCity.

- iv).Lower Camel Case:--->firstName, lastName, masterCard, interCity.

---

## **1. Running JavaScript**

**_a. Script tag_** --> `<script>javascript code here</script>.`

**_b. Link external file_** --> `<script src="/MyJavaScriptFile.js" ></script>`

**_c. Browser console_** -->` console.log();`

**_d. with node_** --> ` node script.js`

---

**_Comments in js file_**

// - single line comment

/\*\*/ - Multi-line comment

---

## **2. Variables**

- A variable is a container used to store data of different types.

- Ways we can declare a variable :

**_a. Declaration_**

- var name;
- let firstName; // cannot be Redeclare.
- const lastName; // cannot be Redeclare, Reassigned..
- using nothing: name='selva';

**_b. Initialization_**

- var name="selva";`var x = 5;var y = 6;var z = x + y;`
- let firstName="selva";`let x = 5;let y = 6;let z = x + y;`
- const lastName="manan";`const price1 = 5;const price2 = 6;let total = price1 + price2;`
- name ="selva";`x = 5;y = 6;z = x + y;`

**_c. Scope:_**

- Global // global scope function out side declaration value
  ---> example:

```// code here can NOT use carName
      function myFunction() {
          let carName = "Volvo";
          // code here CAN use carName
      }
      // code here can NOT use carName
```

- function ---> example:`function myFunction() { let carName = "Volvo"; // Function Scope } `

- Block // block scope is a function inside element ---> example:`{let x = 2;}// x can NOT be used here`

**_d. Hoisting_**

- Hoisting // Hoisting is JavaScript default behavior of moving declarations to the top.
- syntex:

```
  \\using test before declaring
   console.log(test);//undefined
    var test;//hosting
```

- **example**
  ```
  <script>
  x = 5; // Assign 5 to x
  elem = document.getElementById("demo"); // Find an element
  elem.innerHTML = x; // Display x in the element
  var x; // Declare x
  </script>
  ```

**_e. Js Message box_**

- alert(); // This alert box will have the OK button to close the alert box.

- confirm(); // The confirm() function returns true if a user has clicked on the OK button or returns false if clicked on the Cancel button

- prompt(); // prompt([string message], [string defaultValue]);

---

## **3. Data types & Data Structures**

- JavaScript variables can hold different data types: numbers, strings, objects and more:

**_a. Primitive Data types:(OR) Simple Data type_**

- Primitive value stored is Stack

1. Number --> let x=10; , ==> 18 is Integers,2.456 is floats,3e5 is exponential

2. String --> let name="selva"; , ==>Any data under single quote, double quote or backtick quote

3. boolean --> (x == y) ,true | false,==>true or false value.

4. null --> const no=null; ==>empty or unknown value

5. undefined -->let car; ==> a declared variable without a value.

6. BigInt --> let bigNum=BigInt(6573836585638936855394585);

7. Symbol --> let value1=symbol('id'); ==> A unique value that can be generated by Symbol constructor

---

**_b. Reference Data Type (OR) Complex data type_**

- Object Value stored memoryHeap

1. Object --> const coder={name:"selva",age:21};

---

**_c.Type of operator_**

- Type of() Operator is worked primitive Data types worked ----> typeof "John" //string

**_c.Instance of operator _**

- Instance of working is Object reference
- ---> console.log(person instanceof Object);//true

---

**_d.function_**

-A JavaScript function is a block of code designed to perform a particular task -->` function name(parameter1, parameter2, parameter3) { // code to be executed }`

---

## **4. Data Structures:**

- Array --> [1,2,3,4];

- Map / Weak map --> // const fru=new Map(['apple']);

- Date --> const d =new Date();d.getDate();

- Set/Weak set --> const letter = new set();

- Set map --> // const fru=new Map();fru.set("apple",500);

---

## **5. Type Conversion:**

**_a. Explicit conversion_** --> ` a=number('321');a=parseFloat('20.01');a=string(321);`

**_b. Implicit conversion_** --> `"2"+"3"=23; "2"-"3"=-1; '4'*2=8; 'hello'-'world'=nan; '4'-'hello'=nan; '4'-true=3;`

---

## **6. Equality:**

- == --> ` (21==21) //true,(21=='21')//true,`

- === (datatype and value equality is true) -->`(21==='21')//false`

- object two compare is a false

---

## **6.Build in method**

- String Method ---> str.length,str.indexOf(),etc....
  ![string method!](./img/jsstring.jpeg 'basic')

- Object Method ----> tostring,valueof,etc....
- ![object method!](./img/jsobject.jpeg 'basic')

- Array Method ---> concat(),join(),push(),pop(), etc.....
  ![array method!](./img/js%20array.jpeg 'basic')

- Number Method
- --->![number method!](./img/jsnumber.jpeg 'basic')

- Math
- ----> ![math method!](./img/jsmath.jpeg 'basic')

---

## **7. Loops:**

- for -->`for(initial expression,conditional,increment)`

- while -->`while(condition){//code}`

- do..while.. -->`do{}while(condition);`

- for...in

- for...of

- break/continue

---

## **8. Control flow**

**_conditional Statement_**

- if...else -->`if(condition){//true execute code}else{}`

- switch ---> `switch(expression){case x:break;}`

- Ternary operators --->`(age>=18) ? voter : not voter;`

**_Exception Handling_**

- throw statement

- try/catch

- finally

---

## **9. Expressions & Operators:**

1. Arithmetic Operators --> // +,-,\*,/,%,++,--,\*\*

2. Assignment Operators --> // =,+=,-=,etc..

3. Logical Operators (OR)Boolean Operator: &&,||,!

4. Conditional Operators --> variablename=booleanexpression ? true : false

5. Comparison Operators:(Relational Operators) ==,===,!=,!==,>,<,>=,<=,?

6. Bitwise Operators : &,|,~,^,<<,>>,>>>

7. String Operators --> //The + operator can also be used to add (concatenate) strings.

8. Comma Operator

9. Unary Operators (+1,+2,+3)And(-1,-2,-3,-4,-5) values

- The unary + operator can be used to convert a variable to a number:

```let y = "5";      // y is a string
  let x = + y;      // x is a number
  console.log(typeof x)//string
  console.log(typeof y)//number
```

```let x = 1;
  x = -x;
  alert( x ); // -1, unary negation was applied

```

1.  Ternary Operator(?:) // <condition> ? <value1> : <value2>;

---

**_Operator Precedence_**

let x = 100 + 50 \* 3; //output is 250 in machine learnig is a first-->( ),.,[],?.,(),new,++,--,!,+

let x=(100+50)\*3; // 450 this is original value in machine operator precedence

---

## **10.Dates & time**

**_There are 9 ways to create a new date object:_**

- new Date()
- new Date(date string)
- new Date(year,month)
- new Date(year,month,day)
- new Date(year,month,day,hours)
- new Date(year,month,day,hours,minutes)
- new Date(year,month,day,hours,minutes,seconds)
- new Date(year,month,day,hours,minutes,seconds,ms)
- new Date(milliseconds)

## **10. Functions:**

**_a. Function Declarations_** ---> `function functionName(parameters,para2){ //code to be executed }functionName(val1,val2);`

**_b. Function Expressions_** ---> ` const x = function (a, b) {return a * b}; // let z = x(4, 3);`

**_c. Calling Functions_** ----> `const person = { fullName: function() { return this.firstName + " " + this.lastName; } } const person1 = { firstName:"John", lastName: "Doe" } const person2 = { firstName:"Mary", lastName: "Doe" } document.getElementById("demo").innerHTML = person.fullName.call(person2);//output:mary doe`

**_d. Parameters & Arguments_** --->`function functionName(parameter1, parameter2, parameter3) { // code to be executed }`

**_e. Scope_**

**_f. Arrow Functions_** --->`let val1=(a,b)=>a+b;console.log(val1(val1,val2));`

**_g.Higher order Function(map,filter,reduce,sort)_**

---

## **11.error handling**

```

try
{
// code that may throw an error
})
catch(executed Javascript)
{
// code to be executed if an error occurs
}
finally{
// code to be executed regardless of an error occurs or not
}

```

---

## **12.DOM Manipulation & Events**

[DOM](https://www.w3schools.com/js/js_htmldom.asp)

---

## **13.AJAX**

---

# Advance Js Road map:

# ADVANCE

## **11. Advanced Scope:**

    a. Nested Functions
    b. Lexical Scoping
    c. IIFE
    d. Revealing Module Pattern

---

## **12. Closure**

---

## **13. Currying**

---

## **14. this & Binding:**

**_a. how work this working in JS_**

**_b. Implicit Binding_**

**_c. Explicit Binding_**

**_d. new Binding_**

**_e. Lexical Binding_**

**_f. Default Binding_**

- "this" in case of arrow Functions

- Explicit Binding(call,apply and bind)

---

## **15.prototype**

- What is Prototype in JS

- Prototype Chain

---

## **16. Prototypal Inheritance**

---

## **17. Class**

---

## **18. Iterators**

---

## **19. Generators**

---

## **20. Event Loop**

---

## **21. Asynchronous Javascript:**

a. setTimeout

b. setIntervals

c. callbacks

d. Promises

e. async await

---

## **22. Module System**

a. CJS

b. ESM

c. Import/Export

d. Default & Named Exports

---

# WEB APIS

**DOM**

**XHR/Fetch**

**Storage**

**video/audio**

**Drawing Graphics**

---

# Again Roadmap

**1. Variables and, Datatypes**

**_➀ Datatypes_**

    ❯ Primitives

    ❯ Literals

            ❯ Numeric

            ❯ Boolean

            ❯ String

**_➁ Variable_**

    ❯ Naming --> the variable names msg, MSG, Msg, mSg

    ❯ Declaration --> let carName;

    ❯ Assignment

    ***Special Topic***

    ❯ Type Coercion/Conversion

**2. Operators**

- Arithmetic Operators

- Comparison Operators

- Logical Operators

- Assignment Operators

- Typechecking Operators

- Bit-wise Operators (Optional)

- Ternary and Other Operators

**3. Syntax**

    ***➀ Condition***

    ❯ if else

    ❯ switch case

    ***➁ Loop***

    ❯ while

    ❯ do while

    ❯ for

**4. Function**

    ➀ Function Declaration

    ➁ Function Expression

    ➂ Anonymous Function

    ➃ Arrow Function

    ***✧ Special Topic:***

    ❯ Variable Scope

    ❯ Hoisting

    ❯ Callback Function

    ❯ Closure

**5. Array**

    ➀ Array Literal

    ➁ Array Creation

    ➂ Array.length

    ➃ Array methods

    ➄ Array Iteration

    ***✧ Special Topic:***

    ❯ Array Destructuring

    ❯ Array Spreading

    ❯ Array Sorting

**6. String**

    ➀ String Literal

    ➁ String.length

    ➂ String methods

    ***✧ Special Topic:***

    ❯ String Template Literal

**7. Object**

    ➀ Object Literal

    ➁ Accessing Object Properties

    ➂ Iterating through Objects (for...in)

    ***✧ Special Topic:***

    ❯ Object Destructuring

    ❯ Object Spreading

**8. Special Objectsv**

    ➀ Number

    ➁ Boolean

    ➂ Set

    ➃ Map

    ➄ Math

    ➅ Date

    ➆ console

**9. JS Modules (ECMAScript Modules)**

    ➀ import

    ➁ import {}

    ➂ export

    ➃ export default

**10. What next?**

    Based on what career you are choosing, you may have to study some (or, all) of below

    ➀ Async

    ❯ Promise API

    ❯ await async

    ➁ Object Oriented

    ❯ Class

    ❯ Prototype

    ➂ DOM

    ➃ Fetch API

    ➄ Client-side Storage

    ❯ Cookies

    ❯ Web Storage

    ❯ IndexedDB

    ❯ Cache API

---

# ROADMap JavaScript

![js cheetsheet](<./Javascript-Cheat-Sheet%20(2).pdf>)

### Stdy:

https://www.javascripttutorial.net/javascript-syntax/

```

```

```

```
