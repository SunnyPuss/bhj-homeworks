const input = document.querySelector(`.tasks__input`);
const button = document.querySelector(`.tasks__add`);
/*const cross = document.querySelectorAll(`.task__remove`);
const crossArr = Array.from(cross);*/
const taskList = document.querySelector(`.tasks__list`);


button.addEventListener(`click`, function() {
    taskList.innerHTML += `
    <div class="task">
        <div class="task__title">${input.value}</div>
        <a href="#" class="task__remove">&times;</a>
    </div>
    `;
    input.value = ``;
    event.preventDefault();

    const cross = document.querySelector(`.task__remove`)
    const task = document.querySelector(`.task`);
    cross.addEventListener(`click`, () => {
        task.remove();
    })
    
})

input.addEventListener(`keypress`, function(e) {
    if (e.keyCode === 13) {
        taskList.innerHTML += `
        <div class="task">
        <div class="task__title">${input.value}</div>
        <a href="#" class="task__remove">&times;</a>
        </div>
        `;
        input.value = ``;
        event.preventDefault();

        const cross = document.querySelector(`.task__remove`)
        const task = document.querySelector(`.task`);
        cross.addEventListener(`click`, () => {
            task.remove();
        })
    }
})

