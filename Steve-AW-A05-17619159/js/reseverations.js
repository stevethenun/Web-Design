"use strict";

const $ = selector => document.querySelector(selector);
const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;

const checkIfExists = (text,name) =>{
    if(!text){
        switch(name){
            case "email":
                throw new Error ("Email is Required");
            case "date":
                throw new Error ("Date is required");
            case "name":
                throw new Error ("Name is required"); 
            case "phone":
                throw new Error ("Phone is required");       
        }
    }

    return text;
}

const showDate = () =>{

let today = new Date().toISOString().split('T')[0];
$("#date").value = today;
$("#date").setAttribute("min", today);
}

const checkValid =() =>{
    let isValid = true; 
    try{
        const name = ($("#name").value);
        checkIfExists(name,"name");
        $("#nameError").textContent = "";
    }
    catch(error){
        $("#nameError").textContent = error.message;
        isValid = false;
    }
    try{
        const email = $("#email").value;
        checkIfExists(email,"email")
        if(!emailPattern.test(email)){
            isValid = false;
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
        const date = parseFloat($("#date").value);
        checkIfExists(date,"date");
        $("#dateError").textContent = "";
    }
    catch(error){
        $("#dateError").textContent = error.message;
        isValid = false;
    }
   
    try{
        const phone = $("#phone").value.trim().replace(/\D/g, '');
        checkIfExists(phone,"phone");
        $("#phoneError").textContent = "";
    }
    catch(error){
        $("#phoneError").textContent = error.message;
        isValid = false;
    }

    if(isValid){
        setSessionStorage();
        let form = $("form"); 
        let submitButton = form.querySelector("#submit"); 
        form.requestSubmit(submitButton);

    }
}

const setSessionStorage = () =>{
    let name = $("#name").value
    sessionStorage.setItem("name",name)

    let date = $("#date").value
    sessionStorage.setItem("date",date)

    let email = $("#email").value
    sessionStorage.setItem("email",email)  
    
    let phone = $("#phone").value
    sessionStorage.setItem("phone",phone) 

    let bed = selectedRadioBed("bed");
    sessionStorage.setItem("bed",bed)

    let room = selectedRadioRoom("room")
    sessionStorage.setItem("room",room)

    let earlyCheck = $("#earlyCheck").checked;
    sessionStorage.setItem("earlyCheck", earlyCheck);

};
const selectedRadioBed = (bed) =>{
    const input = $('[name=' + bed + "]:checked");
    return input.id;
};
const selectedRadioRoom = (room) =>{
    const input = $('[name=' + room+ "]:checked");
    return input.id;
};

document.addEventListener("DOMContentLoaded", () => {
    showDate();
    $("#processInformation").addEventListener("click",checkValid);
    
   });