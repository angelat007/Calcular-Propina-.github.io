let bill = document.querySelector('#bill');
let people = document.querySelector('#people');

let tipResult = document.querySelector('#tip-amount');
let totalResult = document.querySelector('#total-amount');

let buttons = document.querySelectorAll('.tip-btn');

let alert = document.querySelector('#error-msg');

let butonReset = document.querySelector('#reset-btn');

buttons.forEach(element => {
    element.addEventListener('click', event => {
        let billNumber = parseFloat(bill.value) || 0; // Obtener el valor actual del bill
        let peopleNumber = parseInt(people.value) || 1; // Evitar división por cero
        let tipValue = parseInt(event.target.innerText.slice(0, -1)); // Obtener el porcentaje de propina

        if (peopleNumber <= 0) {
            document.querySelector('#error-msg').classList.remove('hidden');
            return;
        } else {
            document.querySelector('#error-msg').classList.add('hidden');
        }


        people.addEventListener('input', () => {
            peopleNumber = parseInt(people.value);

            if (peopleNumber == 0) {
                people.computedStyleMap.bordercolor = 'red';
                alert.classList.add('error-msg')
            }
        })

        // Calcular la propina y el total
        let tipPerPerson = (billNumber * tipValue / 100) / peopleNumber;
        let totalPerPerson = (billNumber + (billNumber * tipValue / 100)) / peopleNumber;

        // Mostrar los valores formateados
        tipResult.innerText = `$${tipPerPerson.toFixed(2)}`;
        totalResult.innerText = `$${totalPerPerson.toFixed(2)}`;
    });
});


//funcion buton reset
butonReset.addEventListener('click', () => {
    bill.value = "";
    billNumber = "";
    people.value = "";
    peopleNumber = "";
})