//Hoisting

//Hoisting
x = 1;

alert('x = ' + x); // display x = 1

var x;

//ii.Also, a variable can be assigned to another variable as shown below.

//Example: Hoisting
x = 1;
y = x;

alert('x = ' + x);
alert('y = ' + y);

var x;
var y;

//iii.Hoisting not applicable for initialized variables

alert('x = ' + x); // display x = undefined
        
var x = 1;


//2.Hoisting of Function


//i.Function Hoisting
alert(Sum(5, 5)); // 10

function Sum(val1, val2)
{
    return val1 + val2;
}

//ii.Hoisting on function expression

Add(5, 5); // error

var Add = function Sum(val1, val2)
{
    return val1 + val2;
}

//3.Hoisting Functions Before Variables
//i. Function Hoisting Before Variables
alert(UseMe);

var UseMe;

function UseMe()
{            
    alert("UseMe function called");
}
