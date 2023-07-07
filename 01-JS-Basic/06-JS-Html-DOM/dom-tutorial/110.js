// innerHtML
const headline = document.querySelector(".headline");
console.log(headline.innerHTML); //<h2 id="main-heading">Manage your tasks <span style="display: none">Hello</span></h2><button class="btn btn-headline">Learn More</button>

headline.innerHTML = "<h1>Inner html changed </h1>";
headline.innerHTML += '<button class= "btn"> Learn More </button>';

console.log(headline.innerHTML); //<h1>Inner html changed </h1><button class="btn"> Learn More </button>
