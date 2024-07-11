const swapTwoNumber = (a, b) => {
    let c = a + b
    let d = c - a
    let e = c - b
    return [d, e]
}

console.log(swapTwoNumber(2, 3))