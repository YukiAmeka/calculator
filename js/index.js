const buttons = document.getElementsByTagName('button');
const opperators = ['/', '×', '-', '+'];
for (let i = 0; i < buttons.length; i++) {
    switch(buttons[i].name) {
        case 'btnErase':
            buttons[i].addEventListener('click', eraseDisplay);
            break;
        case 'btnEqual':
            buttons[i].addEventListener('click', calcResult);
            break;
        case 'btnOpper':
            buttons[i].addEventListener('click', addOpperToDisplay);
            break;
        case 'btnDot':
            buttons[i].addEventListener('click', addDotToDisplay);
            break;
        default:
            buttons[i].addEventListener('click', addNumToDisplay);
    }
}

function eraseDisplay(e) {
    const screen = document.getElementById('display');
    if (e.target.innerText === 'C') {
        screen.value = '';
    } else {
        screen.value = screen.value.slice(0,-1);
    }
}

function calcResult() {
    const screen = document.getElementById('display');
    const lastChar = screen.value.slice(-1);
    if (opperators.includes(lastChar)) {
        screen.value = screen.value.slice(0,-1);
    }
    let screenValMod = screen.value.replace(/×/g, '*');
    screen.value = eval(screenValMod);
}

function addOpperToDisplay(e) {
    const screen = document.getElementById('display');
    const lastChar = screen.value.slice(-1);
    if (opperators.includes(lastChar)) {
        screen.value = screen.value.slice(0,-1);
    }
    screen.value += e.target.innerText;
}

function addDotToDisplay() {
    const screen = document.getElementById('display');
    if (screen.value.includes('.')) {
        let numbers = screen.value.split(/\-|\+|\/|×/);
        if (numbers[numbers.length-1].includes('.')) {
            screen.value = screen.value;
        } else {
            screen.value += '.';
        }
    } else {
        screen.value += '.';
    }
}

function addNumToDisplay(e) {
    const screen = document.getElementById('display');
    screen.value += e.target.innerText;
}



