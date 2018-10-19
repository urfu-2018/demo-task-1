'use strict';

exports.isStar = true;

exports.sum = function (a, b, c = 0) {
    if (isNaN(a) === true) {
        a = 0;
    }
    if (isNaN(b) === true) {
        b = 0;
    }
    if (isNaN(c) === true) {
        c = 0;
    }

    return parseFloat(a) + parseFloat(b) + parseFloat(c);
};

