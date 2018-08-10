class SlidingWindowMedian {
    constructor(windowSize) {
        this.idx = 0;
        this.window = [];
        this.history = [];
        this.windowSize = windowSize;
    }

    sortedIndex(value) {
        let low = 0, high = this.window.length;
        while (low < high) {
            const mid = low + high >>> 1;
            if (this.window[mid] < value) low = mid + 1;
            else high = mid;
        }
        return low;
    }
    
    push(elem) {
        const median = ( this.window.length % 2 === 0 ) ? 
            (this.window[(this.window.length / 2) - 1 ] + this.window[this.window.length / 2]) / 2: 
            this.window[Math.floor(this.window.length / 2)];
        
        if (this.window.length === this.windowSize) {
            const d = this.history.shift();
            this.window.splice(this.sortedIndex(d), 1);
        }
        this.idx++;
        const pos = this.sortedIndex(elem); 
        this.window.splice(pos, 0, elem);
        this.history.push(elem);
        if (this.idx < this.windowSize + 1) return null;
        return median;
    }
}

module.exports = SlidingWindowMedian;