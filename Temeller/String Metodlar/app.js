let value;

const firstName = "Nigar";
const lastName = "Ashurova";

const langs = "Java,Python,C++";

value = firstName + lastName;
value = firstName + " " + lastName;
value = "NIGAR ";
// value = value + "ASHUROVA";
value += "ASHUROVA";

value = firstName.length;
value = firstName.concat(" ", "Ashurova ", "20");
value = firstName.toLowerCase();
value = firstName.toUpperCase();

value = firstName[0];
value = firstName[firstName.length-1];

//indexOf stringin icerisinde element varsa onun indexini verir  yoxsa "-1" verir  
value = firstName.indexOf("c");
value = firstName.indexOf("N");
value = firstName.indexOf("g");

// Char at 
value = firstName.charAt(0);
value = firstName.charAt(firstName.length -1);

// Split metodu
value = firstName.split("");
value = langs.split(",");

// replace
value = langs.replace("Python", "Html");

// includes - varsa true , yoxsa icinde false
value = langs.includes("Html");
value = langs.includes("abc");

console.log(value);