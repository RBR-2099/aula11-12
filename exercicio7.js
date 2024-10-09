function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))

//a) O que vai ser impresso no console?
//10 e 50

function minhaFuncao(variavel) {
	return variavel * 5
}

minhaFuncao(2)
minhaFuncao(10)
//b) O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`?O que apareceria no console?
// a função executaria o código e mostraria o resultado da última função (50)