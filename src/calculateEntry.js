const data = require('../data/zoo_data');
const { prices } = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  const child = entrants.filter((entry) => entry.age < 18).length;
  const adult = entrants.filter((entry) => entry.age >= 18 && entry.age < 50).length;
  const senior = entrants.filter((entry) => entry.age >= 50).length;
  return { child, adult, senior };
}

function calculateEntry(entrants) {
  // seu código aqui
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const child = entrants.filter((entry) => entry.age < 18).length;
  const adult = entrants.filter((entry) => entry.age >= 18 && entry.age < 50).length;
  const senior = entrants.filter((entry) => entry.age >= 50).length;
  const total = child * prices.child + adult * prices.adult + senior * prices.senior;
  return total;
}

module.exports = { calculateEntry, countEntrants };
