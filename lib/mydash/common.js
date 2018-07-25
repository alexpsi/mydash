const _ = require('lodash');

// DETOX CHALLENGE START

const range = _.range;
const zip = _.zip;
const findKey = _.findKey;

// DETOX CHALLENGE END

const castToArray = x => Array.isArray(x) ? x : [x];

const values = x => Object.values(x); 

const sum = data => 
  data.reduce((acc, elem) => acc + elem, 0);

const max = x => Math.max(...x);

const min = x => Math.min(...x);

const monitor = f => (...args) => {
	const ds = new Date();
	const res = f(...args);
	const took = (new Date() - ds) / (1000);
	console.log(
		JSON.stringify(res, null, 2),
		`\nTook ${took.toFixed(5)} sec`
	);
}

const compose = (...fns) =>
  fns.reduceRight((prevFn, nextFn) =>
    (...args) => nextFn(prevFn(...args)),
    value => value
	);

const map = f => x => x.map(f);

const probe = (...args) => console.log(args);
const namedProbe = (name='') => (...args) => console.log(name, args);

module.exports = {
	castToArray,
	values,
	sum, 
	max,
	min,
	map,
	monitor,
	probe,
	compose
}