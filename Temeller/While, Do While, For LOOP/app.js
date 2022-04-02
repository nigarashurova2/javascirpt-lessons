// WHILE Loop

// let i = 0;
// while (i < 210) {
//     console.log(i);
//     i+=10;
// }

// break ve continue

// let a = 10;

// while (a > 0) {
//     console.log(a);

//    if (a==4) {
//        break;
//    }
//    a--;

// }

// continue
// let b = 0;

// while (b < 10) {

//     if (b == 3 || b == 5) {
//         b++;
//         continue;
//     }
//     console.log(b);
//     b++;
// }


// do while
let temp = 0;

do {
  console.log(temp);
  temp++;
} while (temp > 10);

// arrayin elementlerini ekrana dondurmek ucun

// const langs = ["Html", "Css", "Js"];
// let index = 0;
// while (index < langs.length) {
//     console.log(langs[index]);
//     index++;
// }

const langs = ["Html", "Css", "Js"];

for (let index = 0; index < langs.length; index++) {
  const element = langs[index];
  console.log(element);
}

console.log("\n");

// *******************************************************************************************************************************
// FOR EACH

// const names1 = ["Nigar", "Zehra", "Rehim"];
// names1.forEach(function (name,index) {
//     console.log(name, index);
// })

// MAP - obyektin icindeki deyerleri dondurur e bir arr yaradir

const users = [
  { name: "Nigar", age: 20 },
  { name: "Fatime", age: 21 },
  { name: "Asif", age: 15 },
];

const names = users.map(function (user) {
    return user.name;
});

console.log(names);

console.log("\n");

const ages = users.map(function (user) {
    return user.age;
});

console.log(ages[1]);

console.log("\n");

// FOR IN obyektin arrayin icndeki deyerleri dondurur

const user = {
    name: "Nigar",
    age: "20"
};

for(let key in user){
    console.log(key+ " : " + user[key]);
}
