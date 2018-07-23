const _ = require('lodash');

const sum = data => 
  data.reduce((acc, elem) => acc + elem, 0);

const max = x => Math.max(...x);

const min = x => Math.min(...x);

const mean = data => 
  data.reduce((acc, elem) => acc + elem, 0) / data.length;

const weightedMean = (x,w) =>
  sum(_.zip(x,w).map(([a,b]) => a * b)) / 
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
  const maxFreq = max(_.values(distribution));
  return _.findKey(distribution, o => o == maxFreq);
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