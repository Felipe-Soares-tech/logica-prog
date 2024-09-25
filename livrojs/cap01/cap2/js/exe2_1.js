// criar uma referencia ao form e ao h3 (onde será exibida a resposta)
const formulario = document.querySelector("form");
const resp = document.querySelector("h3");

//cria um 'ouvinte' de evento , acionando quando o botao submit for clicado
frm.addEventListener("submit" , (e)=>{
    const nome = formulario.inNome.value; // obtem o nome digitado no form
    resp.innerText = `olá ${nome}` // exibe a resposta do programa
    e.preventDefault(); // vai evitar que o form envio os dados pro destino.php
})
