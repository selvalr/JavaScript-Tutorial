//Nested If Statement
/*
if(cond)
{
  if(cond)
  {
    ---
  }
}

min mark >=35
  91-100 A
  81-90 B
  71-80 C
  D
*/

let english=95,tamil=98,maths=75;
let total,avg;
total=english+tamil+maths;
avg=total/3;
console.log("Total   : "+total);
console.log("Average : "+avg.toFixed(2));

if(english>=35 && tamil>=35 && maths>=35)
{
  console.log("Result  : Pass");
  if(avg>90 && avg<=100){
    console.log("Grade   : A Grade");
  }else if(avg>80 && avg<=90){
    console.log("Grade   : B Grade");
  }else if(avg>70 && avg<=80){
    console.log("Grade   : C Grade");
  }else{
    console.log("Grade   : D Grade");
  }
}
else
{
  console.log("Result  : Fail");
  console.log("Grade   : No Grade");
}
