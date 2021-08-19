
let operator;

/* Number Button Action */
function buttonAction(buttonId) {
    const buttonText = document.getElementById(buttonId).innerText;
    const buttonValue = parseFloat(buttonText);

    const displayText = document.getElementById('display').innerText;
    const displayValue = parseFloat(displayText);

    if (operator == 'add') {
        const result = displayValue + buttonValue;
        document.getElementById('display').innerText = result;
    }
    else if (operator == 'sub') {
        const result = displayValue - buttonValue;
        document.getElementById('display').innerText = result;
    }
    else if (operator == 'mul') {
        const result = displayValue * buttonValue;
    }
    else if (operator == 'div') {
        const result = displayValue / buttonValue;
        document.getElementById('display').innerText = result;
    }
    else {
        const result = buttonValue;
        document.getElementById('display').innerText = result;
    }

}

/* click handeler for numbers*/

function buttonEvent(buttonId) {
    document.getElementById(buttonId).addEventListener('click', function () {
        buttonAction(buttonId);
    });
}

// all numbers
for (let index = 0; index < 10; index++) {
    buttonEvent(index);
}

