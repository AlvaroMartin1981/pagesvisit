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
contadorVisitas.innerHTML=localStorage.pagecount;

