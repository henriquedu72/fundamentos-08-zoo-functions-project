const data = require('../data/zoo_data');

const { employees, species } = data;
function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const employId = employees.find((employ) => employ.id === id);
  const [firstAnimal] = employId.responsibleFor;
  const searchAnimal = species.find((animal) => animal.id === firstAnimal);
  const oldest = searchAnimal.residents.reduce((acc, crr) =>
    (acc.age > crr.age ? acc : crr), []);
  return Object.values(oldest);
}

module.exports = getOldestFromFirstSpecies;
