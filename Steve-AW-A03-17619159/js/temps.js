"use strict";

const $ = selector => document.querySelector(selector);
 //used to calculate fahrenheit
const calculateCelsius = temp => (temp-32) * 5/9;
const calculateFahrenheit = temp => (temp * 9/5) + 32;
const toFahrenheit = () => 
{ 
    $("#degree_label_1").textContent = "Enter Celsius:"
    $("#degree_label_2").textContent = "Degrees Fahrenheit:"
}
const toCelsius = () => 
{ 
    $("#degree_label_1").textContent = "Enter Fahrenheit:"
    $("#degree_label_2").textContent = "Degrees Celsius:"
}
const convert =() =>{

    let temp = parseFloat($("#degrees_entered").value)
    console.log(temp)
    if($("#to_celsius").checked){
       $("#degrees_computed").value=calculateCelsius(temp.toFixed(2))
       
    }
    if($("#to_fahrenheit").checked){
        $("#degrees_computed").value=calculateFahrenheit(temp.toFixed(2))
        console.log(temp)
    }

}


const clearBoxes =() =>{
    $("#degrees_entered").value = "";
    $("#degrees_computed").value = "";
}

document.addEventListener("DOMContentLoaded", () => {
    $("#to_fahrenheit").addEventListener("click",toFahrenheit);
    $("#to_celsius").addEventListener("click",toCelsius);
    $("#convert").addEventListener("click",convert);
    $("#clear").addEventListener("click",clearBoxes);
});