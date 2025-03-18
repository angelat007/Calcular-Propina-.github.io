const billInput = document.getElementById('bill');
const peopleInput = document.getElementById('people');
const tipButtons = document.querySelectorAll('.tip');
const customTipInput = document.getElementById('custom-tip');
const tipAmountDisplay = document.getElementById('tip-amount');
const totalAmountDisplay = document.getElementById('total-amount');
const resetButton = document.getElementById('reset');
const input = document.getElementById('people');
const errorMessage = document.getElementById('error-message');

people.addEventListener('people', function () {
    if (input.value === '0') {
        hidden.style.display = 'block';
    } else {
        hidden.style.display = 'none';
    }
});