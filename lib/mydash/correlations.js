const { sum, sqrt, zip, last } = require('./common');
const { mean, stdDev } = require('./firstOrder');

const pearsonCorrelation = (x, y) => {
	const ex = mean(x);
	const ey = mean(y);
	const ex2 = mean(x.map(x => x * x));
	const ey2 = mean(y.map(y => y * y));
	const exy = mean(zip(x, y).map(([xx, yy]) => xx * yy ));
	return (exy - ex * ey) / (sqrt(ex2 - ex * ex) * sqrt(ey2 - ey * ey));
}

const leastSquareRegressionLine = (x, y) => {
	const b = pearsonCorrelation(x, y) * stdDev(y) / stdDev(x);
	const a = mean(y) - b * mean(x);
	return [a, b];	
}

const leastSquareRegressionLine2 = (x, y) => {
	const sxy = sum(zip(x,y).map(([xx, yy]) => xx * yy));
	const sxsy = sum(x) * sum(y);
	const sx2 = sum(x.map(x => x * x));
	const n = x.length;
	const b = (n * sxy - sxsy) / (n * sx2 - Math.pow(sum(x), 2));
	const a = mean(y) - (b * mean(x));
	return [a, b];  
}

const leastSquareEstimate = ([a, b], x) =>  a + x * b;

const rank = x => {
	const sorted = x.slice().sort((a,b) => a - b);
	return x.map(_x => sorted.indexOf(_x) + 1);
}

const spearmanRankCoef = (a, b) => 
	1 - (6 * sum(zip(rank(a), rank(b)).map(([a, b]) => (a - b) * ( a - b) )) /
	(a.length * (a.length * a.length - 1)));

module.exports = {
	leastSquareRegressionLine,
	leastSquareEstimate,
	pearsonCorrelation,
	spearmanRankCoef,
	rank,
}