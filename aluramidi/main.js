function tocaSom(idElementAudio) {

    const elemento = document.querySelector(idElementAudio)


    if (elemento && elemento.localName === 'audio') {

        elemento.play()
    } else {
        console.log('Elemento não encontrado')
    }




}


const listaTeclas = document.querySelectorAll('.tecla')


for (let i = 0; i < listaTeclas.length; i++) {
    const tecla = listaTeclas[i]
    const instrumento = tecla.classList[1]


    tecla.onclick = () => {
        tocaSom(`#som_${instrumento}`)
        tecla.onkeydown = (event) => {
            if (event.code === 'Space' || event.code === 'Enter') {


                tecla.classList.add('ativa')
            }
        }

        tecla.onkeyup = () => {

            if (event.code === 'Space' || event.code === 'Enter') {
                tecla.classList.remove('ativa')
            }
        }
    }
}
