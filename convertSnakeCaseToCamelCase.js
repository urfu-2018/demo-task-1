'use strict';

exports.convertSnakeCaseToCamelCase = function (str) {
    let splittedStr = str.split('_');
    let result = splittedStr[0];
    for (const part of splittedStr.slice(1)) {
        result += part[0].toUpperCase() + part.slice(1);
    }

    return result;
};

// console.log(
//     convertSnakeCaseToCamelCase('a_b'), //aB
//     convertSnakeCaseToCamelCase('a_b_c'), //aBC
//     convertSnakeCaseToCamelCase('snake_case_var'), //snakeCaseVar
// )

// console.log(
//     convertSnakeCaseToCamelCase('a_b') === 'aB', //aB
//     convertSnakeCaseToCamelCase('a_b_c') === 'aBC', //aBC
//     convertSnakeCaseToCamelCase('snake_case_var') === 'snakeCaseVar', //snakeCaseVar
// )
