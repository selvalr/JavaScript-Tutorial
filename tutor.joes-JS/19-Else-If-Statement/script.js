/*
  if(cond)
  {
    ----
  }
  else if(cond)
  {
    ----
  }
  else
  {
    ---
  }
*/

//Example-1
let number=0;

if(number<0)
{
  console.log(number+" is negative Number");
}
else if(number>0)
{
  console.log(number+" is Positive Number");
}
else
{
  console.log("Given number is zero");
}

//example-2
/*
avg=87;
90-100  A Grade
80-89   B Grade
70-79   C Grade
<70     D Grade
*/
let avg=45;

if(avg>=90 && avg<=100)
{
  console.log("Grade A");
}
else if(avg>=80 && avg<=89)
{
  console.log("Grade B");
}
else if(avg>=70 && avg<=79)
{
  console.log("Grade C");
}
else
{
  console.log("Grade D");
}