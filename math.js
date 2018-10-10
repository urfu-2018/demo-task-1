'use strict';

exports.isStar = true;

exports.sum = function (a, b, c = 0) {
    // Реализуйте сложение в этой функции
    for (var i = 0; i < arguments.length; i ++) {
        if (typeof a !== 'number') {
            a = Number(a);
        }
        if (typeof b !== 'number') {
            b = Number(b);
        }
        if (typeof c !== 'number') {
            c = Number(c);
        }

        return a + b + c;
    }
};
