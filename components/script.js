let volume = document.getElementById('volume');
let toggleEl = document.getElementById('toggle');
let up = "volume_up";
let off = "volume_off";

// Set initial state to off
volume.innerText = off;
toggleEl.muted = true;

// Function to handle the audio playback
function playAudio() {
    toggleEl.muted = false;
    toggleEl.play().then(() => {
        console.log('Audio is playing');
    }).catch(error => {
        console.error('Audio playback failed:', error);
    });
}

volume.addEventListener('click', (e) => {
    // Toggle text content between volume_up and volume_off
    if (volume.innerText === up) {
        volume.innerText = off;
        toggleEl.muted = true;
    } else {
        volume.innerText = up;
        toggleEl.muted = false;
        playAudio();
    }
});

const btns = document.getElementsByClassName('btn');

for (let btn of btns) {
    btn.addEventListener("mouseover", () => {
        if (!toggleEl.muted) {
            playAudio();
        }
    });
}
