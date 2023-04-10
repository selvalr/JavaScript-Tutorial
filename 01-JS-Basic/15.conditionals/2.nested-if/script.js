//Nested IF Statement
/*
if(condition)
{
    if(condition)
    {
        ----
    }
}

*/

let tamil=88,english=54,math=66;

let total,avg;

total=tamil+english+math;
avg=total/3;
console.log("total"+total);
console.log("avg"+avg);

if(tamil>=35 && english>=35 &&  math>=35){
    console.log("pass");
    if(avg>90){
        console.log("A grade");
    }
    else if(avg<90 && avg >70){
        console.log("B Grade");
    }
    else{
        console.log("c grade");
    }
}
else{
    console.log("fail no grade");
}