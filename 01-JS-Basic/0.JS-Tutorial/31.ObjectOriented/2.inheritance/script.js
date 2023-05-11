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

class User{//base class,parent class,super class
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


//inheritance-->normal user to paid user example

class Paiduser extends User{//derived class,child class,sub class 
    //all access to the User class object
    
    
    constructor(name,age){

        //instance variable
        super(name,age);//super is a parent constructor declare value name,age
       this.storage=100;
    }
    
    
    message(){
        console.log("you have extra 100gb paid");
    }

    //overriding the parent class login method
    login(){

        console.log('thank you extent your memory');
        return this;//use the chain method return
    }
}

let paiduser1=new Paiduser('ramya',25);

paiduser1.login();//acees the parent class login method
//userOne.login();//not acess dreived class

console.log(paiduser1);



//method chaining

paiduser1.login().message();



//2.get and set how to use class

class Temperature{
    constructor(temp){
        this._temp=temp;//_ is a private variable dont use the outside same name method in undersocre
    }
    get temp(){
        return this._temp
    }
    set temp(temp){
        if(temp>100)
        temp=100
            this._temp=temp
        
    }
}

let temp1=new Temperature(25);
//console.log(temp1._temp);//dont use underscore private in script
temp1.temp=130;
console.log(temp1.temp);