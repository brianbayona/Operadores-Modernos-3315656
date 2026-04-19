const inventario = ["cámara", "trípode", "micrófono"]; // Lista de inventario inicial
const agregarInventario = (lista, nuevoItem) => { // Función para agregar un nuevo ítem al inventario
      // Creamos un nuevo arreglo usando spread (...)
  console.log(`El inventario ahora tiene ${nuevaLista.length} ítems.`); // Imprime el conteo actualizado del inventario
  
  return nuevaLista;// Devolvemos el nuevo arreglo con el nuevo ítem agregado
};

const inventarioActualizado = agregarInventario(inventario, "lente");// Agregamos un nuevo ítem al inventario

console.log("Inventario original:", inventario);// El inventario original permanece sin cambios
console.log("Nuevo inventario:", inventarioActualizado);// El nuevo inventario incluye el nuevo ítem
