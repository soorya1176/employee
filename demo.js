const Hello = ()=>{
    const time=new Date().toLocaleTimeString();
    const date=new Date().toLocaleDateString();
    console.log("time" +time+ ",date" +date)
    
}

const Hello1 = (name)=>{
    console.log("My name is " +name)
}

const Add = ()=>{
    let a = 10;
    let b = 30;
    let c = a+b
   console.log("Add: " +c)
}
const Sub = (name)=>{
    let a = 50;
    let b = 10;
    let c = a-b
   console.log("Sub: " +c)
}
const Div= (name)=>{
    let a = 10;
    let b = 5;
    let c = a/b
   console.log("Div: " +c)
}
const Mul = (name)=>{
    let a = 4;
    let b = 2;
    let c = a*b
   console.log("Mul: " +c)
}
module.exports={Hello,Hello1,Add,Div,Sub,Mul};