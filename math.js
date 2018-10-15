'use strict';

exports.isStar = true;

exports.sum = function (a, b) {
    if (!isNaN(a) || !isNaN(b)) {
        throw new TypeError('В аргументы переданы не числа');
    }

    return Number(a) + Number(b);
};
