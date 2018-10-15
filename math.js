'use strict';

exports.isStar = true;

exports.sum = function (a, b) {
    var a = parseNum(a);
    var b = parseNum(b);

    if (!a || !b) {
        return false;
    }

    return a + b;
};

function parseNum(n) {
    var n = +n;

    if (n == NaN) {
        return false;
    }

    return n;
}
