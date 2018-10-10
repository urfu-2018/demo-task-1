'use strict';

exports.isStar = true;

exports.sum = function (...args) {
    return args.map(Number).reduce((a, b)=>a + b);
};

