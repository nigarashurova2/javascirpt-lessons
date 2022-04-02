// Qarşılaşdırma operatorları

// ==
// ===
// !=
// !==
// >
// <
// >=
// <=

// == deyer beraber oldugunu yoxlayir
console.log(2 == 2);
console.log("2 " == 2);
console.log("HS" == "hs");

console.log(2 == "2"); //true

// === hem deyerin hem de tipi yoxlayir
console.log(2 === "2"); //false

// >
console.log(2 < 9);

// <
console.log(3 > 0);

// >=
console.log(23 >= 8);

// <=
console.log(45 <= 34);

// !=
console.log(2 != 10);
console.log(2 != 2);

// ***********************************************************************************************************************
                                                // MENTIQI OPERATORLAR //

// ! , && , ||

// Not operatoru

console.log(!(2 != 3));

// AND operatoru bir false varsa netice false

console.log(3 == 45 && "Nigar" == "Sevinc"); //false

// OR operatoru - biri true olarsa netice true olar

console.log(3 == 2 || "2" == 2);


// *********************************************************************************************************************
                                                // IF -ELSE OPERATORU //
  
const error = false;
                                                
if (error == true) {
    console.log("Xəta yarandı");
}
else{
    console.log("Xəta yaranmadı");
}



const user = "nigar";

if (user != "ashurova") {
    console.log("User yanlisdir");  
}
else{
    console.log("User dogru");
}


// const process ="1";
// if (process === "2") {
//     console.log("Cavab = 2");
// }
// else if(process === "3"){
//     console.log("Cavab = 3");
// }
// else if(process === "4"){
//     console.log("Cavab = 4");
// }
// else{
//     console.log("Yanlisdir");
// }



// Ternary Operator

const number = 100;
console.log(number === 500 ? "Sayi 100dur" : "Sayi 100 deyil");


if(number === 300) console.log("Sayi 100dur");
else console.log("SAYI 100 deyil");