Function.prototype.callBackbefore=function(fn){
    let self= this;
    return function(){
        let arg=arguments;
        fn.call(self,function(){
            self.apply(self,arg);
        });
    }
}


/**
 * 登录之后才可以领奖
 */
function reward (param){
    console.log('reward');
    console.log(param);
}
function callbackBefor(cb){
    console.log('start valite');
    setTimeout(function(){
        //login
        cb();
    },1000);
}

reward.callBackbefore(callbackBefor)('rwadsdf');