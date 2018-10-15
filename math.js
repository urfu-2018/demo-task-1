'use strict';

exports.isStar = true;

exports.sum = function (a, b) {
    if (isNaN(a) || isNaN(b)) {
        return false;
    }

    return Number(a) + Number(b);
};
