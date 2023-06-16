//JSON-JavaScript Object Notation
//text format
//JSON is a format for storing and transporting data.
//JSON is often used when data is sent from a server to a web page
//to send and receive data in many programming language

let json1 = "selva";
let json2 = 2;
let json3 = true;
let json4 = [1, 2, 3, 4, 5];
let json5 = {
  stock: "TCS",
  price: 3400,
};
let json6 = `[
{
    "stock":"TCS",
    "price":3400
},
{
    "stock":"TCS",
    "price":3400
},
{
    "stock":"TCS",
    "price":3400
}
]`;
console.log(json6);

//parse is a string to array of object
let parsed = JSON.parse(json6);
console.log(parsed);
console.log(parsed[1]);

//array to string changed json
let srinfy = JSON.stringify(json5);
console.log(srinfy);
