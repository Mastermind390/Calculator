let calculation = JSON.parse(localStorage.getItem('calculation'));
console.log(calculation)

const calculationArray = [];
let calculationArray1 = [];

const displayElement = document.getElementById('js-display-writeup');

const historyDisplayText = document.getElementById('history-display-text');


function updateCalculation(value) {
    calculation += value;
    calculationArray1.push(calculation);
    console.log(calculationArray1);
    displayElement.innerHTML = calculation;
}

function evaluateCalculation() {
    calculation = eval(calculation);
    calculationArray.push(calculation)
    displayElement.innerHTML = calculation;
    historyDisplayText.innerHTML = calculationArray;
    saveToLocalStorage();
}

function resetCalculator() {
    calculation = '';
    calculationArray1 = []
    displayElement.innerHTML = '';
}

function saveToLocalStorage() {
    localStorage.setItem('calculation', JSON.stringify(calculation))
}