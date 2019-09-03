const small = document.querySelector(`.font-size_small`);
const font = document.querySelectorAll(`.font-size`);
const medium = font.item(1);
const large = document.querySelector(`.font-size_big`)
const book = document.querySelector(`.book`)

function changeFont() {
    const active = document.querySelector(`.font-size_active`);
    active.classList.remove(`font-size_active`);

    this.classList.add(`font-size_active`);
    if (this.getAttribute(`data-size`) == `small`) {
        book.classList.remove(`book_fs-big`)
        book.classList.add(`book_fs-small`);
    } else if (this.getAttribute(`data-size`) == `big`) {
        book.classList.remove(`book_fs-small`);
        book.classList.add(`book_fs-big`)
    } else {
        book.classList.remove(`book_fs-small`);
        book.classList.remove(`book_fs-big`);
    }
    event.preventDefault();
}

small.addEventListener(`click`, changeFont);

medium.addEventListener(`click`, changeFont);

large.addEventListener(`click`, changeFont);