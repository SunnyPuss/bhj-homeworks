let dead = 0;
let lost = 0;

for (index = 1; index <= 9; index++) {
    getHole(index);
    hole.onclick = function () {
        hole.classList.contains(`hole_has-mole`);
        if (hole.classList.contains(`hole_has-mole`) == true) {
            dead++;
            document.getElementById(`dead`).innerHTML = dead;
        } else {
            lost++;
            document.getElementById(`lost`).innerHTML = lost;
        }

        if (dead == 10) {
            alert (`You win!`);
            dead = 0;
            lost = 0;
        } else if (lost == 5) {
            alert (`You lose!`);
            dead = 0;
            lost = 0;
        }
    }
}

function getHole(index) {
    let hole = document.getElementById(`hole${index}`);
    return hole;
}