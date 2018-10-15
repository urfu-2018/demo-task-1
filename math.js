'use strict';

exports.isStar = true;

exports.sum = function (a, b) {
    a = parseNum(a);
    b = parseNum(b);

    if (!a || !b) {
        return false;
    }

    return a + b;
};

function parseNum(n) {
    n = Number(n);

    if (isNaN(n)) {
        return false;
    }

    return n;
}
