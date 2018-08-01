const _ = require('lodash');

// DETOX CHALLENGE START

const range = _.range;
const zip = _.zip;
const findKey = _.findKey;

// DETOX CHALLENGE END

const castToArray = x => Array.isArray(x) ? x : [x];

const zipr = (a, b) => a.map((__, i) => [a[i], b[i]]);

const values = x => Object.values(x); 

const sum = data => 
  data.reduce((acc, elem) => acc + elem, 0);

const sqrt = Math.sqrt;

const every = (_collection, f) => {
	const collection = _collection.slice();
	while(collection.length !== 0) {
		const elem = collection.shift();
		if (!f(elem)) return false;
	}
	return true;
}

const abs = Math.abs;

const frst = ([head, ...tail]) => head;
const head = frst;
const tail = ([head, ...t]) => t;
const last = a => (a && a.length) ? a[a.length - 1] : undefined;

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
	frst, last, head, tail,
	castToArray,
	values,
	every,
	abs,
	sum, 
	max,
	min,
	map,
	zip,
	sqrt,
	monitor,
	probe,
	compose
};