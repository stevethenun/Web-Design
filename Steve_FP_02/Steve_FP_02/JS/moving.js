"use strict"

const textArray = [ "It's time to start planning..", "It's time to start packing..", "It's time to start your life.."];
let index = 0;
const textElement = document.querySelector('.moving_text');

function updateText() {
    textElement.style.animation = 'none'; // this will disable the animation.
    void textElement.offsetWidth; // thsi will trigger reflow.
    textElement.style.animation = null; // this wil restart the animation.
    textElement.innerHTML = textArray[index];
    index = (index + 1) % textArray.length;
}

// Calls the function every 5 seconds"5000"
setInterval(updateText, 5000);
