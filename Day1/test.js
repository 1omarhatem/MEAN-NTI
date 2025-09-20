function t1() {
let name = "fatima" ;
let score = 82 ;
console.log(name) ;
//------------------------

if (score >= 90) {
  console.log("A");}
else if (score >= 80 && score < 90) {
  console.log("B");}
else if (score >= 70 && score < 80) {
  console.log("C");}
else if (score >= 60 && score < 70) {
  console.log("D");}
else {
  window.console.log("F");}
}
//------------------------
function greetUser() {
let Mul = prompt("Enter Number:"); 
Mul = Number(Mul); 

for (let i = 1; i <= 10; i++) {
  let Tmul = i * Mul;
  console.log(`${Mul} x ${i} = ${Tmul}`);
}
}
//------------------------
function checkDrivingAge() {
let age = window.prompt("Enter Number:"); 

  if (age >= 18) {
    console.log("You can drive.");
  } else {
    console.log("You are too young to drive.");
  }
}

