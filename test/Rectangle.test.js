const assert = require('assert');
const Rectangle = require('../Rectancle');

const rectangle = new Rectangle(10,5);


describe('rectangle', () => {
  it('should return true', () => {
    assert.strictEqual(rectangle.isSquare(), false);
  });
  it('should return false', () => {
    assert.strictEqual(rectangle.isSquare(), false);
  });
  it('should calculate area', () => {
    assert.strictEqual(rectangle.getArea(), 50);
  });
  it('should calculate perimeter', () => {
    assert.strictEqual(rectangle.getPerimeter(), 30);
  })
});