// SEGURANÇA VIRTUAL
const convites = [
    {
        convidado: "Eric Inácio",
        convidante: "Ricardo"
    },
    {
        convidado: "Santos",
        convidante: "Silva"
    }
]

function verificarEntrada() {
    let convidadoValue = document.querySelector('#txtConvidado').value
    let convidanteValue = document.querySelector('#txtConvidante').value
    let resultado = document.querySelector('#res')
    let convidadoEncontrado = false;
    convites.forEach(function(convite){
        let convidado = convite.convidado
        let convidante = convite.convidante
        if(convidado === convidadoValue && convidante === convidanteValue){
            convidadoEncontrado = true;
        }
    })
    if (convidadoEncontrado){
        resultado.innerText = 'Você pode Entrar!'
    } else {
        resultado.innerText = 'Você não pode Entrar!'
    }
}