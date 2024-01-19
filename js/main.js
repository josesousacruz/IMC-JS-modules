import { ICM } from "./utils.js";

const btnCalcular = document.getElementById('calcular');
const notAnumber = document.getElementById('notAnumber');

const inputs = document.querySelectorAll('.content')

inputs.forEach(input =>{
    input.addEventListener('input',function(){
        if(document.getElementById('peso').value && document.getElementById('altura').value){
           btnCalcular.disabled = false 
        }
    })
})


btnCalcular.addEventListener('click', function () {
    let peso = parseFloat(document.getElementById('peso').value) 
    let altura = parseFloat(document.getElementById('altura').value) 

    if(!isNaN(peso) && !isNaN(altura)){
        ICM(altura, peso);
    }else{
    notAnumber.hidden = false
    }
})


  
