const value = [
  { id: 1, text: "hello", isCompleted: true },
  { id: 2, text: "hello", isCompleted: false },
  { id: 3, text: "hello3", isCompleted: true },
];

const value2 = value.filter(function (val) {
  return val.isCompleted === false;
});

console.log(value2);
