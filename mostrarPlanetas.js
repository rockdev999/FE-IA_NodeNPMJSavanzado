const dibujarLinea = () => {
  console.log("═".repeat(60));
};

/**
 * @param {Object} planeta
 * @param {number} index
 */
const mostrarPlaneta = (planeta, index) => {
  console.log(`\n🪐 PLANETA #${index + 1}`);
  dibujarLinea();
  console.log(`Nombre:        ${planeta.nombre}`);
  console.log(`Distancia:     ${planeta.distancia}`);
  console.log(`Tamaño:        ${planeta.tamaño}`);
  console.log(`Temperatura:   ${planeta.temperatura}`);
  console.log(`Descripción:   ${planeta.descripcion}`);
  dibujarLinea();
};

/**
 * Función para mostrar todos los planetas
 * @param {Array} listaPlanetas - Array de planetas
 */
const mostrarTodos = (listaPlanetas) => {
  console.log("\n");
  console.log("EXPLORACIÓN ESPACIAL - MIS PLANETAS");
  console.log(`Total de planetas descubiertos: ${listaPlanetas.length}`);
  
  listaPlanetas.forEach((planeta, index) => {
    mostrarPlaneta(planeta, index);
  });
  
  console.log("\nFin del registro de planetas!\n");
};

/**
 * @param {Array} listaPlanetas
 */
const mostrarResumen = (listaPlanetas) => {
  console.log("\nRESUMEN DE PLANETAS:\n");
  
  listaPlanetas.forEach((planeta, index) => {
    console.log(`${index + 1}. ${planeta.nombre} - ${planeta.descripcion}`);
  });
  
  console.log("");
};

module.exports = {
  mostrarPlaneta,
  mostrarTodos,
  mostrarResumen,
  dibujarLinea
};