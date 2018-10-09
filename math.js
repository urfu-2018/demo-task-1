'use strict';

exports.isStar = true;

exports.sum = function (a, b, c) {
    if (c === null) {
        c = 0;
    }

    return Number(a) + Number(b) + Number(c);
};
