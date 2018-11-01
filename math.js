'use strict';

exports.isStar = true;

exports.sum = function () {
    var result = 0;

    for (var i = 0; i < arguments.length; i++) {
        result += Number(arguments[i]);
    }

    return result;
};
