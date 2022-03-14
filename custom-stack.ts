export default class CustomStack{
    private stack:String[] = [];

    push(item:String){
        this.stack.push(item);
    }
    pop(){
        if(this.stack.length === 0)
            throw new Error("Stack is Empty");
        return this.stack.pop();
        
    }
    //shouldn't this be peek?
    max(){
        if(this.stack.length === 0)
            throw new Error("Stack is Empty");
        return this.stack[this.stack.length-1];
    }
}