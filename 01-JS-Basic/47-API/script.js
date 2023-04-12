//API - Application Programming Interface


// Our program <----> API <-------> Other Program
//fetch to return a promise


//get
/*
fetch('https://api-thirukkural.vercel.app/api?num=10000')
.then((res)=>{
    if(res.ok)
    console.log('success');
    else
    console.log('error');

    return res.json()
}
    )
.then((msg)=>console.log(msg.line1,msg.line2,msg.tam_exp))
.catch(err=>console.log(err))
*/


//post
     
fetch('https://jsonplaceholder.typicode.com/todos',{
    method:'POST',
    headers:{'content-type':'application/json'},
    body:JSON.stringify({
        userId:1,
        id:1,
        title:'chnage',
        completed:false
    })
})

.then(response => response.json())
.then(json => console.log(json))

.catch(err=>console.log(err))

