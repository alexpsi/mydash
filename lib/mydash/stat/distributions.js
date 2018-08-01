const { sum, castToArray } = require('../common');
const { nCr, nPr, bang } = require('./combinatorics');

const e = Math.exp(1);

const binomialProbability = (n, p) => x =>
  nCr(n, x) * Math.pow(p, x) * Math.pow(1 - p, n - x);

const cumulativeBinomialProbability = (n, p, x) => 
  sum(castToArray(x).map(binomialProbability(n, p)));

const negativeBinomialProbability = (n, p) => x =>
  nCr(n - 1, x - 1) * Math.pow(p, x) * Math.pow(1 - p, n - x);

const cumulativeNegativeBinomialProbability = (n, p, x) => 
  sum(castToArray(x).map(negativeBinomialProbability(n, p)));

const geometricProbability = (n, p) => Math.pow(1 - p, n - 1) * p;

const ratioToP = ratio => ratio / ( 1 + ratio);

const poissonProbability = (l, k) => 
  Math.pow(l, k) * Math.pow(e, -l) / bang(k);

const cumulativePoissonProbability = (l, k) => 
  sum(castToArray(k).map(x => poissonProbability(l, x)));

// Complementary error function
// From Numerical Recipes in C 2e p221
const erfc = x => {
	const z = Math.abs(x);
	const t = 1 / (1 + z / 2);
	const r = t * Math.exp(-z * z - 1.26551223 + t * (1.00002368 +
					t * (0.37409196 + t * (0.09678418 + t * (-0.18628806 +
					t * (0.27886807 + t * (-1.13520398 + t * (1.48851587 +
					t * (-0.82215223 + t * 0.17087277)))))))))
	return x >= 0 ? r : 2 - r;
};

const gaussianCDF = (mean, sigma) => x => 
  0.5 * erfc(-(x - mean) / (sigma * Math.sqrt(2)));

const gaussianSumDistribution = (mean, sigma, n) => x =>
	gaussianCDF(mean * n, sigma * Math.sqrt(n))(x);
	
const predictionIntervals = (mean, sigma, n) => zscore => [ 
	mean - zscore * (sigma / Math.sqrt(n)), 
	mean + zscore * (sigma / Math.sqrt(n))
]

module.exports = {
	ratioToP,
	gaussianCDF,
	poissonProbability,
	predictionIntervals,
  binomialProbability,
	geometricProbability,
	gaussianSumDistribution,
  negativeBinomialProbability,
  cumulativePoissonProbability,
	cumulativeBinomialProbability
}