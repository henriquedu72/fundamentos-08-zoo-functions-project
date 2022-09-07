// const data = require('../data/zoo_data'); MUDOU PARA:
const { species } = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, idade) => {
  const idadeMinima = species.find((specie) => specie.name === animal)
    .residents.every((idades) => idades.age >= idade);
  return idadeMinima;
};
module.exports = getAnimalsOlderThan;
