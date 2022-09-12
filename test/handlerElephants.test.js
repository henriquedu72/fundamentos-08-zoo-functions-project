const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Testes se a função HandlerElephants é uma função', () => {
    expect(typeof handlerElephants).toBe('function');
  });
  it('Testes se a função retorna null caso receba uma string não esperada', () => {
    // const actual = handlerElephants('string');
    expect(handlerElephants('string')).toEqual(null);
  });
  it('Testa se ao não receber parametro a função retonra undefined', () => {
    expect(handlerElephants()).toEqual(undefined);
  });
  it('Testa se ao receber count retonra a quantidade de residentes', () => {
    expect(handlerElephants('count')).toEqual(4);
  });
  //   it('Testa se ao receber names retonra um array com os nomes', () => {
  //     const arrayNames = [ 'Ilana', 'Orval', 'Bea', 'Jefferson' ];
  //     expect(handlerElephants('names')).toEqual('arrayNames');
  it('Testa se ao receber average retonra a media de idade', () => {
    expect(handlerElephants('averageAge')).toEqual(10.5);
  });
//   it('', () => {});
});
