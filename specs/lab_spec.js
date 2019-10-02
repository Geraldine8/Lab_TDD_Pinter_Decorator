const assert = require('assert');
const Room = require('../room.js');
const Paint = require('../paint.js');
const Decorator = require('../decorator.js');

describe('Room', function(){
  let room;

  beforeEach(function () {
    room = new Room(10, 10);
  });

  it('have an area in square meters', function () {
    const actual = room.area();
    assert.strictEqual(actual, 100);
  });

  it('should start not painted', function () {
    const actual = room.painted;
    assert.deepStrictEqual(actual, false);
  });

  it('should be able to be painted', function () {
    room.paint()
    const actual = room.painted
    assert.deepStrictEqual(actual, true);
  });

})

describe('Paint', function(){
  let paint;

  beforeEach(function () {
    paint = new Paint(100);
  });

  it('have a number of litres of paint', function () {
    const actual = paint.numberOfLitres;
    assert.strictEqual(actual, 100);
  });

  it('check if it is empty', function () {
    const actual = paint.isEmpty();
    assert.deepStrictEqual(actual, false);
  });

  it('should be able to empty itself of paint', function(){
    paint.emptyCan();
    actual = paint.isEmpty();
    assert.strictEqual(actual, true);
  })

})

describe('Decorator', function(){
  let decorator;

  beforeEach(function(){
    decorator = new Decorator();
    canOfPaint1 = new Paint(5);
    canOfPaint2 = new Paint(5);
    canOfPaint3 = new Paint(5);
    canOfPaint4 = new Paint(5);
    room = new Room(2, 8);
  });

  it('start with an empty paint stock', function(){
    const actual = decorator.paintStock;
    assert.deepStrictEqual(actual, [])
  });

  it('should be able to add a can of paint to paint stock', function(){
    decorator.addCanOfPaint(canOfPaint1);
    actual = decorator.stockQuantity();
    assert.strictEqual(actual, 1);
  });

  it('should be ble to calculate total litres paint it has in stock', function(){
    decorator.addCanOfPaint(canOfPaint1);
    decorator.addCanOfPaint(canOfPaint2);
    actual = decorator.litresOfPaint();
    assert.strictEqual(actual, 10)
  });

  it('should be able to calculate whether is has enough paint to paint a room', function(){
    decorator.addCanOfPaint(canOfPaint1);
    decorator.addCanOfPaint(canOfPaint2);
    decorator.addCanOfPaint(canOfPaint3);
    actual = decorator.canPaintRoom(room);
    assert.strictEqual(actual, false)
  })

  it('be able to paint room if has enough paint in stock', function(){
    decorator.addCanOfPaint(canOfPaint);
    decorator.addCanOfPaint(canOfPaint);
    decorator.addCanOfPaint(canOfPaint);
    decorator.addCanOfPaint(canOfPaint);
    decorator.paintRoom(room)

    actual = room.painted
    assert.strictEqual(actual, true)
  })

});
