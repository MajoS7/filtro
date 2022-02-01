const image = document.querySelector('#image');
const buttonmas =document.querySelector('#mas');
const buttonreset = document.querySelector('#reset');
const buttonmenos = document.querySelector('#menos');
const contador = document.querySelector('#contar');
buttonmas.addEventListener('click',mas );
buttonmenos.addEventListener('click',menos );
buttonreset.addEventListener('click',reset );

function mas(){
    contador.textContent=Number(contador.textContent)+1;    
    filter(contador.textContent);
}
function menos(){
    contador.textContent=Number(contador.textContent)-1;    
    filter(contador.textContent);
}
function reset(){
    contador.textContent=0;    
    filter(contador.textContent);
}

const filter=(numero)=>{
    if (numero<0){
        image.classList.add('imageFilter');
    }
    else{
        image.classList.remove('imageFilter');
    }

}


