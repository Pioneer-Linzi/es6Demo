'use strict';

var name = 'zach';

while (true) {
    var name = 'obama';
    console.log(name);
    break;
}

console.log(name);

while (true) {
    var _name = 'tanghuang';
    console.log(_name);
    break;
}

console.log(name);

var a = [];

for (var i = 0; i < 10; i++) {
    a[i] = function () {
        console.log(i);
    };
}
a[6]();

var a = [];

var _loop = function _loop(_i) {
    a[_i] = function () {
        console.log(_i);
    };
};

for (var _i = 0; _i < 10; _i++) {
    _loop(_i);
}
a[6]();