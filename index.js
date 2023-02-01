import validator from './validator.js';
console.log(validator);
//Estos son tres eventos, 1 para el imput y dos para el boton.
document.getElementById("cardnumber").addEventListener("keyup", validator.habilitar);
document.getElementById("btn").addEventListener("click", validator.validate);
document.getElementById("btn").addEventListener("click", validator.maskit); 
