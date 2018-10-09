'use strict';

exports.isStar = true;

exports.sum = function (a, b) 
{
    oneArg = parseFloat(a);
    twoArg = parseFloat(b);
    if (!isNaN(oneArg) && !isNaN(twoArg))
    {
        return oneArg+twoArg;
    }
};

exports.sum = function (a, b, c)
{
    oneArg = parseFloat(a);
    twoArg = parseFloat(b);
    threeArg = parseFloat(c);
    if (!isNaN(oneArg) && !isNaN(twoArg) && !isNaN(threeArg))
	{
	    return oneArg+twoArg+threeArg;
	}
}
