//1.Creating Sets:
//const mySet = new Set();

const mySet = new Set([1, 2, 3]);

//2.Adding and Removing Values:
mySet.add(4);
mySet.delete(3);


//3.Checking set size:
console.log(mySet.size);//3

//4.Checking for Values:
console.log(mySet.has(2));
console.log(mySet.has(5));


//5.Iterating Over Sets:
mySet.forEach(value => console.log(value));

//6.Converting Sets to Arrays:

const myArray = [...mySet];

//7.Entries()
const set = new Set(['apple', 'banana', 'cherry']);
const iterator = set.entries();
console.log(iterator.next().value); // Output: ['apple', 'apple']
console.log(iterator.next().value); // Output: ['banana', 'banana']
console.log(iterator.next().value); // Output: ['cherry', 'cherry']


//8.keys()
const set1 = new Set(['apple', 'banana', 'cherry']);
const iterator1 = set1.keys();
console.log(iterator1.next().value); // Output: 'apple'
console.log(iterator1.next().value); // Output: 'banana'
console.log(iterator1.next().value); // Output: 'cherry'


//9.from()
/*
const arr = [1, 2, 3, 3, 4, 5, 5];
const set2 = new Set.from(arr);
console.log(set2); // Output: Set {1, 2, 3, 4, 5}
*/
// new set from a string:
/*
const str = 'hello';
const set3 = new Set.from(str);
console.log(set3); // Output: Set {'h', 'e', 'l', 'o'}
*/

//10.isSet()
/*
const set4 = new Set([1, 2, 3]);
console.log(Set.isSet(set4)); // Output: true
const arr1 = [1, 2, 3];
console.log(Set.isSet(arr1)); // Output: false
*/

//11.of()
/*
const set5 = new Set.of(1, 2, 3);
console.log(set5); // Output: Set {1, 2, 3}
*/

//set with a single value:
/*
const set6 = new Set.of(1);
console.log(set6); // Output: Set {1}
*/

//12.Tag Widget
/*
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
    */