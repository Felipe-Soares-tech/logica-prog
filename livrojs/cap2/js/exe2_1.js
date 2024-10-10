// criar uma referencia ao form e ao h3 (onde será exibida a resposta)
const formulario = document.querySelector("form");
const resp = document.querySelector("h3");
//cria um 'ouvinte' de evento , acionando quando o botao submit for clicado
formulario.addEventListener("submit" , executar);

    
    

function executar (evento) {
    const nome = formulario.inNome.value;//obtem o nome digitado no form
    resp.innerHTML = `olá ${nome}`; // exibe a resposta do programa //exibe a resposta do programa
    evento.preventDefault(); // vai evitar que o form envio os dados pro destino.php
}