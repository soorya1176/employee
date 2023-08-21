const studentSchema = require('../model/studentshema');
const { param } = require('../router/studentRoute');
const Insert = async(req,res)=>{
    try{
       const {name,email,phone,address,age}=req.body;

       let checkphone = await studentSchema.findOne({phone});
       if (checkphone){
            console.log("Phone number already exist! try with another number");
            return res.status(400).json({erros:"Phone number already exist!"});
       }else{
             const data =  new studentSchema({name,email,phone,address,age});
             const savedStudent = await data.save();
             console.log("Insertion Successfull")
             res.send({"Insert success":true,savedStudent});
       }
    }
    catch(error){
       console.log("Some error Ocuured"+error);
       res.status(500).json("Some internal error!!!")
    }
}

const View = async(req,res)=>{
    try{
        const data = await studentSchema.findById(req.params.id);
        if(!data){
            console.log("Data is not found")
            return res.status(404).send("Data does not exist with this id")
            } else{
        console.log(data)
        res.json(data)
     }
    }
    catch(error){
        console.log("Some error Ocuured"+error);
       res.status(500).json("Some internal error!!!")
    }
}
const Delete = async(req,res)=>{
    try{
        let data = await studentSchema.findById(req.params.id);
        if(!data){
        console.log("Data is not founc")
        return res.status(404).send("Data does not exist with this id")
        } else{
            data = await studentSchema.findByIdAndDelete(req.params.id);
            console.log("Data deleted successfuly")
            res.json({"success":true, "Deleted data" :data}); 
        }

    }
    catch(error){
        console.log("Some error Ocuured"+error);
       res.status(500).json("Some internal error!!!")
    }
}

const Update = async(req,res)=>{
    
       const {name,email,phone,address,age}=req.body;
       try{
        let newData={}
        if(name){newData.name=name}
        if(email){newData.email=email}
        if(phone){newData.phone=phone}
        if(address){newData.address=address}
        if(age){newData.age=age}
        let data = await studentSchema.findById(req.params.id);
        if(!data){
            console.log("Data not found with this id");
            return res.status(404).send(" Data dose not exist with this id")
        }else{
            data= await studentSchema.findByIdAndUpdate(req.params.id,{$set:newData},{new:true});
            console.log("Updated data : " + data)
            res.json((data));
        }
    }

    catch(error){
        console.log("Some error Ocuured"+error);
        res.status(500).json("Some internal error!!!")
    }
}

const Register = async(req,res)=>{
    try{
       const {name,email,password,phone,address,age}=req.body;
       let checkemail = await studentSchema.findOne({email});
       if(checkemail){
       console.log("Email already exist! try with another number");
            return res.status(400).json({erros:"Email already exist!"});
       }
    else{
             const data =  await new studentSchema({name,email,password,phone,address,age});
             const savedStudent = await data.save();
             console.log("Registered Successfull")
             res.send({"Register success":true,savedStudent});
       }
    }
    catch(error){
        console.log("Some error Ocuured"+error);
        res.status(500).json("Some internal error!!!")
    }
}

module.exports={Insert,View,Delete,Update,Register};