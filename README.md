# Calculator
let firstNumber = "";
let secondNumber = "";
let operator = "";
let selectedValue = "";
let isFirstNumber = true;

let displayContent = document.querySelector(".display");
let resultContent = document.querySelector(".result");

// Initialize calculator
function initializeCalculator() {
    const buttonValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "-", "x", "÷", "=", "Clear"];
    const gridContainer = document.getElementById("grid-container");
    gridContainer.innerHTML = "";

    buttonValues.forEach((value) => {
        const box = document.createElement("div");
        box.classList.add("grid-item");
        box.textContent = value;
        box.addEventListener("click", () => handleButtonClick(value));
        gridContainer.appendChild(box);
    });
}

// Handle button clicks
function handleButtonClick(value) {
    selectedValue = value;

    if (["+", "-", "x", "÷"].includes(selectedValue)) {
        operator = selectedValue;
        displayContent.textContent = operator;
        isFirstNumber = false;
        highlightActiveButton(value);
    } else if (selectedValue === "=") {
        const result = calculate();
        resultContent.textContent = `Result: ${result}`;
    } else if (selectedValue === "Clear") {
        clearCalculator();
    } else {
        updateNumber(selectedValue);
    }
}

// Update numbers
function updateNumber(value) {
    if (isFirstNumber) {
        firstNumber += value;
        displayContent.textContent = firstNumber;
    } else {
        secondNumber += value;
        displayContent.textContent = secondNumber;
    }
}

// Calculate result
function calculate() {
    const num1 = parseInt(firstNumber);
    const num2 = parseInt(secondNumber);

    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "x":
            return num1 * num2;
        case "÷":
            return num2 !== 0 ? num1 / num2 : "Error: Division by zero";
        default:
            return "";
    }
}

// Clear calculator
function clearCalculator() {
    firstNumber = "";
    secondNumber = "";
    operator = "";
    selectedValue = "";
    isFirstNumber = true;
    displayContent.textContent = "";
    resultContent.textContent = "";
    clearActiveButtons();
}

// Highlight the active operator button
function highlightActiveButton(value) {
    clearActiveButtons();
    const buttons = document.querySelectorAll(".grid-item");
    buttons.forEach((btn) => {
        if (btn.textContent === value) {
            btn.classList.add("active");
        }
    });
}

// Clear active button highlights
function clearActiveButtons() {
    const buttons = document.querySelectorAll(".grid-item");
    buttons.forEach((btn) => btn.classList.remove("active"));
}
