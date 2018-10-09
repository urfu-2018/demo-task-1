'use strict';

exports.isStar = true;

exports.sum = function () {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += parseInt(arguments[i]);
    }

    return sum;
};
