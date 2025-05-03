let burger = document.querySelector('.burger-menu')
let burgerContent = document.querySelector('.burger-menu-content')
let closeButton = document.querySelector('.close_button')
let bongoButton = document.querySelector('.bongo-cat-section')

burger.addEventListener('click', function() {
    burger.classList.toggle('active')
    burgerContent.classList.toggle('active')
})

closeButton.addEventListener('click', function() {
    burger.classList.remove('active')
    burgerContent.classList.remove('active')
})
/*
bongoButton.addEventListener('click', function() {
    bongoButton.classList.toggle('active')
    bongoButton.textContent = ""
})

addEventListener('keydown', function(input) {
    if (input.key === 'a' ){
        bongoButton.classList.toggle('left')
    }
})
addEventListener('keydown', function(input) {
    if (input.key === 'd' ){
        bongoButton.classList.toggle('right')
    }
})
addEventListener('keydown', function(a,b) {
    if (a.key === 'd' & b.key ==='a'){
        bongoButton.classList.toggle('both')
    }
})
*/