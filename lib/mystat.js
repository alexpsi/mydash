

const mean = data => 
  data.reduce((acc, elem) => acc + elem, 0) / data.length;

const weightedMean = (x,w) =>
  sum(zip(x,w).map(([a,b]) => a * b)) / 
  sum(w) * 1.0;

const median = data => {
  const pivot = Math.floor(data.length/2) - (1 - data.length % 2);
  return data
    .sort()
    .slice(pivot, data.length - pivot)
    .reduce((acc, elem) => acc + elem, 0) / (2 - data.length % 2);
}

const mode = data => {
  const distribution = data.reduce((acc, elem) => ({
    ...acc,
    [elem]: acc[elem] ? acc[elem] + 1 : 1
  }), {});
  const maxFreq = max(values(distribution));
  return findKey(distribution, o => o === maxFreq);
}

const quartiles = data => {
  const q2 = median(data);
  return [
    median(data.filter(num => num < q2)), 
    q2, 
    median(data.filter(num => num > q2))
  ];
}

const stdDev = data => {
  const m = mean(data);
  return Math.sqrt(
    sum(data.map(x => Math.pow(x - m, 2))) / 
    data.length
  );
}

const factorial = x => 
  x === 0 ? 1 : x * factorial(x - 1); 
// console.log(_.range(0, 20).map(factorial));

const bang = factorial;

// Combinations and permutations

// nPr 
const nPr = (n, r) => bang(n) / bang(n - r);
//console.log(permutationsCount(10,5), 30240);

// nCr
const nCr = (n, r) => nPr(n,r) / bang(r);
// console.log(nCr(10,5), 252)

const binomialProbability = (n, p) => x =>
  nCr(n, x) * Math.pow(p, x) * Math.pow(1 - p, n - x);
// console.log(binomialProbability(6, 0.52)(3), 0.31100239872)

const cumulativeBinomialProbability = (n, p, x) => 
  sum(castToArray(x).map(binomialProbability(n, p)));

// console.log(cumulativeBinomialProbability(10, 0.5, 5));
// console.log(cumulativeBinomialProbability(10, 0.5, range(0,5 + 1)));


const ratio = 1.09; 
const p = ratio / (1 + ratio)

const ratioToP = ratio => ratio / ( 1 + ratio);

console.log(cumulativeBinomialProbability(6, ratioToP(1.09), range(3, 6)));


// combine([[1,2], [3,4], [5,6]]) 
const combine = sets => sets.reduce((acc, set) => 
    (acc.length === 0) ? set : acc.map(_ac => 
        set.map(s => ( ((_ac.map) ? _ac : [_ac]).concat(s) ))
    ).reduce((acc, set) => ([...acc, ...set])),
    []
);

module.exports = {
  mean,
  weightedMean,
  median,
  mode,
  quartiles, 
  stdDev,
  bang,
  combine
}


/*
    const Pxr = 4 / 7; 
    const Pyr = 5 / 9; 
    const Pzr = 4 / 8; 

    const Pxb = 3 / 7; 
    const Pyb = 4 / 9; 
    const Pzb = 4 / 8; 

    const Pxbyrzr = Pxb * Pyr * Pzr;
    const Pxrybzr = Pxr * Pyb * Pzr;
    const Pxryrzb = Pxr * Pyr * Pzb;

    const result = Pxbyrzr + Pxrybzr + Pxryrzb

    console.log(result)
*/