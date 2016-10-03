/* eslint-env mocha */
'use strict';

var sum = require('../math').sum;
var assert = require('assert');

describe('Math', function () {
    describe('sum', function () {
        it('should sum `1` and `2`', function () {
            var actual = sum(1, 2);

            assert.strictEqual(actual, 3);
        });
    });
});
