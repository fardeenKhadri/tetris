const moveSound = new Audio('./assets/sounds/move.mp3');
const rotateSound = new Audio('./assets/sounds/rotate.mp3');
const lineClearSound = new Audio('./assets/sounds/line-clear.mp3');

// move.mp3
// rotate.mp3
// line-clear.mp3

// Example usage
function playMoveSound() {
    moveSound.play();
}

function playRotateSound() {
    rotateSound.play();
}

function playLineClearSound() {
    lineClearSound.play();
}

// Trigger sounds during relevant actions in the game logic
document.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        playMoveSound();
    } else if (event.key === 'ArrowUp') {
        playRotateSound();
    }
});
