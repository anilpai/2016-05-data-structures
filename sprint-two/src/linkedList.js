var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var node = Node(value);
    if(list.head === null){
      list.head = node;
    }else{
      list.tail.next = node;
    }
    list.tail = node;
  };

  list.removeHead = function(){
    var item = list.head.value;
    list.a = list.head;
    list.head = list.head.next;
    list.a = null;
    return item;
  };

  list.contains = function(target){
    list.a = list.head;
    while(list.a !== null){
        if(list.a.value === target){
          return true;
        }
        list.a = list.a.next;
    }
    return false;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
