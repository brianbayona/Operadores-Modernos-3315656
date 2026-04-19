const evaluar = (...valores) => { // Usamos rest parameters para aceptar un número variable de argumentos
  try {
    // 1. Validación de datos
    // Usamos .every para verificar que todos cumplan la condición
    const todosSonNumeros = valores.every(v => typeof v === 'number' && !isNaN(v)); // Verificamos que cada valor sea un número y no sea NaN
    
    if (!todosSonNumeros) {
      throw new Error("La lista contiene valores no numéricos.");
    }