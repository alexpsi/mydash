const monitor = f => (...args) => {
	const ds = new Date();
	const res = f(args);
	const took = (new Date() - ds) / (60 * 1000);
	console.log(
		JSON.stringify(res, null, 2),
		`\nTook ${took.toFixed(2)} sec`
	);
}