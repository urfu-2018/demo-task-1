'use strict';

exports.isStar = true;
exports.sum = sum;

function sum() {
    if (arguments.length === 0) {
        return NaN;
    }
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += Number(arguments[i]);
    }

    return sum;
};
