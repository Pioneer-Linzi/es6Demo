'use strict';

var promise = new Promise(function (resolve, reject) {
    // resolve('this s params');
    reject('this reject ');
});

promise.then(function (value) {
    console.log('this then');
}).catch(function (value) {
    console.log(value);
});