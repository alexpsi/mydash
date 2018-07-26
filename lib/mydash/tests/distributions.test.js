import test from 'ava';

import { sum } from '../common';
import { 
	ratioToP,
	binomialProbability, 
	cumulativeBinomialProbability,
	geometricProbability,
	poissonProbability,
	cumulativePoissonProbability
} from '../distributions'; 


test('binomialProbability', t => {
	const bx = binomialProbability(6, 0.52);
	t.is(bx(3), 0.31100239872);
});

test('cumulativeBinomialProbability', t => {
	t.is(cumulativeBinomialProbability(10, 0.5, 5), 0.24609375);
	t.is(cumulativeBinomialProbability(10, 0.5, [ 3, 4, 5]), 0.568359375);
});

test('geometricProbability', t => {
	t.is(geometricProbability(5, 0.7), 0.005670000000000003);
	t.is(
		sum([1,2,3,4,5].map(n => geometricProbability(n, 1/3))),
		0.8683127572016461
	);		
});

test('poissonProbability', t => {
	t.is(poissonProbability(2, 3), 0.1804470443154836);
	t.is(cumulativePoissonProbability(5, [0, 1, 2, 3]), 0.26502591529736175);
})

test('ratioToP', t => {
	t.is(ratioToP(1.09), 0.521531100478469)
});
