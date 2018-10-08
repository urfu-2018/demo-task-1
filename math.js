'use strict';

exports.isStar = true;

exports.sum = function (a, b) {
    // Реализуйте сложение в этой функции
	var floatA = parseFloat(a);
	var floatB = parseFloat(b);
	if (!isNaN(floatA) || !isNaN(floatB)){
			return floatA + floatB;
	}
};
