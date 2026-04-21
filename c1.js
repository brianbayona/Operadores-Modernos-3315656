function procesarPedido({ cliente, producto, cantidad, precio }, ...extras) {

  const costoExtras = extras.length * 2000;
  const subtotal = cantidad * precio;
  const total = subtotal + costoExtras;

  return {
    cliente,
    producto,
    cantidad,
    precio,
    extras,
    subtotal,
    costoExtras,
    total
  };
}

// Ejemplo
const pedido = {
  cliente: "Brian",
  producto: "Hamburguesa",
  cantidad: 2,
  precio: 15000
};

const resultado = procesarPedido(pedido, "Papas", "Gaseosa");

console.log(resultado);