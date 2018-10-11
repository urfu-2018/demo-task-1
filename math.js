'use strict';

exports.isStar = true;

exports.sum = function (a, b, c = 0) {
    return parseInt(a, 10) + parseInt(b, 10) + parseInt(c, 10);
};
