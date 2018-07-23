const _ = require('lodash');
const fs = require('fs');

const monitor = f => (...args) => {
    const ds = new Date();
    const res = f(args);
    const took = (new Date() - ds) / (60 * 1000);
    console.log(
        JSON.stringify(res, null, 2),
        `\nTook ${took.toFixed(2)} sec`
    );
}

const combine = sets => sets.reduce((acc, set) => 
    (acc.length === 0) ? set : acc.map(_ac => 
        set.map(s => ( ((_ac.map) ? _ac : [_ac]).concat(s) ))
    ).reduce((acc, set) => ([...acc, ...set])),
    []
);

// const permute = a => combine(Array(a.length).fill(a)).filter()

const isValid = height => ([x,y,z]) => 1 * x + 2 * y + 3 * z == height;

const validStepSets = height => combine([
    _.range(0, height),
    _.range(0, height / 2),
    _.range(0, height / 3),
]).filter(isValid(height));


monitor(validStepSets)(10);
