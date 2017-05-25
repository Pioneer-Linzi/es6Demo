// rest 参数

/**
 * es6 引入rest 参数（...变量名） 用于获取函数的多余参数，这样就不用再使用 arguments 对象了，rest 参数
 */

function add(...values) {
    let sum = 0;
    for (let val of values) {
        sum += val;
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
const sortNumbers = (...numbers) => numbers.sort();

// 上面代码的两种写法，rest 更自然，更简洁 rest 参数中的变量 代表一个数组，所以特有的方法都可以用于这个变量 ，

function push(array, ...items) {
    items.forEach(function (item) {
        array.push(item);
        console.log(item);
    });
}
var a = [];
push(a, 1, 2, 3);
console.log(a);