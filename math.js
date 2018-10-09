'use strict';

exports.isStar = true;

exports.sum = function (a, b) {
    var oneArg = parseInt(a);
    var twoArg = parseInt(b);
    if (!isNaN(oneArg) && !isNaN(twoArg)) {
        return oneArg + twoArg;
    }
};

exports.sum = function (a, b, c) {
    var oneArg = parseint(a);
    var twoArg = parseInt(b);
    var threeArg = parseInt(c);
    if (!isNaN(oneArg) && !isNaN(twoArg) && !isNaN(threeArg)) {
        return oneArg + twoArg + threeArg;
    }
};
