const input = document.querySelector(".form-control");
const button = document.querySelector(".btn");
const form = document.querySelector(".form");

// input.onfocus = function () {
//     console.log("Focus edildi");
// }

// form.addEventListener("submit", (e)=>{
//     console.log("submit edildi");

//    e.preventDefault();
// })

form,addEventListener("submit" , submitFunction);
function submitFunction(e) {
    console.log("SUBMIT EDILDI");

    e.preventDefault();
}


input.addEventListener("focus",(e)=>{
    button.classList.add("bg-warning");
    button.classList.add("border-warning");
    button.classList.add("text-danger");
    console.log(e);
    console.log(e.target);
    console.log(e.target.placeholder);
    console.log(e.target.className);
    console.log(e.type);
})

