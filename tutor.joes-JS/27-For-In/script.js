/*
    for (variable in object) {
              // Code to be executed for each property of the object
       }
*/

let user = {
    name: "Tutor Joes",
    age: 35,
    city: "Salem",
    contact: "9043017689",
  };
  
  for(let prop in user)
  {
    console.log(prop+" : "+user[prop]);
  }