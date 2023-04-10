//foreach

//1.normal way
arr=['selva','baskar','karthi','rav'];

arr.forEach(print)//1.selva,2.baskar,3.karthi

function print(val){
    console.log(val);//1.selva
}


//2.another way arrow function inside function

arr=['selva','baskar','karthi','rav'];

arr.forEach((val)=>{
    console.log(val.toUpperCase());
  
})
console.log(arr);


// array uppercase change original value

arr.forEach((val,index,arr)=>{
    arr[index]=val.toUpperCase();
  
})
console.log(arr);



//map-->executes callback for each array
// element and returns new array

let priceUSD=[20,30,11];
let priceINR=priceUSD.map(x=>x*84);
console.log(priceINR);
console.log(priceUSD);

//foreach
let priceUSD1=[20,30,11];
let priceINR1=priceUSD1.forEach(x1=>x1*84);
console.log(priceINR1);
console.log(priceUSD1);