import test from 'ava';

import { sum } from '../../common';
import { 
	mean,
	weightedMean,
	median,
	mode,
	quartiles, 
	stdDev
} from '../firstOrder';

test('mean', t => {
	t.is(mean([1, 1, 1, 1, 1]), 1);
	t.is(mean([1]), 1);
	t.is(mean([4, 2, 2, 2, 2, 4]), 2.6666666666666665);
});

