const arrows = document.querySelectorAll(`.slider__arrow`);
const arrowLeft = arrows[0];
const arrowRight = arrows[1];
const images = document.querySelectorAll(`.slider__item`);
let n = 1

console.log(images.length);

arrowRight.onclick = function() {
    for (n = 1; n < images.length; n++) {
        images[n].classList.remove(`slider__item_active`);
    }
    if (n >= images.length) {
        n = 0;
    }
    images[n++].classList.add(`slider__item_active`);
}

/*arrowLeft.onclick = function() {
    images[n--].classList.toggle(`slider__item_active`);
    if (n < 0) {
        n = images.length - 1;
    }
}
*/