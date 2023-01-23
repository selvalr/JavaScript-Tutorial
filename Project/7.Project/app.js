function send(i) {
    let value1 = document.getElementById("no1");
    switch (i) {
        case 1:
            value1.value += 1;
            break;
        case 2:
            value1.value += 2;
            break;
        case 3:
            value1.value += 3;
            break;
        case 4:
            value1.value += 4;
            break;
        case 5:
            value1.value += 5;
            break;
        case 6:
            value1.value += 6;
            break;
        case 7:
            value1.value += 7;
            break;
        case 8:
            value1.value += 8;
            break;
        case 9:
            value1.value += 9;
            break;
        case 0:
            value1.value += 0;
            break;
        case '+':
            value1.value+='+';
            break;
            case '-':
            value1.value+='-';
            break;
            case '*':
            value1.value+='*';
            break;
            case '/':
            value1.value+='/';
            break;
            case '%':
            value1.value+='%';
            break;
            case '.':
                value1.value+='.';
                break;
            case 'AC':
            value1.value='';
            break;
            case '=':
            result=eval(value1.value); /*evalute is a teo value add*/
            value1.value=result;
            break;
    }
}