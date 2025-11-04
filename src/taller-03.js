// Punto 1
function desglosarString(string, tipo) {
  const vocales = "aeiouAEIOU";
  const abecedario = [...string].filter(c => /[a-zA-Z]/.test(c)); 

  if (tipo === "vocales") {
    return abecedario.filter(c => vocales.includes(c)).length;
  } else if (tipo === "consonantes") {
    return abecedario.filter(c => !vocales.includes(c)).length;
  } else {
    throw new Error("Escoja un tipo: 'vocales' o 'consonantes'");
  }
}

// Punto 2
function twoSum(listNums, num) {
  const map = new Map();
  for (let i = 0; i < listNums.length; i++) {
    const complemento = num - listNums[i];
    if (map.has(complemento)) {
      return [map.get(complemento), i];
    }
    map.set(listNums[i], i);
  }
  return null;
}

// Punto 3
function conversionRomana(cifraRomana) {
  const valores = {
    I: 1, V: 5, X: 10, L: 50,
    C: 100, D: 500, M: 1000
  };

  return [...cifraRomana].reduce((total, letra, i, arr) => {
    const actual = valores[letra];
    const siguiente = valores[arr[i + 1]] || 0;
    return actual < siguiente ? total - actual : total + actual;
  }, 0);
}

// Punto 4
function descomposicion(string) {
  const [palabra, ...diccionario] = string.split(",");

  for (let i = 0; i < diccionario.length; i++) {
    for (let j = 0; j < diccionario.length; j++) {
      if (diccionario[i] + diccionario[j] === palabra) {
        return [diccionario[i], diccionario[j]];
      }
    }
  }
  return null;
} 

function ejecutar() {
  return 'Taller 3 ejecutado correctamente';
}

module.exports = { desglosarString, twoSum, conversionRomana, descomposicion, ejecutar };