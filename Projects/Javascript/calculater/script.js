


function numberInput(num){
    let outputScreen=document.getElementById("values")
    outputScreen.value +=num;
  return num;
}


function calculate(){
    let x = document.getElementById("values").value;//get the input value 
    let result = eval(x);//evaluate ("5+7"=12)
    document.getElementById("values").value=result;
    return result;
   
}

function empty(){
 document.getElementById("values").value="";
  
}