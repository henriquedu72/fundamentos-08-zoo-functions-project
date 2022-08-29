const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const species = [];
  // passo 1 --fazer com que a função receba varios parâmetros (spreead - ...ids).(leonardo maratti)
  // passo 2 -- retornar id vazio caso n receba nenhum id.
  // passo 3,1 - acessar os valores de data
  // passo 3,2 - acessar os ids de data
  // passo 3,3 - comparar os valores dos ids
  if (ids.length !== 0) {
    // return true;
    ids.forEach((id) => species.push(data.species.find((el) => el.id === id)));
  }
  return species;
}

console.log(getSpeciesByIds());

module.exports = getSpeciesByIds;
