document.getElementById('button1').addEventListener('click', loadUser);
document.getElementById('button2').addEventListener('click', loadUsers);

function loadUser(){
    let xhr=new XMLHttpRequest()
    xhr.open('GET',"3.json",true);

    xhr.onload=function(){
        if(this.status==200){
            let user=JSON.parse(this.responseText);
            let output='';

            output +='<ul>' +
            '<li>Uname:'+user.name+'</li>'+
            '<li>Grade:'+user.grade+'</li>'+
            '</ul>';

            document.getElementById('user').innerHTML=output;;
        }
    }
    xhr.send();
}



function loadUsers(){
    let xhr=new XMLHttpRequest()
    xhr.open('GET',"4.json",true);

    xhr.onload=function(){
        if(this.status==200){
            let users=JSON.parse(this.responseText);
            let output='';

            for(let i in users ){
            output +='<ul>' +
            '<li>Uname:'+users[i].name+'</li>'+
            '<li>Grade:'+users[i].grade+'</li>'+
            '</ul>';
            }
            document.getElementById('users').innerHTML=output;;
        }
    }
    xhr.send();
}