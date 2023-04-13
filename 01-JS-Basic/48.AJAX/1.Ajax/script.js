//AJAX - Asynchronous Javascript And XML
//set of web technologies
//sent & receive data asynchronously
// requests without reload
//talks to server through XHR
//XHR

//1.Not XML
//2.AJAX request ca be in any format.
// textfile,html,JSON object.

document.getElementById('button1').addEventListener('click',showMark)


function showMark() {
    // Create an XMLHttpRequest object
    const xhttp = new XMLHttpRequest();
    console.log('ready state',xhttp.readyState);//0
    

    // OPEN-type,url/file,async
    xhttp.open("GET", "1.json",true);
    console.log('ready state',xhttp.readyState);//1
    
    
    // OPTIONAL -used for loaders

    xhttp.onprogress=function(){
    //  console.log('ready state',xhttp.readyState);//3
    
    }

    
    /*
   

    xhttp.onload=function() {
      if(this.status == 200){
        console.log(this.responseText);
      }
    }
    */
    
    // Define a callback function
    xhttp.onreadystatechange = function() {
      console.log('ready state',xhttp.readyState);//2,3,4
    
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("demo").innerHTML =
        this.responseText;
      }
      else if(this.status==404){
        document.getElementById("demo").innerHTML =
        'not found';
      }
    };

    xhttp.onerror=function() {
      console.log('request error');
    }

    
    xhttp.send();
  }

//readyState value
//0.request not initialized
//1.server connection established
//2.request received
//3.processing request
//4.request finished and response is ready


  //http status
  //200:"ok"
  //403:"forbidden"
  //404:"Not found"



  