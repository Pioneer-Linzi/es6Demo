'use strict';var timeout=function timeout(ms){return new Promise(function(resolve,reject){setTimeout(resolve,ms,'done')})};timeout(1000).then(function(value){console.log(value)});var promise=new Promise(function(resolve,reject){console.log('Promise');resolve()});promise.then(function(){console.log('Resolved.')});console.log('Hi!');// let loadImageAsync = url => {
//     return new Promise((resolve, reject) => {
//         let image = new Image();
//         image.onload = () => {
//             resolve(image);
//         }
//         image.onerror = () => {
//             reject(new Error('Could not load image at ' + url));
//         }
//         image.src = url;
//     });
// }
// /**
//  * 上面的代码中，使用 Promise 包装了一个图片加载的异步操作，如果加载成功，就调用resolve 方法，否则就调用reject 方法
//  */
// var getJSON = function(url) {
//     var promise = new Promise(function(resolve, reject) {
//         var client = new XMLHttpRequest();
//         client.open("GET", url);
//         client.onreadystatechange = handler;
//         client.responseType = "json";
//         client.setRequestHeader("Accept", "application/json");
//         client.send();
//         function handler() {
//             if (this.readyState !== 4) {
//                 return;
//             }
//             if (this.status === 200) {
//                 resolve(this.response);
//             } else {
//                 reject(new Error(this.statusText));
//             }
//         };
//     });
//     return promise;
// };
// getJSON("/posts.json").then(function(json) {
//     console.log('Contents: ' + json);
// }, function(error) {
//     console.error('出错了', error);
// });
console.log('logo');var p1=new Promise(function(resolve,reject){console.log('loading p1');setTimeout(function(){return reject(new Error('fail'))},3000)});var p2=new Promise(function(resolve,reject){console.log('loading p2');setTimeout(function(){return resolve(p1)},1000);reject(p1)});p2.then(function(result){return console.log(result)}).catch(function(error){return console.log(error)});