function getInputNumber(id) {
    const element = document.getElementById(id).value;
    const valueAsNumber = parseFloat(element);

    if (typeof valueAsNumber != "number" || valueAsNumber < 0) {
        const errMassage = document.getElementById("err-message")
        errMassage.innerText = "Please give a positive Number.";
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