"use strict";

const $ = selector => document.querySelector(selector);



const getSessionStorage = () => {
    let name = sessionStorage.getItem("name");
    let date = sessionStorage.getItem("date");
    let email = sessionStorage.getItem("email");
    let phone = sessionStorage.getItem("phone");
    let bed = sessionStorage.getItem("bed");
    let room = sessionStorage.getItem("room");
    let earlyCheck = sessionStorage.getItem("earlyCheck");
    
    $("#name").textContent = name;
    $("#email").textContent = email;
    $("#phone").textContent = formatPhoneNumber(phone);
    $("#room").textContent = room;
    $("#bed").textContent = bed;
    $("#date").textContent = normalizeDate(date);
    $("#earlyCheck").textContent = earlyCheck ? "You can check-in as early as 11:00AM" : "";
};
const formatPhoneNumber = (phoneNumber) => {

    let cleaned = ('' + phoneNumber).replace(/\D/g, '');
    let formatted = cleaned.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2 - $3');
    return formatted;
};
const normalizeDate = (dateString) => {
    let date = new Date(dateString + "T00:00:00Z");

    let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let month = monthNames[date.getUTCMonth()];
    let day = date.getUTCDate();
    let year = date.getUTCFullYear();

    return month + " " + day + ", " + year;
};
document.addEventListener("DOMContentLoaded", () => {
    getSessionStorage();
});