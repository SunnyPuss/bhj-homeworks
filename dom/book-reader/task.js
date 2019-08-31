const small = document.querySelector(`.font-size_small`);
const font = document.querySelectorAll(`.font-size`);
const medium = font.item(1);
const large = document.querySelector(`.font-size_big`)
const book = document.querySelector(`.book`)

small.addEventListener(`click`, () => {
    const active = document.querySelector(`.font-size_active`);
    active.classList.remove(`font-size_active`);

    small.classList.add(`font-size_active`);
    book.classList.remove(`book_fs-big`)
    book.classList.add(`book_fs-small`);
    event.preventDefault();
});

medium.addEventListener(`click`, () => {
    const active = document.querySelector(`.font-size_active`);
    active.classList.remove(`font-size_active`);

    medium.classList.add(`font-size_active`);
    book.classList.remove(`book_fs-small`);
    book.classList.remove(`book_fs-big`);
    event.preventDefault();
});

large.addEventListener(`click`, () => {
    const active = document.querySelector(`.font-size_active`);
    active.classList.remove(`font-size_active`);

    large.classList.add(`font-size_active`);
    book.classList.remove(`book_fs-small`);
    book.classList.add(`book_fs-big`);
    event.preventDefault();
});