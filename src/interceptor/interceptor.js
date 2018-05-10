Function.prototype.before=function(fn){
    var self=this;
    return function(){
        var bool=fn.call(this);
        if(bool) self.apply(this,arguments);
    }
}


function createTime (param){
    console.log('createTime');
    console.log(param);
}

function report(){
    console.log('report');
    return true;
}

function validate(){
    console.log('validate');
    return true;
}


createTime.before(report).before(validate)('createparam');

