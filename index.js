const  express = require('express')
const {Hello,Hello1,Add,Div,Sub,Mul} = require('./demo');
const app = express();
const connectToMongo=require('./db')
const MySchema=require('./crud') 

app.use(express.json());
app.use ('/api/student',require('./router/studentRoute'))
app.get('/first',(req,res)=>{
    console.log("Your first API has been called")
    res.send("This is my first API call");
})
app.get('/time',(req,res)=>{
    const time=new Date().toLocaleTimeString();
    const date=new Date().toLocaleDateString();
    console.log("Your first API has been called")
    res.send("This is my first API call"+time);
})

app.post('/api/insert',async(req,res)=>{
    try{
        const {name,email,phone,address} = req.body;
        const data =new MySchema({name,email,phone,address});
        const saveData = await data.save();
        console.log("successfully")
        res.send({"insert completed ":true,saveData})
    }
    catch(err){
        console.log("errrrrrrrrrrrror"+err);
        res.status(500).json("some unic error")
    }
})
port = 7000;
Hello()
Hello1("soorya")
Add()
Sub()
Div()
Mul()
connectToMongo()
app.listen(port,()=>{
    console.log("App is listeining on port number " +port);
    console.log(`App is listeining on port number ${port}`);
})