const { castToArray, sum } = require('./common');

const factorial = x => 
  x === 0 ? 1 : x * factorial(x - 1); 

const bang = factorial;

const nPr = (n, r) => bang(n) / bang(n - r);
// Todo permuteSet

const nCr = (n, r) => nPr(n,r) / bang(r);
// Todo combineSet

const binomialProbability = (n, p) => x =>
  nCr(n, x) * Math.pow(p, x) * Math.pow(1 - p, n - x);

const cumulativeBinomialProbability = (n, p, x) => 
  sum(castToArray(x).map(binomialProbability(n, p)));

const ratioToP = ratio => ratio / ( 1 + ratio);

module.exports = {
  nPr,
  nCr,
  bang,
  factorial,
  ratioToP,
  binomialProbability,
  cumulativeBinomialProbability
}