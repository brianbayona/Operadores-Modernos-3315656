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
    const [primeraNota, ...restoNotas] = notas;

    // Cálculo del promedio del resto de notas
    const sumaResto = restoNotas.reduce((acc, curr) => acc + curr, 0);  // La función 'reduce' se utiliza para sumar todos los elementos del array 'restoNotas', comenzando con un valor inicial de 0
    const promedioResto = restoNotas.length > 0 ? (sumaResto / restoNotas.length) : 0; // Cálculo del promedio: si hay notas adicionales, se calcula el promedio; de lo contrario, se asigna 0
    return Object.freeze({
      nombre,
      primeraNota,
      promedioResto,
      totalNotas: notas.length
    });

  } catch (error) {
    // Manejo de errores
    console.error(`Error en el registro: ${error.message}`);
    return null; // Retornamos null si la validación falla
  }
};