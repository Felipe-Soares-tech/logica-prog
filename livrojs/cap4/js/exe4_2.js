function calcular(){
    
    const nome = document.getElementById('inNome').value
    const masculino = document.getElementById('inNome').checked
    const altura = document.getElementById('inNome').value
    
    let peso

    if(masculino){
        peso = 22 * Math.pow(altura, 2)
    }else{
        peso = 21*Math.pow(altura,2)
    }

    document.querySelector('h3').innerText= `peso ideal ${peso.tofixed(2)}`


    return false // vai impedir o refresh da pagina equivalente ao e.preventDefault()
}