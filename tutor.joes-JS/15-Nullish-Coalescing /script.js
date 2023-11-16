//Nullish coalescing operator (??)

const a=null??'No Value';
console.log(a);//No value

const b=null??45;
console.log(b);//45

//??=
const user={'name':'joes'};
console.log(user);
console.log(user.name);//joes

user.city??='Salem';
console.log(user.city);//salem
console.log(user);