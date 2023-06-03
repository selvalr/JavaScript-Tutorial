
//callback function syntex
/*
function myDisplayer(something) {
  document.getElementById("demo").innerHTML = something;
}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

myCalculator(5, 5, myDisplayer)
 */






//add() function is called with arguments a, b
// and callback, callback will be executed just
// after ending of add() function
function add(a, b , callback){
document.write(`The sum of ${a} and ${b} is ${a+b}.` +"<br>");
callback();
}
	
// disp() function is called just
// after the ending of add() function
function disp(){
document.write('This must be printed after addition');
}
	
// Calling add() function
add(5,6,disp);	
	