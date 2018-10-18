'use strict';

exports.isStar = true;

exports.sum = function (a, b) {
    let sum = 0;
    if (typeof(a)==='number' && typeof(b)==='number') {
        sum = a + b;
        return sum;
    } else if (typeof(a)==='number' || typeof(b)==='number') {
        sum = Number(a) + Number(b);
        return sum;
    } else return;
};

