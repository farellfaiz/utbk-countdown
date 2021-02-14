var rainSound = document.getElementById("rain");
var librarySound = document.getElementById("library")

function rain() {
    if (rainSound.paused) {
        rainSound.play();
    } else {
        rainSound.pause();
    }
};

function library() {
    if (librarySound.paused) {
        librarySound.play();
    } else {
        librarySound.pause();
    }
};