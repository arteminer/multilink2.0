let bm = document.querySelector('.burger-menu');
let bmBtn = document.querySelector('.burger-menu__button');
let bmClose = document.querySelector('.burger-menu__close');

let start = 0
let end = 0

bmBh = false

function forward(){
    bm.style.transform = 'translateX(0)';
    bmClose.style.display = 'block';
    bmBh = true;
}

function backward(){
    bm.style.transform = 'translateX(-100%)'
    bmClose.style.display = 'none';
    bmBh = false;
}

bmBtn.addEventListener('click', function(){
    if (!bmBh){
        forward()
    }
});

bmClose.addEventListener('click', function(){
    if (bmBh){
        backward()
    }
});

document.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

document.addEventListener('touchend', (e) => {
    endX = e.changedTouches[0].clientX;

    const diffX = endX - startX;

    if (diffX > 80 && !bmBh) {
        forward();
    } 

    else if (diffX < -80 && bmBh) {
        backward();
    }
});