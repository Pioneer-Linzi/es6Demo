import {MiddleWare} from "./MiddleWare";

var middleWare=new MiddleWare();
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