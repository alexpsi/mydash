// cracking the coding interview tidbits

const rotLeft = (a,d) => ([...a.slice(d % a.length), ...a.slice(0, d % a.length)])

const letterFreq = word => word.split('').reduce((acc, letter) => ({
	...acc,
	[letter]: acc[letter] ? acc[letter] + 1 : 1
}), {});

const compareFreq = (lfW1, lfW2) => 
  _.union(_.keys(lfW1), _.keys(lfW2))
  .map(key => Math.abs((lfW1[key] || 0) - (lfW2[key] || 0)));

const wordFreq = words => words.reduce((acc, word) => ({
    ...acc,
    [word]: acc[word] ? acc[word] + 1 : 1
  }), {});

const wordFreq2 = words => { // GREATLY OPTIMIZED
    const freq = {};
    for (let i in words) {
        freq[words[i]] = freq[words[i]] ? freq[words[i]] + 1 : 1;
    }
    return freq;
}

const balancedBrackets = expression => {
    const stack = [];
    return _.every(expression.split(''), element => {
        if (['(', '[', '{'].includes(element)) {
            stack.push(element);
            return true;
        }
        const top = stack.pop();
        if (element === ')' && top == '(') return true;
        if (element === ']' && top == '[') return true;
        if (element === '}' && top == '{') return true;
        return false;
    }) && stack.length === 0;
}

const recursiveDigitSum = _s => {
    const s = sum(_s.split('').map(x => parseInt(x)));
    if (s < 9) return s;
    return recursiveDigitSum(s.toFixed())
}

