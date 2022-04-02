// Funsiya tanimlama

function Hello(name= "Melumat yoxdur", age="Melumat yoxdur"){
    // if(typeof name === "undefined" && typeof age === "undefined") name= "Melumat yoxdur", age="Melumat yoxdur";
    console.log(`Name : ${name} Age: ${age}`);
}

Hello("Nigar", 20);

Hello("Aygul", 34);

Hello();



// RETURN NIYE VAR NE ISE YARAR - bir funksiyadan bir deyer dondurmek
// console logla yazarsaq 144 verir amam daha sonra funksiyannin deyerini dondermir ondan log yox return yazmaliyiq
// function square(x) {
//     console.log(x*x); 
// }

// function cube(x) {
//     console.log(x*x*x);
// }

// let a = square(12);
// a = cube(a); 



function square(x) {
    
    return x*x;
    console.log(3); // hec bir zaman calismaz return den sonra olarsa
}

function cube(x) {
    console.log(4); //isleyecek cunki returnden evvel yazilib
    return x*x*x;
}

let a = cube(square(12));
console.log(a);


function salam() {
    return "Salam JS";
}

console.log(salam());


// Function expression

const hello1 =  function(name){
    console.log("Salam 1" + " " +  name);
}

hello1("Nigar");

// **************************************************************************************************
// Immediately Invoked Function Expression (IIFE)

(function deyisgen(name) {
    console.log("Name :" + " " + name);
})("Nigar");


const database = {
    host: "localhost",
    add: function () {
        console.log("Əlavə edildi");
    },
    get: function () {
        console.log("Əldə edildi");
    },
    update: function (id) {
        console.log(`İd: ${id} Yenilendi`);
    },
    delete: function (id) {
        console.log(`İd: ${id} Silindi`);
    }
}

console.log(database["host"]);

database.add();

database.delete(12);




