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

var full = ({ firstName, lastName }) => firstName + ' ' + lastName;

console.log(full({ firstName: "firstName", lastName: "lastname" }));


const isEven = n => n % 2 == 0;



/**
 * 正常函数写法
 */


[1, 2, 3].map(function(x) {
    return x * x;
});

[1, 2, 3].map(x => x * x);


function foo() {
    setTimeout(() => {
        console.log('id', this.id);
    }, 100);
}

var id = 21;
foo.call({
    id: 42
});




function Timer() {
    this.s1 = 0;
    this.s2 = 0;
    constructor = () => console.log("init class");

    // 箭头函数
    setInterval(() => this.s1++, 1000);
    // 普通函数
    setInterval(function() {
        this.s2++;
    }, 1000);
}



var timer = new Timer();

console.log(timer.s1);
console.log(timer.s2);

setTimeout(() => console.log('s1: ', timer.s1), 3100);
setTimeout(() => console.log('s2: ', timer.s2), 3100);
// s1: 3
// s2: 0