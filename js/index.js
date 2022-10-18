const action = prompt('What type of action do you want to do? (please enter: add, sub, mult or div)');
const firstNumber = +prompt('Enter your first number');
const secondNumber = +prompt('Enter your second number');
if (action === null || firstNumber === null || secondNumber === null) {
    alert(`Incorrect data`);
} else if (isNaN (firstNumber) || isNaN (secondNumber)) {
    alert(`Incorrect number`);
} else {
    if (action === 'add') {
        resultAdd = firstNumber + secondNumber;
        alert(`${firstNumber} + ${secondNumber} = ${resultAdd}`);
    } else if (action === 'sub') {
        resultSub = firstNumber - secondNumber;
        alert(`${firstNumber} - ${secondNumber} = ${resultSub}`)
    } else if (action === 'mult') {
        resultMult = firstNumber * secondNumber;
        alert(`${firstNumber} * ${secondNumber} = ${resultMult}`)
    } else if (action === 'div') {
        resultDiv = firstNumber / secondNumber;
        alert(`${firstNumber} / ${secondNumber} = ${resultDiv}`)
    } else {
        alert(`Please, choose action`);
    }
}