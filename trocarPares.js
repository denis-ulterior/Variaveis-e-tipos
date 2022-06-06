function trocarPar(valor) {
    let n = parseInt(valor)
    if (typeof n == 'number') {
        if (n % 2 == 0) {
            n = 0
        }
        return n
    } else {
        return 'NaN'
    }
}
let input = [22,11,13,20,0]
let out = []
if (Array.isArray(input) && input.length > 1) {
    for (v of input) {
        out.push(trocarPar(v))
    }
    console.log(out)
} else {
    console.log(-1)
}