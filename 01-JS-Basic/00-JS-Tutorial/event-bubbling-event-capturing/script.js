const grandparent = document.querySelector("#grandparent");
const parent = document.querySelector("#parent");
const child = document.querySelector("#child");

/*
//event bubbling child click up to parent and grandparent
grandparent.addEventListener(
  "click",
  function () {
    console.log("Grandparent Clicked");
  },
  false
);

parent.addEventListener(
  "click",
  function () {
    console.log("Parent Clicked");
  },
  false
);

child.addEventListener(
  "click",
  function (e) {
    console.log("Child Clicked");
    e.stopImmediatePropagation();
  },
  false
);


*/

//event capture is true typing and execute to child click top to bottom
grandparent.addEventListener(
  "click",
  function () {
    console.log("Grandparent Clicked");
  },
  true
);

parent.addEventListener(
  "click",
  function () {
    console.log("Parent Clicked");
  },
  false
);

child.addEventListener(
  "click",
  function (e) {
    console.log("Child Clicked");
    e.stopImmediatePropagation();
  },
  true
);

child.addEventListener(
  "click",
  function (e) {
    console.log("Child Clicked2");
  },
  true
);
