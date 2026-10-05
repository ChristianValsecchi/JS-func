const n1Elem = document.getElementById("n1")
const n2Elem = document.getElementById("n2")
const operator = document.getElementById("operation")

function sum(a,b) {return a+b}
function dif(a,b){return a-b}
function mol(a,b){return a*b}
function div(a,b){return a/b}

// def chooseOp(operand) -> func relativa
function chooseOp(operand) {
    switch (operand) {
        case '+':
            return sum
        case '-':
            return dif
        case '*':
            return mol
        case '/':
            return div
    }
}
function compute(f,a,b) {
    return f(a,b)
}

//come controllo btn? -> addEventListener
const calcolaBtn = document.getElementById("calcolaBtn")

calcolaBtn.addEventListener("click", function() {
    //prendere numeri
    const a = Number(n1Elem.value)
    const b = Number(n2Elem.value)

    //prendere operatore
    const chosenOp = chooseOp(operator.value)
    const res = compute(chosenOp, a, b)

})