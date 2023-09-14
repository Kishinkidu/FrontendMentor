document.addEventListener("DOMContentLoaded", function () {

    const billInput = document.getElementById("numb1");
    const tipButtons = document.querySelectorAll(".rating button");
    const customTipInput = document.getElementById("numb2");
    const peopleInput = document.querySelector(".people input");
    const tipAmountPerPerson = document.querySelector(".monto .resultado");
    const totalPerPerson = document.querySelectorAll(".monto .resultado")[1];
    const resetButton = document.querySelector(".btnReset button");

    customTipInput.addEventListener("input", calculateTip);
    function calculateTip() {
        const billAmount = parseFloat(billInput.value);
        const numberOfPeople = parseFloat(peopleInput.value);
        let tipPercentage;
    
        if (customTipInput.value) {
        tipPercentage = parseFloat(customTipInput.value);
        } else {
        tipPercentage = parseFloat(this.textContent.slice(0, -1)); // Elimina el símbolo de porcentaje y convierte a número
        }
    
        const tipAmount = (billAmount * (tipPercentage / 100)) / numberOfPeople;
        const total = (billAmount + tipAmount) / numberOfPeople;
    
        tipAmountPerPerson.textContent = `$${tipAmount.toFixed(2)}`;
        totalPerPerson.textContent = `$${total.toFixed(2)}`;
    }

    tipButtons.forEach((button) => {
        button.addEventListener("click", calculateTip);
    });

    resetButton.addEventListener("click", function () {
        billInput.value = "";
        tipButtons[0].click(); 
        peopleInput.value = "";
        tipAmountPerPerson.textContent = "$0.00";
        totalPerPerson.textContent = "$0.00";
        customTipInput.value = "";
    });
});
