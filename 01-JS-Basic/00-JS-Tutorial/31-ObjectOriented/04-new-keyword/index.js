//JavaScript new Keyword

function MyFunc() {
    this.x = 100;
}

var obj1 = new MyFunc();
obj1.x;

//ii. new keyword
function MyFunc() {
    var myVar = 1;
    this.x = 100;
}

MyFunc.prototype.y = 200;

var obj1 = new MyFunc();
obj1.x; // 100
obj1.y; // 200



/*
So thus, object of MyFunc will be returned using new keyword.

The following figure illustrates the above process.


Object creation process
The new keyword ignores return statement that returns primitive value.

*/


//ii.new keyword
function MyFunc() {
    this.x = 100;
    
    return 200;
}

var obj = new MyFunc();
alert(obj.x); // 100


//iii.new keyword
function MyFunc() {
    this.x = 100;
               
    return { a: 123 };
}

var obj1 = new MyFunc();

alert(obj1.x); // undefined