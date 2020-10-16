function PoundsToKilograms(){
//input
let pounds = parseFloat(document.getElementById ('pounds').value);

//processing
    // the conversion factor from pounds to kg is 0.45359237
let kilograms = pounds * 0.45359237;  

//output 
document.getElementById('output').textContent = kilograms.toFixed(1) + " kg.";
}
