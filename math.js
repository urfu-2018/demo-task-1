'use strict';

exports.isStar = true;

exports.sum = function (a, b) {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
};
