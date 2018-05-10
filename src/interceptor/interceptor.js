Function.prototype.before=function(fn,obj){
    var self=this;
    return function(){
        var bool=fn.call(obj||this);
        if(bool) self.apply(this,arguments);
    }
}


function createTime (param){
    console.log('createTime');
    console.log(param);
}

function Report (){
    this.time=213424
}
Report.prototype.report=function(){
    console.log('report');
    console.log(this.time);
    return true;
}

function validate(){
    console.log('validate');
    return true;
}
var req= new Report();


createTime.before(req.report,req).before(validate)('createparam');

