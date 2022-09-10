const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

const countAnimals = (animal) => {
  // seu código aqui
  if (animal === undefined) {
    const result = {};
    species.filter((specie) => {
      const newObject = { [specie.name]: specie.residents.length };
      return Object.assign(result, newObject);
    }); return result;
  }
  const specieOfAnimal = species.find((specie) => animal.specie === specie.name);
  const sexOfSpecies = specieOfAnimal.residents.filter((resident) => resident.sex === animal.sex);
  return (animal.sex) ? sexOfSpecies.length : specieOfAnimal.residents.length;
};

module.exports = countAnimals;
