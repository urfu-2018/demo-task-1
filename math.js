'use strict';

exports.isStar = true;

exports.sum = function (a, b) {
    if (!Number.isFinite(a) || !Number.isInteger(b)) {
        throw new TypeError();
    }    
    
    return Number.parseFloat(a) + Number.parseFloat(b);
};
