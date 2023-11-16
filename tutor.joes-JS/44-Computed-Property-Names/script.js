const key1="name";
const key2="age";
const value1="Joes";
const value2=35;
const user={
    [key1]:value1,
    [key2]:value2,
}
console.log(user);


//
const { [key1]: name } = user;
console.log(name); // "Joes"
