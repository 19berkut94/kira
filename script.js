// function name (){
// 'use strict'

    
// document.getElementsByClassName("btn").style.backgroundColor = "white"
//  const close = document.getElementsByClassName('close')
//  const wind = document.getElementsByClassName('wind')



// }

'use strict'

//THE FIRST VARIANT

// const button = document.querySelector('.btn')
// const wind = document.querySelector('.wind')
// const close = document.querySelector('.close')

// button.addEventListener('click', function() {
//     button.classList.add('red')
//     wind.classList.add('opened')

// })

// close.addEventListener('click', function(){
//     wind.classList.remove('opened')
// })
//_____________2 variant________main
/*const button = document.querySelector('.btn')
const wind = document.querySelector('.wind')
const close = document.querySelector('.close')

button.addEventListener('click', function() {
    wind.classList.add('appear')
})

close.addEventListener('click', function() {
    wind.classList.remove('appear')
})
*/



const butn = document.querySelector('.btn')
const close = document.querySelector('.close')
const wind = document.querySelector('.wind')

const modal = new function() {

    this.show = function() { 
        butn.addEventListener('click', function() {
            wind.classList.add('appear')
})
    },

    this.hide = function() {
        close.addEventListener('click', function() {
            wind.classList.remove('appear')
            
        })
    }

}

modal.show();
modal.hide();

// let form = document.querySelector('form');
// let inputName = document.getElementById('name').value;
// let inputMail = document.getElementById('mail').value;
// let inputPass = document.getElementById('password').value;

butsub.onclick = function() {
let inputName = document.getElementById('name').value;
let inputMail = document.getElementById('mail').value;
let inputPass = document.getElementById('password').value;


console.log(inputName, inputMail, inputPass) 
}








