//Promise Syntax
/*
var promise = new Promise(function(resolve, reject){
     //do something
});
*/


/*
var promise = new Promise(function(resolve, reject) {
    const x = "geeksforgeeks";
    const y = "geeksforgeeks"
    if(x === y) {
        resolve();
    } else {
        reject();
    }
    });
    
    promise.
        then(function () {
            console.log('Success, You are a GEEK');
        }).
        catch(function () {
            console.log('Some error has occurred');
        });
    */


        /*

        const p1=new Promise(function(resolve,reject){
            setTimeout(()=>{
                resolve("success");
       
            },1000);
             });

             const p2=new Promise(function(resolve,reject){
                setTimeout(()=>{
                    reject("Faliure");
           
                },1000);
                 });
    
             p2.then(console.log).catch(console.log);

             */