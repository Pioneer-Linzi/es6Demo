let promise = new Promise((resolve, reject) => {
    // resolve('this s params');
    reject('this reject ');
});

promise.then(value => {
    console.log('this then');
}).catch(value => {
    console.log(value);
});;