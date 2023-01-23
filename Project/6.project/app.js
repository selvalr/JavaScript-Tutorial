function send() {
    let n1 = parseInt(document.getElementById("n1").value);
    let n2 = parseInt(document.getElementById("n2").value);
    let oper = document.getElementById("operator").value;
    
    
    if(!/^[0-9]+$/.test(n1,n2)){
        alert("Please only enter numeric characters only numbers(Allowed input:0-9)");
      }


    if (oper === '+') {
        document.getElementById('result').value = n1 + n2;
    }
    if (oper === '-') {
        document.getElementById('result').value = n1 - n2;
    }
    if (oper === '*') {
        document.getElementById('result').value = n1 * n2;
    }
    if(oper==='/'){
        document.getElementById('result').value=n1/n2;
    }
    if(oper==='%'){
        document.getElementById('result').value=n1%n2;
    }
}