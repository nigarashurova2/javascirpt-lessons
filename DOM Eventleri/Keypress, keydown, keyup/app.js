// keypress - reqemler ve herifler
const input = document.querySelector(".form-control");
const label = document.querySelector(".form-label");

input.addEventListener("keyup", run);

function run(e) {
    label.textContent = e.target.value;
    // console.log(e.target.value);
    label.style.textTransform = "upperCase";
}




// ASCII TABLE-reqemler

// document.addEventListener("keypress", run);

// function run(e) {
//     console.log(e.which);
//     console.log(e.key);
// }


// keydown - down up backspace reqemler ve herifler 

// document.addEventListener("keydown", run2);

// function run2(e) {
//     console.log(e.key);
// }


// keyup - up down - klavyaya basili saxladigimiz halda yazilmir buraxdiqdan sonra yazilir

// document.addEventListener("keydown", run3);

// function run3(e) {
//     console.log(e.key);
// }




