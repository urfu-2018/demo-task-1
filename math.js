'use strict';

exports.isStar = true;

exports.sum = function (...nums) {
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        if (!isNaN(nums[i])) {
            sum += Number(nums[i]);
        }
    }

    return sum;
};
