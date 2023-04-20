function users(){
    fetch('http://localhost:3000')
    .then(response => response.json())
   .then((data)=>{
    console.log(data);
    let output="<h2>user</h2>"
  
    data.forEach((user) => {
    output+=`<ul>
  <li>${user.name}</li>
<li>${user.age}</li>
<li>${user.group}</li>
</ul>`

   }
   )
    
document.getElementById('user').innerHTML=output
}
);
}
