/**
 * learn async 
 * 
 */

var fetch = require('node-fetch');
function* gen() {
    var url = 'https://api.github.com/users/github';
    var result = yield fetch(url);
}
const g = gen();
console.log(g.next().value.then(res => {
    console.log(res);
}).then(res => {
    console.log(res);
}));