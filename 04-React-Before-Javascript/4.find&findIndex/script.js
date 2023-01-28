const data = [
  { id: "1", title: "car" },
  { id: "2", title: "bus" },
  { id: "3", title: "train" },
  { id: "4", title: "airplane" },
  { id: "5", title: "cycle" },
];

//1.findIndex

const itemIndex = data.findIndex((el) => {
  return el.id == "2";
});
console.log(itemIndex);

//2.find

const item = data.find((el) => {
  return el.title == "car";
});
console.log(item);
