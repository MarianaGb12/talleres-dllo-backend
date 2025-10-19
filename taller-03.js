function ejecutar() {
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
  console.log(desglosarString("murcielagos", "vocales"));      // 5
  console.log(desglosarString("murcielagos", "consonantes")); // 6

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
  console.log(twoSum([2, 7, 11, 15], 9));  // [0,1]
  console.log(twoSum([3, 4, 2], 6));       // [1,2]
    
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
  console.log(conversionRomana("III"));       // 3
  console.log(conversionRomana("XIV"));       // 14
  console.log(conversionRomana("MMXXIV"));    // 2024
  console.log(conversionRomana("MCMXCVII"));  // 1997

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
  console.log(descomposicion("malhumor,al,hum,humor,m,mal,malhu")); // ["mal","humor"]
  console.log(descomposicion("gato,gatito,g,ato,tito,o,gato,gatito,g,ato,tito,o")); // 

  const mensaje = "Taller 3 ejecutado correctamente";
  return mensaje;
}

module.exports = { ejecutar };