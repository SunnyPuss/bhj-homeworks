const arrows = document.querySelectorAll(`.slider__arrow`);
const arrowLeft = arrows[0];
const arrowRight = arrows[1];
const images = document.querySelectorAll(`.slider__item`);
let n = 1

console.log(images.length);

arrowRight.onclick = function() {
    for (let i = 0; i < images.length; i++) {
        images[i].classList.remove(`slider__item_active`);
    }

    images[n++].classList.add(`slider__item_active`);

    if (n >= images.length) {
        n = 0;
    }
}

arrowLeft.onclick = function() {
    for (let i = 0; i < images.length; i++) {
        images[i].classList.remove(`slider__item_active`);
    }
    images[n--].classList.add(`slider__item_active`);
    if (n < 0) {
        n = images.length - 1;
    }
}
