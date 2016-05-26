var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var tuple = [k,v];
  if(this._storage[i] === undefined){
    this._storage[i] = [];
  }
  this._storage[i].push(tuple);

};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var value = null;
  if(this._storage[i] === undefined){
    return value;
  }
  _.each(this._storage[i], function(item){
    if(item[0] === k){
      value = item[1];
    }
  });
  return value;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage[i] = null;

  _.each(this._storage[i], function(item, index){
      if(item[0] === k){
      this._storage[i].splice(index, 1);
    }
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 * Insert : O(1)
 * Retrieve : O(1)
 * Remove : O(1)
 */
