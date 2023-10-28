// OBJETO PORTAGEM DE BLOG
// Criar um objeto postagem de blog que deve conter
/*
titulo
mensagem
autor
visualização
comentários
    (autor,mensagem)
estaAoVivo
*/

let postagem = {
    titulo: 'a',
    mensagem: 'b',
    autor: 'c',
    visualizacoes: 10,
    comentarios: [
        { autor: 'a', mensagem: 'b'},
        { autor: 'b', mensagem: 'b'}
    ],
    estaAoVivo: true
}

console.log(postagem)