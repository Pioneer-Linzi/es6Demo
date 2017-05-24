/**
 * 闭包，闭包不是ES6 中才有的，以前没有学好，这里再学习一下
 */

// 第一种解释 function 嵌套 function 时，内部的 function 可以访问 外部的 function 里的变量 


function ff(x) {
    var tmp = 3;

    function f(y) {
        console.log(x + y + ++tmp);
    }
    f(10);
}

ff(2); //16
ff(2); //16

// 这样不管执行多少次 都会console.log()出 16 ，因为bar 能访问 的参数tmp 也都能伪证问 x 
// 但是这还不是闭包，当我把function 里的function return 回来的时候，才是一个闭包，


function ffreturn(x) {
    var tmp = 3;
    return function (y) {
        console.log(x + y + ++tmp);
    };
}
var ffreturn1 = ffreturn(2);
ffreturn1(10); //16
ffreturn1(10); //17

//这里的tmp 也可以看做从外部的function 中访问的变量  ，但是return 之后，就相当于，是其中的副本
// 那问题来了，js 处理 object 时是用到引用传递的，那么，你调用foo 时，传递一个object ,foo 函数return 的闭包也会引用 最初那个object

function fobject(x) {
    var tmp = 3;
    return function (y) {
        console.log(x + y + tmp);
        x.memb = x.memb ? x.memb + 1 : 1;
        console.log(x.memb);
    };
}

var age = new Number(2);
var bar = foo(age);
bar(10);