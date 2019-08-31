const rotatorCase = document.querySelectorAll(`.rotator__case`);
const arrRC = Array.from(rotatorCase);
let n = 0;
console.log( rotatorCase);

function rotateIt () {
    const active = document.querySelector(`.rotator__case_active`);
    active.classList.remove(`rotator__case_active`);

    n++

    if (n > 5) {
        n = 0;
    }

    rotatorCase.item(n).classList.add(`rotator__case_active`)
}

document.addEventListener(`DOMContentLoaded`, function () {
    setInterval(rotateIt, 1000);
})