// change the styles of elements
const mainHeading = document.querySelector("div.headline h2");
console.log(mainHeading.style); //CSSStyleDeclaration {accentColor: '', additiveSymbols: '', alignContent: '', alignItems: '', alignSelf: '', …}
mainHeading.style.backgroundColor = "blue";
mainHeading.style.border = "20px solid green";
