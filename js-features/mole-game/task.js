let dead = 0;
let lost = 0;

const holes = document.getElementsByClassName(`hole`)

function getHole (index) {
    for (index = 1; index < 9; index++) {
        return hole = document.getElementById(`hole${index}`)
    }
}

holes.onclick = function () {
    getHole(index);
    hole.className.includes(`hole_has-mole`);
    if (hole.className.includes(`hole_has-mole`) == true) {
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