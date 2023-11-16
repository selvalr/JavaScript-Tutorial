/*
 for (variable of iterable) {
              // Code to be executed for each iteration
       }
*/

let names = ["Tiya", "Ram", "Sam", "Raja", "Kumar"];

for(let i=0;i<names.length;i++)
{
  console.log(names[i]);
}

//For Of loop
console.log("For of Loop : ")

for(let name of names){
  console.log(name);
}