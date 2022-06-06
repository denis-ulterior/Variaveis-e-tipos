function trocarPar(valor) {
    //obtem o int value
    let n = parseInt(valor)

    //verifica se o numero é realmente do tipo number
    if (typeof n == 'number') {
        //se for divisivel por 2 com resto 0 é par então trocado para 0
        if (n % 2 == 0) {
            n = 0
        }
        //se não for é retornado ele mesmo
        return n
    } else {
        //retorna not a number caso o formato numero nao seja validado
        return 'NaN'
    }
}
let input = [22,11,13,20,0]
let out = []

//checa se é array e se tem algum elemento
if (Array.isArray(input) && input.length > 1) {
    //faz um for no array e passa v para a funcao trocar par
    for (v of input) {
        out.push(trocarPar(v))
    }
    //exibe o retorno do processo todo
    console.log(out)
} else {
    //caso array vazio ou não array retorna -1
    console.log(-1)
}