const defaultB = 30;

function compute(a, b = defaultB) {
    return a + b;
}

console.log(compute(10));