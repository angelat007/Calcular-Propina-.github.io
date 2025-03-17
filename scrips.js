const billInput = document.getElementById('bill');
const peopleInput = document.getElementById('people');
const tipButtons = document.querySelectorAll('.tip');
const customTipInput = document.getElementById('custom-tip');
const tipAmountDisplay = document.getElementById('tip-amount');
const totalAmountDisplay = document.getElementById('total-amount');
const resetButton = document.getElementById('reset');
const errorMessage = document.getElementById('error-message');

let selectedTip = 0;

function calculateTip() {
    const bill = parseFloat(billInput.value);
    const people = parseInt(peopleInput.value);

    if (people === 0 || !people) {
        errorMessage.textContent = "Can't be zero";
        return;
    } else {
        errorMessage.textContent = "";
    }

    if (bill && selectedTip && people) {
        const tipAmount = (bill * (selectedTip / 100)) / people;
        const totalAmount = (bill / people) + tipAmount;
        tipAmountDisplay.textContent = `$${tipAmount.toFixed(2)}`;
        totalAmountDisplay.textContent = `$${totalAmount.toFixed(2)}`;
        resetButton.disabled = false;
    }
}

tipButtons.forEach(button => {
    button.addEventListener('click', () => {
        tipButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        selectedTip = parseFloat(button.dataset.value);
        customTipInput.value = '';
        calculateTip();
    });
});

customTipInput.addEventListener('input', () => {
    tipButtons.forEach(btn => btn.classList.remove('active'));
    selectedTip = parseFloat(customTipInput.value) || 0;
    calculateTip();
});

[billInput, peopleInput].forEach(input => {
    input.addEventListener('input', () => {
        calculateTip();
    });
});

resetButton.addEventListener('click', () => {
    billInput.value = '';
    peopleInput.value = '';
    customTipInput.value = '';
    tipAmountDisplay.textContent = "$0.00";
    totalAmountDisplay.textContent = "$0.00";
    tipButtons.forEach(btn => btn.classList.remove('active'));
    selectedTip = 0;
    errorMessage.textContent = "";
    resetButton.disabled = true;
});
