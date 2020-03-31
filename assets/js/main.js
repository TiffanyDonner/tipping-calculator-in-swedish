/*Javascript Tip Calculator - Carolyn Hemmings (CodePen)*/
/*Calulation for the Tip*/
function calculateTip() {
    /* Pull values entered in fields by id and assign them to variables*/
    let billAmount = document.getElementById("amount").value;
    let tipPercentage = document.getElementById("tip").value;
    let numberOfPeople = document.getElementById("numberPeople").value;

    /* Calculate the total tip.
    The tip (tiptotal) equals varible billAmount * tipPercentage from above */
    let tipTotal = (billAmount * tipPercentage);
    /*keep only 2 decimal places*/
    tipTotal = tipTotal.toFixed(2);

    /*If there is more than one person display (multiple). Divide bill amount and 
    tip total by the number of people. Assign varibles */
    if (numberOfPeople > 1) {
        document.getElementById("multiple").style.display = "block";
        let bill = (billAmount / numberOfPeople);
        let tip = (tipTotal / numberOfPeople);
        /* Pull id totalTipMultiple to display only 2 decimal spaces*/
        document.getElementById("totalTipMultiple").innerHTML = tip.toFixed(2);

        /* Ruturn only numbers from bill added to tip. Assign to varible amount each. 
        Which is "Total Per Person" on HTML page. */
        let amountEach = parseFloat(bill) + parseFloat(tip);
        /* Pull id totalAmountEach to display only 2 decimal spaces*/
        document.getElementById("totalAmountEach").innerHTML = amountEach.toFixed(2);

        /* Ruturn only numbers from billAmount added to tipTotal. Assign to varible. 
        Which is "Bill Total" on HTML page. */
        let multipleTotal = parseFloat(billAmount) + parseFloat(tipTotal);
        /* Pull id billTotalMultiple to display only 2 decimal spaces*/
        document.getElementById("billTotalMultiple").innerHTML = multipleTotal.toFixed(2);

    /* Else there is one person display (single). */
    } else {
        document.getElementById("single").style.display = "block";
        /* Ruturn only numbers from bill added to tip. Assign to varible amount each. 
        Which is "Total Per Person" on HTML page. */
        let singleTotal = (parseFloat(billAmount) + parseFloat(tipTotal));
        /* Pull id tipAmount to and assign to tipTotal*/
        document.getElementById("tipAmount").innerHTML = tipTotal;
        /* Pull id billTotal to display only 2 decimal spaces*/
        document.getElementById("billTotal").innerHTML = singleTotal.toFixed(2);
    }
}

/* Hide tip amounts on load*/
function hideTip() {
    document.getElementById("single").style.display = "none";
    document.getElementById("multiple").style.display = "none";
}

hideTip();

/*How TO - Form with Multiple Steps (w3 Schools)*/
/* Creates the step though for the tabbed layout*/
var currentTab = 0; /* This is a varible and needs to be changed. Current tab is set to be the first tab (0)*/
showTab(currentTab); /* Display the current tab*/

function showTab(nextTab) {
    /* This function will display the specified tab of the form ...*/
    let displayTab = document.getElementsByClassName("tab");
    displayTab[nextTab].style.display = "block";
    /* ... and fix the Previous/Next buttons:*/
    /* If nexttab equals zero. Then do not display the Previous Button */
    if (nextTab == 0) {
        document.getElementById("prevBtn").style.display = "none";
    /* Else display previous button inline with next button */
    } else {
        document.getElementById("prevBtn").style.display = "inline";
    }
    /* If you come to the end of the tabs the nextBtn button displays Resart  */
    if (nextTab == (displayTab.length - 1)) {
        document.getElementById("nextBtn").innerHTML = "Restart";
        calculateTip();
    /* Else nextBtn button displays Next */
    } else {
        document.getElementById("nextBtn").innerHTML = "Next";
    }
    /* ... and run a function that displays the correct step indicator:*/
    fixStepIndicator(nextTab)
}

function nextPrev(nextTab) {
    /* This function will figure out which tab to display*/
    let displayTab = document.getElementsByClassName("tab");
    /* Exit the function if any field in the current tab is invalid:*/
    if (nextTab == 1 && !validateForm()) return false;
    /* Hide the current tab:*/
    displayTab[currentTab].style.display = "none";
    /* Increase or decrease the current tab by 1:*/
    currentTab = currentTab + nextTab;
    /* if you have reached the end of the form... :*/
    if (currentTab >= displayTab.length) {
        /*...the form gets submitted:*/
        document.getElementById("tipForm").submit();
        return false;
    }
    /* Otherwise, display the correct tab:*/
    showTab(currentTab);
}

function validateForm() {
    /* This function deals with validation of the form fields*/
    let displayTab, controlInput, inputField, valid = true;
    displayTab = document.getElementsByClassName("tab");
    controlInput = displayTab[currentTab].getElementsByTagName("input");
    /* A loop that checks every input field in the current tab:*/
    for (inputField = 0; inputField < controlInput.length; inputField++) {
        /* If a field is empty...*/
        if (controlInput[inputField].value == "") {
            /* add an "invalid" class to the field:*/
            controlInput[inputField].className += " invalid";
            /* and set the current valid status to false:*/
            valid = false;
        }
    }
    /* If the valid status is true, mark the step as finished and valid:*/
    if (valid) {
        document.getElementsByClassName("step")[currentTab].className += " finish";
    }
    return valid; /* return the valid status*/
}

function fixStepIndicator(nextTab) {
    /* This function removes the "active" class of all steps...*/
    let inputField, displayTab = document.getElementsByClassName("step");
    for (inputField = 0; inputField < displayTab.length; inputField++) {
        displayTab[inputField].className = displayTab[inputField].className.replace(" active", "");

    }
    /*... and adds the "active" class to the current step:*/
    displayTab[nextTab].className += " active";

}