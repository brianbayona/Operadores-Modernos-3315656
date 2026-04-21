function procesarCompra(cliente, productos) {
  try {
    // validar datos del cliente
    if (!cliente.nombre || !cliente.correo) {
      throw new Error("Cliente inválido");
    }

    // validar lista de productos
    if (!Array.isArray(productos) || productos.length === 0) {
      throw new Error("Productos inválidos");
    }

    for (let p of productos) {
      if (!p.nombre || typeof p.precio !== "number") {
        throw new Error("Producto inválido");
      }
    }

    // copiar datos del cliente
    const clienteInfo = { ...cliente };

    // separar primer producto del resto
    const [primerProducto, ...restoProductos] = productos;

    // calcular total de precios
    let totalPrecio = 0;
    for (let p of productos) {
      totalPrecio += p.precio;
    }

    // armar resultado final
    return {
      cliente: clienteInfo,
      totalProductos: productos.length,
      precioTotal: totalPrecio,
      primerProducto: primerProducto
    };

  } catch (error) {
    return {
      error: error.message
    };
  }
}


// prueba
const cliente = {
  nombre: "Brian",
  correo: "brianbayona@gmail.com"
};

const productos = [
  { nombre: "Teclado", precio: 50000 },
  { nombre: "Mouse", precio: 20000 }
];

console.log(procesarCompra(cliente, productos));