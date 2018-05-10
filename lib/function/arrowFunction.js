'use strict';// es6的箭头（=>）定义函数
var f=function f(v){return v};// 上面的函数等同于
var f=function f(v){return v};var f=function f(){return 5};var f=function f(){return 5};var sum=function sum(num1,num2){return num1+num2};var sum=function sum(num1,num2){return num1+num2};/**
 * 
如果箭头函数的代码块部分多于一条语句，就要使用大插号将它们括起来，并且使用return 语句返回由于大括号被解释为代码块，所以如果箭头函数直接返回一个对象，必须在对象外面加上一个括号

 */var getTempItem=function getTempItem(id){return{id:id,name:''}};/**
 * 箭头函数可以与变量解构结合保用
 */var full=function full(_ref){var firstName=_ref.firstName,lastName=_ref.lastName;return firstName+' '+lastName};console.log(full({firstName:'firstName',lastName:'lastname'}));var isEven=function isEven(n){return n%2==0};/**
 * 正常函数写法
 */[1,2,3].map(function(x){return x*x});[1,2,3].map(function(x){return x*x});function foo(){var _this=this;setTimeout(function(){console.log('id',_this.id)},100)}var id=21;foo.call({id:42});function Timer(){var _this2=this;this.s1=0;this.s2=0;constructor=function constructor(){return console.log('init class')};// 箭头函数
setInterval(function(){return _this2.s1++},1000);// 普通函数
setInterval(function(){this.s2++},1000)}var timer=new Timer;console.log(timer.s1);console.log(timer.s2);setTimeout(function(){return console.log('s1: ',timer.s1)},3100);setTimeout(function(){return console.log('s2: ',timer.s2)},3100);// s1: 3
// s2: 0