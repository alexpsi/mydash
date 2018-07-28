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

const rank = x => {
	const sorted = x.slice().sort((a,b) => a - b);
	return x.map(_x => sorted.indexOf(_x) + 1);
}

const spearmanRankCoef = (a, b) => 
	1 - (6 * sum(zip(rank(a), rank(b)).map(([a, b]) => (a - b) * ( a - b) )) /
	(a.length * (a.length * a.length - 1)));




module.exports = {
	pearsonCorrelation,
	spearmanRankCoef
}