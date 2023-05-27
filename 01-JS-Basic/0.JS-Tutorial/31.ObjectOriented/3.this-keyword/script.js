//this

var myVar = 100;

function WhoIsThis() {
    var myVar = 200;

    alert(myVar); // 200
    alert(this.myVar); // 100
}

WhoIsThis(); // inferred as window.WhoIsThis()

var obj = new WhoIsThis();
alert(obj.myVar); 


//1.Global Scope

var myVar = 100;

function WhoIsThis() {
    var myVar = 200;

    alert("myVar = " + myVar); // 200
    alert("this.myVar = " + this.myVar); // 100
}

WhoIsThis(); // inferred as window.WhoIsThis()

//ii.this keyword inside inner function
var myVar = 100;

function SomeFunction() {

    function WhoIsThis() {
        var myVar = 200;

        alert("myVar = " + myVar); // 200
        alert("this.myVar = " + this.myVar); // 100
    }

    WhoIsThis(); 
}

SomeFunction();

//2.this Inside Object's Method

var myVar = 100;

function WhoIsThis() {
    this.myVar = 200;
}
var obj1 = new WhoIsThis();

var obj2 = new WhoIsThis();
obj2.myVar = 300;

alert(obj1.myVar); // 200 
alert(obj2.myVar); // 300 

//ii.this keyword
var myVar = 100;

function WhoIsThis() {
    this.myVar = 200;
    
    this.display = function(){
        var myVar = 300;
        
        alert("myVar = " + myVar); // 300
        alert("this.myVar = " + this.myVar);  // 200
    };
}
var obj = new WhoIsThis();

obj.display(); 


//iii.this keyword
var myVar = 100;

var obj = { 
            myVar : 300, 
	    whoIsThis: function(){
                        var myVar = 200;

                        alert(myVar); // 200
                        alert(this.myVar); // 300
	            }
};

obj.whoIsThis(); 



//3.call() and apply()

//i.Function call
function WhoIsThis() {
    alert('Hi');
}

WhoIsThis();
WhoIsThis.call();
WhoIsThis.apply();


//ii.call() & apply()
var myVar = 100;

function WhoIsThis() {

    alert(this.myVar);
}

var obj1 = { myVar : 200 , whoIsThis: WhoIsThis };

var obj2 = { myVar : 300 , whoIsThis: WhoIsThis };

WhoIsThis(); // 'this' will point to window object

WhoIsThis.call(obj1); // 'this' will point to obj1

WhoIsThis.apply(obj2); // 'this' will point to obj2

obj1.whoIsThis.call(window); // 'this' will point to window object

WhoIsThis.apply(obj2); // 'this' will point to obj2


//4.bind()

var myVar = 100;
    
function SomeFunction(callback)
{
    var myVar = 200;

    callback();
};
      
var obj = {
            myVar: 300,
            WhoIsThis : function() {
                alert("'this' points to " + this + ", myVar = " + this.myVar);
            }
      };
      
SomeFunction(obj.WhoIsThis); 
SomeFunction(obj.WhoIsThis.bind(obj)); 


/*
Precedence
So these 4 rules applies to this keyword in order to determine which object this refers to. The following is precedence of order.

1.bind()
2.call() and apply()
3.Object method
4.Global scope
So, first check whether a function is being called as callback function using bind()? If not then check whether a function is being called using call() or apply() with parmeter? If not then check whether a function is being called as an object function? Otherise check whether a function is being called in the global scope without dot notation or using window object.




*/