//nullish coalescing operator (??)

const a=null??'No Value';
console.log(a);//no value

const b=24??45;
console.log(b);//24

const c=null??55;
console.log(c);//55


// ??=

const user={'name':"selva"};
console.log(user);
console.log(user.name);
user.city??="tenkasi";
console.log(user.city);
console.log(user);