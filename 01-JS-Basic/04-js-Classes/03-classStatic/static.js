//1.Here's an example of a class with a static method:

class MyClass {
  static myStaticMethod() {
    console.log("Hello from a static method!");
  }
}

MyClass.myStaticMethod(); // Output: Hello from a static method!

//2.Here's an example of a class with a static property:

class MyClass {
  static myStaticProperty = "Hello from a static property!";
}

console.log(MyClass.myStaticProperty); // Output: Hello from a static property!

//3.Use Cases for Static Methods and Properties

//Example 1: Utility Class
//You can use a static class to create a collection of utility functions that can be used throughout your application. For example, let's say you have a MathUtils class that provides various math-related functions:

class MathUtils {
  static add(a, b) {
    return a + b;
  }

  static subtract(a, b) {
    return a - b;
  }

  static multiply(a, b) {
    return a * b;
  }

  static divide(a, b) {
    return a / b;
  }
}

console.log(MathUtils.add(2, 3)); // Output: 5
console.log(MathUtils.multiply(4, 5)); // Output: 20

//3.Example 2: Singleton Pattern
//You can also use a static property to create a singleton pattern in JavaScript. The singleton pattern ensures that only one instance of a particular class can be created.

class Database {
  static instance = null;

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }

  query(sql) {
    // code to execute SQL query
  }
}

const db1 = Database.getInstance();
const db2 = Database.getInstance();

console.log(db1 === db2); // Output: true

//4.Example 3: Constants
//Finally, you can use a static property to define a constant value that is associated with a class. For example:

class Colors {
  static RED = "#ff0000";
  static GREEN = "#00ff00";
  static BLUE = "#0000ff";
}

console.log(Colors.RED); // Output: #ff0000
console.log(Colors.GREEN); // Output: #00ff00

//5.To define a static method in JavaScript, you can use the static keyword:
class MyClass {
  static myStaticMethod() {
    console.log("This is a static method");
  }
}

const myInstance = new MyClass();
myInstance.myStaticMethod(); // TypeError: myInstance.myStaticMethod is not a function

//6.
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static fromArray([x, y]) {
    return new Point(x, y);
  }
}

const arr = [10, 20];
const point = Point.fromArray(arr);

console.log(point); // Output: Point {x: 10, y: 20}
