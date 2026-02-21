document.getElementById('transfer-btn').addEventListener('click', function (e) {
    e.preventDefault()

    const userNumber = getValueOfInputItems('user-mobile');
    const transferAmount = getValueOfInputItems('transfer-amount');
    const transferPin = getValueOfInputItems('transfer-pin');

    const balance = getInnerTextOftItems('balance');

    if (transferPin !== '1234' || transferPin.length !== 4 || userNumber.length !== 11) {
        alert("invalid info ");
        return;
    }

    if (isNaN(transferAmount) || isNaN(userNumber)) {
        alert("Enter valid numbers");
        return;
    }



    let newBalance = balance - parseFloat(transferAmount);

    if (newBalance < 0) {
        alert('Insufficient balance')
        return;
    }

    if (transferAmount <= 0) {
        alert('enter valid amount')
        return;
    }

    console.log(newBalance)

    document.getElementById('balance').innerText = newBalance;

    alert("Transfer successful!");
})