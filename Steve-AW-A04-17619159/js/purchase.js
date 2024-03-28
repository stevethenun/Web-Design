"use strict";

const $ = selector => document.querySelector(selector);
const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;

const checkIfExists = (text,name) =>{
    if(!text){
        switch(name){
            case "email":
                throw new Error ("Email Required");
            case "date":
                throw new Error ("Date is required");
            case "purchaseAmount":
                throw new Error ("Amount required");        
        }
    }

    return text;
}
const checkValid =() =>{
    let isValid = true;
    try{
        const email = $("#email").value;
        checkIfExists(email,"email")
        if(!emailPattern.test(email)){
            isValid = false;
            throw new Error ("need valid email")
        }
        else{
            $("#emailError").textContent ="";
        }
    }
    catch(error){
        $("#emailError").textContent = error.message;
        isValid = false;
    }

    try{
        let purchaseAmount = parseFloat($("#purchase_amount").value);
        purchaseAmount = checkIfExists(purchaseAmount,"purchaseAmount");
        $("#amountError").textContent ="";
    }
    catch(error){
        $("#amountError").textContent = error.message;
        isValid = false;
    }

    try{
        const date = parseFloat($("#date").value);
        checkIfExists(date,"date");
        $("#dateError").textContent = "";
    }
    catch(error){
        $("#dateError").textContent = error.message;
        isValid = false;
    }

    if(isValid){
        processInformation();
    }
}
const showDate = () =>{
    const  today = new Date(); 
    const T = today.toISOString().indexOf('T');
    let minDate = new Date();
    let day = today.getDate() - 30;

    console.log(today);
    $("#date").value = today.toISOString().substring(0,T);
    $("#date").max = today.toISOString().substring(0,T);
    $("#date").min = minDate.toISOString(minDate.setDate(day)).split('T').shift();
    
}

const processInformation = () => 
{ 
    let discountAmount = 0;
    let purchaseAmount = 0;
    let discountType = $("#discount_type").value;
    purchaseAmount = $("#purchase_amount").value;

    switch(discountType.toLowerCase()){
        case "none":
            discountAmount = 0;
            break;
        case "military":
            discountAmount = .10;  
            break;
        case "student":
            discountAmount = .10;  
            break;
        case "aarp":
            discountAmount = .15; 
            break;
    }

    let discountPrice = (discountAmount > 0) ? purchaseAmount - (purchaseAmount * discountAmount) : purchaseAmount;

    const us = new Intl.NumberFormat("en-US", {style: "currency", currency:"USD"})
    discountPrice = us.format(discountPrice);

    $("#discounted_price").value = discountPrice;
};

const reset = () => 
{ 
    showDate();
    $("#purchase_amount").value = "";
    $("#discount_type").value = "none";
    $("#email").value = "";
    $("#discounted_price").value ="";
};





document.addEventListener("DOMContentLoaded", () => {
    showDate();
    $("#processInformation").addEventListener("click",checkValid);
    $("#discount_type").addEventListener("change",checkValid)
    $("#reset").addEventListener("click",reset);
   });