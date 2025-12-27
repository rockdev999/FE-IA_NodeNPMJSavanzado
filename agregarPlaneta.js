const planetas = require('./planetas');
const { mostrarPlaneta } = require('./mostrarPlanetas');

const nuevoPlaneta = {
  nombre: "Venus",
  distancia: "0.72 UA",
  tamaño: "12,104 km",
  temperatura: "462°C",
  descripcion: "El planeta más caliente del sistema solar"
};

planetas.push(nuevoPlaneta);

console.log("\nNuevo planeta agregado exitosamente!\n");

mostrarPlaneta(nuevoPlaneta, planetas.length - 1);

console.log(`\nTotal de planetas ahora: ${planetas.length}\n`);