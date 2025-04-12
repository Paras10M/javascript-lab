/****************** YOUR NAME: Paras Odedara

The instructions describe the missing logic that is needed; you will translate these into JavaScript in the places indicated.

You are encouraged to use the provided naming convention for ease of review.

*/

/****************** create variables ******************/
/* create variables to hold the values for modelName and duration */

// Initialize variables with default values
// modelName stores the current selected model (starting with "XYZ")
// duration stores the number of days the model will be used (starting with 0)
let modelName = "XYZ";
let duration = 0;


/****************** helper function ******************/
/* create a function called recalculate() which will
    - create a variable to represent the calculated-cost span element. That will look something like:
        // let costLabel = document.getElementById("calculated-cost");
    - check the value of the modelName variable, and use that to calculate the new total cost:
        e.g. if modelName is currently "XYZ", duration * 100 gives us the new total cost.
        if modelName is currently "CPRG", duration * 213 gives us the new total cost.
    - set the value of the calculated-cost element's innerHTML to this new value
*/

// This function calculates and updates the total cost based on the current model and duration
function recalculate() {
    // Get reference to the span element that displays the cost
    let costLabel = document.getElementById("calculated-cost");
    let totalCost = 0;
    
    // Calculate cost based on the selected model
    // XYZ model costs $100 per day
    if (modelName === "XYZ") {
        totalCost = duration * 100;
    } 
    // CPRG model costs $213 per day
    else if (modelName === "CPRG") {
        totalCost = duration * 213;
    }
    
    // Update the displayed cost on the page with 2 decimal places
    costLabel.innerHTML = totalCost.toFixed(2);
}


/****************** model button logic ******************/

/* 
- first, create a variable to represent the "Switch Model" pseudo-button (hint: can use getElementById)
- second, create a function called changeModel() which checks the value of the model name variable. This function will:
    - create a variable to represent the model-text span element
    - if modelName is currently "XYZ", change the value of modelName to "CPRG", and change the innerHTML of the model-text span element to "Model CPRG"
    - if modelName is currently "CPRG", change the value of modelName to "XYZ", and change the innerHTML of the model-text span element to "Model XYZ"
    - then, recalculate() the total cost.
- finally, uncomment the following line of JavaScript to have this function run automatically whenever the pseudo-button is clicked: */
    // modelButton.addEventListener("click", changeModel);

// Get reference to the model switch button
let modelButton = document.getElementById("model-button");

// This function toggles between the two available models (XYZ and CPRG)
function changeModel() {
    // Get reference to the span element that displays the current model
    let modelText = document.getElementById("model-text");
    
    // Toggle the model based on current selection
    if (modelName === "XYZ") {
        // Change to CPRG model
        modelName = "CPRG";
        modelText.innerHTML = "Model CPRG";
    } else {
        // Change to XYZ model
        modelName = "XYZ";
        modelText.innerHTML = "Model XYZ";
    }
    
    // Update the cost based on the new model selection
    recalculate();
}

// Add click event listener to the model button
modelButton.addEventListener("click", changeModel);


/****************** duration button logic ******************/
/*  - first, create a variable to represent the "Change Duration" pseudo-button.
    - then, create a function called changeDuration() that will
        - create a variable to represent the duration-text span element
        - prompt() the user for a new duration
        - save the result of the prompt() to the duration variable
        - change the innerHTML of the duration-text span element to this new value
        - recalculate() the total cost/
    - finally, attach this function to the "Change Duration" pseudo-button, so it runs whenever the button is clicked.
*/

// Get reference to the duration change button
let durationButton = document.getElementById("duration-button");

// This function allows the user to change the duration via a prompt dialog
function changeDuration() {
    // Get reference to the span element that displays the current duration
    let durationText = document.getElementById("duration-text");
    
    // Prompt the user to enter a new duration value
    let newDuration = prompt("Enter the duration in days:");
    
    // Convert the user input to a number (integer)
    duration = parseInt(newDuration);
    
    // Update the displayed duration on the page
    durationText.innerHTML = duration;
    
    // Update the cost based on the new duration
    recalculate();
}

// Add click event listener to the duration button
durationButton.addEventListener("click", changeDuration);