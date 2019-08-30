const reveal = document.querySelectorAll(`.reveal`);
const arrReveal = Array.from(reveal);

const isInViewport = function(el){
    const viewportHeight = window.innerHeight;
    const elementTop =
    el.getBoundingClientRect().top;
    return elementTop < viewportHeight ? true : false;
    };
isInViewport(arrReveal[0]);

document.addEventListener(`scroll`, () => {
        if (isInViewport(arrReveal[0]) == true) {
        arrReveal[0].classList.add(`reveal_active`);
    } else {
        arrReveal[0].classList.remove(`reveal_active`);
    }
});

document.addEventListener(`scroll`, () => {
    if (isInViewport(arrReveal[1]) == true) {
    arrReveal[1].classList.add(`reveal_active`);
} else {
    arrReveal[1].classList.remove(`reveal_active`);
}
});