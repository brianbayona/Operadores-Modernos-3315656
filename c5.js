function actualizarPerfil(perfil, ...nuevosDatos) {

  // Hacemos una copia del perfil (inmutabilidad)
  let nuevoPerfil = { ...perfil };

  // Recorremos los nuevos datos
  for (let i = 0; i < nuevosDatos.length; i++) {
    let dato = nuevosDatos[i];

    // Mezclamos cada objeto al perfil
    nuevoPerfil = { ...nuevoPerfil, ...dato };
  }

  return nuevoPerfil;
}

// Ejemplo de uso
let perfil = {
  nombre: "Stiven",
  edad: 20
};

let actualizado = actualizarPerfil(
  perfil,
  { edad: 22 },
  { ciudad: "Medellín" }
);

console.log(actualizado);