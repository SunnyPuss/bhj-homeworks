const tab = document.querySelectorAll(`.tab`);
arrTab = Array.from (tab);

const tabContent = document.querySelectorAll(`.tab__content`);
arrTabContent = Array.from(tabContent);

arrTab.forEach ((el) => 
{el.addEventListener(`click`, () => {
    const activeT = document.querySelector(`.tab_active`);
    activeT.classList.remove(`tab_active`)

    const activeTC = document.querySelector(`.tab__content_active`);
    activeTC.classList.remove(`tab__content_active`);

    let index = arrTab.indexOf(el, 0);
    el.classList.add(`tab_active`);
    arrTabContent[index].classList.add(`tab__content_active`);
})});


arrTab.forEach ((el) => 
{el.addEventListener(`keydown`, () => {
    if(event.code = `Space`) {
    const activeT = document.querySelector(`.tab_active`);
    activeT.classList.remove(`tab_active`)

    const activeTC = document.querySelector(`.tab__content_active`);
    activeTC.classList.remove(`tab__content_active`);

    let index = arrTab.indexOf(el, 0);
    index++;
    if (index > 2) {
        index = 0;
    }
    arrTab[index].classList.add(`tab_active`);
    arrTabContent[index].classList.add(`tab__content_active`);
    }

})});



