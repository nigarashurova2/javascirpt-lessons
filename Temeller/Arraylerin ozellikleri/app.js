let value;
const numbers = [23,86,876,864,2];
const numbers2 = new Array(45,37,87);

const langs = ["CSS", "HTML", "JS"];
const arrays = ["Nigar", null, undefined, 76 ];

// uzunluq
value = numbers.length;

// indeksleme
value = numbers[0];
value = numbers[numbers.length-1];

numbers[2] = 100;

value=numbers;

// Index of
value = numbers.indexOf(23);
value = numbers.indexOf(2);

// PUSH- arrayin sonuna deyer artirma - Push
numbers.push(2000);
value = numbers;

// UNSHIFT- arrayyin evveline deyer elave etmek - unshift
numbers.unshift(-4);
value = numbers;

// *****************************************


// POP - arrayin sonundan deyer silme
numbers.pop();
value = numbers;

// SHIFT - arrayin evvelinden deyer silme
numbers.shift();
value = numbers; 

// SPLICE - mueyyen bir indexden mueyyen bir indexe qeder deyer silinilmesi
numbers.splice(0,2);
value = numbers;

// REVERSE - arrayin deyerlerini tersine cevirmek
numbers.reverse();
value = numbers;

// SORT - arrayin elementlerini siralamaq
value = numbers.sort(); // ilk reqemine gore siralayir


// kicinden - boyuye siralama
// value = numbers.sort(function(x,y){
//     return x-y;
// });

// boyukden - kiciye siralama
// value = numbers.sort(function(x,y){
//     return y-x;
// });



console.log(value);



