/**
 * 方法的name的属性，
 * 函数有name 属性，返回函数名，对象方法也是函数，因此也有name的属性
 * 
 * 
 */

const person = {
    sayName() {
        console.log('hello');
    }
};

console.log(person.sayName.name);

const obj = {
    get foo() {},
    set foo(x) {}
};

//obj.foo.name 没有name 的property of undefined
const descriptor = Object.getOwnPropertyDescriptor(obj, 'foo');

console.log(descriptor.get.name);
console.log(descriptor.set.name);

//Object.is()
/**
 * ES5 比较两个值是否相等，只有两个运算符，相等运算符，和严格相等运算符 ===  它们都有缺点，前者会自动转换数据类型，
 */

console.log(Object.is('foo', 'foo'));

console.log(Object.is({}, {}));