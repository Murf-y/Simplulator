class Calculator {

    //constructor for the calculator class to Initialize it
    constructor(previousOperationTextElement, currentOperationTextElement) {
        this.previousOperationTextElement = previousOperationTextElement;
        this.currentOperationTextElement = currentOperationTextElement;
        this.clear();
    }

    // clear all the data from the calculator
    clear() {
        if (this.currentOperand === '' && this.previousOperand === '') { alert("Everything is already cleared!") }
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }

    //delete the last char from the current operand 
    delete() {
        if (this.currentOperand.length > 0) {
            this.currentOperand = this.currentOperand.slice(0, -1);
        } else if (this.previousOperand.length > 0) {
            this.currentOperand = this.previousOperand;
            this.previousOperand = '';
            this.operation = undefined;
        }
    }

    // append a number to the current operand 
    appendNumber(number) {
        if (number.toString() === '.' && this.currentOperand.includes('.')) { return }
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    //choose the operation and update the previous and the current operand
    chooseOperation(operation) {
        // if there is no numbers to do the operations on
        if (this.currentOperand === '') { return }

        this.operation = operation;

        // if theres a dot in the current operand
        if (this.currentOperand.includes('.')) {
            const indexOfDot = this.currentOperand.indexOf('.');

            // if after the dot there was no numbers example " 14. " we remove the dot
            if (this.currentOperand[indexOfDot + 1] === undefined) {
                this.delete();
            }

            // if befor the dot there was no number example " .8 " we put 0 in the start
            if (this.currentOperand[indexOfDot - 1] === undefined) {
                this.currentOperand = "0" + this.currentOperand;
            }
        }

        this.previousOperand = this.currentOperand.toString();
        this.currentOperand = '';
    }

    // compute the final answer and store it to be displayed
    compute() {
        if (this.previousOperand === '' || this.operation === undefined || this.currentOperand === '') { alert("error"); return }
        const result = eval(this.previousOperand + this.operation + this.currentOperand);
        this.currentOperand = result.toString();
        this.previousOperand = '';
        this.operation = undefined;
    }


    // update all the text elements on the output screen
    updateDisplay() {
        this.currentOperationTextElement.innerText = this.currentOperand;
        if (this.operation != undefined) {
            this.previousOperationTextElement.innerText = this.previousOperand + ' ' + this.operation;
        } else {
            this.previousOperationTextElement.innerText = this.previousOperand;
        }
    }


}