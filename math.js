'use strict';

exports.isStar = true;

exports.sum = function (a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        throw new TypeError();
    }

    return a + b;};
