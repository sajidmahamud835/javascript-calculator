let operator = 'add';
/* Number Button Action */
function buttonAction(buttonId) {
    const buttonText = document.getElementById(buttonId).innerText;
    const displayText = document.getElementById('output').innerText;

    if (buttonId == 'add' || buttonId == 'sub' || buttonId == 'mul' || buttonId == 'div') {
        operator = buttonId;
        document.getElementById('mini-text').innerText = buttonText;
        return 0;
    }
    const displayValue = parseFloat(displayText);
    const buttonValue = parseFloat(buttonText);
    if (operator == 'add') {
        const result = displayValue + buttonValue;
        operator = 0;
        document.getElementById('output').innerText = result;
        document.getElementById('mini-text').innerText = '';
    }
    else if (operator == 'sub') {
        const result = displayValue - buttonValue;
        operator = 0;
        document.getElementById('output').innerText = result;
        document.getElementById('mini-text').innerText = '';
    }
    else if (operator == 'mul') {
        const result = displayValue * buttonValue;
        operator = 0;
        document.getElementById('output').innerText = result;
        document.getElementById('mini-text').innerText = '';
    }
    else if (operator == 'div') {
        const result = displayValue / buttonValue;
        operator = 0;
        document.getElementById('output').innerText = result;
        document.getElementById('mini-text').innerText = '';
    }
    else if (operator == 'none') {
        const result = buttonValue;
        document.getElementById('output').innerText = result;
        document.getElementById('mini-text').innerText = '';
    }

}

/* click handeler*/

function buttonEvent(buttonId) {
    document.getElementById(buttonId).addEventListener('click', function () {
        buttonAction(buttonId);
    });
}

// all numbers
for (let index = 0; index < 10; index++) {
    buttonEvent(index);
}

// all operators
const operators = ['add', 'sub', 'mul', 'div']

for (operator of operators) {
    buttonEvent(operator);
}
