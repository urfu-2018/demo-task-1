'use strict';

exports.isStar = true;

exports.sum = function (a, b, c) {
    c = c || 0;

    return parseFloat(a) + parseFloat(b) + parseFloat(c);
};
