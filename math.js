'use strict';

exports.isStar = true;

exports.sum = function (a, b, c) {
     return Number(a) + Number(b) + (arguments[2] ? Number(c) : 0);
};
