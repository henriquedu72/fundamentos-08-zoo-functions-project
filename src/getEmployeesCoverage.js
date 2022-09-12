const data = require('../data/zoo_data');

const { species, employees } = data;

const allEmplooyeesByName = () =>
  employees.map((employ) => ({
    fullName: `${employ.firstName} ${employ.lastName}`,
    id: employ.id,
    species: employ.responsibleFor.map((id) => species.find((specie) => specie.id === id).name),
    locations: employ.responsibleFor.map((id) => species
      .find((specie) => specie.id === id).location),
  }));

const NameOrId = (parametro) => {
  const resultado = [];
  const objeto = Object.keys(parametro);
  let option;
  if (objeto.toString() === 'name') {
    option = (employer) => employer
      .firstName === parametro.name || employer.lastName === parametro.name;
  } else {
    option = (employer) => employer.id === parametro.id;
  }
  const employeers = employees.find(option);
  resultado.push({
    fullName: `${employeers.firstName} ${employeers.lastName}`,
    id: employeers.id,
    species: employeers.responsibleFor.map((id) => species.find((specie) => specie.id === id).name),
    locations: employeers.responsibleFor.map((id) => species.find((spc) => spc.id === id).location),
  });
  return resultado[0];
};

const getEmployeesCoverage = (parametro) => {
  if (!parametro) {
    return allEmplooyeesByName();
  } {
    const obj = Object.values(parametro);
    const namesOfEmp = employees.some((employ) => employ.firstName
      .includes(obj) || employ.lastName.includes(obj));
    const idsOfEmp = employees.some((employ) => employ.id.includes(obj));
    if (namesOfEmp === true || idsOfEmp === true) {
      return NameOrId(parametro);
    }
    throw new Error('Informações inválidas');
  }
};

module.exports = getEmployeesCoverage;
