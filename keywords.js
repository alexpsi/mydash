const { monitor, compose, probe, map } = require('./lib/various');

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

const createReverseIndex = sentences => sentences.map(pipeline).reduce((acc, doc, docIndex) => {
	doc.map(word => {
		acc[word] = acc[word] ? acc[word].concat(docIndex) : [docIndex];
	})
	return acc;
}, {})
	
// monitor(createReverseIndex)(sentences);