function footwear(){
//inputs 
let weather = document.getElementById("weather").value;
//processing
if (weather == "hot") {
    decision = "sandals";
   //  block of code to be executed if condition1 is true
} else if (weather == "rain") {
    decision = "galoshes";
} else if (weather == "snow") {
    decision = "boots";
} else {
    decision = "shoes";
}

//outputs      
document.getElementById("output").textContent = "You should wear " + decision + " today."; 

}