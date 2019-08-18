const menuLink = document.querySelectorAll(`.menu__link`);
const arrML = Array.from(menuLink);

const menuSub = document.querySelectorAll(`.menu_sub`);
const arrMS = Array.from(menuSub);

console.log (arrMS.length);

 

arrML.forEach ((el) => {el.addEventListener(`click`, () => {
    let ulNeighbour = el.closest(`a`).nextElementSibling;
    if (ulNeighbour.classList.contains(`menu_sub`)) {
        ulNeighbour.classList.toggle(`menu_active`);
        event.preventDefault();
    } 
    
    
})
});
