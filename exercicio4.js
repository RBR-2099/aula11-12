function novoArray (numeros = []) {
    const retorno = []
    const primeiroNumero = numeros [0] /2
    const ultimoNumero = numeros [numeros.length-1] /2
    retorno.push(ultimoNumero)
    retorno.push(primeiroNumero)
    return retorno
}

novoArray ([10,2,15,30,62])