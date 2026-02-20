document.getElementById('continue-btn').addEventListener('click', function(e){
    e.preventDefault();

    const resetNumberValue = getValueOfInputItems('reset-mobile');

    if(resetNumberValue ===  '01756470303'){
        alert("Please Reset Your Pin");
        window.location.href = "newPin.html";
        return;
    }

    else{
        alert('Wrong Number')
    }
});