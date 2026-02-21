/**
 * Retrieves the current value of an input element by its ID.
 *
 * @param {string} value - The ID of the input element.
 * @returns {string} The value entered in the input field.
 * 
 */


function getValueOfInputItems(id) {
    const valueOfItems = document.getElementById(id).value;
    return valueOfItems;
}


// This function takes an element id,
// finds the innerText of that element,
// and converts it into a Number before returning it.
// Useful for getting balance, amount, etc. as a number.

function getInnerTextOftItems(id) {
    const innerTextOfItems = document.getElementById(id).innerText;
    return Number(innerTextOfItems);
}



// This function shows only the selected section
// and hides all other sections (cashout, add-money, transfer-money, transaction).
// After showing the selected section,
// it automatically scrolls smoothly to that section.

function showOnly(id){
    const cashOut = document.getElementById('cashout');
    const addMoney = document.getElementById('add-money');
    const transferMoney = document.getElementById('transfer-money');
    const transaction = document.getElementById('transaction');
    
    cashOut.classList.add('hidden');
    addMoney.classList.add('hidden')
    transferMoney.classList.add('hidden')
    transaction.classList.add('hidden')

    const selected = document.getElementById(id);
    selected.classList.remove("hidden");

     selected.scrollIntoView({
        behavior: "smooth"
    });
}