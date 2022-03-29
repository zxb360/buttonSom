//alert('Use o mouse a tecla Espaco ou Enter, para sair o SOM');
function tocaSom(idElement){
    let elemento = document.querySelector(idElement);
    if(elemento != null && elemento.localName === 'audio'){
        elemento.play();
    } else {
        console.log('Seletor não encontrado ou vazio')   
    }       
}
const listaSom = document.querySelectorAll('.tecla');

for(let i = 0; i < listaSom.length; i++){
    const lista = listaSom[i];
    
    const som = lista.classList[1];
    const idAudio = `#som_${som}`;
    
    lista.onclick = function(){   
        tocaSom(idAudio);
    }

    lista.onkeydown = function(event){
        
        if(event.code === 'Space' || event.code === 'Enter'){
            lista.classList.add('ativa')
        }
    }

    lista.onkeyup = function(){
        lista.classList.remove('ativa');
    }
}

// let contador = 0
// while(contador < listaSom.length){
//     const tecla = listaSom[contador];
//     console.log(tecla)
//     const inst = tecla.classList[1];
//     console.log(inst)
//     const idAudio = `#som_${inst}`

//     tecla.onclick = function(){
//         tocaSom(idAudio);
//     }
//     contador++
// }

