

// ###Graph Solution

// Instantiate a new graph
var Graph = function(){
  // A graph consists of connected nodes
  this.nodes = [];
};

var Node = function(value){
  var node = {};
  node.value = value;
  node.edges = [];
  return node;
};

Graph.prototype.constructor = Graph;

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node){
  var graph_node =  new Node(node);
  this.nodes.push(graph_node);
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node){
  var found = false;
  _.each(this.nodes, function(item){
    if(item.value === node){
      found = true;
      return found;
    }
  });
  return found;
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node){
  var _this = this;
  _.each(this.nodes, function(item, index){
    if(item.value === node){
      _this.nodes.splice(index, 1);
    }
  });
};

Graph.prototype.getIndex = function(node){
  var id = -1;
  _.each(this.nodes, function(item, index){
    if(item.value === node){
      id = index;
    }
  });
  return id;
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode){
  var flag = false;
  var sourceIndex = this.getIndex(fromNode);
  var destIndex = this.getIndex(toNode);
  var _this = this;
  _.each(this.nodes[sourceIndex].edges, function(edge){
    if(edge === _this.nodes[destIndex].value){
      flag = true;
      return flag;
    }
  });
  return flag;
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode){
  var sourceIndex = this.getIndex(fromNode);
  var destIndex = this.getIndex(toNode);
  if(sourceIndex !== -1 && destIndex !==-1){
    this.nodes[sourceIndex].edges.push(this.nodes[destIndex].value);
    this.nodes[destIndex].edges.push(this.nodes[sourceIndex].value);
  }
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode){
    var sourceIndex = this.getIndex(fromNode);
    var destIndex = this.getIndex(toNode);
    var _this = this;
    _.each(this.nodes[sourceIndex].edges, function(edge, index){
        if(edge === _this.nodes[destIndex].value){
          _this.nodes[sourceIndex].edges.splice(index, 1);
        }
      });
    _.each(this.nodes[destIndex].edges, function(edge, index){
      if(edge === _this.nodes[sourceIndex].value){
        _this.nodes[destIndex].edges.splice(index, 1);
        }
      });
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb){
  _.each(this.nodes, function(item){
    return cb(item.value);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
