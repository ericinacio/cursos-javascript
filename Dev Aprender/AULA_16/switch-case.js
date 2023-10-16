// SWITCH CASE

let permissao // COMUM, GERENTE, DIRETOR

switch (permissao) {
    case 'comum':
        console.log('Usuário Comum!')
        break
    case 'gerente':
        console.log('Usuário Gerente!')
        break
    case 'diretor':
        console.log('Usuário Diretor!')
    default:
        console.log('Usuário Não Reconhecido!')
        break
}