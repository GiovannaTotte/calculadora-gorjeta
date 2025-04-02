let bill = 0
let tipPercentage = 0
let numberOfPeople = 0
let buttonSelected = null

function receiveBillValue() {
    bill = document.querySelector("#bill").valueAsNumber

    calculateResults()
}

function receiveNumberOfPeopleValue() {
    numberOfPeople = document.querySelector("#people").valueAsNumber

    calculateResults()
}

function receiveTipPercentageValue(value) {
    tipPercentage = value / 100

    document.querySelector("#custom-tip").value = ""

    if (buttomSelected !== null) {
        buttonSelected.classList.remove("button-selected")
    }

    buttonSelected = document.querySelected('button-${value}"')
    buttonSelected.classList.add("button-selected")

    calculateResults()
}

function receiveCustomTipPercentageValue() {
    tipPercentage = document.querySelector("#custom-tip").valueAsNumber / 100

    removeClassButtonSelected()
    calculateResults()
}

function removeClassButtonSelected() {
    if (buttonSelected !== null) {
        buttonSelected.classList.remove("button-selected")
        buttonSelected = null
    }
}

function calculateResults() {
    if(bill !== 0 && TipPercentage !== 0 && numberOfPeople !==0) {
        let strongAmout = document.querySelector(".amount strong")
        let tipAmountPerson = bill * tipPercentage / numberOfPeople
        strongAmount.innerText = '$${tipAmountPerson.toFixed(2)}'

        let strongTotal = document.querySelector9(".total strong")
        let totalPerson = (bill / numberOfPeople) * tipAmountPerson
        strongTotal.innerText = '$${totalPerson.toFixed(2)}'
    }
}