/*

1. Escreva as funções explicadas abaixo:
    
    a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como: 
    
 'Eu sou Rodrigo, tenho 37 anos, moro em São Leopoldo e sou designer.'
 
    
    Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. Lembrando que a função não possui entradas, apenas imprime essa mensagem.
    
    b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (`string`), a idade (`number`), a cidade (`string`) e uma profissão (`string`). Ela deve retornar uma `string` que unifique todas as informações da pessoa em uma só mensagem com o template:
    
    ```
    Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO].
    ```
    
    - Exemplo
        
        Para a entrada:  `"Laís"`, `23`, `"São Paulo"` e `"instrutora"`, deve retornar:
        
        `"Eu sou Laís, tenho 23 anos, moro em Rua Guarapari 190 e sou instrutora."`
        
    - 💡  Dica

function imprimirFrase() {
    console.log('Eu sou Rodrigo, tenho 37 anos, moro em São Leopoldo e sou designer.')
}

imprimirFrase()
*/

let nome = prompt (['Qual o nome?'])
let idade = prompt (['Qual a idade?'])
let cidade = prompt (['Qual a cidade?'])
let profissao = prompt (['Qual a profissao?'])



function imprimirFrase() {
    console.log(`${Eu sou [nome] tenho [idade] moro em [cidade] e sou [profissao].}`)
}

imprimirFrase ()