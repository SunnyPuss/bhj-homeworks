const menuLink = document.querySelectorAll(`.menu__link`);
const arrML = Array.from(menuLink);

const menuSub = document.querySelectorAll(`.menu_sub`);
const arrMS = Array.from(menuSub);

console.log (arrMS.length);

arrML.forEach ((el) => {el.addEventListener(`click`, () => {
    if (el.closest(`a`).nextElementSibling.classList.contains(`menu_sub`)) {
        el.closest(`a`).nextElementSibling.classList.add(`menu_active`);
        event.preventDefault();
    } else if (el.closest(`a`).nextElementSibling.classList.contains(`menu_active`)) {
        el.closest(`a`).nextElementSibling.classList.toggle(`menu_active`);
    };
    
})
});
