'use strict';

exports.isStar = true;
exports.sum = sum;

function sum() {
    if (arguments.length === 0) {
        return NaN;
    }
    let amount = 0;
    for (let i = 0; i < arguments.length; i++) {
        amount += Number(arguments[i]);
    }

    return amount;
}
