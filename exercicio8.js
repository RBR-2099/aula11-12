let textoDoUsuario = prompt("Insira um texto");

    const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

/*
a. Explique o que essa função faz e qual é sua utilidade
Esta função serve para armazenar o texto digitado e fazer a alteração para caixa baixa e para fazer a busca pela palavra "cenoura"

b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
i.   `Eu gosto de cenoura` = `eu gosto de cenoura` / (true)
ii.  `CENOURA é bom pra vista` = `cenoura é bom pra vista` / (true) inclui "cenoura" após o toLowerCase
iii. `Cenouras crescem na terra`/* `cenouras crescem na terra` / (undefined) não inclui "cenoura" 

OBS: Pq undefined e não false?
OBS2: Apesar do console.log não exibiu a frase no meu console
*/