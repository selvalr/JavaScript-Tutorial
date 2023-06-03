const number = [1, 2, 30, 4, 5, 6, 7, 8, 9, 10];
//value,index,array
number.forEach((value) => {
    console.log(value);
});


number.forEach((value, index) => {
    console.log("Index : " + index + " Value: " + value);
});


const user = [{ name: "selva", age: 21, native: "avr" }, { name: "bass", age: 32, native: "Hosur" },{ name: "karthi", age: 21, native: "covai" }]

console.table(user);
user.forEach((value)=>{
    console.log(value.name);
})