const { monitor, compose, probe, map } = require('./lib/mydash');

const sentences = [
    'A meteorologist predicts that it will rain today.',
    'When it actually rains, the meteorologist correctly predicts rain 43  of the time.',
    'When it doesn\'t rain, the meteorologist incorrectly predicts rain 23  of the time.',
    'When it rains it pours'
];

const STOP_WORDS = ['that', 'will', 'the', 'it'];

const removePunctuation = x => x.replace(/[^\w\s]/g, ' ');
const tokenize = x => x.split(' ');
const applyCutoff = (cutoff = Infinity) => x => x.filter(word => word.length > cutoff);
const removeStopWords = (stopWords = []) => x => x.filter(word => !stopWords.includes(word));

const pipeline = compose(
	removeStopWords(STOP_WORDS),
	applyCutoff(3),
	tokenize,
	x => x.toLowerCase(),
	removePunctuation
)

// monitor(map(pipeline))(sentences);

const createReverseHash = sentences => sentences.map(pipeline).reduce((acc, doc, docIndex) => {
	doc.map(word => {
		acc[word] = acc[word] ? acc[word].concat(docIndex) : [docIndex];
	});
	return acc;
}, {});

const sortHashBy = comparator => hash => Object.keys(hash).map(key => ({
	docs: hash[key],
	count: hash[key].length || 0,
	key,
})).sort(comparator);

const docCount = (a, b) => a.count == b.count ? 0 : a.count > b.count ? 1 : -1;

const orderedReverseIndex = compose(
	sortHashBy(docCount),
	createReverseHash
); 

monitor(orderedReverseIndex)(sentences);