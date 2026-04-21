const defaults = { tema: "claro", idioma: "es" }; 

const configurarUsuario = (defaults, personalizadas) => {
  // 1. Usamos spread para combinar sin mutar. 
  // 'personalizadas' va al final para que sobrescriba a 'defaults'
  const configuracionFinal = { ...defaults, ...personalizadas };

  // 2. Usamos destructuración para obtener el idioma
  const { idioma } = configuracionFinal; //

  return idioma;
};
const preferenciasUsuario = { idioma: "en" };//
const resultado = configurarUsuario(defaults, preferenciasUsuario);

console.log(`Idioma final configurado: ${resultado}`); // Salida: "en"
console.log("Original sin cambios:", defaults);       // Salida: { tema: "claro", idioma: "es" }