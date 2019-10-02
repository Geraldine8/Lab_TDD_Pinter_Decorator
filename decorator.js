const Decorator = function(){
  this.paintStock = [];
}

Decorator.prototype.addCanOfPaint = function(paint){
  this.paintStock.push(paint)
}

Decorator.prototype.stockQuantity = function(){
  return this.paintStock.length;
}

Decorator.prototype.litresOfPaint = function(){
  total = 0
  for(let paint of this.paintStock) {
    total += paint.numberOfLitres
  }
  return total
}

Decorator.prototype.canPaintRoom = function(room){
  return this.litresOfPaint() >= room.area()
}

Decorator.prototype.paintRoom = function(room){
  if (this.canPaintRoom(room)) {
    room.paint()
  }
}

// EXTENSION
// Decorator.prototype.paintRoom = function(room){
//   if (this.canPaintRoom(room) === false) {
//     return false;
//   }
//
//   let noPaintedArea = room.area()
//   for(let paint of this.paintStock) {
//     if (paint.numberOfLitres <= noPaintedArea) {
//       noPaintedArea -= paint.numberOfLitres
//       paint.emptyCan()
//     } else {
//       paint.numberOfLitres -= noPaintedArea
//     }
//   }
//   room.paint()
// }

module.exports = Decorator;
