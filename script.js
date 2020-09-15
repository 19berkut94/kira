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

const button = document.querySelector('.btn')
const wind = document.querySelector('.wind')
const close = document.querySelector('.close')

button.addEventListener('click', function() {
    wind.classList.add('appear')
})

close.addEventListener('click', function() {
    wind.classList.remove('appear')
})











