const hasTooltip = document.querySelectorAll(`.has-tooltip`);

let tooltipHelp = document.createElement(`div`);
tooltipHelp.classList.add(`tooltip`);
tooltipHelp.innerText = `Что бы вы хотели?`;
hasTooltip.item(0).insertAdjacentElement("afterend", tooltipHelp);

hasTooltip.item(0).addEventListener(`click`, (event) => {
    tooltipHelp.classList.toggle(`tooltip_active`);
    event.preventDefault();
})

let tooltipPress = document.createElement(`div`);
hasTooltip.item(1).insertAdjacentElement("afterend", tooltipPress);
tooltipPress.classList.add(`tooltip`);
tooltipPress.innerText = `Устройтесь на работу!`;
tooltipPress.setAttribute(`style`, `left: 20; top: 10`);
/*Числа у left и top ни на что не влияют*/

hasTooltip.item(1).addEventListener(`click`, () => {
    tooltipPress.classList.toggle(`tooltip_active`);
    event.preventDefault();
})

let tooltipEnd = document.createElement(`div`);
hasTooltip.item(2).insertAdjacentElement("afterend", tooltipEnd)
tooltipEnd.classList.add(`tooltip`);
tooltipEnd.setAttribute(`style`, `left: 0; top: 0`);
/*А здесь при иных значениях left и top подсказка исчезает куда-то */
tooltipEnd.innerText = `Выхода нет, скоро рассвет.`;

hasTooltip.item(2).addEventListener(`click`, () => {
    tooltipEnd.classList.toggle(`tooltip_active`);
    event.preventDefault();
})



