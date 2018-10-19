'use strict';

exports.isStar = true;

exports.sum = function (a, b) {
    const sum = Number(a) + Number(b);
    if (typeof(sum) !== 'number' || sum === 'NaN') {
        return 'undefined';
    }

    return sum;
};

