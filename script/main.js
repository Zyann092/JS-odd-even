let userInput = document.querySelector("#userInput")
let resultDisplay = document.querySelector("#resultDisplay")

function checkNumber() {

    if ( userInput.value % 2 == 0 ) {
        resultDisplay.innerHTML = "Even Number"
    } 
    else if (userInput.value % 2 == 1) {
        resultDisplay.innerHTML = "Odd Number"
    } 
    else if (userInput.value == "") {
        alert("Enter your Number")
    } 
    else {
        resultDisplay.innerHTML = "Invalid Number"
    } 
}