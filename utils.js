/**
 * @param {Array} listaPlanetas
 * @param {number} tempMax
 */
const planetasFrios = (listaPlanetas, tempMax = 0) => {
  return listaPlanetas.filter(planeta => {
    const temp = parseInt(planeta.temperatura);
    return temp < tempMax;
  });
};

/**
 * @param {Array} listaPlanetas
 */
const ordenarPorDistancia = (listaPlanetas) => {
  return [...listaPlanetas].sort((a, b) => {
    const distA = parseFloat(a.distancia);
    const distB = parseFloat(b.distancia);
    return distA - distB;
  });
};

/**
 * @param {Array} listaPlanetas
 */
const planetaMasGrande = (listaPlanetas) => {
  return listaPlanetas.reduce((max, planeta) => {
    const tamañoMax = parseInt(max.tamaño.replace(/,/g, ''));
    const tamañoPlaneta = parseInt(planeta.tamaño.replace(/,/g, ''));
    return tamañoPlaneta > tamañoMax ? planeta : max;
  });
};

module.exports = {
  planetasFrios,
  ordenarPorDistancia,
  planetaMasGrande
};