'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var _marked = /*#__PURE__*/regeneratorRuntime.mark(helloWorldGenertor),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(demo),
    _marked3 = /*#__PURE__*/regeneratorRuntime.mark(f),
    _marked4 = /*#__PURE__*/regeneratorRuntime.mark(foo),
    _marked5 = /*#__PURE__*/regeneratorRuntime.mark(fibonacci),
    _marked6 = /*#__PURE__*/regeneratorRuntime.mark(objectEntries),
    _marked7 = /*#__PURE__*/regeneratorRuntime.mark(numbers);

/**
 * generator 函数是es6 提供的一种异步编程解决方案，语法行为与传统函数完全不同，本章详细介绍 generator 函数的语法和api 
 * 
 * 
 * 执行 generator 函数会返回一个遍历器对像，也就是说，generatore函数除了状态机，还是一个遍历器对象生成函数，返回的遍历器对象，可以依次遍历generator 函数内部的第一个状态
 * 
 * 
 */

/**
 *  1. Generator 函数是一个普通函数，但是有两个特征，一个是，functiono 关键字与函数名之间有整体上星号，
 *  2. 函数体内部使用 yield 表达式，定义不同的内部状态 （yield 在英语里的意思就是产出）
 *      
 */

function helloWorldGenertor() {
    return regeneratorRuntime.wrap(function helloWorldGenertor$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.next = 2;
                    return 'hello';

                case 2:
                    _context.next = 4;
                    return 'world';

                case 4:
                    return _context.abrupt('return', 'ending');

                case 5:
                case 'end':
                    return _context.stop();
            }
        }
    }, _marked, this);
}

var hw = helloWorldGenertor();

/**
 *  上面代码定义一个Generator 函数 helloWorldGenerator 它内部有两个yield 表达式 ，一个hello world 即这个函数有个三个状态 ， hello world  和retrun 语句 结整执行
 *  然后  gengerator 函数的调用方法与普通函数一样，也是在函数名后面加一个对圆括号，不同的是，调用Generator 函数，该函数并不执行，返回的也不是函数运行结果，而是一个指向内部
 * 状态的指针对象，也就是iterator Object  
 * 
 * 下一步，必须调用遍历器对象的next 方法，使得指针移向下一个状态。也就是说，每次调用next方法，内部指针就从函数的内部指针就从函数头部或上一次停下来的地方开始执行，直到遇到下一个yield 表达工，或return 语句为止，换言之，generator 函数是分段执行的，
 * yield 表达式是暂停执行的标记，而next 方法可以恢复执行
 */

var next1 = hw.next();
console.log(next1);

console.log(hw.next());

console.log(hw.next());

console.log(hw.next());

/**
 * 上面的代码一共调用了四次， next方法。
 * 第一次调用的 generator 函数开始执行，直到遇到第一个yield 表达式为止。next 方法返回一个对象，它的value 属性就是当前的yield 表达工的值 hello ， done 属性的值false ，表示遍历还没有结事
 * 第二次调用，generator  函数从上次yield 表达式停下的地方，一直执行到一个yield 表达式。next方法返回对象的value 的属性就是肖前yield 表达工的值 world 
 * done 属性的值false 表示 遍历的还没有结束 。
 * 
 * 第三次调用 generator 函数从上次yield 表达式停下的地方，一直执行到return 语句 （如果没有return 语句，就执行函数结束 。）next 方法返回的对象 value 属性，就是紧跟在return 的语句后面的表达式的值（如果没有return 语句，则value 属性的值为 undefined ）, done 属性的值true  
 * 
 * 第四次调用的
 */

// yield 表达式只能用在generator 函数里面，用在其他地方都会报错


// yield 表达式如果用在另一个表达式之中，必须放在圆插号里面


function demo() {
    return regeneratorRuntime.wrap(function demo$(_context2) {
        while (1) {
            switch (_context2.prev = _context2.next) {
                case 0:
                    _context2.t0 = console;
                    _context2.next = 3;
                    return;

                case 3:
                    _context2.t1 = _context2.sent;
                    _context2.t2 = 'hello' + _context2.t1;

                    _context2.t0.log.call(_context2.t0, _context2.t2);

                    _context2.t3 = console;
                    _context2.next = 9;
                    return 234123;

                case 9:
                    _context2.t4 = _context2.sent;
                    _context2.t5 = 'hello' + _context2.t4;
                    _context2.t6 = _context2.t5 + 2343;

                    _context2.t3.log.call(_context2.t3, _context2.t6);

                case 13:
                case 'end':
                    return _context2.stop();
            }
        }
    }, _marked2, this);
}

var de = demo();
de.next();
de.next();
de.next();

/**
 * next 方法的参数 
 * yield 表达式本身没有返回值，或者说总是返回undefined .
 * next 方法能以带一个参数，该参数就会被当作一个yield 表达式的返回值
 */

