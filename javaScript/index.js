document.getElementById("login-btn").addEventListener('click', function (e) {
    e.preventDefault();

    const numberValue = getValueOfInputItems('login-mobile');
    const pinValue = getValueOfInputItems('login-pin');

    if (pinValue.length !== 4) {
        alert("PIN must be 4 digits");

    }
    else if (numberValue.length !== 11) {
        alert("Number must be 11 digits");
        return;
    }


    if (numberValue == '01756470303' && pinValue == '1234') {
        alert("login succesful");
        window.location.assign('./home.html');
    }

    else {
        alert("Login failed");

    }




})