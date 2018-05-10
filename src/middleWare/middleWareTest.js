import {MiddleWare} from "./MiddleWare";

var middleWare=new MiddleWare();
middleWare.use(function(next){
    console.log('1');
    next();
});
middleWare.use(function(next){
    console.log('2');
    next();
});
middleWare.use(function(next){
    console.log('3');
    next();
});
middleWare.start();