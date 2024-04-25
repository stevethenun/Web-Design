
$(document).ready(function() {
    // Hide the content inside divs with class "hide" initially
    $(".hide").hide();
    
    $("a.show-more").click(function(event) {
        event.preventDefault(); // Prevent default action of anchor tag
        
        var $this = $(this); // Cache the clicked anchor tag
        var $content = $this.prev(".hide"); // Cache the content to be toggled
        
        // Toggle the visibility of the content inside the div with class "hide"
        $content.toggle();
        
        // Change the text of the clicked anchor tag based on its current text
        if ($this.text() === "Show More") {
            $this.text("Show Less");
        } else {
            $this.text("Show More");
        }
    });
});

