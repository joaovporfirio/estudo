
const controle = document.querySelectorAll('.controle-ajuste')


controle.forEach((elemento)=>{

    elemento.addEventListener("click",(evento) =>{
        manipulaDados(evento.target.dataset.controle,evento.target.parentNode)
    })
})


function manipulaDados(operacao,controle) {

    const componente = controle.querySelector('[data-contador]')


    if(operacao === "-"  ){
        componente.value = parseInt(componente.value) - 1
    } else {
        componente.value = parseInt(componente.value) + 1
    }
}




