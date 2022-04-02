// input events - focus blur paste copy cut select


// DOMContentLoaded - reload seyfe yuklendi
// document.addEventListener("DOMContentLoaded", load);

// function load(e) {
//     console.log("Sayfe yuklendi");
    
//     e.preventDefault();
// }


// **************************************************************************************************8

const input = document.querySelector(".input1");

// focus
input.addEventListener("focus",run);

function run(e) {
    console.log(e.type);
}

// blur
input.addEventListener("blur",run2);

function run2(e) {
    console.log(e.type);
}

// paste
input.addEventListener("paste",run3);

function run3(e) {
    console.log(e.type);
}

// copy
input.addEventListener("copy",run4);

function run4(e) {
    console.log(e.type);
}

// cut
input.addEventListener("cut",run5);

function run5(e) {
    console.log(e.type);
}

// select
input.addEventListener("select",run6);

function run6(e) {
    console.log(e.type);
}

