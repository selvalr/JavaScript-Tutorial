let value=document.querySelector(".incre");
let value1=document.querySelector(".decre");
let p=document.querySelector("#out");

let count=0;

value.addEventListener("click",()=>{
    count++;
    p.innerHTML=count;
    console.log(count);
})
value1.addEventListener("click",()=>{
    count--;
    p.innerHTML=count;
    console.log(count)
})
