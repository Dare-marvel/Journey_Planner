import { edges } from "./Edges";
import { stations } from "./Stations";

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }
  bubbleUp() {
    let ind = this.values.length - 1;
    const element = this.values[ind];
    while (ind > 0) {
      let parentind = Math.floor((ind - 1) / 2);
      let parent = this.values[parentind];
      if (element.priority >= parent.priority) break;
      this.values[parentind] = element;
      this.values[ind] = parent;
      ind = parentind;
    }
  }
  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }
  sinkDown() {
    let ind = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildind = 2 * ind + 1;
      let rightChildind = 2 * ind + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildind < length) {
        leftChild = this.values[leftChildind];
        if (leftChild.priority < element.priority) {
          swap = leftChildind;
        }
      }
      if (rightChildind < length) {
        rightChild = this.values[rightChildind];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildind;
        }
      }
      if (swap === null) break;
      this.values[ind] = this.values[swap];
      this.values[swap] = element;
      ind = swap;
    }
  }
}

//Dijkstra's algorithm 
class WeightedGraph {
  constructor() {
    this.adj = {};
  }
  addVertex(vertex) {
    if (!this.adj[vertex]) this.adj[vertex] = [];
  }
  addEdge(vertex1, vertex2, weight) {
    this.adj[vertex1].push({ node: vertex2, weight });
    this.adj[vertex2].push({ node: vertex1, weight });
  }
  Dijkstra(src, des) {
    const pq = new PriorityQueue();
    const time = {};
    const prev = {};
    let path = [];
    let least;

    for (let vertex in this.adj) {
      if (vertex === src) {
        time[vertex] = 0;
        pq.enqueue(vertex, 0);
      }
      else {
        time[vertex] = Infinity;
        pq.enqueue(vertex, Infinity);
      }
      prev[vertex] = null;
    }

    while (pq.values.length) {
      least = pq.dequeue().val;
      if (least === des) {

        while (prev[least]) {
          path.push(least);
          least = prev[least];
        }
        break;
      }
      if (least || time[least] !== Infinity) {
        for (let neighbor in this.adj[least]) {

          let nextNode = this.adj[least][neighbor];

          let nextNeighbor = nextNode.node;
          if (time[least] + nextNode.weight < time[nextNeighbor]) {

            time[nextNeighbor] = time[least] + nextNode.weight;

            prev[nextNeighbor] = least;
            pq.enqueue(nextNeighbor, time[least] + nextNode.weight);
          }
        }
      }
    }
    const comp_path = (path.concat(least).reverse().map(p => `${stations[p - 1]['Name']} (${stations[p - 1]['Line']})`)).join(' => ');
    const time_taken = time[des]
    return { comp_path, time_taken };
  }

}

const g = new WeightedGraph();
stations.forEach(s => g.addVertex(s['Id']))
edges.forEach(e => g.addEdge(e['Station 1'], e['Station 2'], e['Time']))

function Retrieve(src_area, des_area) {
  return g.Dijkstra(src_area, des_area)
}
export { Retrieve, g };