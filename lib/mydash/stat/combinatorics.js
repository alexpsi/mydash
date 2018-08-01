const { castToArray, sum } = require('../common');

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

module.exports = {
  nPr,
  nCr,
  bang,
  combine,
  factorial,
}