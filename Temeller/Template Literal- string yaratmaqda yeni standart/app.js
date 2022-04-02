const name = "Nigar Ashurova";
const job = "React Developer";
const salary = 2000;

const a = "Ad: " + name + "\n" + "Pese: " + job + "\n" + "Maas: " + salary + "\n";

const literialTemplate = `NAME: ${name}\nJOB: ${job}\nSALARY: ${salary}\n `
console.log(a);
console.log(literialTemplate);


const text = "Nigar Ashurova";

const html = "<ul>" +
               "<li>" + name + "</li>" +
               "<li>" + name + "</li>" +
               "</ul>" ;

function nigar(){
    return "function";
}

const htmlLiteraal = `<ul>
                      <li> ${name} </li>
                      <li> ${salary} </li>
                      <li> ${100 / 4} </li> 
                      <li> ${nigar()} </li>
                      </ul>`;

document.body.innerHTML = htmlLiteraal;
