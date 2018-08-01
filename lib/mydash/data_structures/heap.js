class BinaryHeap {
    constructor(_sort, _scoreF) {
        this.content = [];
        this.sort = _sort || ((a, b) => a - b);
        this.scoreF = _scoreF || (x => x);
        Object.defineProperty(this, 'length', {
            enumerable: true,
            get: function() { return this.content.length },
        });
    }

    compare(i, j) {
        return this.sort(
            this.scoreF(this.content[i]), 
            this.scoreF(this.content[j])
        ) > 0;
    }
   
    swap(i, j) {
        const t = this.content[i];
        this.content[i] = this.content[j];
        this.content[j] = t;
    };

    show() {
        console.log(this.content);
    }

    peek() {
        return this.content[0];
    }

    push(elem) {
        this.content.push(elem);
        this.siftUp(this.length - 1);
    }

    pop() {
        const result = this.content[0];
        const end = this.content.pop();
        if (this.length > 0) {
            this.content[0] = end;
            this.siftDown(0);
        }
        return result;
    }

    getParent(i) {
        const pi = (i - 1)/2 >> 0;
        return pi >= 0 ? pi : null;
    };

    getChildren(i) {
        const li = i * 2 + 1;
        const ri = i * 2 + 2;
        return [
            li < this.length ? li : null,
            ri < this.length ? ri : null
        ];
    }

    siftUp(i) {
        const j = this.getParent(i);
        if (j == null || !this.compare(i, j)) return;
        this.swap(i, j);
        this.siftUp(j);
    }

    siftDown(i) {
        const [lc, rc] = this.getChildren(i);
        if (!lc) return;
        const next = (rc && this.compare(rc, lc)) ? rc : lc;
        if (this.compare(next, i)) {
            this.swap(i, next);
            return this.siftDown(next);
        }
    }
}

module.exports = BinaryHeap;
