let value;

const programmer = {
  name: "Nigar Ashurova",
  age: 20,
  email: "nigarashurova@gmail.com",
  langs: ["React", "Html", "Css", "Javascript"],

  address: {
    city: "Baku",
    street: "Natiq Hasimi",
  },

  work: function () {
    console.log("Proqramçı işləyir..");
  },
};

value = programmer;

value = programmer.email; //1ci
value = programmer["email"]; //2ci yazilis
value = programmer.langs[0];
value= programmer.address.street;
value = programmer.work();



// jason arrayleri yazilisi - array icinde objectler

const programmers = [
    {name: "Nigar" , age : 20},
    {name:"Mehemmed", age : 25},
    {name: "Samirə", age: 20}
]

value = programmers;
value = programmers[0].name;





console.log(value);
