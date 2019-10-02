const Room = function (highth, length) {
  this.highth = highth;
  this.length = length;
  this.painted = false;
}

Room.prototype.area = function(){
  return (this.highth) * (this.length);
}

Room.prototype.paint = function(){
  this.painted = true
}

module.exports = Room;
