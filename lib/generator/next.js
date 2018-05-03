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

function* helloWorldGenertor() {
    yield 'hello';
    yield 'world';

    return 'ending';
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


function* demo() {

    console.log('hello' + (yield));
    console.log('hello' + (yield 234123) + 2343);
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

function* f() {
    for (var i = 0; true; i++) {
        var reset = yield i;
        if (reset) {
            i = -1;
        };
    }
}

var g = f();

console.log(g.next());
console.log(g.next());
console.log(g.next(true));
console.log(g.next());

function* foo(x) {
    var y = 2 * (yield x + 1);
    var z = yield y / 3;
    return x + y + z;
}

var a = foo(5);
a.next();
a.next();
a.next();

var b = foo(5);

b.next();
b.next(12);
b.next(13);

function* fibonacci() {
    let [prev, curr] = [0, 1];
    for (;;) {
        [prev, curr] = [curr, prev + curr];
        yield curr;
    }
}

for (let n of fibonacci()) {
    if (n > 100) {
        break;
    }
    console.log(n);
}

function* objectEntries(obj) {
    let propKeys = Reflect.ownKeys(obj);

    for (let propKey of propKeys) {
        yield [propKey, obj[propKey]];
    }
}

let jane = {
    first: 'Jane',
    last: 'Doe'
};
for (let [key, value] of objectEntries(jane)) {
    console.log(`${key}:${value}`);
}

function* numbers() {
    yield 1;
    yield 2;
    return 3;
    yield 4;
}

console.log([...numbers()]);

console.log(Array.from(numbers()));

let [x, y] = numbers();

console.log(x);
console.log(y);

for (let n of numbers()) {
    console.log(n);
}