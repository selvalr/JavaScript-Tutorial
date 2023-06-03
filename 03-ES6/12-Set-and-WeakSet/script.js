//1.set

const mySet = new Set([1, 1, 2, 2, 3, 3]);
mySet.size; // 3
mySet.has(1); // true
mySet.add("strings");
mySet.add({ a: 1, b: 2 });

//You can iterate over a set by insertion order using either the forEach method or the for...of loop.

mySet.forEach((item) => {
  console.log(item);
  // 1
  // 2
  // 3
  // 'strings'
  // Object { a: 1, b: 2 }
});

for (let value of mySet) {
  console.log(value);
  // 1
  // 2
  // 3
  // 'strings'
  // Object { a: 1, b: 2 }
}

//2.weakset

const ws = new WeakSet();
const obj = {};
const foo = {};

ws.add(window);
ws.add(obj);

ws.has(window); // true
ws.has(foo); // false, foo has not been added to the set

ws.delete(window); // removes window from the set
ws.has(window); // false, window has been removed
