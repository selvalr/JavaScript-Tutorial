document.getElementById('getUser').addEventListener('click',getUser)

document.getElementById('getUsers').addEventListener('click',setUser)

document.getElementById('addPost').addEventListener('click',addPost)


function getUser(){
    // fetch('sample.txt')
    // .then(function(res){ 
    //     return res.text()
    // })
    // .then(function(data){
    //     console.log(data);
    // })



    //2.arrow
    fetch('sample.txt')
    .then((res)=>{return res.text()})
    .then((data)=>{document.getElementById('output').innerHTML=data;})
    .catch((err)=>{
        console.log(err);
    })
}


function setUser(){
    fetch('user.json')
    .then((res)=>{ res.json()})
    .then((data)=>{
        let output="<h2>user</h2>"
      
        data.forEach((user) => {
     output+=`
     
     <ul>
    <li>${user.name}</li>
    <li>${user.id}</li>
    </ul>`
     
     
       }
       )
        
document.getElementById('output').innerHTML=output
}
    );
}

//POST method


function addPost(e){
e.preventDefault();

let title=document.getElementById('title').value;
let body=document.getElementById('body').value;
console.log(title);
console.log(body);

fetch('https://jsonplaceholder.typicode.com/posts',
{
    method: 'POST',
    headers: {
    'Accept': 'application/json, text/plain, */*',
     'Content-Type': 'application/json' },
    body: JSON.stringify({ title: title, body:body })
})
.then((res)=>{return res.json()})
.then((data)=>{console.log(data);})
}