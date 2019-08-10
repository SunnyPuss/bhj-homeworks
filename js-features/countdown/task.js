let timer = document.getElementById(`timer`).innerHTML;

let countdown = function() {
    timer--;
    document.getElementById(`timer`).innerHTML = timer;
    
    if (timer <= 55) {
        alert(`Вы победили в конкурсе!`);
        clearInterval(countStart);
    }
    
}

let countStart = setInterval(countdown, 1000);

