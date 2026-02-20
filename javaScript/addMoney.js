document.getElementById('add-money-btn').addEventListener('click', function(e){
    e.preventDefault()

    const bankAccNum = getValueOfInputItems('bank-acc-num');
    const addedAmount = getValueOfInputItems('amount-add');
    const addMoneyPin = getValueOfInputItems('add-money-pin');

    const balance = getInnerTextOftItems('balance');

    if(addMoneyPin !== '1234' || addMoneyPin.length !== 4 || bankAccNum.length !== 11){
        alert("invalid info ");
        return;
    }

    if(isNaN(addedAmount)|| isNaN(bankAccNum)){
    alert("Enter valid numbers");
    return;
}

    let newBalance = balance + parseFloat(addedAmount);

    if(newBalance < 0){
        alert('Insufficient balance')
        return;
    }

    if(addedAmount <= 0){
       alert('enter valid amount')
        return;
    }

    document.getElementById('balance').innerText = newBalance;

    alert("Add Money successful!");
})