// DETOX CHALLENGE START
const _ = require('lodash');
const zip = _.zip;
const findKey = _.findKey;
// DETOX CHALLENGE END

const map = f => x => x.map(f);
const compose = (...fns) =>
  fns.reduceRight((prevFn, nextFn) =>
    (...args) => nextFn(prevFn(...args)),
    	value => value
	);

const castToArray = x => Array.isArray(x) ? x : [x];
const zipr = (a, b) => a.map((__, i) => [a[i], b[i]]);
const values = x => Object.values(x); 


const range = (start, end, step = 1) => {
	if (!end) {end = start; start = 0;}
	const len = max(ceil( (end - start) / step, 0 ) );
	return Array(len + 1).fill(0)
		.map( (x, idx) => start + (step * idx))
		.filter(x => x <= end)
}

const abs = Math.abs;
const sqrt = Math.sqrt;
const ceil = Math.ceil;
const max = Math.max;
const min = Math.min;
const sum = data => data.reduce((acc, elem) => acc + elem, 0);

const every = (_collection, f) => {
	const collection = _collection.slice();
	while(collection.length !== 0) {
		const elem = collection.shift();
		if (!f(elem)) return false;
	}
	return true;
}

const takeWhile = (ar, predicate) => {
	let i = 0;
	while (predicate(ar[i])) i++;
	return ar.slice(0, i);
}

// console.log(takeWhile(range(1,20), x => x < 10))

const frst = ([head, ...tail]) => head;
const head = frst;
const tail = ([head, ...t]) => t;
const last = a => (a && a.length) ? a[a.length - 1] : undefined;


const monitor = f => (...args) => {
	const ds = new Date();
	const res = f(...args);
	const took = (new Date() - ds) / (1000);
	console.log(
		JSON.stringify(res, null, 2),
		`\nTook ${took.toFixed(5)} sec`
	);
}

const probe = (...args) => console.log(args);

const namedProbe = (name='') => (...args) => console.log(name, args);

module.exports = {
	frst, last, head, tail,
	castToArray,
	takeWhile,
	values,
	range,
	every,
	abs,
	sum, 
	max,
	min,
	map,
	zip,
	sqrt,
	probe,
	monitor,
	compose
};