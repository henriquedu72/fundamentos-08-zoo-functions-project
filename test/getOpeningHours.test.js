// const { internet } = require('faker/lib/locales/pt_BR');
const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Testa se função getOpeningHours é uma função', () => {
    expect(typeof getOpeningHours).toBe('function');
  });
  it('Testa se função getOpeningHours é uma função', () => {
    const actual = getOpeningHours();
    const arrayEmpty = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(actual).toEqual(arrayEmpty);
  });
  test('Se função getOpeningHours retorna The zoo is closed caso receba monday e 09:00-AM como parametro', () => {
    expect(getOpeningHours('monday', '09:00-AM')).toEqual('The zoo is closed');
  });
  it('Se função getOpeningHours retorna The zoo is open caso receba Tuesday e 09:00-AM como parametro', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toEqual('The zoo is open');
  });
  it('Se função getOpeningHours retorna The zoo is closed caso receba Wednesday e 09:00-PM como parametro', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toEqual('The zoo is closed');
  });
  it('Se função retorna The day must be valid. Example: Monday caso receba Thu e 09:00-AM como parametro', () => {
    const actual = getOpeningHours('Thu', '09:00-AM');
    const messageError = 'The day must be valid. Example: Monday';
    expect(actual).toThrow(messageError);
  });
  it('se a função retorna The abbreviation must be caso receba monday e 09:00-ZM ', () => {
    expect(typeof getOpeningHours('monday', '09:00-ZM')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });
});
