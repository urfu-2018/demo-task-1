'use strict';

exports.isStar = true;

exports.sum = function (a, b) 
{
    if (!a.isNaN && !b.isNaN)
    {
        return a+b;
    }
};

exports.sum = function (a, b, c)
{
    if (!a.isNaN && !b.isNaN && !c.isNaN)
	{
	    return a+b+c;
	}
}
