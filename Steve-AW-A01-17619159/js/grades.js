"use strict";
//alert("Go vols!!");
let letterGrade = "";
let grade = 0;
do{
  grade = parseInt(prompt("Enter grade", 999));
  if(grade < 70){
    letterGrade = "F"
  }
  else if (grade <=77){
    letterGrade = "D"
  }
  else if (grade <=84){
    letterGrade = "C"
  }
  else if (grade <=92){
    letterGrade = "B"
  }
  else if (grade <=100){
    letterGrade = "A"
  }
  else{
    letterGrade = "";
    if(grade !=999){
       alert("please enter a valid number")
    }
    
  }
  if(letterGrade != ""){
    const html = `<p>Grade ${grade} = ${letterGrade}</p>`;
    document.write(html);
  }
   
}while(grade != 999);
 