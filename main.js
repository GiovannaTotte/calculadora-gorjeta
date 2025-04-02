let bill = 0
let tip = 0
let  numberOfPeolple = 0
let buttonSelected = null

function receiveBillValue() {
    bill = document.querySelector("#bill").valueAsNumber
}

function receiveNumberOfPeopleValue() {
    numberOfPeople = document.querySelector("#people").valueAsNumber
}

function receiveTipPercentageValue(value) {
    tipPercentage = value / 100

    if (buttomSelected !== null) {
        buttonSelected.classList.remove("button-selected")
    }

    buttonSelected = document.querySelected('button-${value}"')
    buttonSelected.classList.add("button-selected")
}