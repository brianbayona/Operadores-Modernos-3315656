const crearEstudiante = (nombre, ...notas) => { // El operador rest se utiliza para capturar un número indefinido de argumentos en forma de un array
    try { // Manejo de errores con try-catch
    // 1. Validación de datos: Nombre y existencia de notas
    if (!nombre || typeof nombre !== 'string') { // Validación del nombre: debe ser un texto no vacío
      throw new Error("El nombre es obligatorio y debe ser un texto.");  // Lanzar un error si el nombre no es válido
    }
    
    if (notas.length === 0) { // Validación de notas: debe haber al menos una nota
      throw new Error("Debes registrar al menos una nota."); // Lanzar un error si no se han proporcionado notas
    }
    // Validación: verificar que todos los elementos en 'notas' sean números
    const sonNumeros = notas.every(n => typeof n === 'number' && !isNaN(n)); // La función 'every' verifica que todos los elementos del array cumplan la condición de ser números válidos (no NaN)
    if (!sonNumeros) {
      throw new Error("Todas las notas deben ser numéricas.");// Lanzar un error si alguna de las notas no es un número válido
    }