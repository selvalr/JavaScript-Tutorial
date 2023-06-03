//Static class methods are defined on the class itself.

//You cannot call a static method on an object, only on an object class.

class Car {
    constructor(name) {
      this.name = name;
    }
    static hello() {
      return "Hello!!";
    }
  }
  
  const myCar = new Car("Ford");
  
  //You can call 'hello()' on the Car Class:
 console.log(Car.hello());
  
  // But NOT on  a Car Object:
  // document.getElementById("demo").innerHTML = myCar.hello();
  // this will raise an error.



  //1.If you want to use the myCar object inside the static method, you can send it as a parameter:

//Example
class Car1 {
  constructor(name) {
    this.name = name;
  }
  static hello(x) {
    return "Hello " + x.name;
  }
}
const myCar1 = new Car("Ford");
console.log(Car1.hello(myCar1));