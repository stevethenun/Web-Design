"use stricts";

let inches = 0;
do{
    inches = parseInt(prompt("Enter a number greater than 0. It will be converted from inches into centimeters. Enter 999 to exit.", 999));

    if(inches > 0){
        let cm = parseFloat(inches * 2.54);

        if (inches !=999){
          let html = `<p>${inches} inches = ${cm.toFixed(2)} cm </p>`;
            document.write(html);  
        }

        
    }
    else{
        alert("please try that again....")
    }
    
}
while(inches !=999)