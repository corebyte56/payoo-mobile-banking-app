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



function getInnerTextOftItems(id) {
    const innerTextOfItems = document.getElementById(id).innerText;
    return Number(innerTextOfItems);
}


function showOnly(id){
    const cashOut = document.getElementById('cashout');
    const addMoney = document.getElementById('add-money');
    
    cashOut.classList.add('hidden');
    addMoney.classList.add('hidden')

    const selected = document.getElementById(id);
    selected.classList.remove("hidden");
}