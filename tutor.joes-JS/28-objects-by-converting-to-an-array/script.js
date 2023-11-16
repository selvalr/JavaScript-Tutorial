//Looping over objects by converting to an array

let user = {
    name: "Tutor Joes",
    age: 35,
    city: "Salem",
    contact: "9043017689",
  };
  
  let arr_keys=Object.keys(user);
  console.table(arr_keys);
  
  let arr_values=Object.values(user);
  console.table(arr_values);
  
  for(let i=0;i<arr_keys.length;i++)
  {
    console.log(arr_keys[i]+" : "+arr_values[i]);
    //console.log(user[arr_keys[i]]);
  }