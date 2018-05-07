/**
 * learn async 
 * 
 */


var fetch = require('node-fetch');
function* gen(){
  var url = 'https://api.github.com/users/github';
  var result = yield fetch(url);
}
const g=gen();


function timeout(ms){
    return new Promise((resolve)=>{
        setTimeout(resolve,ms);
    });
}

async function asyncPrint(value,ms){
    await timeout(ms);
    console.logs(value);
}


asyncPrint('hello world',5000);
let obj = {
    async foo(){
        return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    resolve();
                    console.log('start');
                },10000);
        });
    }
}

obj.foo().then(function(){
    console.logs('finish...');
});