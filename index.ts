import CustomStack from "./custom-stack";

const stack = new CustomStack();

stack.push("Help");
console.log(stack.max());
stack.push("Me");
console.log(stack.pop());
console.log(stack.pop());
try{
    console.log(stack.max());
}
catch(e){
    console.log(e);
}
try{
    console.log(stack.pop());
}
catch(e){
    console.log(e);
}