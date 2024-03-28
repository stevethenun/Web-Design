"use stricts";

//alert("GO VOLS!");
let total = 0;

const miles = parseInt(prompt("Enter miles", 999));
const gallons = parseInt(prompt("enter gallons", 999));

const mpg = parseFloat(miles/gallons);

const html = `<p>${mpg.toFixed(2)} miles per gallon</p>`
document.write(html);
//alert(miles);