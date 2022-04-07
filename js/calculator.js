function getInputNumber(id) {
    const element = document.getElementById(id).value;
    const valueAsNumber = parseFloat(element);

    if (isNaN(valueAsNumber) || valueAsNumber < 0) {
        const errMassage = true;
        return errMassage;
    }
    else {
        return valueAsNumber;
    }

}


// HANDLE CALCULATE BUTTON 

document.getElementById('calculate').addEventListener('click',
    function () {
        const incomeMoney = getInputNumber("income-field")
        console.log(incomeMoney)

    }
)