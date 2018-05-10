"use strict";

// rest 参数

/**
 * es6 引入rest 参数（...变量名） 用于获取函数的多余参数，这样就不用再使用 arguments 对象了，rest 参数
 */

function add() {
    var sum = 0;

    for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
        values[_key] = arguments[_key];
    }

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = values[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var val = _step.value;

            sum += val;
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    return sum;
}

console.log(add(4, 15, 10));

// 上面代码的add 函数是一个求各函数，利用rest参数，可以向函数传入任意数目的参数

// 下面是一个rest 参数代替arguments 变量的例子


function sortNumberarguments() {
    return Array.prototype.slice.call(arguments).sort();
}

//rest 参数的写法
var sortNumbers = function sortNumbers() {
    for (var _len2 = arguments.length, numbers = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        numbers[_key2] = arguments[_key2];
    }

    return numbers.sort();
};

// 上面代码的两种写法，rest 更自然，更简洁 rest 参数中的变量 代表一个数组，所以特有的方法都可以用于这个变量 ，

// rest 参数之后，不能有别的参数 函数的 length 属性 不包括参数
function push(array) {
    for (var _len3 = arguments.length, items = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        items[_key3 - 1] = arguments[_key3];
    }

    items.forEach(function (item) {
        array.push(item);
        console.log(item);
    });
}
var a = [];
push(a, 1, 2, 3);
console.log(a);