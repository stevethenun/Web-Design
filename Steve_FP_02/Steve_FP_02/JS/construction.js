"use strict"

const textArray = [ "You can return back to the HOME page..", "Or you can exit..", "      GOOD BYE!.."];
let index = 0;
const textElement = document.querySelector('.moving_text');

function updateText() {
    textElement.style.animation = 'none'; // this will disable the animation.
    void textElement.offsetWidth; // thsi will trigger reflow.
    textElement.style.animation = null; // this wil restart the animation.
    textElement.innerHTML = textArray[index];
    index = (index + 1) % textArray.length;
}

// Calls the function every 6 seconds"6000"
setInterval(updateText, 6000);