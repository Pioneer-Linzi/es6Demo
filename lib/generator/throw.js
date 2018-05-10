'use strict';

/**
 * generator 函数返回的遍胡器对像，都有一个throw 方法，可以在函数体外抛出错误，然后在generator 函数内捕获
 */

var g = /*#__PURE__*/regeneratorRuntime.mark(function g() {
    return regeneratorRuntime.wrap(function g$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.prev = 0;
                    _context.next = 3;
                    return 21;

                case 3:
                    _context.next = 8;
                    break;

                case 5:
                    _context.prev = 5;
                    _context.t0 = _context['catch'](0);

                    console.log('内部捕获', _context.t0);

                case 8:
                    _context.next = 10;
                    return 21;

                case 10:
                case 'end':
                    return _context.stop();
            }
        }
    }, g, this, [[0, 5]]);
});

var i = g();
i.next();

try {
    i.throw('a');
    i.throw('b');
} catch (e) {
    console.log('外部捕获', e);
}

var g = /*#__PURE__*/regeneratorRuntime.mark(function g() {
    return regeneratorRuntime.wrap(function g$(_context2) {
        while (1) {
            switch (_context2.prev = _context2.next) {
                case 0:
                    _context2.prev = 0;
                    _context2.next = 3;
                    return;

                case 3:
                    _context2.next = 8;
                    break;

                case 5:
                    _context2.prev = 5;
                    _context2.t0 = _context2['catch'](0);

                    console.log(_context2.t0);

                case 8:
                case 'end':
                    return _context2.stop();
            }
        }
    }, g, this, [[0, 5]]);
});
var i = g();
i.next();
i.throw(new Error('出错了'));

var err = /*#__PURE__*/regeneratorRuntime.mark(function err() {
    return regeneratorRuntime.wrap(function err$(_context3) {
        while (1) {
            switch (_context3.prev = _context3.next) {
                case 0:
                    if (!true) {
                        _context3.next = 13;
                        break;
                    }

                    _context3.prev = 1;
                    _context3.next = 4;
                    return;

                case 4:
                    _context3.next = 11;
                    break;

                case 6:
                    _context3.prev = 6;
                    _context3.t0 = _context3['catch'](1);

                    if (!(_context3.t0 != 'a')) {
                        _context3.next = 10;
                        break;
                    }

                    throw _context3.t0;

                case 10:
                    console.log('内部捕获', _context3.t0);

                case 11:
                    _context3.next = 0;
                    break;

                case 13:
                case 'end':
                    return _context3.stop();
            }
        }
    }, err, this, [[1, 6]]);
});

var i = g();
i.next();

try {
    throw new Error('a');
    throw new Error('b');
} catch (e) {
    console.log(console.log('外部捕获', e));
}