const buttons = document.querySelectorAll('.btn');

const audios = {};
function createAudio(name) {
    let audio = new Audio(`./sounds/${name}.mp3`);
    audios[name] = audio;
}

buttons.forEach((button) => {
    createAudio(button.innerText);
    button.addEventListener('click', () => playAudio(button.innerText))
});

function playAudio(name) {
    stopAll();
    audios[name].play();
}

function stopAll() {
    for (audio in audios) {
        audios[audio].pause();
        audios[audio].currentTime = 0;
    }
}