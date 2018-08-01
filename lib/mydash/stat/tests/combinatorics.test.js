import test from 'ava';

import { sum } from '../../common';
import { nPr, nCr, bang, factorial } from '../combinatorics'; 

test('Factorial', t => {
	t.deepEqual(
		[ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ].map(factorial),
		[ 1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880 ]
	)
})

test('nPr', t => {
	t.is(nPr(10,5), 30240);
});

test('nCr', t => {
	t.is(nCr(10,5), 252);
});


