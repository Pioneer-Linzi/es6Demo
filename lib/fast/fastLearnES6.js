var name = 'zach';

while (true) {
    var name = 'obama';
    console.log(name);
    break;
}

console.log(name);

while (true) {
    let name = 'tanghuang';
    console.log(name);
    break;
}

console.log(name);

var a = [];

for (var i = 0; i < 10; i++) {
    a[i] = function () {
        console.log(i);
    };
}
a[6]();

var a = [];

for (let i = 0; i < 10; i++) {
    a[i] = function () {
        console.log(i);
    };
}
a[6]();