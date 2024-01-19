import { modal } from "./alertModal.js"

export const ICM = (altura, peso) => {

    let imc = peso / (altura * altura)
    let mensage
    let img
    if (imc < 18.5) {
        img = 'sr-abaixo.JPG'
        mensage = 'Abaixo do peso'
    } else if (imc >= 18.5 && imc <= 24.9) {
        img ='sr-normal.JPG'
        mensage = 'Peso normal'
    } else if (imc >= 25.0 && imc <= 29.9) {
        img ='sr-acima.JPG'
        mensage = 'Sobrepeso'
    } else if (imc > 30) {
        img ='sr-obesidade.JPG'
        mensage = 'Obesidade'
    }

    modal(mensage,imc,img)

}