let count = 0;



cookie.onclick = function () {
    count++;
    document.getElementById(`clicker__counter`).innerHTML = count;
    document.getElementById(`cookie`).innerHTML = cookie;
    if (cookie.width == 200) {
        cookie.width = 250;
    } else {
        cookie.width = 200;
    }
}