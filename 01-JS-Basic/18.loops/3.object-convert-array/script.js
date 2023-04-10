//looping over object by converting to an array

let user={
    name:"selva",
    age:22,
    city:"tenkasi",
    contact:"1234567890"
};
//object keys to array 
let arr_keys=Object.keys(user);
console.log(arr_keys);

//object value to array 
let arr_value=Object.values(user);
console.log(arr_value);

for(let i=0;i<arr_keys.length;i++){
    console.log(arr_keys[i]+":"+arr_value[i]);
   // console.log(user[arr_key[i]]);
}