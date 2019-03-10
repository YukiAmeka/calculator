class Button {
    constructor(key) {
        this.key = key;
    }
    
    clickAnimation(backgroundColor, textColor) {
        
    }
    stopAnimation() {
        
    }
}

class PrintToDisplayButton extends Button {
    constructor(key) {
        super(key);
    }
    
}

class NumberButton extends PrintToDisplayButton {
    constructor(key) {
        super(key);
    }
    static fromButtonLabel(buttonLabel) {
        return new NumberButton(buttonLabel);
    }
}

class PeriodButton extends PrintToDisplayButton {
    constructor(key) {
        super(key);
    }
    static fromButtonLabel(buttonLabel) {
        return new PeriodButton(buttonLabel);
    }
}

class OperatorButton extends PrintToDisplayButton {
    constructor(key) {
        super(key);
    }
    static fromButtonLabel(buttonLabel) {
        return new OperatorButton(buttonLabel => buttonLabel === '×' ? '*' : buttonLabel);
    }
}

class EqualsButton extends Button {
    constructor(key) {
        super(key);
    }
    static fromButtonLabel(buttonLabel) {
        return new EqualsButton(buttonLabel);
    }
}

class BackspaceButton extends Button {
    constructor(key) {
        super(key);
    }
    static fromButtonLabel(buttonLabel) {
        return new BackspaceButton('Backspace');
    }
}

class ClearButton extends Button {
    constructor(key) {
        super(key);
    }
    static fromButtonLabel(buttonLabel) {
        return new ClearButton('Delete');
    }
}