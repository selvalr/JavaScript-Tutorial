var fact=5;
function calfact(num)
{
 if(num!=1)
  {
   fact=fact*(num-1);
   num=num-1;
   calfact(num);
  }
 else
  {
   return fact;
  }
}

document.getElementById("demo").innerHTML=calfact(5);