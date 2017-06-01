// es6的箭头（=>）定义函数

var f = v => v;

// 上面的函数等同于

var f = function(v) {
    return v;
}


var f = () => 5;

var f = function() {
    return 5;
}


var sum = (num1, num2) => num1 + num2;


var sum = function(num1, num2) {
    return num1 + num2;
}

/**
 * 
如果箭头函数的代码块部分多于一条语句，就要使用大插号将它们括起来，并且使用return 语句返回由于大括号被解释为代码块，所以如果箭头函数直接返回一个对象，必须在对象外面加上一个括号

 */

var getTempItem = id => ({
    id: id,
    name: ''
})


/**
 * 箭头函数可以与变量解构结合保用
 */

const full = ({ firstName, lastname }) => firstName + ' ' + lastName;

console.log(full({ firstName: "firstName", lastName: "lastname" }))