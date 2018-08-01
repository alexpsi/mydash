const Heap = require('./heap');

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
        this.lowerHeap.show();
        this.upperHeap.show();
        diff = this.upperHeap.length - this.lowerHeap.length;
        if (diff === 0) {
            return ((this.upperHeap.peek() || 0) + (this.lowerHeap.peek() || 0)) / 2
        }
        return diff > 0 ? this.upperHeap.peek() : this.lowerHeap.peek();
       
    }
}

module.exports = RunningMedian;

// const d = new RunningMedian();
// console.log(d.push(1));
// console.log(d.push(2));
// console.log(d.push(3));
// console.log(d.push(4));
// console.log(d.push(5));
// console.log(d.push(6));
// console.log(d.push(7));
// console.log(d.push(8));
// console.log(d.push(9));
// console.log(d.push(10));
