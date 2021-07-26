"use strict";
var textArea, animDdl, sizeDdl, timer, startButton, stopButton, speed = 250, turboChk;

function start() {
    var frames = textArea.value.split("=====\n");
    var i = 0, l = frames.length;
    (function iterator() {
        textArea.value = frames[i];

        if (++i >= l) {
            i = 0;
        }
        timer = setTimeout(iterator, speed);
    })();
    stopButton.disabled = false;
    startButton.disabled = true;
};

function stop(time) {
    stopButton.disabled = true;
    startButton.disabled = false;
    clearTimeout(timer);
    getFrames();
}


function getFrames() {
    var dropSel = animDdl.options[animDdl.selectedIndex].innerHTML;
    textArea.value = ANIMATIONS[dropSel];

}

function setSize() {
    var fontsize = sizeDdl.options[sizeDdl.selectedIndex].value;
    textArea.style.fontSize = fontsize;
}

function turbo() {
    if (turboChk.checked) {
        speed = 50;
    }
    else {
        speed = 250;
    }
}

window.onload = function () {
    textArea = document.getElementById("text-area");
    animDdl = document.getElementById("animation");
    sizeDdl = document.getElementById("fontsize");
    turboChk = document.getElementById("turbo");

    startButton = document.getElementById("start");
    stopButton = document.getElementById("stop");

    startButton.onclick = start;
    stopButton.onclick = stop;
    animDdl.onchange = getFrames;
    sizeDdl.onchange = setSize;
    turboChk.onchange = turbo;

}