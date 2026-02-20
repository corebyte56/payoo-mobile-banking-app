document.getElementById('resetPin-btn').addEventListener('click', function(e){
    e.preventDefault();

    const resetPinValue = getValueOfInputItems('new-pin');
    console.log(resetPinValue)

});