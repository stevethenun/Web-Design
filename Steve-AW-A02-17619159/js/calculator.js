"use strict";


const $ = selector => document.querySelector(selector);

   const calculateChange = () => 
   { 
       let changeAmount = $("#changeAmount").value;
       let quarters = 0;
       let dimes = 0;
       let nickels = 0;
       let pennies = 0;

       if (isNaN(changeAmount) == true || changeAmount < 1 || changeAmount > 99){
           alert("Your number is either out of range. Or not a number at all");
       }
       else{
        quarters = "$"+ parseInt(changeAmount / 25);
        changeAmount = changeAmount % 25;
        dimes = "$"+ parseInt(changeAmount / 10)
        changeAmount = changeAmount % 10;
        nickels = "$"+ parseInt(changeAmount / 5)
        pennies = "$"+ changeAmount % 5;
        $("#quarters").value = quarters
        $("#dimes").value = dimes
        $("#nickels").value = nickels
        $("#pennies").value = pennies
        
       }
   };
   //Document Object Model
document.addEventListener("DOMContentLoaded", () => {
    // add event handlers
    $("#calculateChange").addEventListener("click",calculateChange);
   });