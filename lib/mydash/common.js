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

module.exports = {
	castToArray,
	values,
	sum, 
	max,
	min
}