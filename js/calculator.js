function getInputNumber(id) {
    const element = document.getElementById(id).value;
    const valueAsNumber = parseFloat(element);
    return valueAsNumber;


}

function setValue(id) {
    const element = document.getElementById(id);
    element.value = "";
}

// HANDLE CALCULATE BUTTON 
let totalBalance;

document.getElementById('calculate').addEventListener('click',
    function () {
        const incomeMoney = getInputNumber("income-field");

        // EXPENSE MONEY 
        const foodMoney = getInputNumber("food-field");
        const rentMoney = getInputNumber("rent-field");
        const clothMoney = getInputNumber("cloth-field")

        const allExpenses = foodMoney + rentMoney + clothMoney;

        if (isNaN(incomeMoney) || isNaN(allExpenses) || incomeMoney < 0 || foodMoney < 0 || rentMoney < 0 || clothMoney < 0) {
            document.getElementById("err-message").innerText = "Please fillup all the field as a positive number."
            // change input field value 
            setValue("income-field");
            setValue("food-field");
            setValue("rent-field");
            setValue("cloth-field");
            document.getElementById("total-expenses").innerText = "00"
            document.getElementById("balance").innerText = "00"
        }
        else if (incomeMoney < allExpenses) {
            document.getElementById("err-message").innerText = "Sorry you haven't enough balance."
            // change input field value 
            setValue("income-field");
            setValue("food-field");
            setValue("rent-field");
            setValue("cloth-field");
            document.getElementById("total-expenses").innerText = "00"
            document.getElementById("balance").innerText = "00"
        }
        else {
            const totalExpense = allExpenses;
            document.getElementById("total-expenses").innerText = totalExpense;
            const balance = incomeMoney - totalExpense;
            totalBalance = balance;
            document.getElementById("balance").innerText = balance;

            // change input field value 
            document.getElementById("err-message").innerText = ""
            setValue("income-field");
            setValue("food-field");
            setValue("rent-field");
            setValue("cloth-field");
        }

    }
)

// HANDLE SAVE BUTTON 

function percentage(num, per) {
    return (num / 100) * per;
}

document.getElementById("save-button").addEventListener('click', function () {
    const percent = getInputNumber("save-amount")
    const percentageValue = percentage(totalBalance, percent)
    const remainingBalance = totalBalance - percentageValue;
    if (isNaN(percent) || percent < 0) {
        document.getElementById("save-err-message").innerText = "Please give a positive number as a saving value."
        // RESET VALUE 
        setValue("save-amount")
        document.getElementById("saving-amount").innerText = "00";
        document.getElementById("remaining-balance").innerText = "00";
    }
    else if (totalBalance < percentageValue) {
        document.getElementById("save-err-message").innerText = "Sorry you haven't not enough balance for saving"
        // RESET VALUE 
        setValue("save-amount")
        document.getElementById("saving-amount").innerText = "00";
        document.getElementById("remaining-balance").innerText = "00";
    }
    else {
        document.getElementById("saving-amount").innerText = percentageValue;
        document.getElementById("remaining-balance").innerText = remainingBalance;

        // RESET VALUE 
        setValue("save-amount")
        document.getElementById("save-err-message").innerText = ""
    }
})