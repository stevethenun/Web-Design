"use strict";

$(document).ready(function() {
    $("#categories h2").click( event => {
        const h2 = event.currentTarget;

        $(h2).toggleClass("minus");

        if ($(h2).attr("class") !== "minus") {
            $(h2).next().hide();
        }
        else {
            $(h2).next().show();
        }

        $("#image").attr("src", "");
    }); // end click

    $("#web_images a, #language_images a, #database_images a").each( (index, img) => {
        // get old and new urls
        let imageURL = $(img).attr("href");

        // preload images		
        let bookImage = new Image();
        bookImage.src = imageURL;

        // set up event handlers			
        $(img).click( evt => {
            $("#image").attr("src", imageURL);

        // cancel the default action of each link
        evt.preventDefault();
        }); // end click 
    }); // end each
}); // end ready