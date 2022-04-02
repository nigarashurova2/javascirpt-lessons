// yeni elemnt yaratmaq

const newlink =  document.createElement("a");
const cardbody = document.querySelector(".container");


newlink.id = "link";
newlink.className = "btn btn-primary";
newlink.href = "https://www.google.com";
newlink.target = "_blank";

newlink.appendChild(document.createTextNode("Hello world!"));

cardbody.appendChild(newlink);

// const text = document.createTextNode("Salam");
// const box = document.querySelector(".box");
// cardbody.appendChild(text);
// cardbody.appendChild(text);


console.log(newlink);