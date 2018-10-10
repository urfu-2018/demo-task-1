'use strict';

exports.isStar = true;

exports.sum = function (a, b) {
    if (isNaN(a) || isNaN(b)) {
        return 0;
    }

    return a + b;
};

exports.sum = function (a, b, c) {
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        return 0;
    }

    return a + b + c;
};
