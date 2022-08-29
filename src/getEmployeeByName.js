const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) {
    return {};
  }
  const result = data.employees.find((element) => {
    const { firstName, lastName } = element;
    return firstName === employeeName || lastName === employeeName
  });
  return result;
}

module.exports = getEmployeeByName;
