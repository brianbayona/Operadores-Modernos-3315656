const jugadores = [
  { nombre: "Ana", stats: { puntos: 20, asistencias: 5 } },
  { nombre: "Luis", stats: { puntos: 15, asistencias: 7 } }
];

function estadisticas(listaJugadores) {
  try {

    // Validar que sea arreglo
    if (!Array.isArray(listaJugadores)) {
      throw new Error("Debe enviar un arreglo de jugadores");
    }

    // Validar estructura básica
    if (!listaJugadores[0]?.stats?.puntos) {
      throw new Error("Estructura de datos inválida");
    }

    // Destructuración profunda (primer jugador)
    const [{ stats: { puntos: puntosPrimerJugador } }] = listaJugadores;

    // Sumar puntos total (sin mutar)
    let totalPuntos = listaJugadores.reduce(function(acumulador, jugador) {
      return acumulador + jugador.stats.puntos;
    }, 0);

    // Copia inmutable de jugadores
    let copiaJugadores = listaJugadores.map(function(jugador) {
      return { ...jugador, stats: { ...jugador.stats } };
    });

    return {
      puntosPrimerJugador: puntosPrimerJugador,
      totalPuntos: totalPuntos,
      jugadores: copiaJugadores
    };

  } catch (error) {
    console.log("Error:", error.message);
  }
}

// Llamada a la función
let resultado = estadisticas(jugadores);

// Mostrar resultado
console.log("Resultado:", resultado);