const Heap = require('../data_structures/heap');

class RunningMedian {
    constructor() {
        this.lowerHeap = new Heap();
        this.upperHeap = new Heap((a,b) => b - a);
    }

    // Adds point to set and returns running median.
    push(score) {
        this[
            score > this.lowerHeap.peek() ? 'upperHeap' : 'lowerHeap'
        ].push(score);
        let diff = this.upperHeap.length - this.lowerHeap.length;
        if (Math.abs(diff) == 2) {
            ( diff > 0 ) ? 
                this.lowerHeap.push(this.upperHeap.pop()):
                this.upperHeap.push(this.lowerHeap.pop());
        }
        diff = this.upperHeap.length - this.lowerHeap.length;
        if (diff === 0) {
            return ((this.upperHeap.peek() || 0) + (this.lowerHeap.peek() || 0)) / 2
        }
        return diff > 0 ? this.upperHeap.peek() : this.lowerHeap.peek();
       
    }
}

module.exports = RunningMedian;
