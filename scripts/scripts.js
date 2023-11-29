/****************** YOUR NAME: YANG KI, Carson (000913354)

The instructions describe the missing logic that is needed; you will translate these into JavaScript in the places indicated.

You are encouraged to use the provided naming convention for ease of review.

*/

/****************** create variables ******************/
/* create variables to hold the values for modelName and duration */

// INSERT YOUR CODE HERE

var modelName = "XYZ";
var duration = 0;

/****************** helper function ******************/
/* create a function called recalculate() which will
    - create a variable to represent the calculated-cost span element. That will look something like:
        // let costLabel = document.getElementById("calculated-cost");
    - check the value of the modelName variable, and use that to calculate the new total cost:
        e.g. if modelName is currently "XYZ", duration * 100 gives us the new total cost.
        if modelName is currently "CPRG", duration * 213 gives us the new total cost.
    - set the value of the calculated-cost element's innerHTML to this new value
*/

// INSERT YOUR CODE HERE

function recalculate(){
    let calculated_cost = document.getElementById("calculated-cost");       // Get the span element representing the calculated cost
    let totalCost = modelName === "XYZ" ? duration * 100 : duration * 213;
    calculated_cost.innerHTML = totalCost.toFixed(2);           // Set the innerHTML of the calculated-cost element to the new total cost (2 decimal places)
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

// INSERT YOUR CODE HERE

let modelButton = document.getElementById("model-button");

function changeModel(){
    let modelText = document.getElementById("model-text");     // Get the model-text span element
    // Check the value of the modelName variable and update it accordingly
    if (modelName == "XYZ"){
        modelName = "CPRG";
        modelText.innerHTML = "Model CPRG";
    } else if (modelName == "CPRG"){
        modelName = "XYZ";
        modelText.innerHTML = "Model XYZ";
    }
    recalculate();      // Recalculate the total cost after changing the model
}

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

// INSERT YOUR CODE HERE

let durationButton = document.getElementById("duration-button");

function changeDuration(){
    let durationText = document.getElementById("duration-text");
    let newDuration = prompt("Please enter a new duration: ");

    if (newDuration !== null) {
        duration = parseInt(newDuration) || 0; // Convert input to integer or default to 0 if not a valid number
        durationText.innerHTML = duration;
        recalculate();
    }
}

durationButton.addEventListener("click", changeDuration);



