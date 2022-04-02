const label = document.querySelector(".form-label");
const input = document.querySelector(".form-control");

const form = document.querySelector(".form")
const title = document.querySelector(".title");


form.addEventListener("mouseenter", run);

function run(e) {
    console.log(e.type);
    title.style.color = "yellow";
}

form.addEventListener("mouseleave", run2);

function run2(e) {
    console.log(e.type);
    title.style.color = "black";
}

// label.addEventListener("click", run);

// function run() {
//     input.style.background = "yellow";
// }


// label.addEventListener("dblclick", run2);

// function run2() {
//     input.placeholder = "New placeholder";
// }

// mouse events
// label.addEventListener("mousedown", run2);

// function run2() {
//     input.placeholder = "MOUSEDOWN";
// }


// mouseup- basdiqdan sonra
// label.addEventListener("mouseup", run3);

// function run3() {
//     input.style.width = "500px";
//     input.style.background = "yellow";
// }

// mouseover
label.addEventListener("mouseover", run4);

function run4() {
    input.style.background = "yellow";
}

// mouseout
label.addEventListener("mouseout", run5);

function run5() {
    input.style.background = "pink";
}








