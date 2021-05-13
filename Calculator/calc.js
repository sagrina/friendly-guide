const show = document.getElementById("showScreen");
const symbol = document.getElementById("symbol");

calc = []

function numberClick(number) {

    if (show.value === '0') {
        show.value = number
    } else if (symbol.innerText !== "") {
        show.value = number
        symbol.innerText = ""
    } else {
        show.value += number
    }
    calc += String(number)
}

function calClick(sym) {
    if (calc[calc.length - 1] === "+") {
        calc = calc.substring(0, calc.length - 1)
    } else if (calc[calc.length - 1] === "-") {
        calc = calc.substring(0, calc.length - 1)
    } else if (calc[calc.length - 1] === "*") {
        calc = calc.substring(0, calc.length - 1)
    } else if (calc[calc.length - 1] === "/") {
        calc = calc.substring(0, calc.length - 1)
    }

    symbol.innerText = sym

    if (sym === "+") {
        calc += '+'
    } else if (sym === "−") {
        calc += '-'
    } else if (sym === "×") {
        calc += '*'
    } else if (sym === "÷") {
        calc += '/'
    }
}


function clears() {
    show.value = ""
    symbol.value = ""
    calc = ''
    console.log(calc)
}

function equals() {
    console.log(calc)
    resualt = eval(calc)
    console.log(resualt)
    show.value = resualt
}
