const arrows = document.querySelectorAll(`.slider__arrow`);
const arrowLeft = arrows[0];
const arrowRight = arrows[1];
const images = document.querySelectorAll(`.slider__item`);
let n = 1;


arrowRight.onclick = function() {
    const active = document.querySelector(`.slider__item_active`);
    active.classList.remove(`slider__item_active`)

    n++;

    if (n >= images.length) {
        n = 0;
    }

    images[n].classList.add(`slider__item_active`);
}

arrowLeft.onclick = function() {
    const active = document.querySelector(`.slider__item_active`);
    active.classList.remove(`slider__item_active`)

    n--;
    if (n < 0) {
        n = images.length - 1;
    }
    images[n].classList.add(`slider__item_active`);
}
