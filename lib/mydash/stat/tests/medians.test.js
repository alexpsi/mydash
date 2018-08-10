import test from 'ava';
import { range } from '../../common';
import RunningMedian from '../RunningMedian';
import SlidingWindowMedian from '../SlidingWindowMedian';

test('RunningMedian', t => {
    const rm = new RunningMedian();
    t.deepEqual(
        range(10).map(x => rm.push(x + 1)),
        [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6]
    );
});

test('SlidingWindowMedian', t => {
    const d = [2, 3, 4, 2, 3, 6, 8, 4, 5];
    const sm = new SlidingWindowMedian(5);
    t.deepEqual(
        d.map(x => sm.push(x)),
        [null, null, null, null, null, 3, 3, 4, 4]
    );
});