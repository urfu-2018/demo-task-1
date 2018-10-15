'use strict';

exports.isStar = true;

exports.sum = function (a, b, c=0) {
    return Number(a) + Number(b) + Number(c)
};
console.log(sum(3, 5));
