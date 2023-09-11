//synchronous--->step by step execute
//synchronous--->is blocking 

console.log("start");//f1

function sync(){
    console.log('step-1');//f3
    console.log('step-2');//f4
    console.log('step-3');//f5
    
}
sync();//f2


//Asynchronous --->is non blocking

setTimeout(()=>console.log('step 1'),3000);//f6
setTimeout(()=>console.log('step 2'),2000);//f7
setTimeout(()=>console.log('step 3'),1000);//f8


console.log('BYE');//f9