const txtInput = document.getElementById("txtInput");

txtInput.addEventListener("keyup", function () {
  optimizeFunction();
});

let counter = 0;
const getDataFromApi = () => {
  console.log("Getting Data....", counter++);
};

const debounceMethod = function (fn, delay) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, arguments);
    }, delay);
  };
};

const optimizeFunction = debounceMethod(getDataFromApi, 300);