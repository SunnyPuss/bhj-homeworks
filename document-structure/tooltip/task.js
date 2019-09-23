const hasTooltip = document.querySelectorAll(`.has-tooltip`);
const hasTooltipArr = Array.from(hasTooltip);

hasTooltip.forEach((el) => {el.addEventListener(`click`, function () {
    el.insertAdjacentHTML("afterend", 
    `<div class="tooltip" style="left: 0; top: 0">${el.title}</div>`
    );
    const tooltip = document.querySelector(`.tooltip`);
    tooltip.classList.toggle(`tooltip_active`);
    event.preventDefault();

    /*if (el.title == `Что бы вы хотели?`) {
        tooltip.style = `left: 6px; top: 25px`;
    } else if (el.title == `Устройтесь на работу!`) {
        tooltip.style = `left: 162px; top: 25px`
    }*/

    tooltip.style = `${el.getBoundingClientRect()}`;
    
})})



