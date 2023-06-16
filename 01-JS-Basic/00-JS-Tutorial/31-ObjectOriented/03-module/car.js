class Car {
  driving() {
    console.log("driving");
  }
}

function fillGas() {
  console.log("filling gas");
}

function repair() {
  console.log("repair");
}

//one file only one default export but many export allowed

export default Car;
export { fillGas, repair };
