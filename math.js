'use strict';

exports.isStar = true;

exports.sum = function (a, b, c) {
    if (!Number.isInteger(a) || !Number.isInteger(b) || (c !== undefined && !Number.isInteger(c))) {
        throw new TypeError();
    }

    return c === undefined ? a + b : a + b + c;
};
