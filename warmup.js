function double (n) {return n * 2}
function increment (n) {return n + 1}
function apply (f, x) {return f(x)}

console.log(apply(double, 21))
console.log(apply(increment, 41))
console.log(apply(double, apply(increment, 4)))