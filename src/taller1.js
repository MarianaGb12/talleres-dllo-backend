//problema 1
function convertidorTemp(celsius) {
  return celsius * 9 / 5 + 32;
}

//problema 2
function resolvedor(a, b, c, signo = '+') {
  const formula = b * b - 4 * a * c;
  if (formula < 0) return NaN;
  const raiz = Math.sqrt(formula);
  if (signo === '+') {
    return (-b + raiz) / (2 * a);
  } else {
    return (-b - raiz) / (2 * a);
  }
}

//problema 3
function mejorParidad(n) {
  return n % 2 === 0; // true par - false impar
}

//problema 4
function peorParidad(n) {
    if (n === 0) {
      return true;  // 0 es par
    } else if (n === 1) {
      return false; // 1 es impar
    } else if (n === 2) {
      return true;
    } else if (n === 3) {
      return false;
    } else if (n === 4) {
      return true;
    } else if (n === 5) {
      return false;
    } else if (n === 6) {
      return true;
    } else if (n === 7) {
      return false;
    } else if (n === 8) {
      return true;
    } else if (n === 9) {
      return false;
    } else if (n === 10) {
      return true;
    }
}

function ejecutar() {
  return 'Taller 1 ejecutado correctamente';
}

module.exports = { convertidorTemp, resolvedor, mejorParidad, peorParidad, ejecutar };

