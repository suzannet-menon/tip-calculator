const billInput = document.querySelector("#bill-amount");
const customTipInput = document.querySelector("#custom-tip");
const peopleInput = document.querySelector("#people");
const currencySelect = document.querySelector("#currency");

const tipButtons = document.querySelectorAll(".tip-btn");

const tipResult = document.querySelector("#tip-result");
const totalResult = document.querySelector("#total-result");
const personResult = document.querySelector("#person-result");

const resetButton = document.querySelector(".reset-btn");

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

    if (bill <= 0 || people <= 0 || tipPercent < 0) {
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

    tipButtons.forEach(function(button) {
        button.classList.remove("active");
    });

    tipResult.textContent = "₹0.00";
    totalResult.textContent = "₹0.00";
    personResult.textContent = "₹0.00";
});