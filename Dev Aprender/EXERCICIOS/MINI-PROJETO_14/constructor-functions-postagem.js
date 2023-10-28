// CONSTRUCTOR FUNCTION PORTAGEM DE BLOG
// Criar um objeto postagem
// titulo, mensagem, autor, visualização, comentários, estaAoVivo

function Postagem(titulo, mensagem, autor) {
    this.titulo = titulo,
    this.mensagem = mensagem,
    this.autor = autor,
    this.visualizacoes = 0,
    this.comentarios = [],
    this.estaAoVivo = false
}

let postagem = new Postagem('a','b','c')
console.log(postagem)