const fibonacci = x => {
	const seq = [0, 1];
	if (x === 0) return 0;
	for (let i = 2; i < x + 1; i++) {
		seq.push(seq[seq.length - 1] + seq[seq.length - 2]);
	}
	return seq[seq.length - 1];
}

module.exports = {
  fibonacci,
}