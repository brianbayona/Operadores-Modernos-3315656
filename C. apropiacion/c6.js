const ventas = [
  { producto: "teclado", detalles: { precio: 50, unidades: 3 } },
  { producto: "mouse", detalles: { precio: 20, unidades: 5 } }
];

function totalPrimerProducto(ventas) {

  // 1. Tomo el primer producto del arreglo
  const primerProducto = ventas[0];

  // 2. Entro al objeto detalles
  const detalles = primerProducto.detalles;

  // 3. Saco precio y unidades
  const precio = detalles.precio;
  const unidades = detalles.unidades;

  // 4. Calculo el total
  const total = precio * unidades;

  // 5. Retorno el resultado
  return total;
}

console.log(totalPrimerProducto(ventas));