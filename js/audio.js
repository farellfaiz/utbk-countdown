var audioElement = document.getElementById("rain");

function play() {
    if (audioElement.paused) {
        audioElement.play();
    } else {
        audioElement.pause();
    }
};