'use strict';

exports.isStar = true;

exports.sum = function (...args) {
    return args.map(Number).reduce((acc, num) => acc + num, 0);
};
