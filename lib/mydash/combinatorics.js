const { castToArray, sum } = require('./common');

const factorial = x => 
  x === 0 ? 1 : x * factorial(x - 1); 

const bang = factorial;

const nPr = (n, r) => bang(n) / bang(n - r);
// Todo permuteSet

const nCr = (n, r) => nPr(n,r) / bang(r);
// Todo combineSet

// combine([[1,2], [3,4], [5,6]]) 
const combine = sets => sets.reduce((acc, set) => 
  (acc.length === 0) ? set : acc.map(
    _ac => set.map(s => ( ((_ac.map) ? _ac : [_ac]).concat(s)))
  ).reduce((acc, set) => ([...acc, ...set])), []);

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

module.exports = {
  nPr,
  nCr,
  bang,
  combine,
  ratioToP,
  factorial,
  binomialProbability,
  geometricProbability,
  negativeBinomialProbability,
  cumulativeBinomialProbability,
}