// ESERCIZIO 1
let saluta = function() {
  return "Benvenuto a bordo.";
}

const s1 = saluta;
const s2 = saluta();

console.log("typeof s1:", typeof s1);      // "function"
console.log("typeof s2:", typeof s2);      // "string"
console.log("s1():", s1());                // "Benvenuto a bordo."


// ESERCIZIO 2
function raddoppia(n) {return n * 2;}
function incrementa(n) {return n + 1;}
function applica(f,x) {return f(x);}

console.log(applica(raddoppia, 21));                    // 42
console.log(applica(incrementa, 41));                    // 42
console.log(applica(raddoppia, applica(incrementa, 4))); // 10


// ESERCIZIO 3
function applicaDueVolte(f,x) {return f(f(x));}

console.log(applicaDueVolte(raddoppia, 5));  // 20
console.log(applicaDueVolte(incrementa, 5)); // 7
console.log(applicaDueVolte(raddoppia, 3));  // 12


// ESERCIZIO 4
function applicaNVolte(f, n, x) {
    if (n === 0) {
        return x;
    }
    for (let i = 0; i < n; i++) {
        x = f(x);
    }
    return x;
}

console.log(applicaNVolte(raddoppia, 10, 1));
console.log(applicaNVolte(incrementa, 3, 7));
console.log(applicaNVolte(incrementa, 0, 7));


// ESERCIZIO 5
function isNumeroValido(x) {
    return typeof x === "number" && !isNaN(x);
}
function isStringaNonVuota(x) {
    return typeof x === "string" && x.length > 0;
}
function isFunzione(x) {
    return typeof x === "function";
}

console.log(isNumeroValido(3));
console.log(isNumeroValido("3"));
console.log(isNumeroValido(NaN));
console.log(isStringaNonVuota("Orione"));
console.log(isStringaNonVuota(""));
console.log(isStringaNonVuota(5));
console.log(isFunzione(raddoppia));
console.log(isFunzione(raddoppia(2)));


// ESERCIZIO 6
function applicaSicuro(f,x) {
    if (!isFunzione(f)) {
        return "ERRORE: non è una funzione";
    }
    if (!isNumeroValido(x)) {
        return "ERRORE: valore non numerico";
    }
    return f(x);
}

console.log(applicaSicuro(raddoppia, 4));
console.log(applicaSicuro(raddoppia(4), 4));
console.log(applicaSicuro(raddoppia, "4"));
console.log(applicaSicuro(incrementa, NaN));


// ESERCIZIO 7
function applicaATutti(lista,f) {
    let res = [];
    for (let i = 0; i < lista.length; i++) {
        res.push(f(lista[i]));
    }
    return res;
}
function celsiusToKelvin(c) {return c + 273.15;}

console.log(applicaATutti([1, 2, 3], raddoppia));
console.log(applicaATutti([-270, -100, 0, 25], celsiusToKelvin));
console.log(applicaATutti([], incrementa));


// ESERCIZIO 8
function critico(livello) {
    if (livello < 20) {return true;}
    return false;
}
function tieniSolo(lista,criterio) {
    let res = [];
    for (let i = 0; i < lista.length; i++) {
        if (criterio(lista[i])) {
            res.push(lista[i]);
        }
    }
    return res;
}

console.log(tieniSolo([80, 15, 42, 3, 19, 20], critico));
console.log(tieniSolo([5, "a", 7, NaN, "", 2], isNumeroValido));
console.log(tieniSolo(["Vega", "", "Orione", 3], isStringaNonVuota));


// ESERCIZIO 9
function sommaLetture(letture) {
    let somma = 0;
    for (let i = 0; i < letture.length; i++) {
        if (isNumeroValido(letture[i])) {
            somma += letture[i];
        }
    }
    return somma;
}

console.log(sommaLetture([10, 20, 30]));
console.log(sommaLetture([10, "20", 5, NaN, null, 7.5, true]));
console.log(sommaLetture([]));


// ESERCIZIO 10
function nomeOppureDefault(nome) {
    return nome || "Sconosciuto";
}

console.log(nomeOppureDefault("Vega"));
console.log(nomeOppureDefault(""));
console.log(nomeOppureDefault(undefined));
console.log(nomeOppureDefault(0));


// ESERCIZIO 11
function verificaTutti(valore,controlli) {
    for (let i = 0; i < controlli.length; i++) {
        if (!controlli[i](valore)) {
            return false;
        } 
    }
    return true;
}
function positivo(x) {return x > 0;}
function sottoMille(x) {return x < 1000;}

const controlliCarburante = [isNumeroValido, positivo, sottoMille];

console.log(verificaTutti(450, controlliCarburante));
console.log(verificaTutti(-3, controlliCarburante));
console.log(verificaTutti("450", controlliCarburante));
console.log(verificaTutti(NaN, controlliCarburante));
console.log(verificaTutti(5000, controlliCarburante));
console.log(verificaTutti(450, []));


// EsERCIZIO 12
function componi(f,g) {
    return function(x) {
        return f(g(x));
    };
}
const incPoiRaddoppia = componi(raddoppia, incrementa);
const raddoppiaPoiInc = componi(incrementa, raddoppia);

console.log("typeof incPoiRaddoppia:", typeof incPoiRaddoppia);
console.log(incPoiRaddoppia(5));
console.log(raddoppiaPoiInc(5));
console.log(componi(raddoppia, raddoppia)(3));