'use strict';

exports.isStar = true;

exports.sum = function (a, b, c) {
    let str = Number(a) + Number(b);
    if (c !== 'undefined') {
        str += Number(c);
    }
    return str;
};
