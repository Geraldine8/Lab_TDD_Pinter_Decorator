const Paint = function(numberOfLitres){
  this.numberOfLitres = numberOfLitres;

}


// Paint.prototype.numberOfLitres = function () {
//   return this.numberOfLitres;
// }

Paint.prototype.isEmpty = function () {
  return this.numberOfLitres == 0
}

Paint.prototype.emptyCan = function () {
  this.numberOfLitres = 0;
}


module.exports = Paint;
