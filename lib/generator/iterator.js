/**
 * 与iterator 之间的关系
 * 上一章说过，任意一个对象的 Symbol.iteraotr 方法，等于该对象的遍历器生成函数，调用该出炒买函数调用该函数会返回对象的一个遍历器对象
 */

/**
 * 由于generator 函数就是遍历器生成函数，因此可以把Generator 赋值给对象的 Symbol.iteraotr 属性，从而使得该对象具有iterator 接口
 */

var myIterator = {};

myIterator[Symbol.iterator] = function* () {
  yield 1;
  yield 2;
  yield 3;
};

console.log([...myIterator]);

function* gen() {}

var g = gen();

g[Symbol.iterator]() === g;