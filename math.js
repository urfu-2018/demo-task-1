'use strict';

exports.isStar = true;

exports.sum = function (a, b) {
    if (isNaN(a) || isNaN(b)) { return 0; }
    return a + b;
};
