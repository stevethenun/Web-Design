"use strict"


setTimeout(function() {
    
    var video = document.getElementById('video');
    if (video) {
        var src = video.getAttribute('src');
        src += '&autoplay=1&mute=0';
        video.setAttribute('src', src);
    }
}, 20000);