'use strict';

exports.isStar = true;

exports.sum = function (...args) {
    let sum = args[0];
    for (let i = 1; i < args.length; ++i) {
        sum += args[i];
    }

    return sum;
};
