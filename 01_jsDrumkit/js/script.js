// set display variable
const display = document.getElementById("display");
// remove playing class after transition
function removeTransition(event) {
    if (event.propertyName !== "transform") return; //only listen to transform
    this.classList.remove("playing"); // this --> left of the dot - keys
}
// play sound when pressing key + set display
function playKey(event) {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    const name = key.classList[2];
    if (!audio) return; // stop the function
    audio.currentTime = 0; // rewind
    audio.play();
    key.classList.add("playing"); // add class
    display.innerHTML = name;
}
// play sound onclick + set display
function playClick(event) {
    const clicked = event.target;
    const pad = event.target.classList[0];
    const sound = document.querySelector(`audio[class="${pad}"]`);
    const name = event.target.classList[2];
    if (!pad) return;
    sound.currentTime = 0;
    sound.play();
    clicked.classList.add("playing"); // add class
    display.innerHTML = name;
}

// shoot event listeners + functions
const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playKey);


keys.forEach(key => key.addEventListener("click", playClick));
