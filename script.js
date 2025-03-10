document.addEventListener('DOMContentLoaded', function(){
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