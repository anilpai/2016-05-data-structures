var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.count = 0;
  this.storage = {};
};

Stack.prototype.push = function(data){
  this.storage[this.count] = data;
  this.count++;
};

Stack.prototype.pop = function(){
  if(this.count){
    this.count--;
  }
  var temp = this.storage[this.count];
  delete this.storage[this.count];
  return temp;
};

  Stack.prototype.size = function(){
    return this.count;
  };
