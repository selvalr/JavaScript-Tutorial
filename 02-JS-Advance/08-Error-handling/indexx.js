//Exceptions handling
try {
  let num=prompt("enter");
  if(num==='')
   throw "Please enter a number"
  if(isNaN(num))
  throw "enter a valid number"
console.log(num**2);

  
} 
catch (error) {
  console.log(error);
}
finally{
  console.log("bye");
}


/*
try {

    alert('Start of try runs');  // (1) <--
  
    // ...no errors here
  
    alert('End of try runs');   // (2) <--
  
  } catch (err) {
  
    alert('Catch is ignored, because there are no errors'); // (3)
  
  }

  */

