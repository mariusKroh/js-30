function removeTransition(event){
    if (event.propertyName !== 'transform') return; //only listen to transform
    this.classList.remove('playing'); // this --> left of the dot - keys



};


function playSound(event){
const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
if(!audio) return; // stop the function
audio.currentTime = 0; // rewind
audio.play();
key.classList.add('playing');

};


const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition ));

window.addEventListener('keydown', playSound);