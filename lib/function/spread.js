'use strict';

var _console, _console2;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/*
spread 扩展运算符，是三个点， 它好比是rest 的逆运算，将一个数组转为用整整分隔的参数的序列
*/

(_console = console).log.apply(_console, [1, 2, 3]);

(_console2 = console).log.apply(_console2, [1].concat([2, 3, 34], [4]));
// 主要用于函数的调用

function push(array) {
    for (var _len = arguments.length, items = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        items[_key - 1] = arguments[_key];
    }

    array.push.apply(array, items);
}

function add(x, y) {
    return x + y;
}
var numbers = [4, 28];
console.log(add.apply(undefined, numbers));

var more = [3, 4];
// es5 

console.log([1, 2].concat(more));

console.log([1, 2].concat(more));

//实现了iterator 接口的对象
var arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
};

var arr = Array.from(arrayLike);
console.log(arr);

// map set 结构 generator函数
var map = new Map([[1, 'one'], [2, 'two'], [3, 'three']]);
console.log(map.keys());

var arrmap = [].concat(_toConsumableArray(map.keys()));

console.log(arrmap);