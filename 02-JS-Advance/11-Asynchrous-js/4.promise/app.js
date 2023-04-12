//Promise - the promise object represents the
//eventual completion (or failure)
//of an asynchronous operation

/*
const tatkalBook=new Promise((resolve,reject)=>{
    let bookTicket=true
    if(bookTicket){
        resolve(1000)
    }
    else{
        reject()
    }
})

tatkalBook.then(success)//then is resolved
.catch(fail)//catch is reject


function success(amount)//1000 is a resolved
{
    console.log("you will transfer money",amount);
}

function fail(){
    console.log('bus ticket booked');
}

*/

//2.method

/*
function tatkalBook(){
    return new Promise((resolve,reject)=>{
        let bookTicket=false;
        if(bookTicket){
            resolve(1000)
        }
        else{
            reject()
        }
    })
}

tatkalBook().then(success)//then is resolved
.catch(fail)//catch is reject


function success(amount)//1000 is a resolved
{
    console.log("you will transfer money",amount);
}

function fail(){
    console.log('bus ticket booked');
}
*/

/*
function coin(){
    return new Promise((resolve,reject)=>{
        //0-head,1-tail
        const randomCoin=Math.floor(Math.random());
        console.log(randomCoin);
        if(randomCoin==0){
            resolve();
        }
        else{
            reject();
        }
    })
}

coin()
.then(()=>console.log('won'))
.then(()=>console.log('won'))
.then(()=>console.log('won'))
.then(()=>console.log('won'))
.catch(()=>console.log('loss'))
*/


//promise method

let rechA=new Promise((resolve,reject)=>{
    const reached=true;
    if(reached){
        setTimeout(resolve,1000,'selva reached');
    }
    else{
        reject('not reached')
    }
    
})


let rechB=new Promise((resolve,reject)=>{
    const reached=true;
    if(reached){
        setTimeout(resolve,1000,'ravi reached');
    }
    else{
        reject('not reached')
    }
    
})

let rechC=new Promise((resolve,reject)=>{
    const reached=true;
    if(reached){
        setTimeout(resolve,1000,'kathi reached');
    }
    else{
        reject('not reached');
    }
    
})

//promise all
/*
Promise.all([rechA,rechB,rechC])
.then((message)=>{console.log(message);})
.catch((message)=>{console.log(message)})

*/

//all settled -->fulfield or rejected
//promise-pending(or)resolved(or)reject (setteled)

/*
Promise.allSettled([rechA,rechB,rechC])
.then((message)=>{console.log(message);})
.catch((message)=>{console.log(message)})
*/

//promise any--->all reject in any reject but one resolve in resolved any
/*
Promise.any([rechA,rechB,rechC])
.then((message)=>{console.log(message);})
.catch((message)=>{console.log(message)})
*/

//promise race()-->
/*
Promise.race([rechA,rechB,rechC])
.then((message)=>{console.log(message);})
.catch((message)=>{console.log(message)})
*/