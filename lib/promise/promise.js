"use strict";/**
 * Promise 含义
 * 异步编程的一个解决方案，比传统的解决方案--回调函数和事件--更合理和更强大，它由社区最早提出和实现，ES6将其写了语言标准统一了写法
 * 原生的提供了promise的对象
 * 
 * 所谓promise 简单说就是一个容器，里面保存着某个未来才会结束的事件，（通常是一个异步操作）的结果，从语法上说，Promise 是一个对象，从它可以获取异步操作的消息 。Promise提供统一的api 各种异步操作都可以用同样的方兴未艾进行
 * 1. 对象的状态不受外界影响。Promise 对象代表一个异步操作，有三种状态；Pending （进行中）， Resolved （已完成）和Rejected （已失败）。只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态，这也是Promise这个名字由来，它的英语意思就是承诺，表示其他手段无法改变
 * 2.一旦状态改变，就不会再变，任何时候都可以得到这个结果。Promise 对象的状态改变，只有两种可能 ： 从 pending 变为Resolved 和从Pending 变为Rejected ,只要这两种情况发生，状态就凝固了，不会再变了，会一直保持这个结果，如果改变已经发生了，你再对Promise对象添加回调函数，也会立即得到这个结果，这与事件Event的完全不同，事件的特点是，如果你错过了它，再去监听，是得不到结果的
 * 
 *//**
 * 基本用法
 * es6 规定，Promise 对象是一个构造函数，用来生成Promise实例
 */var promise=new Promise(function(resolve,reject){if(true){resolve(value)}else{// reject(error);
}});promise.then(function(value){//success
},function(error){//failure 
});/**
 * then 方法可以接受两人回调函数作为参数。第一个回调函数是Promise 对象的状态变成Resolved 时调用。第二个回调函数是Promise的对象状态变为Rejected时调用。其中，第二个函数是可选的
 * 不一定要提供。这两个函数都接受Promise对象传出的值作为参数 
 */