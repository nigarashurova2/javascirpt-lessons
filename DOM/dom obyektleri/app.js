let value;
value = document;

value = document.scripts;
value =  document.links;
value = document.links[document.links.length-1].getAttribute("class");


value = document.links[0].className;
value = document.links[0].method;
console.log(value);


// element secme
//  id gore secme

element = document.getElementById("nav");



// element classa gore secmek

element = document.getElementsByClassName("nav-link")[0];

// element tage gore secmek
element = document.getElementsByTagName("a");

// name gore element secmek
element = document.getElementsByName("nigar");


// query selector

element = document.querySelector(".nav-item");

element = document.querySelector("#nav");

element = document.querySelector("li");


element = document.querySelectorAll("li");

element.forEach(el => {
    console.log(el);
});


// console.log(element);