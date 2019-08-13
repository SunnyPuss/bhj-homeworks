let dead = 0;
let lost = 0;



for (index = 1; index <= 9; index++) {
    let hole = document.getElementById(`hole${index}`);
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
            alert (`You win nothing! Congratulations!`);
            dead = 0;
            lost = 0;
        } else if (lost == 5) {
            alert (`You lose cookie from previous task!`);
            dead = 0;
            lost = 0;
        }
    }
}