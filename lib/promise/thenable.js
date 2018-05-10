"use strict";

var thenable = {
    then: function then(resolve, reject) {
        resolve(42);
    }
};

var p1 = Promise.resolve(thenable);
p1.then(function (value) {
    console.log(value); // 42
});