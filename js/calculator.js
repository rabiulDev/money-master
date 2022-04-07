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

document.getElementById('calculate').addEventListener('click',
    function () {
        const incomeMoney = getInputNumber("income-field");

        // EXPENSE MONEY 
        const foodMoney = getInputNumber("food-field");
        const rentMoney = getInputNumber("rent-field");
        const clothMoney = getInputNumber("cloth-field")

        const allExpenses = foodMoney + rentMoney + clothMoney;

        if (isNaN(incomeMoney) || isNaN(allExpenses) || incomeMoney < 0 || allExpenses < 0) {
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
            document.getElementById("err-message").innerText = "You haven't enough money."
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