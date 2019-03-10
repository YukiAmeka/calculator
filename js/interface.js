function initiateButtonObjects() {
    let buttons = {};
    document.querySelectorAll('.number-button').forEach(
        element => buttons.element.innerText = new NumberButton.fromButtonLabel(buttons.element.innerText));
    const periodBtn = document.querySelector('.period-button');
    buttons.periodBtn.innerText = new PeriodButton.fromButtonLabel(buttons.periodBtn.innerText);
    document.querySelectorAll('.operator-button').forEach(
        element => buttons.element.innerText = new OperatorButton.fromButtonLabel(buttons.element.innerText));
    const equalsBtn = document.querySelector('.equals-button');
    buttons.equalsBtn.innerText = new EqualsButton.fromButtonLabel(buttons.equalsBtn.innerText);
    
}