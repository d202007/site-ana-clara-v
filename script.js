document.addEventListener('DOMContentLoaded', function(){
    const botãoDeacessibilidade = document.getElementById('botão-acessibilidade')
    const opçõesDeacessibilade = document.getElementById('opções-acessibilidade')

    botãoDeacessibilidade.addEventListener('click', function (){
        botãoDeacessibilidade.classList.toggle('rotação-botão');
        opçõesDeacessibilade.classList.toggle('apresenta-lista')
    })

const aumentafontebotão = document.getElementById('aumentar-fonte');
const diminuirfontebotão = document.getElementById('diminuir-fonte');

let tamanhoAtualFonte = 1;

aumentafontebotão.addEventListener('click', function(){
    tamanhoAtualFonte += 0.1;
    document.body.style.fontSize = `${tamanhoAtualFonte}rem`

})

diminuirfontebotão.addEventListener('click', function(){
    tamanhoAtualFonte -= 0.1;
    document.body.style.fontSize = `${tamanhoAtualFonte}rem`

})


})