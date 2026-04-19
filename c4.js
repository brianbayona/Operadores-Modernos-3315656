const defaults = { tema: "claro", idioma: "es" }; 

const configurarUsuario = (defaults, personalizadas) => {
  // 1. Usamos spread para combinar sin mutar. 
  // 'personalizadas' va al final para que sobrescriba a 'defaults'
  const configuracionFinal = { ...defaults, ...personalizadas };

  // 2. Usamos destructuración para obtener el idioma
  const { idioma } = configuracionFinal; //

  return idioma;
};
