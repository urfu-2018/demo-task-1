'use strict';

exports.isStar = true;

exports.sum = function (...args) {
    let sum = 0;
    args.forEach(elem => {
        sum += elem;
    });

    return sum;
};
