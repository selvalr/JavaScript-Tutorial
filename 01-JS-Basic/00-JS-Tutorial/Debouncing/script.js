//Event delegation is example amazon 2000 product click the current click page to write one function to apply all product example:tv, labtop,book,sports,camera,printer
/*
A Debounce function is a higher-order function that returns another function, to create closure around the function parameters (func, timeout) and the timer variable.

func: is a function that you want to execute after the debounce time
timeout: The amount of time you want the debounce function to wait after the last received action before executing func.
timer: The value used to indicate a running debounce.

*/

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
