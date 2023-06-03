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




//Exampple:2

Class in JavaScript
function Person() {
    this.firstName = "unknown";
    this.lastName = "unknown";
}

var person1 = new Person();
person1.firstName = "Steve";
person1.lastName = "Jobs";
            
alert(person1.firstName + " " + person1.lastName);

var person2 = new Person();
person2.firstName = "Bill";
person2.lastName = "Gates";
            
alert(person2.firstName + " " + person2.lastName );

//i.Add Methods in a Class
function Person() {
    this.firstName = "unknown";
    this.lastName = "unknown";
    this.getFullName = function(){
        return this.firstName + " " + this.lastName;
    }
};

var person1 = new Person();
person1.firstName = "Steve";
person1.lastName = "Jobs";

alert(person1.getFullName());

var person2 = new Person();
person2.firstName = "Bill";
person2.lastName = "Gates";

alert(person2.getFullName());

//ii.Constructor
function Person(FirstName, LastName, Age) {
    this.firstName = FirstName || "unknown";
    this.lastName = LastName || "unknown";
    this.age = Age || 25;
    this.getFullName = function () {
        return this.firstName + " " + this.lastName;
    }
};

var person1 = new Person("James","Bond",50);
alert(person1.getFullName());

var person2 = new Person("Tom","Paul");
alert(person2.getFullName());

//iii.Property  Getters and Setters

function Person() {
    var _firstName = "unknown";

    Object.defineProperties(this, {
        "FirstName": {
            get: function () {
                return _firstName;
            },
            set: function (value) {
                _firstName = value;
            }
        }
    });
};

var person1 = new Person();
person1.FirstName = "Steve";
alert(person1.FirstName );
            
var person2 = new Person();
person2.FirstName = "Bill";
alert(person2.FirstName );

//iv.Read-only Property
function Person(firstName) {

    var _firstName = firstName || "unknown";

        Object.defineProperties(this, {
            "FirstName": {
                get: function () {
                    return _firstName;
                }
            }
        });
    };
var person1 = new Person("Steve");
//person1.FirstName = "Steve"; -- will not work
alert(person1.FirstName );
            
var person2 = new Person("Bill");
//person2.FirstName = "Bill"; -- will not work
alert(person2.FirstName );


//v.Multiple Properties
function Person(firstName, lastName, age) {
    var _firstName = firstName || "unknown";
    var _lastName = lastName || "unknown";
    var _age = age || 25;

    Object.defineProperties(this, {
        "FirstName": {
            get: function () { return _firstName },
            set: function (value) { _firstName = value }
        },
        "LastName": {
            get: function () { return _lastName },
            set: function (value) { _lastName = value }
        },
        "Age": {
            get: function () { return _age },
            set: function (value) { _age = value }
        }
    });

    this.getFullName = function () {
            return this.FirstName + " " + this.LastName;
    }
};

var person1 = new Person();
person1.FirstName = "John";
person1.LastName = "Bond";
    
alert(person1.getFullName());