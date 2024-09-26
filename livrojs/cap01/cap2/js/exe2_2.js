const formulario = document.querySelector("form");
const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("h4");

formulario.addEventListener("submit", (e) => {
    const titulo = formulario.inTitulo.value; //entrada de dados
    const duracao = formulario.inDuracao.value; // entrada de dados

    //processamento
    const horas = Math.floor(duracao / 60); // processamento
    const minutos = duracao % 60; // processamento

    resp1.innerText = titulo; // saida
    resp2.innerText = `${horas} hora(s) e ${minutos} minuto(s)`; // saida

    e.preventDefault();
})