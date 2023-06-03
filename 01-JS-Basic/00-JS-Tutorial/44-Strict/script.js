//1.strict mode
"use strict";

var x = 1; // valid in strict mode
y = 1; // invalid in strict mode


//2.strict mode

//i.Use of undefined variables:


"use strict";

x = 1; // error

//ii.Use of reserved keyword as name:

"use strict";
try
{
    var for = 1; // error
    var if = 1; // error
}
catch(ex)
{
    document.getElementById("errorMessage").innerHTML = ex;
}

//iii.Duplicate property names of an object:

"use strict";
try
{
    var myObj = { myProp: 100, myProp:"test strict mode" }; // error
}
catch(ex)
{
    document.getElementById("errorMessage").innerHTML = ex;
}

//iv.Duplicate parameters:

"use strict";

function Sum(val, val){return val + val }; // error

//v.Assign values to read-only property:

"use strict";

var arr = [1 ,2 ,3 ,4, 5];
arr.length = 10; // error

//vi.Modify arguments object:

"use strict";

function Sum(val1, val2){
    arguments = 100; // error
}

//vii.Octal literals:

"use strict";

var oct = 030; // error

//viii.with statement:

"use strict";
try {
    with (Math){
        x = abs(200.234, 2); // error
    };
    
} catch (error) {
    console.log(error);
}


//ix.Eval function to create a variable:

"use strict";

eval("var x = 1");// error


//2.function stict

x = 1; //valid

function sum(val1, val2){
    "use strict";

     result = val1 + val2; //error

    return result;
}