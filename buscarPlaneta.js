const planetas = require('./planetas');
const { mostrarPlaneta } = require('./mostrarPlanetas');

/**
 * @param {string} nombre
 */
const buscarPlaneta = (nombre) => {
  const planetaEncontrado = planetas.find(
    planeta => planeta.nombre.toLowerCase() === nombre.toLowerCase()
  );
  
  if (planetaEncontrado) {
    console.log("\nPlaneta encontrado!\n");
    const index = planetas.indexOf(planetaEncontrado);
    mostrarPlaneta(planetaEncontrado, index);
  } else {
    console.log(`\nNo se encontro el planeta "${nombre}"\n`);
  }
};

const nombreBuscar = "Marte";

console.log(`\nBuscando el planeta: ${nombreBuscar}...`);
buscarPlaneta(nombreBuscar);