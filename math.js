'use strict';

exports.isStar = true;

exports.sum = function (...args) {
    return args.reduce((a, b)=>+a + b);
}