function f() {
    var i, reset;
    return regeneratorRuntime.wrap(function f$(_context3) {
        while (1) {
            switch (_context3.prev = _context3.next) {
                case 0:
                    i = 0;

                case 1:
                    if (!true) {
                        _context3.next = 10;
                        break;
                    }

                    _context3.next = 4;
                    return i;

                case 4:
                    reset = _context3.sent;

                    if (reset) {
                        i = -1;
                    };

                case 7:
                    i++;
                    _context3.next = 1;
                    break;

                case 10:
                case 'end':
                    return _context3.stop();
            }
        }
    }, _marked3, this);
}

var g = f();

console.log(g.next());
console.log(g.next());
console.log(g.next(true));
console.log(g.next());

function foo(x) {
    var y, z;
    return regeneratorRuntime.wrap(function foo$(_context4) {
        while (1) {
            switch (_context4.prev = _context4.next) {
                case 0:
                    _context4.next = 2;
                    return x + 1;

                case 2:
                    _context4.t0 = _context4.sent;
                    y = 2 * _context4.t0;
                    _context4.next = 6;
                    return y / 3;

                case 6:
                    z = _context4.sent;
                    return _context4.abrupt('return', x + y + z);

                case 8:
                case 'end':
                    return _context4.stop();
            }
        }
    }, _marked4, this);
}

var a = foo(5);
a.next();
a.next();
a.next();

var b = foo(5);

b.next();
b.next(12);
b.next(13);

function fibonacci() {
    var prev, curr, _ref;

    return regeneratorRuntime.wrap(function fibonacci$(_context5) {
        while (1) {
            switch (_context5.prev = _context5.next) {
                case 0:
                    prev = 0, curr = 1;

                case 1:
                    _ref = [curr, prev + curr];
                    prev = _ref[0];
                    curr = _ref[1];
                    _context5.next = 6;
                    return curr;

                case 6:
                    _context5.next = 1;
                    break;

                case 8:
                case 'end':
                    return _context5.stop();
            }
        }
    }, _marked5, this);
}

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = fibonacci()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var n = _step.value;

        if (n > 100) {
            break;
        }
        console.log(n);
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

function objectEntries(obj) {
    var propKeys, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, propKey;

    return regeneratorRuntime.wrap(function objectEntries$(_context6) {
        while (1) {
            switch (_context6.prev = _context6.next) {
                case 0:
                    propKeys = Reflect.ownKeys(obj);
                    _iteratorNormalCompletion2 = true;
                    _didIteratorError2 = false;
                    _iteratorError2 = undefined;
                    _context6.prev = 4;
                    _iterator2 = propKeys[Symbol.iterator]();

                case 6:
                    if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                        _context6.next = 13;
                        break;
                    }

                    propKey = _step2.value;
                    _context6.next = 10;
                    return [propKey, obj[propKey]];

                case 10:
                    _iteratorNormalCompletion2 = true;
                    _context6.next = 6;
                    break;

                case 13:
                    _context6.next = 19;
                    break;

                case 15:
                    _context6.prev = 15;
                    _context6.t0 = _context6['catch'](4);
                    _didIteratorError2 = true;
                    _iteratorError2 = _context6.t0;

                case 19:
                    _context6.prev = 19;
                    _context6.prev = 20;

                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }

                case 22:
                    _context6.prev = 22;

                    if (!_didIteratorError2) {
                        _context6.next = 25;
                        break;
                    }

                    throw _iteratorError2;

                case 25:
                    return _context6.finish(22);

                case 26:
                    return _context6.finish(19);

                case 27:
                case 'end':
                    return _context6.stop();
            }
        }
    }, _marked6, this, [[4, 15, 19, 27], [20,, 22, 26]]);
}

var jane = {
    first: 'Jane',
    last: 'Doe'
};
var _iteratorNormalCompletion3 = true;
var _didIteratorError3 = false;
var _iteratorError3 = undefined;

try {
    for (var _iterator3 = objectEntries(jane)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var _step3$value = _slicedToArray(_step3.value, 2),
            key = _step3$value[0],
            value = _step3$value[1];

        console.log(key + ':' + value);
    }
} catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
        }
    } finally {
        if (_didIteratorError3) {
            throw _iteratorError3;
        }
    }
}

function numbers() {
    return regeneratorRuntime.wrap(function numbers$(_context7) {
        while (1) {
            switch (_context7.prev = _context7.next) {
                case 0:
                    _context7.next = 2;
                    return 1;

                case 2:
                    _context7.next = 4;
                    return 2;

                case 4:
                    return _context7.abrupt('return', 3);

                case 7:
                case 'end':
                    return _context7.stop();
            }
        }
    }, _marked7, this);
}

console.log([].concat(_toConsumableArray(numbers())));

console.log(Array.from(numbers()));

var _numbers = numbers(),
    _numbers2 = _slicedToArray(_numbers, 2),
    x = _numbers2[0],
    y = _numbers2[1];

console.log(x);
console.log(y);

var _iteratorNormalCompletion4 = true;
var _didIteratorError4 = false;
var _iteratorError4 = undefined;

try {
    for (var _iterator4 = numbers()[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
        var _n2 = _step4.value;

        console.log(_n2);
    }
} catch (err) {
    _didIteratorError4 = true;
    _iteratorError4 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion4 && _iterator4.return) {
            _iterator4.return();
        }
    } finally {
        if (_didIteratorError4) {
            throw _iteratorError4;
        }
    }
}