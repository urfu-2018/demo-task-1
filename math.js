'use strict';

exports.isStar = true;

exports.sum = function (a, b) 
{
    oneArg = parseFloat(a);
    twoArg = parseFloat(b);
    if (!oneArg.isNaN && !twoArg.isNaN)
    {
        return oneArg+twoArg;
    }
};

exports.sum = function (a, b, c)
{
    oneArg = parseFloat(a);
    twoArg = parseFloat(b);
    threeArg = parseFloat(c);
    if (!oneArg.isNaN && !twoArg.isNaN && !threeArg.isNaN)
	{
	    return oneArg+twoArg+threeArg;
	}
}
