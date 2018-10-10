'use strict';

exports.isStar = true;

exports.sum = function (a, b, c = 0) {
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        return 0;
    }

    return a + b + c;
};
