Function.prototype.callBackbefore=function(fn,obj){
    let self= this;
    return function(){
        let arg=arguments;
        fn.call(obj||self,function(){
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



function createTime (param){
    console.log('createTime');
    console.log(param);
}

function Report (){
    this.time=213424
}
Report.prototype.report=function(cb){
    console.log('report');
    console.log(this.time);
    setTimeout(function(){
        cb();
    },1000);
    return true;
}

function validate(){
    console.log('validate');
    return true;
}
var req= new Report();

reward.callBackbefore(req.report,req)('rwadsdf');