const value = document.querySelector(`.dropdown__value`);
const list = document.querySelector(`.dropdown__list`);
const items =  document.querySelectorAll(`.dropdown__item`);
const links = document.querySelectorAll(`.dropdown__link`);
arrItems = Array.from(items);
arrLinks = Array.from(links);

value.addEventListener(`click`, function() {
    list.classList.add(`dropdown__list_active`);
});

links.forEach ((el) => {el.addEventListener(`click`, function (event) {
    event.preventDefault();
    list.classList.remove(`dropdown__list_active`);
    value.textContent = el.closest(`a`).textContent;
        
})
});