document.getElementById('withdraw-btn').addEventListener('click', function(e){
    e.preventDefault()

    const agentNumber = getValueOfInputItems('Agent-mobile');
    const amount = getValueOfInputItems('cash-out-amount');
    const pin = getValueOfInputItems('cash-out-pin');

    const balance = getInnerTextOftItems('balance');

    if(pin !== '1234' || pin.length !== 4 || agentNumber.length !== 11){
        alert("invalid info ");
        return;
    }

    if(isNaN(amount) || isNaN(agentNumber)){
    alert("Enter valid numbers");
    return;
}

    let newBalance = balance - parseFloat(amount);

    if(newBalance < 0){
        alert('Insufficient balance')
        return;
    }

    if(amount <= 0){
       alert('enter valid amount')
        return;
    }

    document.getElementById('balance').innerText = newBalance;

    alert("Cashout successful!");
})