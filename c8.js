const ventas = [
  { producto: "teclado", detalles: { precio: 50, unidades: 3 } },
  { producto: "mouse", detalles: { precio: 20, unidades: 5 } }
];

function totalPrimerProducto(listaVentas) {

  // Destructuración anidada del primer producto
  const [{ detalles: { precio, unidades } }] = listaVentas;

  // Calcular total
  let total = precio * unidades;

  return total;
}

// Llamada a la función
let resultado = totalPrimerProducto(ventas);

// Mostrar resultado
console.log("Total vendido del primer producto:", resultado);