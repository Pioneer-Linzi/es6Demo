'use strict';

// function* gen(){
//   var url = 'https://api.github.com/users/github';
//   var result = yield fetch(url);
// }
// const g=gen();


// function timeout(ms){
//     return new Promise((resolve)=>{
//         setTimeout(resolve,ms);
//     });
// }

// async function asyncPrint(value,ms){
//     await timeout(ms);
//     console.logs(value);
// }


// asyncPrint('hello world',1000);
// let obj = {
//     async foo(){
//         return new Promise((resolve,reject)=>{
//                 setTimeout(()=>{
//                     resolve();
//                     console.log('start');
//                 },1000);
//         });
//     }
// }

// obj.foo().then(function(){
//     console.logs('finish...');

// });


var getTitle = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(url) {
        var resp, html;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return fetch(url);

                    case 2:
                        resp = _context.sent;
                        _context.next = 5;
                        return resp.text();

                    case 5:
                        html = _context.sent;
                        return _context.abrupt('return', html.match(/<title>([\s\S]+)<\/title>/i)[1]);

                    case 7:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function getTitle(_x) {
        return _ref.apply(this, arguments);
    };
}();

var f = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.next = 2;
                        return Promise.reject('error happen!');

                    case 2:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    }));

    return function f() {
        return _ref2.apply(this, arguments);
    };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * learn async 
 * 
 */

var fetch = require('node-fetch');

var superagent = require('superagent');
var NUM_RETRIES = 3;

getTitle('https://tc39.github.io/ecma262/').then(console.logs);

f().then(function (v) {
    console.logs(v);
}).catch(function (e) {
    return console.log(e);
});