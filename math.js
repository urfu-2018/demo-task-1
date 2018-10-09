'use strict';

exports.isStar = true;

exports.sum = function () {
    // return parseInt(a) + parseInt(b);
    let sum = 0;
    for (let i in arguments) {
        if (arguments.hasOwnProperty(i)) {
            sum += parseInt(arguments[i]);
        }
    }

    return sum;
};
