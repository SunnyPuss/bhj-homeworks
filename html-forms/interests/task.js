const interestCheck = document.querySelectorAll(`.interest__check`);
const interest = document.querySelectorAll(`.interest`);
const interests = document.querySelectorAll(`.interests`);
const foodFirstChild = interestCheck.item(0).parentElement.nextElementSibling.firstElementChild.firstElementChild.firstElementChild;
const foodLastChild = interestCheck.item(0).parentElement.nextElementSibling.lastElementChild.firstElementChild.firstElementChild;

const petsFirstChild = interestCheck.item(3).parentElement.nextElementSibling.firstElementChild.firstElementChild.firstElementChild;
const petsLastChild = interestCheck.item(3).parentElement.nextElementSibling.lastElementChild.firstElementChild.firstElementChild;



interestCheck.item(0).addEventListener(`change`, function(){
    if (interestCheck.item(0).checked == true) {
        foodFirstChild.checked = true;
        foodLastChild.checked = true;
    } else {
        foodFirstChild.checked = false;
        foodLastChild.checked = false;
    }
})

interestCheck.item(3).addEventListener(`change`, function(){
    if (interestCheck.item(3).checked == true) {
        petsFirstChild.checked = true;
        petsLastChild.checked = true;
    } else {
        petsFirstChild.checked = false;
        petsLastChild.checked = false;
    }
})
