//output in an alert box: alert(message)
alert("hello world"); //hello world
alert("hello"); //hello
alert(1 + 5); //6
alert("hello world :" + 10); //hello world: 10

//write to the HTML
document.write("hello world <br>"); //hello world
document.write(9 - 7 + "<br>"); //2
document.write("Result:" + (10 + 20)); //Result:30

//write to the browser console
console.log("selvamanan"); //selvamanan
console.log(7 * 7); //49
console.log("result:" + (20 - 5)); //result:15

//Yes\no dialog,returns true/false depending on user click
const agree = confirm("Are you sure you like to delete? ");
console.log(agree); // result will be true or false based on what you click on the dialog box

//input dialog second argument in the initial value: prompt('required text', 'optional text')
let number = prompt("Enter number", "number goes here");
console.log(number);
