'use strict';

exports.isStar = true;
exports.sum = sum;

function sum() {
    if (arguments.length === 0) {
        return NaN;
    }
    let result = 0;
    for (let i = 0; i < arguments.length; i++) {
        result += parseInt(arguments[i], 10);
    }

    return result;
}
