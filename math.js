'use strict';

exports.isStar = true;

exports.sum = function (a, b) {
    if (isFinite(+a) && isFinite(+b)) return +a + +b;
};
