const planetas = require('./planetas');
const { planetasFrios, ordenarPorDistancia, planetaMasGrande } = require('./utils');

console.log("\nESTADÍSTICAS DE PLANETAS\n");

const masGrande = planetaMasGrande(planetas);
console.log(`Planeta mas grande: ${masGrande.nombre} (${masGrande.tamaño})`);

const frios = planetasFrios(planetas);
console.log(`\nPlanetas con temperatura bajo 0°C: ${frios.length}`);
frios.forEach(planeta => {
  console.log(`   • ${planeta.nombre}: ${planeta.temperatura}`);
});

console.log("\nPlanetas ordenados por distancia:\n");
const ordenados = ordenarPorDistancia(planetas);
ordenados.forEach((planeta, index) => {
  console.log(`   ${index + 1}. ${planeta.nombre} - ${planeta.distancia}`);
});

console.log("");