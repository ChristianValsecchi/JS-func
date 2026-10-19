const n1Elem = document.getElementById("n1");
const n2Elem = document.getElementById("n2");
const calcolBtn = document.getElementById("calcolaBtn")

const op = document.getElementById("operation");
const resElem = document.getElementById("result")

//JS OBJ = hashmap -> k,v
const operations = {
    '+': (a,b) => a + b,
    '-': (a,b) => a - b,
    '*': (a,b) => a * b,
    '/': (a,b) => a / b,
    '**': (a,b) => a ** b,
    'MAX': (a,b) => a > b ? a:b,
    'MIN': (a,b) => a < b ? a:b,
}

function compute (f,a,b) {return f(a,b)}

calcolBtn.addEventListener ("click", function () {
    const a = Number(n1Elem.value)
    const b = Number(n2Elem.value)

    const res = compute(operations[op.value], a, b)

    resElem.textContent = res
})