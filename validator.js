function isValid(numeroTarjeta) {
  const arrayTarjeta = String(numeroTarjeta).split('').reverse()
  let acumulador = 0
  for (let i = 0; i < arrayTarjeta.length; i++) {
    let digitoTarjeta = arrayTarjeta[i]
    let digitoSerieLhun = (i % 2) === 0 ? 1 : 2
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

  if (+resultadoFinal === 0) {
    return true
  } else {
    return false
  }
}

function validateCardCompany(numeroTarjeta) {
  if (String(numeroTarjeta).substring(0, 1) == 4) {
    return "fa-brands fa-cc-visa"
  } else if (String(numeroTarjeta).substring(0, 2) >= 51 && String(numeroTarjeta).substring(0, 2) <= 55) {
    return "fa-brands fa-cc-mastercard"
  }
  else if (String(numeroTarjeta).substring(0, 2) == 37) {
    return "fa-brands fa-cc-amex"
  }
  else if (String(numeroTarjeta).substring(0, 1) == 6) {
    return "fa-brands fa-cc-discover"
  } else {
    return ""
  }
}

function maskify(input) {
  return input.replace(/.(?=.{4})/g, "#");
}

function onlyNumbers(e) {
  const code = (e.which) ? e.which : e.keyCode;

  if (code === 8 || (code >= 48 && code <= 57)) { // Teclas de número
    return true;
  } else { // Otras teclas
    e.preventDefault();
  }
}

export { isValid, onlyNumbers, validateCardCompany, maskify };