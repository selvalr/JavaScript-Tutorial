/*
let person1={
    name:"selva",
    age:22,
    login(){
        console.log("logedin",this.name);
    },
    logout(){
        console.log("logout");
    }
}

let person2={
    name:"bass",
    age:32,
    login(){
        console.log("logedin",this.name);
    },
    logout(){
        console.log("logout");
    }
}

let person3={
    name:"karthi",
    age:25,
    login(){
        console.log("logedin",this.name);
    },
    logout(){
        console.log("logout");
    }
}


person1.login();//person 1 call
person2.logout();//person 2 call
person3.login();//person 3 call

*/



//class solved:
//class is a template of properties
//    and methods
//ES6

class User{
    static numberOfUser=0;//class variable declaration

    constructor(name,age){

        //instance variable
        this.name=name;
        this.age=age;
        User.numberOfUser++;//include the count object to class name and variable name
    }

    login(){
        console.log("logedin",this.name);
    }
    logout(){
        console.log("logout");
    }

    static displyTotal(){
        console.log('TOTAl',User.numberOfUser++);
    }
}

let userOne=new User('selva',23);
let userTwo=new User('karthi',23);
let userThree=new User('karthi',23);

userOne.login();//object method only call object
userTwo.logout();

//console.log(userOne.login());
//console.log("number of users",User.numberOfUser);

User.displyTotal();//static method access total