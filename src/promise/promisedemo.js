let timeout = (ms) => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms, 'done');
    });
}

timeout(1000).then((value) => {
    console.log(value);
});


let promise = new Promise((resolve, reject) => {
    console.log('Promise');
    resolve();
});

promise.then(() => {
    console.log('Resolved.');
});

console.log('Hi!');