/**
 * generator 函数返回的遍胡器对像，都有一个throw 方法，可以在函数体外抛出错误，然后在generator 函数内捕获
 */

var g = function* () {

    try {
        yield 21;
    } catch (e) {
        console.log('内部捕获', e);
    }
    yield 21;
};

var i = g();
i.next();

try {
    i.throw('a');
    i.throw('b');
} catch (e) {
    console.log('外部捕获', e);
}

var g = function* () {
    try {
        yield;
    } catch (e) {
        console.log(e);
    }
};
var i = g();
i.next();
i.throw(new Error('出错了'));

var err = function* () {
    while (true) {
        try {
            yield;
        } catch (e) {
            if (e != 'a') throw e;
            console.log('内部捕获', e);
        }
    }
};

var i = g();
i.next();

try {
    throw new Error('a');
    throw new Error('b');
} catch (e) {
    console.log(console.log('外部捕获', e));
}