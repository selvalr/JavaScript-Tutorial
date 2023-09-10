const rootNode = document.getRootNode();
console.log(rootNode);
const htmlElementNode = rootNode.childNodes[0];
console.log(htmlElementNode.childNodes); //NodeList(3) [head, text, body]

const headElementNode = htmlElementNode.childNodes[0];
console.log(headElementNode); //<head></head>
const textNode1 = htmlElementNode.childNodes[1];
console.log(textNode1); //text
const bodyElementNode = htmlElementNode.childNodes[2];
console.log(bodyElementNode); //<body></body>

console.log(headElementNode.childNodes); //Nodelist(5)[text,title,text,script,text]

// sibling relation
const h1 = document.querySelector("h1");
console.log(h1); //<h1>My heading</h1>

const body = h1.parentNode.parentNode;
console.log(body); //<body></body>
body.style.color = "red";
body.style.backgroundColor = "#333";

const body1 = document.body;
body1.style.color = "yellow";
body1.style.backgroundColor = "#333";

const head = document.querySelector("head");
console.log(head); //<head></head>
const title = head.querySelector("title");
console.log(title.childNodes); //NodeList[text]

const container = document.querySelector(".container");
console.log(container.children); //HTMLCollection[h1,p]
