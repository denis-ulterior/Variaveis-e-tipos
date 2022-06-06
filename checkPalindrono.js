//Executar com: node .\checkPalindrono.js 'frase a ser testada 1' 'frase a ser testada N'
function verificar(string){
    //verifica se é string e se tem mais de 1 caractere
    if(typeof string === 'string' && string.length >1){
        //coloca tudo em caixa baixa
        string = string.toLocaleLowerCase()
        //quebra em palavras pelo espaco, junta sem espacos, quebra novamente em array, reverte e junta mais uma vez
        let tmp = string.split(' ').join('').split('').reverse().join('')
        
        //quebra em palavas para remover o espaco e junta sem espacos
        let remSpaco =string.split(' ').join('')

        //compara a reversao com a versao sem espaco
        return(tmp == remSpaco)
    }else{
        return 'Entrada inválida'
    }
}
//pega os argumentos de execucao e quebra em array
let args = process.argv.slice(2)
for(let arg of args){
    console.log(`${arg} é palindrono? ${verificar(arg)}`)
}
