
const {UserModel}=require("../model/user.model")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const Login=async(req,res)=>{
    const {email,password}=req.body
    console.log(req.body)

    const exist=await UserModel.find({email:email})
    console.log(exist)
    if(exist.length>0){
        
    try {
        bcrypt.compare(password,exist[0].password,  function(err, result) {

            if(err){
                console.log(err.message)
                res.send({"mssg":err.message})
            }
            else if (result){
             const token= jwt.sign({id: exist[0]._id }, 'secrettocken');
            res.send({"mssg":"Login suceesfull","token":token})
            }
        });
       
        

    } catch (error) {
        
        res.status(400).send({"err":error.message})
        
    }
    }
    else{
        res.send("user Not exist")
    }



}

module.exports={Login}