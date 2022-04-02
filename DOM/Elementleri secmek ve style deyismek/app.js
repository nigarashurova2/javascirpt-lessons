const element = document.querySelector(".btn");

console.log(element.classList[0]);
console.log(element.id);
console.log(element.href);
console.log(element.textContent);
console.log(element.innerHTML);
console.log(element.style);

element.className = "btn btn-warning ";
element.style.color = "red ";
element.href =  "https://www.google.com/";
element.target = "_blank";
// element.style.margin = "60px";
element.style.color = "black";
element.textContent = "silin";

element.innerHTML="<span style= 'color: red'>NIGAR</span>";
// element.innerText = "<span style= 'color: red'>NIGAR</span>";

const element2 = document.querySelectorAll("#link");
element2.forEach(elem => {
    elem.style.color = "red";
    elem.style.background = "yellow";
});

const element3 = document.querySelector(".col-sm-6:nth-child(2) .card-title");
element3.style.color = "red";