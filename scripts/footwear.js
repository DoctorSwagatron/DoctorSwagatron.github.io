function footwear(){
//inputs 
let weather = document.getElementById("weather").value;
//processing
if (weather == "Hot") {
    decision = "Sandals";
   //  block of code to be executed if condition1 is true
} else if (weather == "Rain") {
    decision = "Galoshes";
} else if (weather == "Snow") {
    decision = "Boots";
} else {
    decision = "Shoes";
}

//outputs      
document.getElementById("output").textContent = "You should wear " + decision + " today."; 

}