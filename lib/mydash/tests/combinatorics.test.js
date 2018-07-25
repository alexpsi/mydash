import test from 'ava';
import { 
	nPr, nCr, bang, factorial, 
	binomialProbability, 
	cumulativeBinomialProbability,
	ratioToP
} from '../combinatorics'; 

test('Factorial', t => {
	t.deepEqual(
		[0,1,2,3,4,5,6,7,8,9].map(factorial),
		[ 1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880 ]
	)
})

test('nPr', t => {
	t.is(nPr(10,5), 30240);
});

test('nCr', t => {
	t.is(nCr(10,5), 252);
});

test('ratioToP', t => {
	t.is(ratioToP(1.09), 0.521531100478469)
})

test('binomialProbability', t => {
	const bx = binomialProbability(6, 0.52);
	t.is(bx(3), 0.31100239872);
});

test('cumulativeBinomialProbability', t => {
	t.is(cumulativeBinomialProbability(10, 0.5, 5), 0.24609375);
	t.is(cumulativeBinomialProbability(10, 0.5, [3,4,5]), 0.568359375);
});
