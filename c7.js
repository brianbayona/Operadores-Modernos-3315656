const evaluar = (...valores) => { // Usamos rest parameters para aceptar un número variable de argumentos
  try {
    // 1. Validación de datos
    // Usamos .every para verificar que todos cumplan la condición
    const todosSonNumeros = valores.every(v => typeof v === 'number' && !isNaN(v)); // Verificamos que cada valor sea un número y no sea NaN
    
    if (!todosSonNumeros) {
      throw new Error("La lista contiene valores no numéricos.");
    }
    const listaProcesada = [...valores]; // Creamos una copia de la lista original para no modificarla  
    const suma = listaProcesada.reduce((acc, curr) => acc + curr, 0); // Usamos reduce para sumar todos los elementos de la lista
    const promedio = suma / listaProcesada.length;

    return promedio;

  } catch (error) {