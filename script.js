'use strict'



const butn = document.querySelector('.btn')
const close = document.querySelector('.close')
const wind = document.querySelector('.wind')



function Fenster(windElement) {

    this.show = function(anyId) {
        anyId.addEventListener('click', function() {
            windElement.classList.add('appear')})
    }
    this.hide = function(anyId) {
        anyId.addEventListener('click', function() {
            windElement.classList.remove('appear')
        })
    }
}




const modal = new Fenster(wind) 
modal.show(butn)
modal.hide(close)
 
butsub.onclick = function() {
let inputName = document.getElementById('name').value;
let inputMail = document.getElementById('mail').value;
let inputPass = document.getElementById('password').value;

console.log(inputName, inputMail, inputPass) 
}


















































// const modal = new function() {

//     this.show = function() { 
//         butn.addEventListener('click', function() {
//             wind.classList.add('appear')
// })
//     },

//     this.hide = function() {
//         close.addEventListener('click', function() {
//             wind.classList.remove('appear')
            
//         })
//     }

// }

// modal.show();
// modal.hide();



// butsub.onclick = function() {
// let inputName = document.getElementById('name').value;
// let inputMail = document.getElementById('mail').value;
// let inputPass = document.getElementById('password').value;


// console.log(inputName, inputMail, inputPass) 
// }
