//Here is a table showing all the inbuilt methods of sets in JavaScript:
/*
Method	            Description
add()	        Adds a new value to the set.
clear()	        Removes all values from the set.
delete()	    Removes a specific value from the set.
entries()	    Returns an iterator that contains the [value, value] pairs for each value in the set.
forEach()	    Executes a provided function once for each value in the set, in insertion order.
has()	        Returns a Boolean indicating whether the specified value is present in the set or not.
keys()	        Returns an iterator that contains the values for each value in the set.
size	        Returns the number of values in the set.
values()	    Returns an iterator that contains the values for each value in the set.
*/

//1.Creating Sets:
const mySet = new Set();

//This creates an empty set. You can also pass an iterable object, such as an array, into the constructor to create a set with initial values:
const mySet1 = new Set([1, 2, 3]);

//2.Adding and Removing Values:
//You can add a value to a set using the add() method:

mySet1.add(4);

//You can remove a value from a set using the delete() method:

mySet1.delete(3);

//3.Checking Set Size:
//You can check the size of a set using the size property:

console.log(mySet.size); // Output: 3

//4.Checking for Values:
//You can check if a value exists in a set using the has() method:

console.log(mySet.has(2)); // Output: true
console.log(mySet.has(5)); // Output: false

//5.Iterating Over Sets:
//You can iterate over a set using the forEach() method:

mySet.forEach((value) => console.log(value));

//6.Converting Sets to Arrays:
//You can convert a set to an array using the spread operator:

const myArray = [...mySet];

//7.entries()
//Here's an example of how to use the entries() method to iterate over the [value, value] pairs for each value in a set:

const set = new Set(["apple", "banana", "cherry"]);
const iterator = set.entries();
console.log(iterator.next().value); // Output: ['apple', 'apple']
console.log(iterator.next().value); // Output: ['banana', 'banana']
console.log(iterator.next().value); // Output: ['cherry', 'cherry']

//8.keys()
//Here's an example of how to use the keys() method to iterate over the values in a set:

const set1 = new Set(["apple", "banana", "cherry"]);
const iterator1 = set1.keys();
console.log(iterator1.next().value); // Output: 'apple'
console.log(iterator1.next().value); // Output: 'banana'
console.log(iterator1.next().value); // Output: 'cherry'

/*
In addition to these methods, there are also some static methods for sets:

Method	Description
Set()	Creates a new set.
from()	Creates a new set from an iterable object.
isSet()	Returns true if the provided value is a set; otherwise false.
of()	Creates a new set with a variable number of arguments.


*/

//i.from()
//Here's an example of how to use the from() method to create a new set from an array:

const arr = [1, 2, 3, 3, 4, 5, 5];
const set2 = new Set.from(arr);
console.log(set2); // Output: Set {1, 2, 3, 4, 5}

//We can also use the from() method to create a new set from a string:

const str = "hello";
const set3 = new Set.from(str);
console.log(set3); // Output: Set {'h', 'e', 'l', 'o'}

//ii.isSet()
//Here's an example of how to use the isSet() method to check if a provided value is a set

const set4 = new Set([1, 2, 3]);
console.log(Set.isSet(set4)); // Output: true
const arr4 = [1, 2, 3];
console.log(Set.isSet(arr4)); // Output: false

//iii.of()
//Here's an example of how to use the of() method to create a new set with a variable number of arguments:

const set5 = new Set.of(1, 2, 3);
console.log(set5); // Output: Set {1, 2, 3}

//We can also use the of() method to create a set with a single value:

const set6 = new Set.of(1);
console.log(set6); // Output: Set {1}

//9.Tag Widget
//Here is the real time example for unique tag widget for website or blog.

class TagsInput {
  constructor() {
    this.tags = new Set();
  }
  addTag(newTag) {
    this.tags.add(newTag);
    console.log(this.tags);
  }
}

const input = new TagsInput();
input.addTag("Ram");
input.addTag("Sam");
input.addTag("Ram");
input.addTag("Ravi");

/*
Practical Use Cases:
Sets are useful in a variety of situations, such as:

Removing duplicates from an array

Checking if an array contains a specific value

Tracking unique user IDs in an application


*/
