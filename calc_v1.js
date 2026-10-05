const n1Elem = document.getElementById("n1")
const n2Elem = document.getElementById("n2")
const calcolaBtn = document.getElementById("calcolaBtn")

const op = document.getElementById("operation")
const resElem = document.getElementById("result")

function sum(a,b) {return a+b;}
function dif(a,b){return a-b;}
function mol(a,b){return a*b;}
function div(a,b){return a/b;}

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
calcolaBtn.addEventListener("click", function() {
    //prendere numeri
    const a = Number(n1Elem.value)
    const b = Number(n2Elem.value)

    //prendere operatore
    const chosenOp = chooseOp(op.value)
    const res = compute(chosenOp, a, b)

    resElem.textContent = res

})