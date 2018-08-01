const { sum, max, values, findKey, zip } = require('../common');

const mean = data => 
  data.reduce((acc, elem) => acc + elem, 0) / data.length;

const weightedMean = (x,w) =>
  sum(zip(x,w).map(([a,b]) => a * b)) / sum(w) * 1.0;

const median = data => {
  const pivot = Math.floor(data.length / 2) - (1 - data.length % 2);
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

module.exports = {
	mean,
	weightedMean,
	median,
	mode,
	quartiles, 
	stdDev
}