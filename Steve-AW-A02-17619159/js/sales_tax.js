"use strict";

const $ = selector => document.querySelector(selector);

const calculateTax = () => 
{ 
    const subTotal = $("#subtotal").value;
    const taxRate = $("#taxRate").value;
    if (isNaN(subTotal) == true || isNaN(taxRate)== true || subTotal <=0 || subTotal >10000 || taxRate <=0 || taxRate >12){
        alert("Your number is either out of range. Or not a number at all");
    }
    else{
        
        let salesTax = subTotal * (taxRate / 100);
        let total = parseFloat(salesTax)  + parseFloat(subTotal)
        $("#taxSubTotal").value = salesTax
        $("#total").value = total
    }
};
const clearBoxes =() =>{
    $("#subtotal").value = "";
    $("#taxRate").value = "";
    $("#taxSubTotal").value = "";
    $("#total").value = "";
}

document.addEventListener("DOMContentLoaded", () => {
    $("#calculate").addEventListener("click",calculateTax);
    $("#clear").addEventListener("click",clearBoxes);
   });
   