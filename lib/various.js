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
	map,
	monitor,
	probe,
	compose
}