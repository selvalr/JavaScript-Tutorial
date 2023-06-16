//JS Modules

//JavaScript modules allow you to break up your code into separate files.
//This makes it easier to maintain a code-base.
//Modules are imported from external files with the import statement.
//Modules also rely on type="module" in the <script> tag.

//Export
//Modules with functions or variables can be stored in any external file.
//There are two types of exports: Named Exports and Default Exports.

//Named Exports
//Named Exports
//Let us create a file named person.js, and fill it with the things we want to export.
//You can create named exports two ways. In-line individually, or all at once at the bottom.

//i.In-line individually:

export const name = "Jesse";
export const age = 40;

//ii.All at once at the bottom:

const name = "Jesse";
const age = 40;

export { name, age };

//Default Exports
//Let us create another file, named message.js, and use it for demonstrating default export.
//You can only have one default export in a file.

message.js;

const message = () => {
  const name = "Jesse";
  const age = 40;
  return name + " is " + age + "years old.";
};

export default message;

//Import
//You can import modules into a file in two ways, based on if they are named exports or default exports.
//Named exports are constructed using curly braces. Default exports are not.

//Import from named exports
//Import named exports from the file person.js:

import { name, age } from "./person.js";
let text = "My name is " + name + ", I am " + age + ".";

document.getElementById("demo").innerHTML = text;

//Import from default exports
//Import a default export from the file message.js:

import message from "./message.js";
document.getElementById("demo").innerHTML = message();

//Modules only work with the HTTP(s) protocol.
//A web-page opened via the file:// protocol cannot use import / export.
