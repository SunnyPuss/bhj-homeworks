const input = document.querySelector(`.tasks__input`);
const button = document.querySelector(`.tasks__add`);
/*const cross = document.querySelectorAll(`.task__remove`);
const crossArr = Array.from(cross);*/
const taskList = document.querySelector(`.tasks__list`);

function TaskAdd () {
    taskList.innerHTML += `
    <div class="task">
        <div class="task__title">${input.value}</div>
        <a href="#" class="task__remove">&times;</a>
    </div>
    `;
    input.value = ``;
    event.preventDefault();

    const cross = document.querySelectorAll(`.task__remove`);
    const crossArr = Array.from(cross);
    const task = document.querySelectorAll(`.task`);
    const taskArr = Array.from(task);
    crossArr[crossArr.length - 1].addEventListener(`click`, () => {
        taskArr[taskArr.length - 1].remove();
    })
    
}

button.addEventListener(`click`, TaskAdd )

input.addEventListener(`keypress`, function(e) {
    if (e.keyCode === 13) {
        TaskAdd
    }
})

