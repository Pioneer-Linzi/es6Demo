class MiddleWare{
    constructor(){
        this.cache=[];
        this.middlewares=[];
    }
    use(fn){
        if(typeof fn !== 'function'){
            throw 'middleware must be a function ';
        }
        this.cache.push(fn);
        return this;
    }

    next(){
        if(this.middlewares&& this.middlewares.length>0){
            var ware = this.middlewares.shift();
            ware.call(this,this.req,this.next.bind(this));
        }
    }

    start(req){
        this.middlewares = this.cache.map((fn)=>fn);
        this.req=req;
        this.next();
    }
}

export {MiddleWare}
