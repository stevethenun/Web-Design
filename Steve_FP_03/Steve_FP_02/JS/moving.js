if (window.innerWidth > 600) {
    const textArray = ["It's time to start planning..", "It's time to start packing..", "It's time to start your life.."];
    let index = 0;
    const textElement = document.querySelector('.moving_text');
    let intervalId;

    function updateText() {
        textElement.style.animation = 'none'; // this will disable the animation.
        void textElement.offsetWidth; // this will trigger reflow.
        textElement.style.animation = null; // this will restart the animation.
        textElement.innerHTML = textArray[index];
        index = (index + 1) % textArray.length;
        
        // Check if index has reached the end of the array
        if (index === 0) {
            clearInterval(intervalId); // Stop the interval
        }
    }

    intervalId = setInterval(updateText, 5000);
}