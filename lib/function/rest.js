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