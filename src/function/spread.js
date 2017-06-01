/*
spread 扩展运算符，是三个点， 它好比是rest 的逆运算，将一个数组转为用整整分隔的参数的序列
*/

console.log(...[1, 2, 3]);

console.log(1, ...[2, 3, 34], 4);
// 主要用于函数的调用

function push(array, ...items) {
    array.push(...items);
}

function add(x, y) {
    return x + y;
}
var numbers = [4, 28];
console.log(add(...numbers));


var more = [3, 4];
// es5 

console.log([1, 2].concat(more));

console.log([1, 2, ...more]);



//实现了iterator 接口的对象
let arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3,
}

let arr = Array.from(arrayLike);
console.log(arr);


// map set 结构 generator函数
let map = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
]);
console.log(map.keys());

let arrmap = [...map.keys()];

console.log(arrmap);