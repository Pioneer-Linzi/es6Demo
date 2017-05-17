/**
	es6的function的新增的东西 
*/


//函数的参数的默认值 


function log(x,y='world'){
	console.log(x,y);
}

log('this is x,y is default');
log('this is x,y is not default','this is y');



/**
 * es6的写法比es5的简洁很多，除了简洁之外，更直观，不用看函数的文档，
 */

function Position(x=0,y=0){
	this.x=x;
	this.y=y;
}
var p=new Position();
console.log(p);


/**
 *参数的变量默认是声明的，所以不能用let或const 再次声明
*/
function fperror(x=5){
	//let x=1; //error
	//const x=2;//error
}

/**
 * 当然也不能出现同明的参数
 */

//function(x,x,y=1){
//
//}

/**
 * 如果这里的参数的默认值是变量，那么参数就不是传值的，而是每次都重新计篚默认值表达式的值，也就是说，参数默认会下是惰性求值的。
 *
 */

let x= 99;

function foo (p= x+1){
	console.log(p);
}

foo() //100

x=100;

foo();// l01

/**
 * 函数的传参也可以变量的解构赋值进行 
 * 只有参数是一个对象时，默认的值才有用，为空的时候，都会报昏
 */


function foo({x,y=5}){
	console.log(x,y);
}

foo({});
foo({x:1});
foo({x:1,y:2});
//foo();



function fetch(url,{body='',method='GET',headers={}}){
	console.log(method);
}

//get
fetch('http://example.com',{});
//error
//fetch('http://example.com');



// 
function m1({x=0,y=0}={}){
	return [x,y];
}

//two
function m2({x,y}={x:0,y:0}){
	return [x,y]
}

m1();
m2();


m1({x:3,y:8});
m2({x:3,y:8});


m1({});
m2({});


m1({z:3});
m2({z:3});



/**
 * 函数的length属性
 *
 * 函数的参数的长度
 * 这个参数的长度，不含
 */


(function(a){}).lenght


/**
 * 作用域
 */


//一旦设置了参数的默认值，函数朝进行声明初始化时，参数会形成一个单独的作用域context ，等到初始化结束，这个作用域就会消失，这种语法行为，在不设置参数默认值时，是不会出现的。
//

var x137=1;
function f(x137,y=x137){
	console.log(y);
}

f(2);//2


/**
 * 上面的代码中参数y 是默认值竺于变量x ，调用函数f 时，参数形成一个单独的偛上域。在这个作用域里面，默认值变量x 指向第一个参数x，而不是全局变量x,所以输出是2 
 *
 * 、
 */

let x151=1;

function f(y=x151){
	let x151=2; 
	console.log(y);
}

f();//1


function ff(y=x1){
	let x1=2;
	console.log(y);
}

ff();

// 这里的x1就是没有定义的，所以，这里会报错
//
//
var x171=1;

function foo(x171=x171){

}

foo();

//x=x 形成一个单独作用域，实际执行的是let x=x ,由于暂时性死区的原因，这行代码会报错 x 没有定义


//如果参数的默认值是一个函数，该函数的作用域也遵守这个规则，
//
let foo= 'outer';

function bar (func = x =>foo){
	let foot='inner';
	console.log(func());
}

bar();




