const billInput = document.querySelector("#bill-amount");
const customTipInput = document.querySelector("#custom-tip");
const peopleInput = document.querySelector("#people");
const currencySelect = document.querySelector("#currency");

const tipButtons = document.querySelectorAll(".tip-btn");

const tipResult = document.querySelector("#tip-result");
const totalResult = document.querySelector("#total-result");
const personResult = document.querySelector("#person-result");

const resetButton = document.querySelector(".reset-btn");

const billError = document.querySelector("#bill-error");

const tipError = document.querySelector("#tip-error");

const peopleError = document.querySelector("#people-error");

let selectedTip = 0;

function updateResults() {
    const bill = Number(billInput.value);
    const customTip = Number(customTipInput.value);
    const people = Number(peopleInput.value);
    const currency = currencySelect.value;

    let tipPercent = selectedTip;

    if (customTipInput.value !== "") {
        tipPercent = customTip;
    }

        billError.textContent = "";
        tipError.textContent = "";
        peopleError.textContent = "";

        const billIsEmpty = billInput.value === "";
        const tipIsEmpty = customTipInput.value === "" && selectedTip === 0;
        const peopleIsEmpty = peopleInput.value === "";

        let hasError = false;

        if (!billIsEmpty && bill <= 0) {
            billError.textContent = "Bill amount must be greater than 0.";
            hasError = true;
        }

        if (!tipIsEmpty && tipPercent < 0) {
        tipError.textContent = "Tip percentage cannot be negative.";
        hasError = true;
    }

    if (!tipIsEmpty && tipPercent > 100) {
        tipError.textContent = "Tip percentage cannot be more than 100%.";
        hasError = true;
    }

        if (!peopleIsEmpty && people <= 0) {
            peopleError.textContent = "Number of people must be at least 1.";
            hasError = true;
        }

        if (billIsEmpty || peopleIsEmpty || hasError) {
            tipResult.textContent = `${currency}0.00`;
            totalResult.textContent = `${currency}0.00`;
            personResult.textContent = `${currency}0.00`;
            return;
        }

    const tipAmount = bill * tipPercent / 100;
    const grandTotal = bill + tipAmount;
    const perPerson = Math.ceil((grandTotal / people) * 100) / 100;

    tipResult.textContent = `${currency}${tipAmount.toFixed(2)}`;
    totalResult.textContent = `${currency}${grandTotal.toFixed(2)}`;
    personResult.textContent = `${currency}${perPerson.toFixed(2)}`;
}

tipButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        selectedTip = Number(button.dataset.tip);

        customTipInput.value = "";

        tipButtons.forEach(function(btn) {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        updateResults();
    });
});

billInput.addEventListener("input", updateResults);
customTipInput.addEventListener("input", function() {
    selectedTip = 0;

    tipButtons.forEach(function(button) {
        button.classList.remove("active");
    });

    updateResults();
});

peopleInput.addEventListener("input", updateResults);
currencySelect.addEventListener("change", updateResults);

resetButton.addEventListener("click", function() {
    billInput.value = "";
    customTipInput.value = "";
    peopleInput.value = "";
    currencySelect.value = "₹";
    selectedTip = 0;

    billError.textContent = "";
    tipError.textContent = "";
    peopleError.textContent = "";

    tipButtons.forEach(function(button) {
        button.classList.remove("active");
    });

    tipResult.textContent = "₹0.00";
    totalResult.textContent = "₹0.00";
    personResult.textContent = "₹0.00";
});