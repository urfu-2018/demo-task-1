'use strict';

exports.isStar = true;

exports.sum = function (...args) {
    return args.map(Number).reduce((sum, next) => sum + next);
};
