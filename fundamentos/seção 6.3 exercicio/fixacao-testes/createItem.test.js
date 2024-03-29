const createItem = require('./createItem');
describe('a função createItem', () => {
  it.todo('cria um item válido');
  it.todo('utiliza zero como quantidade padrão');
  it.todo('Lança um erro quando não recebe parâmetros');
  it.todo('Lança um erro se o nome do item não é uma string');
  it.todo('Lança um erro se o preço é negativo');
  it.todo('Lança um erro se o preço é zero');
});


     
it('cria um item válido', () => {
    const expected = { name: 'banana', unit: 'kg', price: 1.99, quantity: 20 };
    const actual = createItem('banana', 'kg', 1.99, 20);
    expect(actual).toEqual(expected);
  });
  it('utiliza zero como quantidade padrão', () => {
    const expected = 0;
    const actual = createItem('banana', 'kg', 1.99); // undefined quantity
    expect(actual).toHaveProperty('quantity', expected);
  });
  it('Lança um erro quando não recebe parâmetros', () => {
    expect(() => createItem()).toThrow();
  });
  it('Lança um erro se o nome do item não é uma string', () => {
    expect(() => createItem(1.99, 'kg', 'banana', 20))
      .toThrow('O nome do item deve ser uma string');
  });
  it('Lança um erro se o preço é negativo', () => {
    expect(() => createItem('banana', 'kg', -0.01))
      .toThrow('O preço do item deve ser maior que zero');
  });
  it('Lança um erro se o preço é zero', () => {
    expect(() => createItem('banana', 'kg', 0.00))
      .toThrow('O preço do item deve ser maior que zero');
  });