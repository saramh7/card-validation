import { validateCreditCard, onlyNumbers, masking } from './validator.js';

//Elementos DOM en variable
const numeroTarjetaReal = document.getElementById("numeroTarjetaReal")
const numeroTarjeta = document.getElementById("numeroTarjeta")
const btnValidar = document.getElementById("btn-validar")
const vistaResultado = document.getElementById("vista-resultado")


//Eventos del DOM
btnValidar.addEventListener('click', validarNumero)
numeroTarjetaReal.addEventListener('keypress', (e) => onlyNumbers(e))
numeroTarjetaReal.addEventListener('keyup', () => masking(numeroTarjetaReal, numeroTarjeta))


//Funciones que interactuan con el DOM
function validarNumero() {
  vistaResultado.innerText = validateCreditCard(numeroTarjetaReal.value)
}





