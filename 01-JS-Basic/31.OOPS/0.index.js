// 4 pillars of Object-Oriented-Programming 
/*

1.Encapsulation -->Reduce complexity + increase reusability
2.Abstraction --->Reduce complexity + isolate impact of changes
3.Inheritance --->Eliminate redundant code
4.Polymorphism --->Refactor ugly switch/case statements

*/

//What is OOP?

/*
3.OOP --->2. Object --->1. Primitive DataType
*/


/*
let name="selva";
let age=23;
let interest=['creating,teach now'];

let address={
    city:"Tenkasi",
    state:"tamil"
}

function greeting(){
    let msg="my name"+name+"is"+interest+"ing";
    return msg;
}
greeting();
*/

//Object Oriented Programming-(OOPS)
let person={
    name:"selva",
    age:23,
    interest:['creating,teach now'],
    address:{
        city:"Tenkasi",
        state:"tamil"
    },
    greeting:function(){
        let msg="my name"+this.name+"is"+this.interest+"ing";
        console.log(msg);

    }

}

console.log(person.greeting());