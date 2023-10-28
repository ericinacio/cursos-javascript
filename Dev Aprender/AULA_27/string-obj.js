// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String
// TIPO PRIMITIVO
const mensagem = 'minha primeira mensagem'

// TIPO OBJETO
const outraMensagem = new String('bom dia')

// FUNÇÕES
mensagem.includes('primeira') // Ve se a palavra esta incluída na string.
mensagem.startsWith('verde') // Ve se a string começa com a palavra.
mensagem.endsWith('mensagem') // Ve se a string termina com a palavra.
mensagem.indexOf('primeira') // Verificar índice da palavra
mensagem.replace('minha', 'sua') // Substitui a primeira palavra pela segunda.
mensagem.trim() // Retira espaços do começo e final da string.
mensagem.split(' ') // Quebra o texto usando espaços.