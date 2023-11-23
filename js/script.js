// Hecho en clase 
const contadorVisitas= document.getElementById('contadorVisitas')
const btnReestablecer= document.getElementById('btnReestablecer')

let contador = localStorage.getItem("contador") || 0

contador++
localStorage.setItem("contador", contador)

contadorVisitas.innerHTML = contador

const restablecerContador = () => {
    localStorage.removeItem("contador")
    contador = 0
    contadorVisitas.innerHTML = contador
}

btnReestablecer.addEventListener('click', restablecerContador)

/*esta era mi forma:
const contadorVisitas= document.getElementById('contadorVisitas')
const btnReestablecer= document.getElementById('btnReestablecer')

if(localStorage.pagecount){
    localStorage.pagecount=Number(localStorage.pagecount)+1;} 
else{localStorage.pagecount=0;}

contadorVisitas.innerHTML=localStorage.pagecount;
btnReestablecer.addEventListener('click',function(){
    localStorage.pagecount=0;
console.log(contadorVisitas) 
})
contadorVisitas.innerHTML=localStorage.pagecount;*/

