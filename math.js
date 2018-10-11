'use strict';

exports.isStar = true;

exports.sum = function (a, b, c) {
    if (arguments.length === 0) {
        return NaN;
    }

    return Number(a || 0) + (b || 0) + (c || 0);
};
