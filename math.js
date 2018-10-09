'use strict';

exports.isStar = true;

exports.sum = function (a, b, c) {
    if (c) {
        return +a + +b + +c;
    } else {
        return +a + +b;
    }
};
