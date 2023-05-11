/*
switch(choice){
    case choice:
        ------
        break;
    case choice:
        ------
        break;
    default choice:
    ------
    break;
}
*/




//1.switch statement


 var grade = 'B';
 var result;

 //input current grade
 switch (grade) {
   case 'A': //if(grade==A)
     result = 'A Grade';
     break;
   case 'B': //if(grade==B)
     result = 'B Grade';
     break;
   case 'C': //if(grade==c)
     result = 'C Grade';
     break;
   default: //else...
     result = 'No Grade';
     break;
 }
 document.write(result);



 //2.Combining cases statement

 let letter='a';

 switch(letter) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
    case 'A':
    case 'E':
    case 'I':
    case 'O':
    case 'U':
        console.log(letter+"is a vowels");
        break;
    default:
        console.log("not vowels");
        break;
 }


//Strict Comparison

 let x = "0";

switch (x) {
  case 0:
    text = "Off";
    break;
  case 1:
    text = "On";
    break;
  default:
    text = "No value found";
}
console.log(text);