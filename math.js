'use strict';

exports.isStar = true;

exports.sum = function (a, b) {
    let summa = parseInt(a) + parseInt(b);
    if (arguments[2] !== undefined) {
        summa += parseInt(arguments[2]);
    }

    return summa;
};
