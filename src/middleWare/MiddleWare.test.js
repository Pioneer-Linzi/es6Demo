import {MiddleWare} from "./MiddleWare";

var middleWare=new MiddleWare();

test('test middle ware',()=>{
    middleWare.use(function(req,next){
        console.log('1');
        next();
    });
    middleWare.use(function(req,next){
        console.log('2');
        next();
    });
    middleWare.use(function(req,next){
        console.log('3');
        console.log(req);
        next();
    });
    middleWare.start('req');
    // expect(middleWare.use('test')).toThrow();
});



test('middle use most a fn',()=>{
    expect(()=>{
        middleWare.use('test')
    }).toThrow(/function/);
});