'use strict';

exports.isStar = true;

exports.sum = function (a, b) {
    // Реализуйте сложение в этой функции
    if (arguments.length === 3) {
        return Number(a) + Number(b) + Number(arguments[2]);
    }

    return Number(a) + Number(b);
};
