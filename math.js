'use strict';

exports.isStar = true;

exports.sum = function (a, b, c) {
    if(arguments.length==2) return a + b;
    return a + b + c;
};
