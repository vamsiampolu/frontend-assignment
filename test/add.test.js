const add = require('../src/add');

describe('add', () => {
  it('adds 2 and 2 to equal 4', () => {
    expect(add(2,2)).toEqual(4);
  });
});
