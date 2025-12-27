const planetas = require('./planetas');
const { mostrarTodos, mostrarResumen } = require('./mostrarPlanetas');

console.log("\nBienvenido al Explorador Espacial!\n");

mostrarTodos(planetas);

mostrarResumen(planetas);

console.log("ESTADISTICAS:");
console.log(`   • Total de planetas: ${planetas.length}`);
console.log(`   • Planeta mas cercano: ${planetas[0].nombre}`);
console.log(`   • Planeta mas lejano: ${planetas[planetas.length - 1].nombre}`);
console.log("");