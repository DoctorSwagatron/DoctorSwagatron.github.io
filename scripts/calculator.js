function calculator(){
//inputs 
let num1 = parseFloat(document.getElementById("num1").value); 
let num2 = parseFloat(document.getElementById("num2").value); 
let answer = parseFloat(document.getElementById("answer").value); 
let operator = document.getElementById("operator").value;
let result = "";
// processing
switch(operator){
    case "add":
         checked_answer = num1 + num2;
            break;
    case "subtract": 
            checked_answer = num1 - num2;
            break;
        
    case "multiply": 
            checked_answer = num1 * num2;
            break;

    case "divide": 
            checked_answer = num1 / num2;
            break;
        }
if (checked_answer == answer){
        result = "Correct! 🏆";
}else{
       result = "Incorrect 😢";
}
//outputs
document.getElementById("output").textContent = result;


}
