function about(hobby, favMusician) {
  console.log(this.firstName, this.age, hobby, favMusician);
}
const user1 = {
  firstName: "harshit",
  age: 8,
};
const user2 = {
  firstName: "mohit",
  age: 9,
};

// apply
about.apply(user1, ["guitar", "bach"]); //harshit 8 guitar bech
const func = about.bind(user2, "guitar", "bach");
func(); //moohit 9 guitar bach
