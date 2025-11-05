import './style.css'

const p = document.createElement("p");

/* If I will need to access app through the DOM more than once I should create a variable for app,
because each time I access the HTML-element div (with the id app) the DOM will reload it.
So for performance reasons it is good practice to create a variable for app because then I will use the variable to acces app instead,
and the DOM will only need to load it once but I can reuse it as much as I want.

However if I only need to access it once, and know I this for sure, 
then creating a variable will be unneccessary since I will have an unused variable declared...
*/

//const app = 
document.getElementById("app")?.appendChild(p);

// Add some text to the paragraph:
p.className = "text";
p.innerHTML = "Lorem ipsum";

// Add CSS class red to p:


console.log(p)