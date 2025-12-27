const planetas = require('./planetas');

console.log("\nLISTA DE PLANETAS FAVORITOS\n");

planetas.forEach((planeta, index) => {
  console.log(`${index + 1}. ${planeta.nombre}`);
});

console.log(`\nTotal: ${planetas.length} planetas\n`);