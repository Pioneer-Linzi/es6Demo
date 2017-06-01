// es6的箭头（=>）定义函数

var f = v => v;

// 上面的函数等同于

var f = function (v) {
    return v;
};

var f = () => 5;

var f = function () {
    return 5;
};

var sum = (num1, num2) => num1 + num2;

var sum = function (num1, num2) {
    return num1 + num2;
};