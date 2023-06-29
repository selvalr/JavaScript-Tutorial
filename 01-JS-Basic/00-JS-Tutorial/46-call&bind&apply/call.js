//The call method is used to invoke a function and specify the this context. It takes an object as its first argument, which becomes the this context for the function, followed by any additional arguments for the function.

//For example:

function total(eng, mat) {
  console.log(this.name + " got " + (eng + mat) + " Marks");
}

const user = { name: "Ram" };
total.call(user, 65, 75); // Ram got 140 Marks

//2.The apply method is similar to call, but it takes an array of arguments for the function, instead of a list of arguments.

//For example:

function total(eng, mat) {
  console.log(this.name + " got " + (eng + mat) + " Marks");
}

const user1 = { name: "Ram" };
total.apply(user1, [65, 75]); // Ram got 140 Marks

//3.The bind method is used to create a new function with the this context set to the provided object. It takes an object as its first argument, which becomes the this context for the new function, and any additional arguments for the function are passed as arguments to the new function.

//For example:

function total(eng, mat) {
  console.log(this.name + " got " + (eng + mat) + " Marks");
}

const user2 = { name: "Ram" };
const fun = total.bind(user2, 65, 75);
fun(); // Ram got 140 Marks
