'use strict';

exports.isStar = true;

exports.sum = function (a, b) {
    if (isNaN(a) === true) {
        a = 0;
    }

    if (isNaN(b) === true) {
        b = 0;
    }

    return parseFloat(a) + parseFloat(b);
};

