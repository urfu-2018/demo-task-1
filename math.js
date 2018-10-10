'use strict';

exports.isStar = true;
exports.sum = sum;

function sum() {
    let result = 0;
    for (let i = 0; i < arguments.length; i++) {
        let number = parseInt(arguments[i], 10);
        if (number) {
            result += number;
        } else {
            return NaN;
        }
    }

    return result;
}
