// degisken olusturma
// var a = 66;
// var b = 10;
// var c = 40; 
// console.log(a,b,c);


// Primitive  tip *-ci tip
// NUMBER
var a = 10;
console.log( typeof a);
var b = 10.55;
console.log( typeof b);

// STRING
var name = "nigar";
console.log(typeof name);

// boolean
var a = true;
console.log(typeof a);

// NULL - qabda yoxdu icide bosdu deyeri yoxdu DEYER VAR AMA BOSDU -0
var a = null;
console.log(a);
console.log(typeof a);

// UNDEFINED - QAB VAR AMA ICI BOSDU DEYISKEN VAR AMA DEYER YOXDU
var qab ;
console.log( qab);


// REFERENCE TIP **-CI TIP

// ARRAYS
var numbers = [2,4,5,6];
console.log(numbers);
console.log(typeof numbers); //typeof u object
console.log(numbers[1]);

// object
var object = {
    name:"Nigar Ashurova",
    age : "20"
}

console.log(object);
console.log(typeof object);

// date object

var date = new Date();
console.log(date);
console.log(typeof date);

// function
var functionMethod = function(){
    console.log("Merhaba Function");
}

console.log(functionMethod);
console.log(typeof functionMethod);

// primitive ve reference tiplerin ferqi nedir
// primitive tip - ancaq deyiskenin deyerinin kopyalayir yeni 
// reference tip - deyiskenin yaddasda tutdugu yeri menimseyir

var a = 10;
var b = a;
console.log(a,b); //10, 10
var a = 20;
console.log(a,b); // 20,10

// reference arrays - yaddasda iki yer tutur eslinde bu ne demekdir yeni bir a referenci birde bu referansin deyerleri yerlesir 
var a = [1, 2, 3];
var b = a;
a.push(4);
console.log(b);


var a = null;
console.log(typeof a);

var b;
console.log(typeof b);


console.log("MATANAT");
console.clear();




