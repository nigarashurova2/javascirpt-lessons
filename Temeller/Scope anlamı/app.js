// Scope qavrami

// Global scope

// function a() {
//     FUNCTION SCOPE
// }


// if (i) {
//     BLOCK SCOPE
// }


var value1 = 10;
let value2 = 20;
const value3 = 30;

function func() {

  var value1 = 23;
  let value2 = 78;
  const value3 = 32;

  console.log(value1, value2, value3);
}
func();


if (true) {
  var value1 = 90;
  let value2 = 78;
  const value3 = 32;

}

// if bloklarinda var value1 deyeri deyeri deyisir 
// let ve const deyismir lokaldir
// var ise global 

console.log(value1, value2, value3);
