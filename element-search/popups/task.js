let modals = document.getElementsByClassName(`modal`);
let arrModals = Array.from(modals);

let mod1 = arrModals[0];
let mod2 = arrModals[1];

showFirstModal = () => mod1.className =`modal modal_active`;
showFirstModal();

let cross = document.getElementsByClassName(`modal__close modal__close_times`);
cross.item(0).onclick = () => mod1.className = `modal`;
cross.item(1).onclick = () => mod2.className = `modal`;

const redButton = document.getElementsByClassName(`btn btn_danger modal__close show-success`);
redButton.item(0).onclick = () => {
    mod1.className = `modal`;
    mod2.className = `modal modal_active`;
};

const greenButton = document.getElementsByClassName(`btn btn_success`);
greenButton.item(0).onclick = () => {
    mod2.className = `modal`;
};