'use strict';

/**
	es6的function的新增的东西 
*/

//函数的参数的默认值 


function log(x) {
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'world';

  console.log(x, y);
}

log('this is x,y is default');
log('this is x,y is not default', 'this is y');

/**
 * es6的写法比es5的简洁很多，除了简洁之外，更直观，不用看函数的文档，
 */

function Position() {
  var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  this.x = x;
  this.y = y;
}
var p = new Position();
console.log(p);

/**
 *参数的变量默认是声明的，所以不能用let或const 再次声明
*/
function fperror() {
  var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5;
}
//let x=1; //error
//const x=2;//error


/**
 * 当然也不能出现同明的参数
 */

//function(x,x,y=1){
//
//}

/**
 * 如果这里的参数的默认值是变量，那么参数就不是传值的，而是每次都重新计篚默认值表达式的值，也就是说，参数默认会下是惰性求值的。
 *
 */

var x = 99;

function foo() {
  var p = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : x + 1;

  console.log(p);
}

foo(); //100

x = 100;

foo(); // l01

/**
 * 函数的传参也可以变量的解构赋值进行 
 * 只有参数是一个对象时，默认的值才有用，为空的时候，都会报昏
 */

function foo(_ref) {
  var x = _ref.x,
      _ref$y = _ref.y,
      y = _ref$y === undefined ? 5 : _ref$y;

  console.log(x, y);
}

foo({});
foo({ x: 1 });
foo({ x: 1, y: 2 });
foo();