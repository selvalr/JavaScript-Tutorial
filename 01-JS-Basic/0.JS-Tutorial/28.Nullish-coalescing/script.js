//nullish coalescing operator (??)

const a=null??'No Value';
console.log(a);//no value

const b=24??45;
console.log(b);//24

const c=null??55;
console.log(c);//55

let a1;
let b1=a1??"not a value";
console.log(b1);


let firstName = null;
let lastName = null;
let nickName = "Supercoder";
// shows the first defined value:
alert(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder

// ??=

const user={'name':"selva"};
console.log(user);
console.log(user.name);
user.city??="tenkasi";
console.log(user.city);
console.log(user);



// || or ?? difference
let height = 0;

alert(height || 100); // 100
alert(height ?? 100); // 0