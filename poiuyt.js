let IMG = null;
IMG = document.getElementById("ball");

function init() {
    IMG = document.getElementById("ball");
    IMG.style.position = 'relative';
    IMG.style.left = '0px';
}

function moveRight() {
    IMG.style.left = parseInt(IMG.style.left) + 10 + 'px';
}

window.onload = init;