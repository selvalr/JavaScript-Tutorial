let opertor="%";
let result;
let a=10;
let b=3
switch(opertor){
    case "+":
        result=a+b;
       console.log(result);
        break;
        case "-":
            result=a-b;
           console.log(result);
            break;

        case "*":
        result=a*b;
       console.log(result);
        break;

        case "/":
        result=a/b;
       console.log(result);
        break;

        case "%":
        result=a%b;
       console.log(result);
        break;

        default:
            console.log("please enter a arithmetic operator");
}