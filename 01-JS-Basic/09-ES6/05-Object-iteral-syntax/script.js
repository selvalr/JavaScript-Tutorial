function getCar(make, model, value) {
  return {
    // with property value shorthand
    // syntax, you can omit the property
    // value if key matches variable
    // name
    make, // same as make: make
    model, // same as model: model
    value, // same as value: value

    // computed values now work with
    // object literals
    ["make" + make]: true,

    // Method definition shorthand syntax
    // omits `function` keyword & colon
    depreciate() {
      this.value -= 2500;
    },
  };
}

let car = getCar("Kia", "Sorento", 40000);
console.log(car);
// {
//     make: 'Kia',
//     model:'Sorento',
//     value: 40000,
//     makeKia: true,
//     depreciate: function()
// }
