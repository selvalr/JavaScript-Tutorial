//example1
/*
const getData = async() => {
	var data = "Hello World";
	return data;
}

getData().then(data => console.log(data));
*/

//Example2

const getData = async() => {
	var y = await "Hello World";
	console.log(y);
}

console.log(1);
getData();
console.log(2);
