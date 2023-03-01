import { isValid, onlyNumbers, maskify, validateCardCompany } from './validator.js';

//Elementos DOM en variable
const numeroTarjeta = document.getElementById("numeroTarjeta")
const numeroTarjetaReal = document.getElementById("numeroTarjetaReal")
const btnValidar = document.getElementById("btnValidar")
const vistaResultado = document.getElementById("vistaResultado")
const iconCreditCard = document.getElementById("iconCreditCard")

//Eventos del DOM
btnValidar.addEventListener('click', validarNumero)
numeroTarjetaReal.addEventListener('keypress', validarIngresoDatos)
numeroTarjetaReal.addEventListener('keyup', enmascararNumero)


//Funciones que interactuan con el DOM
function validarNumero() {
  if (numeroTarjetaReal.value.length === 0) {
    vistaResultado.innerText = "Debe ingresar los números de su tarjeta"
  } else {
    const esValida = isValid(numeroTarjetaReal.value)

    if (esValida === true) {
      const iconoTarjeta = validateCardCompany(numeroTarjetaReal.value)
      vistaResultado.innerText = "Tu tarjeta es válida"
      iconCreditCard.className = iconoTarjeta
    } else {
      iconCreditCard.className = ""
      vistaResultado.innerText = "Tu tarjeta es inválida"
    }
  }
}

function validarIngresoDatos(e) {
  onlyNumbers(e)
}

function enmascararNumero() {
  iconCreditCard.className = ""
  vistaResultado.innerText = ""
  const valorEncriptado = maskify(numeroTarjetaReal.value)
  numeroTarjeta.innerText = valorEncriptado
}




