var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
    count : 0,
    storage : {}
};

_.extend(someInstance, stackMethods);

return someInstance;

};


var stackMethods = {
  push: function(data){
    this.storage[this.count] = data;
    this.count++;
  },
  pop: function(){
    if(this.count){
      this.count--;
    }
    var temp = this.storage[this.count];
    delete this.storage[this.count];
    return temp;
  },
  size: function(){
    return this.count;
  }
};
