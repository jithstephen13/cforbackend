const { UserModel } = require("../model/user.model")
const bcrypt = require('bcrypt');

const Register=async(req,res)=>{
    const {name,email,password, gender,age,city}=req.body

    const alredy=await UserModel.find({email})
        if(alredy.length<1){
        
                    try {
                        bcrypt.hash(password, 5, function(err, hash) {
                           
                            console.log(hash)
                            if(err) res.send("error occure")
                            else{
                                const user=new UserModel({name,password:hash,email,gender,age,city})
                                    user.save()
                                    res.status(200).send("Signup succefully")
                               }
                       })
                       } catch (error) {
                        res.status(400).send({"err":error.message})
                       }
    }
    else{
        res.send({"mssg":"User already exist, please login"})
    }



}

module.exports={Register}