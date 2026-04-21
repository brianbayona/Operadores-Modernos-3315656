function registrarActividad(actividad) {

  if (!actividad) {
    console.log("Error: No enviaste ninguna actividad");
    return;
  }

  if (!actividad.nombre || !actividad.fecha) {
    console.log("Error: La actividad no es válida, falta nombre o fecha");
    return;
  }

  console.log("Actividad registrada correctamente ✅");
  console.log("Nombre:", actividad.nombre);
  console.log("Fecha:", actividad.fecha);
}

// Llamada a la función
registrarActividad({
  nombre: "Estudiar JavaScript",
 // fecha: "2026-04-21"
});