'use strict';

exports.isStar = true;

exports.sum = function (a, b, _c) {
    return Number(a) + Number(b) + (_c ? Number(_c) : 0);
};
