function configFinal(...configs) {
  try {
    // validar que todo sea objeto
    for (let c of configs) {
      if (typeof c !== "object" || c === null || Array.isArray(c)) {
        throw new Error("Configuración inválida");
      }
    }

    // mezclar configuraciones
    let resultado = {};

    for (let c of configs) {
      resultado = { ...resultado, ...c };
    }

    // devolver resultado con validación
    return {
      ...resultado,
      validacion: true
    };

  } catch (error) {
    return {
      validacion: false
    };
  }
}


// datos de prueba
const baseConfig = { modo: "producción", lenguaje: "es", nivel: 1 };
const extraConfig = { nivel: 2, tema: "oscuro" };

// ejecutar
const resultado = configFinal(baseConfig, extraConfig);

console.log(resultado);