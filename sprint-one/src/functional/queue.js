var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count  = 0;
  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[count] = value;
    count++;
  };

  someInstance.dequeue = function(){
    if(count){
      count--;
    }
    var temp = storage[0];
    delete storage[0];

    for(var i=0; i<count;i++){
      storage[i] =  storage[i+1];
    }
    return temp;
  };

  someInstance.size = function(){
    return count;
  };

  return someInstance;
};
