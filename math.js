'use strict';

exports.isStar = true;

exports.sum = function (a, b) {
    var oneArg = parseFloat(a);
    var twoArg = parseFloat(b);
    if (!isNaN(oneArg) && !isNaN(twoArg)) {
        return oneArg + twoArg;
    }
};

exports.sum = function (a, b, c) {
    var oneArg = parseFloat(a);
    var twoArg = parseFloat(b);
    var threeArg = parseFloat(c);
    if (!isNaN(oneArg) && !isNaN(twoArg) && !isNaN(threeArg)) {
        return oneArg + twoArg + threeArg;
    }
};
