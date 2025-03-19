let bill = document.querySelector('#bill');
let billNumber = parseInt(bill.value);

let people = document.querySelector('#people');
let peopleNumber = parseInt(people.value);

let tipResult = document.querySelector('#tip-amount');
let totalResult = document.querySelector('#total-amount')

let buttons = document.querySelectorAll('.tip-btn');

buttons.forEach(element => {
    element.addEventListener('click', event=>{
        let tipValue =parseInt(event.target.innerText.slice(0,-1));
        //calculo de tip amount
        tipResult.innerText = ((billNumber * tipValue / 100) / peopleNumber);
    
        //calculo del total
        totalResult.innerText = ((billNumber * tipResult / 100) + billNumber)/peopleNumber;
    });
})