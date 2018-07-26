import test from 'ava';
import { fibonacci } from '../various';

test('fibonacci', t => {
	t.deepEqual(
		[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(x => fibonacci(x)),
		[ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ]
	)
});