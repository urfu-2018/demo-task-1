'use strict';

exports.isStar = true;

exports.sum = function () {
    let sum = 0;
    for (let i of arguments) {
        sum += parseFloat(i);
    }

    return sum;

};
