function validateCreditCard(numeroTarjeta) {
  if (numeroTarjeta.length === 0) return "Debe ingresar los números de su tarjeta"

  const arrayTarjeta = String(numeroTarjeta).split('')
  let acumulador = 0
  for (let i = 0; i < arrayTarjeta.length; i++) {
    let digitoTarjeta = arrayTarjeta[i]
    let digitoSerieLhun = (i % 2) === 0 ? 2 : 1
    let resultadoMultiplicacion = digitoTarjeta * digitoSerieLhun
    if (resultadoMultiplicacion >= 10) {
      let digitoSeparados = String(resultadoMultiplicacion).split('')
      const suma = digitoSeparados.reduce((valorAnterior, valorActual) => { return Number(valorAnterior) + Number(valorActual); }, 0);
      acumulador = acumulador + suma;
    } else {
      acumulador = acumulador + resultadoMultiplicacion;
    }
  }

  let resultadoFinal = acumulador % 10

  if (resultadoFinal === 0)
    return "Tu tarjeta es válida"
  else
    return "Tu tarjeta es inválida"
}



function maskify(input) {
  return input.replace(/.(?=.{4})/g, "#");
}

function onlyNumbers(e) {
  const code = (e.which) ? e.which : e.keyCode;
  if (code === 8 || (code >= 48 && code <= 57)) { // is a number.
    return true;
  } else { // other keys.
    e.preventDefault();
  }
}

function masking(numeroTarjetaReal, numeroTarjeta) {
  numeroTarjeta.innerText = maskify(numeroTarjetaReal.value);

}

export { validateCreditCard, onlyNumbers, masking };