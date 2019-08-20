const arrows = document.querySelectorAll(`.slider__arrow`);
const arrowLeft = arrows[0];
const arrowRight = arrows[1];
const images = document.querySelectorAll(`.slider__item`);
let startPlus = 1;
let startMinus = 0 - 1;


arrowRight.onclick = function() {
    const active = document.querySelector(`.slider__item_active`);
    active.classList.remove(`slider__item_active`)

    images[startPlus++].classList.add(`slider__item_active`);

    if (startPlus >= images.length) {
        startPlus = 0;
    }
}

arrowLeft.onclick = function() {
    const active = document.querySelector(`.slider__item_active`);
    active.classList.remove(`slider__item_active`)

    startMinus--;
    if (startMinus < 0) {
        startMinus = images.length - 1;
    }
    images[startMinus].classList.add(`slider__item_active`);
}
