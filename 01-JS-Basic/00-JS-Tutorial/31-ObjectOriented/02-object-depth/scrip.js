//1.JavaScript Object

// object literal 
var person = {
    firstName:'Steve',
    lastName:'Jobs'
  };
  
  // Constructor function
  function Student(){
    this.name = "John";
    this.gender = "Male";
    this.sayHi = function(){
      alert('Hi');
    }
  }
  var student1 = new Student();
  console.log(student1.name);
  console.log(student1.gender);
  student1.sayHi();
  

  //ii.Edit Property Descriptor
function Student(){
    this.title = "Mr.";
    this.name = "Steve";
    this.gender = "Male";
    this.sayHi = function(){    
      alert('Hi');
    }
  }
  var student1 = new Student();
  
  Object.keys(student1);

  
  //ii.Enumerable Properties
function Student(){
    this.title = "Mr.";
    this.name = "Steve";
    this.gender = "Male";
    this.sayHi = function(){    
      alert('Hi');
    }
  }
  var student1 = new Student();
  
  //enumerate properties of student1
  for(var prop in student1){
    console.log(prop);
  }

  //iii.Property Descriptor
var person = {
    firstName:'Steve',
    lastName:'Jobs'
  };
  
  function Student(){
    this.name = "John";
    this.gender = "Male";
    this.sayHi = function(){
      alert('Hi');
    }
  }
  
  var student1 = new Student();
  
  console.log(Object.getOwnPropertyDescriptor(person,'firstName'));
  console.log(Object.getOwnPropertyDescriptor(student1,'name'));
  console.log(Object.getOwnPropertyDescriptor(student1,'sayHi'));

  
  //iv.Object.defineProperty()

  //i.Edit Property Descriptor
'use strict'

function Student(){
  this.name = "Steve";
  this.gender = "Male";

}

var student1 = new Student();

Object.defineProperty(student1,'name', { writable:false} );

try
{
    student1.name = "James";
    console.log(student1.name);
}
catch(ex)
{
    console.log(ex.message);
}


//ii. Edit Property Descriptor
function Student(){
    this.name = "Steve";
    this.gender = "Male";
  }
  
  var student1 = new Student();
  
  //enumerate properties of student1
  for(var prop in student1){
    console.log(prop);
  }
  
  //edit enumerable attributes of name property to false
  Object.defineProperty(student1,'name',{ enumerable:false });
  
  console.log('After setting enumerable to false:');
  
  for(var prop in student1){
    console.log(prop);
  }


  //iii. Edit Property Descriptor
'use strict';

function Student(){
  this.name = "Steve";
  this.gender = "Male";
  
}
var student1 = new Student();

Object.defineProperty(student1,'name',{configurable:false});// set configurable to false

try
{
    Object.defineProperty(student1,'name',{writable:false}); // change writable attribute
}
catch(ex)
{
    console.log(ex.message);
}


//3.Define New Property
function Student(){
    this.title = "Mr.";
    this.name = "Steve";
  }
  
  var student1 = new Student();
  
  Object.defineProperty(student1,'fullName',{
    get:function(){
      return this.title + ' ' + this.name;
    },
    set:function(_fullName){
      this.title = _fullName.split(' ')[0];
      this.name = _fullName.split(' ')[1];
    }
  });
  
  student1.fullName = "Mr. John";
  
  console.log(student1.title);
  console.log(student1.name);
  