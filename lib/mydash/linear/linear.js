const { sum, every, max, abs } = require('../common');
const inv = require('./gauss');

class Matrix {
    constructor(a) {
        if (!a || !a[0] || !a[0].length) {
            return new Error('Not a matrix');
        }
        if (!every(a, row => row.length === a[0].length)) return new Error('Not a matrix, wrong dimensions'); 
        this.matrix = a;
        this.rows = a.length;
        this.cols = a[0].length;
    }

    valueOf() {
        return this.matrix;
    }

    size() { return [this.matrix.length, this.matrix[0].length] }

    get(row, col) { return this.matrix[row][col]; }

    getRow(row) { return this.matrix[row].slice(); }

    getCol(col) { return this.matrix.map(row => row[col]); }

    show() {
        this.matrix.map(row => {
            console.log(row)
        });
        console.log('');
        return this;
    }

    transpose() {
        return new Matrix(
            Array(this.cols).fill(0).map((x, i) => this.getCol(i))
        );
    }

    dot(b) {
        const A = this.matrix;
        const B = b.matrix;
        
        const result = new Array(A.length).
            fill(0).map(row => new Array(B[0].length).fill(0));
        
        return new Matrix(result.map((row, i) => 
            row.map((val, j) => {
                return A[i].reduce(
                    (sum, elm, k) => sum + (elm * B[k][j])
                    , 0
                );
            })
        ));
    }

    invert() {
        if (this.rows === this.cols && this.rows > 2) {
            return new Matrix(inv(this.matrix));
        }
        return this;
    }
}

const identityMatrixOf = n => new Matrix(
    Array(n).fill(0).map((__, _idx) => 
        Array(n).fill(0).map((__, idx) => idx === _idx ? 1 : 0)
    )
);

module.exports = {
    Matrix, 
    identityMatrixOf
}




