const data = [
  { id: "1", title: "car" },
  { id: "2", title: "bus" },
  { id: "3", title: "train" },
  { id: "4", title: "airplane" },
  { id: "5", title: "cycle" },
];

//1.map array

const upperData = data.map((element) => {
  return element.title.toUpperCase;
});
console.log(upperData);

//2.filter array

const filterdArray = data.filter((element) => {
  return element.id % 2 == 0;
});

console.log(filterdArray);
