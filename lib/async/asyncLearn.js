'use strict';

var asyncPrint = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(value, ms) {
        return regeneratorRuntime.wrap(function _callee$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.next = 2;
                        return timeout(ms);

                    case 2:
                        console.logs(value);

                    case 3:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee, this);
    }));

    return function asyncPrint(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var _marked = /*#__PURE__*/regeneratorRuntime.mark(gen);

/**
 * learn async 
 * 
 */

var fetch = require('node-fetch');
function gen() {
    var url, result;
    return regeneratorRuntime.wrap(function gen$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    url = 'https://api.github.com/users/github';
                    _context.next = 3;
                    return fetch(url);

                case 3:
                    result = _context.sent;

                case 4:
                case 'end':
                    return _context.stop();
            }
        }
    }, _marked, this);
}
var g = gen();

function timeout(ms) {
    return new Promise(function (resolve) {
        setTimeout(resolve, ms);
    });
}

asyncPrint('hello world', 5000);
var obj = {
    foo: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            return _context3.abrupt('return', new Promise(function (resolve, reject) {
                                setTimeout(function () {
                                    resolve();
                                    console.log('start');
                                }, 10000);
                            }));

                        case 1:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee2, this);
        }));

        function foo() {
            return _ref2.apply(this, arguments);
        }

        return foo;
    }()
};

obj.foo().then(function () {
    console.logs('finish...');
});
