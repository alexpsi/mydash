import test from 'ava';

const { 
    spearmanRankCoef,
    leastSquareEstimate,
    leastSquareRegressionLine 
} = require('../correlations');

test('leastSquareEstimate', t => {
    t.is(leastSquareEstimate(leastSquareRegressionLine(
        [95.0, 85.0, 80.0, 70.0, 60.0],  
        [85.0, 95.0, 70.0, 65.0, 70.0]
    ), 80), 78.2876712328767);
});

test('spearmanRankCoef', t => {
    t.is(spearmanRankCoef(
    	[10, 9.8, 8, 7.8, 7.7, 1.7, 6, 5, 1.4, 2],  
    	[200, 44, 32, 24, 22, 17, 15, 12, 8, 4]
    ), 0.9030303030303031);
});