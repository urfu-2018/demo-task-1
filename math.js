'use strict';

exports.isStar = true;

exports.sum = function (a, b, c) {
    let s = Number(a) + Number(b);
    if (typeof c !== 'undefined') {
        s += Number(c);
    }
};
