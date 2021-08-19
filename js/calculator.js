
/* Number Button Action */
function numberButtonAction(buttonId) {
    const buttonValue = document.getElementById(buttonId).innerText;

    document.getElementById('display').innerText = buttonValue;
}

/* click handeler */

document.getElementById('1').addEventListener('click', numberButtonAction('1'));
document.getElementById('2').addEventListener('click', numberButtonAction('2'));