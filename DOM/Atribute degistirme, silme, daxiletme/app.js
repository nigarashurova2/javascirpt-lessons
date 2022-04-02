const title = document.querySelector(".title1");
const input = document.querySelector(".input");
let elem;

elem = title;
elem = title.classList;
title.classList.remove("title1");
title.classList.add("bg-dark");
title.classList.replace("bg-dark", "bg-warning");

elem =  input;
elem = input.placeholder;
elem = input.getAttribute("placeholder");
input.setAttribute("placeholder", "New placeholder");
input.setAttribute("title", "text-warning");

title.removeAttribute("name");
elem =  title;

// elem = input;
// elem =  input.hasAttribute("id");


console.log(elem);