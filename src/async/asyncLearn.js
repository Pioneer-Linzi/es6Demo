/**
 * learn async 
 * 
 */


var fetch = require('node-fetch');
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


async function getTitle (url){
    let resp = await fetch(url);
    let html = await resp.text();
    return html.match(/<title>([\s\S]+)<\/title>/i)[1];
    // let html = await resp.text();
    // console.logs('start');
    // return html;
}

getTitle('https://tc39.github.io/ecma262/').then(console.logs);