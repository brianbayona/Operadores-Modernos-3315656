const catalogoA = [
  { id: 1, nombre: "Curso JavaScript", precio: 40 },
  { id: 2, nombre: "Curso HTML", precio: 35 }
];

const catalogoB = [
  { id: 3, nombre: "Curso CSS", precio: 30 }
];

function fusionarCatalogos(a, b) {
  try {
    // Validar que sean arreglos
    if (!Array.isArray(a) || !Array.isArray(b)) {
      throw new Error("Ambos parámetros deben ser arreglos");
    }

    // Fusionar sin modificar originales
    let nuevoCatalogo = [...a, ...b];

    // Ordenar por precio ascendente
    nuevoCatalogo.sort(function(x, y) {
      return x.precio - y.precio;
    });

    return nuevoCatalogo;

  } catch (error) {
    console.log("Error:", error.message);
  }
}

// Llamada a la función
let resultado = fusionarCatalogos(catalogoA, catalogoB);

// Mostrar resultado
console.log("Catálogo fusionado:", resultado);