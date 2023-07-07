// function execution context

let foo = "foo";
console.log(foo); //foo
function getFullName(firstName, lastName) {
  console.log(arguments); //Arguments(2) ['harshit', 'sharma', callee: ƒ, Symbol(Symbol.iterator): ƒ]
  let myVar = "var inside func";
  console.log(myVar); //var inside func
  const fullName = firstName + " " + lastName;
  return fullName;
}

const personName = getFullName("harshit", "sharma");
console.log(personName); //harshit sharma
