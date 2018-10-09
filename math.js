'use strict';

exports.isStar = true;

exports.sum = function (a, b, c) {
    let s = a + b;
    if (typeof c !== 'undefined') {
        s += c;
    }

    return s;
};


