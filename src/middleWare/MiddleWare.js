class MiddleWare{
    constructor(){
        this.middlewares=[]
    }
    use(fn){
        if(typeof fn !== 'function'){
            throw 'middleware must be a function ';
        }
        this.middlewares.push(fn);
        return this;
    }

    next(){
        if(this.middlewares&& this.middlewares.length>0){
            var ware = this.middlewares.shift();
            ware.call(this,this.next.bind(this));
        }
    }

    start(){
        this.next();
    }
}

export {MiddleWare}
