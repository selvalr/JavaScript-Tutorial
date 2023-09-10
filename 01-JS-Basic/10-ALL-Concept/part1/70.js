// optional chaining

const user = {
  firstName: "harshit",
  //address: { houseNumber: "1234" },
};

console.log(user?.firstName); //harshit
console.log(user?.address?.houseNumber); //undefined
