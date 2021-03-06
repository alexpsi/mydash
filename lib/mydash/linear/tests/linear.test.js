import test from 'ava';
const { Matrix } = require('../linear');

const X = new Matrix([
    [1, 5, 7],
    [1, 6, 6],
    [1, 7, 4],
    [1, 8, 5],
    [1, 9, 6],
]);

const Y = (new Matrix([
    [10, 20, 60, 40, 50]
])).transpose();

const Xt = X.transpose();

const Q = new Matrix([
    [ 1, 5, 5 ]
]);

test('Linear model fitting (hackerRank tutorial)', t => {
    t.deepEqual(Q.dot(Xt.dot(X).invert().dot(Xt).dot(Y)).matrix, [[29.395348837209625]]);
});