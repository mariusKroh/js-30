function removeTransition(event) {
  if (event.propertyName !== "transform") return; //only listen to transform
  this.classList.remove("playing"); // this --> left of the dot - keys
}

function playKey(event) {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
  if (!audio) return; // stop the function
  audio.currentTime = 0; // rewind
  audio.play();
  key.classList.add("playing"); // add class

}

function playClick(event) {
    const clicked = event.target;
    const pad = event.target.classList[0];
    const sound = document.querySelector(`audio[class="${pad}"]`);
    if (!pad) return;
    sound.currentTime = 0;
    sound.play();
    clicked.classList.add("playing"); // add class
  }

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playKey);

//onclick
keys.forEach(key => key.addEventListener("click", playClick));


