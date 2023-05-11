//Callback - Function passed as argument

function greetConsole(name){
    console.log('hello',name);
}

function greetingHead(name){
    const heading=document.querySelector('h1');
    heading.innerHTML='hello'+name;
}

function greet(callback){
    console.log(callback);
callback('ram');
}


greet(greetConsole);
greet(greetingHead);


//
greet(name =>{
    const heading=document.querySelector('h1');
    heading.innerHTML='hello'+name;
})