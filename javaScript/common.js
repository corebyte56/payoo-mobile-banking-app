/**
 * Retrieves the current value of an input element by its ID.
 *
 * @param {string} value - The ID of the input element.
 * @returns {string} The value entered in the input field.
 * 
 */


function getValueOfInputItems(value) {
    const valueOfItems = document.getElementById(value).value;
    return valueOfItems;
}