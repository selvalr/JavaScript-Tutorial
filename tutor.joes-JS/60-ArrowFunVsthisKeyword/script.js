const obj = {
    name: 'John',
  printName: () => {
      console.log(this.name);
    }
  };
  
  obj.printName(); //undefined

  //Another example:

const obj1 = {
    name: 'John',
  printName() {
      console.log(this.name);
    },
  printNameWithArrow: () => {
      console.log(this.name);
    }
  };
  
  obj1.printName(); //John
  obj1.printNameWithArrow(); //undefined