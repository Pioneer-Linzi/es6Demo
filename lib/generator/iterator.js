"use strict";

var _marked = /*#__PURE__*/regeneratorRuntime.mark(gen);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * 与iterator 之间的关系
 * 上一章说过，任意一个对象的 Symbol.iteraotr 方法，等于该对象的遍历器生成函数，调用该出炒买函数调用该函数会返回对象的一个遍历器对象
 */

/**
 * 由于generator 函数就是遍历器生成函数，因此可以把Generator 赋值给对象的 Symbol.iteraotr 属性，从而使得该对象具有iterator 接口
 */

var myIterator = {};

myIterator[Symbol.iterator] = /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return 1;

        case 2:
          _context.next = 4;
          return 2;

        case 4:
          _context.next = 6;
          return 3;

        case 6:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, this);
});

console.log([].concat(_toConsumableArray(myIterator)));

function gen() {
  return regeneratorRuntime.wrap(function gen$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked, this);
}

var g = gen();

g[Symbol.iterator]() === g;