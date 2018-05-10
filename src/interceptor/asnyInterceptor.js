Function.prototype.callBackbefore=function(fn){
    let self= this;
    return function(){
        fn.call(self,function(){
            self.apply(self,self.arguments);
        });

    }
}


/**
 * 登录之后才可以领奖
 */
function reward (){
    console.log('reward');
}
function callbackBefor(cb){
    console.log('start valite');
    setTimeout(function(){
        //login
        cb();
    },10000);
}

reward.callBackbefore(callbackBefor)();