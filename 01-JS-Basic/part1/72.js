console.log(window); //Window {window: Window, self: Window, document: document, name: '', location: Location, …}
("use strict");
function myFunc() {
  console.log(this); //Window {window: Window, self: Window, document: document, name: '', location: Location, …}
}
myFunc();
